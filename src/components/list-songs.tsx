"use client";
import { getSongs } from "@/app/actions/list-songs";
import { useFilteredMusicStore } from "@/stores/useFilteredMusic";
import { useEffect, useState } from "react";
import { Song } from "./song";

export function ListSongs() {
  const [error, setError] = useState("");
  const { searchResults, setSongs } = useFilteredMusicStore();
  useEffect(() => {
    async function fetch() {
      const response = await getSongs();

      if (!response.success) {
        setError(response.error!);
        return;
      }

      if (response.data) {
        setSongs(response.data);
      }
    }
    fetch();
  }, [setSongs]);

  if (error) return <p>Erro encontrado, por favor tente novamente</p>;

  return (
    <div className="space-y-4 mb-4 px-4">
      {searchResults && searchResults.length > 0 ? (
        searchResults.map((song) => (
          <Song
            artist={song.artist}
            id={song.id}
            theme={song.theme}
            title={song.title}
            key={song.id}
          />
        ))
      ) : (
        <p className="text-center text-sm text-muted-foreground mt-4">
          Nenhuma música encontrada
        </p>
      )}
    </div>
  );
}
