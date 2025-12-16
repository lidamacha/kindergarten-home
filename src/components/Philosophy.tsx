import { Heart, Sparkles, Users, TrendingUp, Lightbulb, Laptop, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const Philosophy = () => {
  const { language } = useLanguage();
  const { ref: featuresRef, getItemStyle } = useStaggerAnimation(5, { staggerDelay: 150 });

  const content = {
    el: {
      badge: "Η Φιλοσοφία μας",
      title: "Ένα σπίτι γεμάτο χαρά",
      features: [
        { 
          icon: Sparkles, 
          title: "Φαντασία & Δημιουργικότητα",
          description: "Μας ταξιδεύει η φαντασία ενός συγγραφέα, μας παρασύρει η δημιουργικότητα ενός καλλιτέχνη και η εφευρετικότητα ενός επιστήμονα!",
          gradient: "from-primary/20 via-primary/10 to-transparent",
          iconGradient: "from-primary to-peach",
        },
        { 
          icon: Lightbulb, 
          title: "Κριτική Σκέψη",
          description: "Απελευθερώνουμε την δημιουργικότητα, την κριτική ικανότητα και τη φαντασία.",
          gradient: "from-accent/30 via-accent/15 to-transparent",
          iconGradient: "from-accent to-sun",
        },
        { 
          icon: Users, 
          title: "Ενσυναίσθηση & Συνεργασία",
          description: "Ενισχύουμε την ενσυναίσθηση, την επικοινωνία και την συνεργατικότητα μεταξύ των μαθητών ενώ παράλληλα προωθούμε την συγκέντρωση και την επιμονή στην προσπάθεια.",
          gradient: "from-secondary/40 via-secondary/20 to-transparent",
          iconGradient: "from-secondary to-sky",
        },
        { 
          icon: Laptop, 
          title: "Τεχνολογία",
          description: "Η τεχνολογία χρησιμοποιείται για τη βελτίωση της μαθησιακής εμπειρίας.",
          gradient: "from-sky/30 via-sky/15 to-transparent",
          iconGradient: "from-sky to-lavender",
        },
        { 
          icon: BookOpen, 
          title: "Διαθεματική Μάθηση",
          description: "Καλλιεργούμε την διαθεματική προσέγγιση της γνώσης και την εφαρμογή των γνώσεων στην καθημερινότητα.",
          gradient: "from-grass/30 via-grass/15 to-transparent",
          iconGradient: "from-grass to-accent",
        },
      ],
    },
    en: {
      badge: "Our Philosophy",
      title: "A home full of joy",
      features: [
        { 
          icon: Sparkles, 
          title: "Imagination & Creativity",
          description: "We travel with the imagination of an author, we are carried away by the creativity of an artist and the inventiveness of a scientist!",
          gradient: "from-primary/20 via-primary/10 to-transparent",
          iconGradient: "from-primary to-peach",
        },
        { 
          icon: Lightbulb, 
          title: "Critical Thinking",
          description: "We unleash creativity, critical thinking and imagination.",
          gradient: "from-accent/30 via-accent/15 to-transparent",
          iconGradient: "from-accent to-sun",
        },
        { 
          icon: Users, 
          title: "Empathy & Collaboration",
          description: "We enhance empathy, communication and collaboration among students while promoting concentration and persistence in effort.",
          gradient: "from-secondary/40 via-secondary/20 to-transparent",
          iconGradient: "from-secondary to-sky",
        },
        { 
          icon: Laptop, 
          title: "Technology",
          description: "Technology is used to enhance the learning experience.",
          gradient: "from-sky/30 via-sky/15 to-transparent",
          iconGradient: "from-sky to-lavender",
        },
        { 
          icon: BookOpen, 
          title: "Interdisciplinary Learning",
          description: "We cultivate an interdisciplinary approach to knowledge and the application of knowledge in everyday life.",
          gradient: "from-grass/30 via-grass/15 to-transparent",
          iconGradient: "from-grass to-accent",
        },
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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-secondary/30 font-semibold text-sm mb-6">
              <Heart className="w-4 h-4 text-secondary" />
              {t.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Features grid */}
        <div 
          ref={featuresRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative p-8 rounded-3xl glass border-border/30 hover-lift transition-all duration-500 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
              style={getItemStyle(index)}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.iconGradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 80L60 74C120 68 240 56 360 50C480 44 600 44 720 53C840 62 960 80 1080 86C1200 92 1320 86 1380 83L1440 80V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Philosophy;
