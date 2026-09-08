import { useEffect } from "react";
import Lenis from "lenis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { CustomCursor } from "./components/CustomCursor";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { Convidados } from "./pages/Convidados";
import { Programacao } from "./pages/Programacao";
import { WorkshopsPage } from "./pages/WorkshopsPage";
import { Patrocinadores } from "./pages/Patrocinadores";
import { Inscricao } from "./pages/Inscricao";

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
    <BrowserRouter>
      <main className="bg-paper min-h-screen text-ink selection:bg-bordo selection:text-paper cursor-default flex flex-col">
        <CustomCursor />
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/convidados" element={<Convidados />} />
            <Route path="/patrocinadores" element={<Patrocinadores />} />
            <Route path="/inscricao" element={<Inscricao />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
