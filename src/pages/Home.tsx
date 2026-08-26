import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Audience } from "../components/Audience";
import { Format } from "../components/Format";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Audience />
      <Format />
    </>
  );
}
