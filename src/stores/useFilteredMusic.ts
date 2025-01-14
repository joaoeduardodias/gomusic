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
      setSearchSongs: (query) => {
        const { songs, themeMusic } = get();
        console.log(songs, themeMusic);
        const fuse = new Fuse(songs, {
          keys: ["title", "artist"],
          threshold: 0.4,
          distance: 100,
        });

        let results = query
          ? fuse.search(query).map((result) => result.item)
          : songs;

        if (themeMusic) {
          results = results.filter((song) => song.theme === themeMusic);
        }

        set({ songs: results });
      },
      setSongs: (newSongs) => set({ songs: newSongs }),
      themeMusic: "Todos",
      onThemeMusic: (theme) => {
        set(() => ({
          themeMusic: theme,
        }));
      },
    };
  }
);
