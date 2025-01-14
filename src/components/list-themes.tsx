import { getThemes } from "@/app/actions/list-themes";
import { ThemeItem } from "./theme-item";

export async function ListThemes() {
  const response = await getThemes();

  if (!response.success) {
    return <div>Erro: {response.error}</div>;
  }
  const themes = response.data;

  return (
    <div
      className="mb-6 flex overflow-x-auto space-x-2 px-4"
      style={{ scrollBehavior: "smooth" }}
    >
      {themes && themes.length > 0 ? (
        themes.map((theme) => (
          <ThemeItem id={theme.id} name={theme.name} key={theme.id} />
        ))
      ) : (
        <span className="text-sm text-muted-foreground text-center w-full">
          Nenhum tema encontrado
        </span>
      )}
    </div>
  );
}
