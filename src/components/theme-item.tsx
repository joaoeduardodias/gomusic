"use client";
import { useFilteredMusicStore } from "@/stores/useFilteredMusic";
import { Button } from "./ui/button";

interface ThemeItemProps {
  name: string;
  id: string;
}

export function ThemeItem({ id, name }: ThemeItemProps) {
  const { themeMusic, onThemeMusic } = useFilteredMusicStore();

  return (
    <Button
      key={id}
      onClick={() => onThemeMusic(name)}
      variant={themeMusic === name ? "default" : "outline"}
      className="text-sm whitespace-nowrap flex-shrink-0 select-none mb-1"
    >
      {name}
    </Button>
  );
}
