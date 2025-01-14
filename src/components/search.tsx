"use client";
import { useFilteredMusicStore } from "@/stores/useFilteredMusic";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Input } from "./ui/input";

export function FormSearch() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { setSearchSongs } = useFilteredMusicStore();

  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);

  const handleSearch = useCallback(() => {
    setSearchSongs(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchSongs]);

  useEffect(() => {
    handleSearch();
  }, [debouncedSearchTerm, handleSearch]);

  return (
    <div className="my-3 relative px-4">
      <Input
        type="text"
        placeholder="Procure por música ou artista"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 pr-4 py-2 w-full placeholder:text-sm"
      />
      <Search
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
    </div>
  );
}
