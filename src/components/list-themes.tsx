"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "./ui/button";

const themes = [
  { id: 0, name: "Todos" },
  { id: 1, name: "Amor de Deus" },
  { id: 2, name: "Fé e Conversão" },
  { id: 3, name: "Pecado e Salvação" },
  { id: 4, name: "Espirito Santo" },
  { id: 5, name: "Senhorio de Jesus" },
  { id: 6, name: "Perdão e Cura Interior" },
  { id: 7, name: "Comunidade" },
];

export function ListThemes() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollThemes = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 100;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-6 relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={() => scrollThemes("left")}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto scrollbar-hide space-x-2 px-8"
        style={{ scrollBehavior: "smooth" }}
      >
        {themes.map((theme) => (
          <Button
            key={theme.id}
            onClick={() =>
              setSelectedTheme(selectedTheme === theme.name ? null : theme.name)
            }
            variant={selectedTheme === theme.name ? "default" : "outline"}
            className="text-sm whitespace-nowrap flex-shrink-0"
          >
            {theme.name}
          </Button>
        ))}
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
        onClick={() => scrollThemes("right")}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
