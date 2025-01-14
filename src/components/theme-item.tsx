"use client";
import { useState } from "react";
import { Button } from "./ui/button";

interface ThemeItemProps {
  name: string;
  id: string;
}

export function ThemeItem({ id, name }: ThemeItemProps) {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  return (
    <Button
      key={id}
      onClick={() => setSelectedTheme(selectedTheme === name ? null : name)}
      variant={selectedTheme === name ? "default" : "outline"}
      className="text-sm whitespace-nowrap flex-shrink-0 select-none"
    >
      {name}
    </Button>
  );
}
