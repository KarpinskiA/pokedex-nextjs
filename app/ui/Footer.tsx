"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    name: "Inspiration 1 - Figma",
    link: "https://www.figma.com/file/eN7tWRzi2jVB9Guq6fbGcH/Pokedex-(Community)?type=design&mode=design&t=Y4omRQvBjJ2tLOeL-0",
    color: "bg-transparent",
  },
  {
    name: "Inspiration 2 - Figma",
    link: "https://www.figma.com/file/CkEWz2DFNKbGyPnzjva3kD/Pok%C3%A9dex-%2F-Pok%C3%A9mon-App-(Community)?type=design&mode=design&t=Y4omRQvBjJ2tLOeL-0",
    color: "bg-transparent",
  },
  {
    name: "Data - PokeAPI",
    link: "https://pokeapi.co/",
    color: "bg-transparent",
  },
  {
    name: "GIFs - Project Pokemon",
    link: "https://projectpokemon.org/home/docs/spriteindex_148/3d-models-generation-1-pok%C3%A9mon-r90/",
    color: "bg-transparent",
  },
  {
    name: "© By Aurélien Karpinski",
    link: "https://github.com/KarpinskiA",
    color: "bg-transparent",
  },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`flex justify-evenly text-l py-5 font-bold ${
        pathname === "/" ? "footerHome" : ""
      }`}
    >
      {data.map((item, index) => (
        <div key={index} className={item.color}>
          <Link href={item.link} target="_blank" rel="noopener noreferrer">
            {item.name}
          </Link>
        </div>
      ))}
    </footer>
  );
}
// target="_blank" rel="noopener noreferrer"
