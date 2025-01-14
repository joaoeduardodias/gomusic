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
      <h3 className="font-semibold text-base">{title}</h3>
      <p className="text-sm text-accent-foreground/90">{artist}</p>
      <p className="text-xs text-muted-foreground mt-1 italic">{theme}</p>
    </div>
  );
}
