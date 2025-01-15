import { ThemeToogle } from "./toogle-theme";

export function Header() {
  return (
    <header className="border-b py-4 shadow-sm">
      <div className="mx-auto container px-4 flex items-center justify-between">
        <span className="font-semibold">Go Music</span> <ThemeToogle />
      </div>
    </header>
  );
}
