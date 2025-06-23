import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ThemeToggle />
      <Link href={"/dashboard"}>Dashboard</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/onboard"}>Onboard</Link>
    </div>
  );
}
