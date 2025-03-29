import { ThemeToggle } from "@/components/theme-toggle"
import { beynoFont } from "@/app/fonts/beyno/beyno"

export default function Home() {
  return (
    <main>
      <div>Hello world!</div>
      <div className={beynoFont.className}>
        TV
      </div>
      <ThemeToggle />
    </main>
  );
}
