import Image from "next/image";
import HomeImg from "@/public/home-img.svg";

export default function Home() {
  return (
    <main className="bg-gradient-to-t-yellowGradient h-5/6">
      <section className="flex flex-row justify-between">
        <div className="flex flex-col justify-between items-start w-1/2 pl-40 h-[557px] pt-16">
          <h1 className="text-7xl tracking-[.25rem]">
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </h1>
          <h2 className="text-3xl">
            You can know the type of Pokemon, its stengths, disadvantages and
            abilities
          </h2>
          <button className="text-2xl bg-homeBtn p-3 rounded-xl inner-shadow">
            See pokemons
          </button>
        </div>
        <div className="">
          <Image src={HomeImg} alt="pikachu with pokeball" />
        </div>
      </section>
    </main>
  );
}
