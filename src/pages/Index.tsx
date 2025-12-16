import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Activities from "@/components/Activities";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Philosophy />
      <Activities />
      <Classes />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
