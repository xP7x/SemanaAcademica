/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Audience } from "./components/Audience";
import { ThematicAreas } from "./components/ThematicAreas";
import { Schedule } from "./components/Schedule";
import { Workshops } from "./components/Workshops";
import { Sponsors } from "./components/Sponsors";
import { Registration } from "./components/Registration";
import { Footer } from "./components/Footer";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-paper min-h-screen text-ink selection:bg-volt selection:text-ink cursor-default">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Audience />
      <ThematicAreas />
      <Schedule />
      <Workshops />
      <Sponsors />
      <Registration />
      <Footer />
    </main>
  );
}
