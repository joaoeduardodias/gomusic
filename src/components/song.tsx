export interface SongProps {
  id: string;
  title: string;
  theme: string;
  artist: string;
}

export function Song({ id, title, theme, artist }: SongProps) {
  return (
    <div
      key={id}
      className="bg-gray-200/60 dark:bg-gray-800 p-4 rounded-lg shadow"
    >
      <h3 className="font-semibold dark:text-white">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{artist}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{theme}</p>
    </div>
  );
}
