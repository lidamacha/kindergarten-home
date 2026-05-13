import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Activities from "@/components/Activities";
import Classes from "@/components/Classes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Χρώματα και Γέλια | Παιδικός Σταθμός & Νηπιαγωγείο"
        description="Παιδικός σταθμός και νηπιαγωγείο όπου τα παιδιά μαθαίνουν μέσα από το παιχνίδι, τη δημιουργικότητα και τη χαρά."
        path="/"
      />
      <Navbar />
      <Hero />
      <Philosophy />
      <Activities />
      <Classes />
      <Contact />
      <Footer />
      <CookieConsent />
    </main>
  );
};

export default Index;
