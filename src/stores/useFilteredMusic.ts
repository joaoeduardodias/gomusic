import Fuse from "fuse.js";
import { create } from "zustand";

type SongType = {
  id: string;
  title: string;
  theme: string;
  artist: string;
};

interface useFilteredMusicStoreProps {
  themeMusic: string;
  searchResults: SongType[];
  songs: SongType[];
  setSongs: (songs: SongType[]) => void;
  setSearchSongs: (query: string) => void;
  onThemeMusic: (theme: string) => void;
}

export const useFilteredMusicStore = create<useFilteredMusicStoreProps>(
  (set, get) => {
    return {
      songs: [],
      searchResults: [],
      themeMusic: "Todos",

      setSongs: (newSongs) => {
        set({ songs: newSongs, searchResults: newSongs });
      },
      onThemeMusic: (theme) => {
        set({ themeMusic: theme });

        const { songs } = get();
        const filteredResults = songs.filter(
          (song) => song.theme === theme || theme === "Todos"
        );
        set({ searchResults: filteredResults });
      },

      setSearchSongs: (query) => {
        const { songs, themeMusic } = get();

        const fuse = new Fuse(songs, {
          keys: ["title", "artist"],
          threshold: 0.2,
          distance: 100,
        });

        let results = query
          ? fuse.search(query).map((result) => result.item)
          : songs;

        if (themeMusic && themeMusic !== "Todos") {
          results = results.filter((song) => song.theme === themeMusic);
        }

        set({ searchResults: results });
      },
    };
  }
);
