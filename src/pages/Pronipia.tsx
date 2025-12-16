import { ArrowLeft, BookOpen, Users, Puzzle, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pronipia = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Προνήπια",
      ages: "4 - 5 ετών",
      description: "Ανάπτυξη κοινωνικών δεξιοτήτων, γλώσσας και πρώτες γνώσεις αριθμητικής.",
      back: "Πίσω στην αρχική",
      features: [
        { icon: Users, title: "Κοινωνικές Δεξιότητες", description: "Συνεργασία, επικοινωνία και αλληλεπίδραση με συνομηλίκους" },
        { icon: Languages, title: "Γλωσσική Ανάπτυξη", description: "Εμπλουτισμός λεξιλογίου και πρώτη επαφή με γράμματα" },
        { icon: Puzzle, title: "Λογικομαθηματική Σκέψη", description: "Παιχνίδια λογικής και πρώτες έννοιες αριθμητικής" },
        { icon: BookOpen, title: "Δημιουργικότητα", description: "Καλλιτεχνικές δραστηριότητες και ελεύθερο παιχνίδι" },
      ],
    },
    en: {
      title: "Preschool",
      ages: "4 - 5 years",
      description: "Development of social skills, language and first numeracy knowledge.",
      back: "Back to home",
      features: [
        { icon: Users, title: "Social Skills", description: "Cooperation, communication and peer interaction" },
        { icon: Languages, title: "Language Development", description: "Vocabulary enrichment and first contact with letters" },
        { icon: Puzzle, title: "Logical-Mathematical Thinking", description: "Logic games and first numeracy concepts" },
        { icon: BookOpen, title: "Creativity", description: "Artistic activities and free play" },
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
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-accent to-sun flex items-center justify-center mx-auto mb-6 shadow-playful">
                <BookOpen className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-accent to-sun text-white font-semibold mb-6">
                {t.ages}
              </span>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.features.map((feature, index) => (
                <div key={index} className="glass rounded-3xl p-8 border-border/30 hover-lift transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-sun flex items-center justify-center mb-4">
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

export default Pronipia;
