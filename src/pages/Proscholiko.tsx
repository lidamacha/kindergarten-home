import { ArrowLeft, GraduationCap, BookOpen, Calculator, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Proscholiko = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      title: "Προσχολικό Τμήμα",
      ages: "5 - 6 ετών",
      description: "Προετοιμασία για το δημοτικό με έμφαση στην ανάγνωση, γραφή και μαθηματικά.",
      back: "Πίσω στην αρχική",
      features: [
        { icon: BookOpen, title: "Ανάγνωση & Γραφή", description: "Εκμάθηση γραμμάτων, ανάγνωση και πρώτη γραφή" },
        { icon: Calculator, title: "Μαθηματικά", description: "Αριθμητική, γεωμετρικά σχήματα και επίλυση προβλημάτων" },
        { icon: Globe, title: "Γνώση Κόσμου", description: "Εξερεύνηση επιστημών, φύσης και περιβάλλοντος" },
        { icon: GraduationCap, title: "Σχολική Ετοιμότητα", description: "Ανάπτυξη δεξιοτήτων για ομαλή μετάβαση στο δημοτικό" },
      ],
    },
    en: {
      title: "Pre-K",
      ages: "5 - 6 years",
      description: "Preparation for elementary school with emphasis on reading, writing and mathematics.",
      back: "Back to home",
      features: [
        { icon: BookOpen, title: "Reading & Writing", description: "Learning letters, reading and first writing" },
        { icon: Calculator, title: "Mathematics", description: "Arithmetic, geometric shapes and problem solving" },
        { icon: Globe, title: "World Knowledge", description: "Exploration of sciences, nature and environment" },
        { icon: GraduationCap, title: "School Readiness", description: "Skill development for smooth transition to elementary" },
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
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-sky to-lavender flex items-center justify-center mx-auto mb-6 shadow-playful">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
              <span className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-sky to-lavender text-white font-semibold mb-6">
                {t.ages}
              </span>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {t.features.map((feature, index) => (
                <div key={index} className="glass rounded-3xl p-8 border-border/30 hover-lift transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky to-lavender flex items-center justify-center mb-4">
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

export default Proscholiko;
