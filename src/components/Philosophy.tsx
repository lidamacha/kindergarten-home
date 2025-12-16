import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  const { language } = useLanguage();

  const content = {
    el: {
      badge: "Η Φιλοσοφία μας",
      title: "Ένα σπίτι γεμάτο χαρά",
      paragraphs: [
        "Μας ταξιδεύει η φαντασία ενός συγγραφέα, μας παρασύρει η δημιουργικότητα ενός καλλιτέχνη και η εφευρετικότητα ενός επιστήμονα!",
        "Απελευθερώνουμε την δημιουργικότητα, την κριτική ικανότητα και τη φαντασία.",
        "Ενισχύουμε την ενσυναίσθηση, την επικοινωνία και την συνεργατικότητα μεταξύ των μαθητών ενώ παράλληλα προωθούμε την συγκέντρωση και την επιμονή στην προσπάθεια.",
        "Η τεχνολογία χρησιμοποιείται για τη βελτίωση της μαθησιακής εμπειρίας.",
        "Καλλιεργούμε την διαθεματική προσέγγιση της γνώσης και την εφαρμογή των γνώσεων στην καθημερινότητα.",
      ],
    },
    en: {
      badge: "Our Philosophy",
      title: "A home full of joy",
      paragraphs: [
        "We travel with the imagination of an author, we are carried away by the creativity of an artist and the inventiveness of a scientist!",
        "We unleash creativity, critical thinking and imagination.",
        "We enhance empathy, communication and collaboration among students while promoting concentration and persistence in effort.",
        "Technology is used to enhance the learning experience.",
        "We cultivate an interdisciplinary approach to knowledge and the application of knowledge in everyday life.",
      ],
    },
  };

  const t = content[language];

  return (
    <section id="philosophy" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-secondary/10 to-muted/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-secondary/30 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4 text-secondary" />
              {t.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-10">
              {t.title}
            </h2>
          </ScrollReveal>
          
          <div className="space-y-6">
            {t.paragraphs.map((paragraph, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={200 + index * 100}>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
