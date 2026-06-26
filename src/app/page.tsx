import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Clients from "@/components/Clients";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Clients />
        <Impact />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
