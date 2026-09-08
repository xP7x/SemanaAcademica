import { Hero } from "../components/Hero";
import { HomeIndex } from "../components/HomeIndex";
import { About } from "../components/About";
import { Audience } from "../components/Audience";
import { Format } from "../components/Format";

export function Home() {
  return (
    <>
      <Hero />
      <HomeIndex />
      <About />
      <Audience />
      <Format />
    </>
  );
}

