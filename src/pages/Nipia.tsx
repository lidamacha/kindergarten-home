import { ArrowLeft, Baby, BookOpen, Palette, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Nipia = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Νήπια",
      ages: "2.5 - 4 ετών",
      description: "Πρώτες εμπειρίες μάθησης μέσα από το παιχνίδι και την εξερεύνηση σε ένα ζεστό περιβάλλον.",
      back: "Πίσω στην αρχική",
      features: [
        { icon: Baby, title: "Ασφαλές Περιβάλλον", description: "Ένας χώρος σχεδιασμένος για τις ανάγκες των μικρότερων παιδιών" },
        { icon: Palette, title: "Δημιουργική Έκφραση", description: "Ζωγραφική, χειροτεχνίες και καλλιτεχνικές δραστηριότητες" },
        { icon: Music, title: "Μουσική & Κίνηση", description: "Τραγούδια και ρυθμικές δραστηριότητες για ανάπτυξη δεξιοτήτων" },
        { icon: BookOpen, title: "Παραμύθια", description: "Διαδραστική αφήγηση ιστοριών για καλλιέργεια φαντασίας" },
      ],
    },
    en: {
      title: "Toddlers",
      ages: "2.5 - 4 years",
      description: "First learning experiences through play and exploration in a warm environment.",
      back: "Back to home",
      features: [
        { icon: Baby, title: "Safe Environment", description: "A space designed for the needs of younger children" },
        { icon: Palette, title: "Creative Expression", description: "Painting, crafts and artistic activities" },
        { icon: Music, title: "Music & Movement", description: "Songs and rhythmic activities for skill development" },
        { icon: BookOpen, title: "Storytelling", description: "Interactive storytelling to nurture imagination" },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/#classes">
            <Button variant="ghost" className="mb-8 gap-2">
              <ArrowLeft className="w-4 h-4" />
              {t.back}
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-peach flex items-center justify-center mx-auto mb-6 shadow-playful">
                <Baby className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-peach text-white font-semibold mb-6">
                {t.ages}
              </span>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.features.map((feature, index) => (
                <div key={index} className="glass rounded-3xl p-8 border-border/30 hover-lift transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-peach flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Nipia;
