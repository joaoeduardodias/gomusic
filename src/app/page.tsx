import { Header } from "@/components/header";
import { ListSongs } from "@/components/list-songs";
import { ListThemes } from "@/components/list-themes";
import { FormSearch } from "@/components/search";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Carregando temas...</div>}>
          <ListThemes />
        </Suspense>
        <FormSearch />

        <ListSongs />
      </main>
    </div>
  );
}
