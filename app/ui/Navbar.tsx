"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <nav className="flex justify-between items-center px-40 py-6 bg-third">
        <div>
          <Link href="/">
            <Image src={Logo} height={63} width={157} alt="logo pokemon" />
          </Link>
        </div>
        <div className="text-paragraph text-2xl">
          <Link
            className={`mr-16${pathname === "/" ? " active" : ""}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${pathname === "/pokedex" ? "active" : ""}`}
            href="/pokedex"
          >
            Pokedex
          </Link>
        </div>
      </nav>
    </header>
  );
}
