import { ListThemes } from "@/components/list-themes";
import { Song } from "@/components/song";
import { ThemeToogle } from "@/components/toogle-theme";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Suspense } from "react";

const songs = [
  { id: "1", title: "Calm Waters", artist: "Ocean Sounds", theme: "Relaxing" },
  { id: "2", title: "Pump It Up", artist: "Gym Beats", theme: "Energetic" },
  {
    id: "3",
    title: "Moonlight Serenade",
    artist: "Love Notes",
    theme: "Romantic",
  },
  {
    id: "4",
    title: "Deep Concentration",
    artist: "Study Tunes",
    theme: "Focus",
  },
  { id: "5", title: "Sunset Chill", artist: "Beach Vibes", theme: "Relaxing" },
  {
    id: "6",
    title: "Power Workout",
    artist: "Fitness Jams",
    theme: "Energetic",
  },
  { id: "7", title: "Dance All Night", artist: "Party People", theme: "Party" },
  {
    id: "8",
    title: "Zen Garden",
    artist: "Meditation Masters",
    theme: "Chill",
  },
];

export default function Home() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredSongs = songs.filter((song) => {
  //   const matchesSearch =
  //     song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     song.artist.toLowerCase().includes(searchTerm.toLowerCase());
  //   // const matchesTheme = !selectedTheme || song.theme === selectedTheme;
  //   return matchesSearch;
  //   // return matchesSearch && matchesTheme;
  // });

  return (
    //  <ErrorBoundary >
    <div>
      <header className="border-b py-4 shadow-sm">
        <div className="mx-auto container px-2 flex items-center justify-between">
          <span className="font-semibold">Go Music</span> <ThemeToogle />
        </div>
      </header>
      <main>
        <div className="mb-4 relative">
          <Input
            type="text"
            placeholder="Search songs or artists"
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <Suspense fallback={<div>Carregando temas...</div>}>
          <ListThemes />
        </Suspense>
        {/* list songs */}

        <div className="space-y-4 mb-4 px-4">
          {songs.map((song) => (
            <Song
              artist={song.artist}
              id={song.id}
              theme={song.theme}
              title={song.title}
              key={song.id}
            />
          ))}
        </div>

        {/* {filteredSongs.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            No songs found
          </p>
        )} */}
      </main>
    </div>
    //  </ErrorBoundary>
  );
}
