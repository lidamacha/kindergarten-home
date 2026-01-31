import { Palette, MapPin, Languages, FlaskConical, Music } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";

import activityArt from "@/assets/activity-art.jpg";
import activityVisits from "@/assets/activity-visits.jpg";
import activityEnglish from "@/assets/activity-english.jpg";
import activityScience from "@/assets/activity-science.jpg";
import activityMusic from "@/assets/activity-music.jpg";

const Activities = () => {
  const { language } = useLanguage();
  const { ref: gridRef, getItemStyle } = useStaggerAnimation(5, { staggerDelay: 100 });

  const content = {
    el: {
      badge: "Δραστηριότητες",
      title: "Κάθε μέρα μια νέα περιπέτεια",
      description: "Προσφέρουμε ένα πλούσιο πρόγραμμα δραστηριοτήτων που βοηθούν τα παιδιά να αναπτυχθούν σωματικά, πνευματικά και συναισθηματικά.",
      activities: [
        { title: "Εικαστικά", description: "Ζωγραφική, χειροτεχνίες και καλλιτεχνική έκφραση", image: activityArt, icon: Palette, gradient: "from-primary to-peach" },
        { title: "Επισκέψεις", description: "Εκπαιδευτικές εκδρομές και εξερεύνηση του κόσμου", image: activityVisits, icon: MapPin, gradient: "from-grass to-secondary" },
        { title: "Αγγλικά", description: "Πρώτη επαφή με την αγγλική γλώσσα μέσα από το παιχνίδι", image: activityEnglish, icon: Languages, gradient: "from-sky to-lavender" },
        { title: "Επιστήμες", description: "Πειράματα και ανακάλυψη της φύσης", image: activityScience, icon: FlaskConical, gradient: "from-accent to-sun" },
        { title: "Μουσική-Κίνηση-Ρυθμός", description: "Τραγούδι, χορός και ρυθμική αγωγή", image: activityMusic, icon: Music, gradient: "from-secondary to-primary" },
      ],
    },
    en: {
      badge: "Activities",
      title: "Every day a new adventure",
      description: "We offer a rich program of activities that help children develop physically, mentally and emotionally.",
      activities: [
        { title: "Visual Arts", description: "Painting, crafts and artistic expression", image: activityArt, icon: Palette, gradient: "from-primary to-peach" },
        { title: "Field Trips", description: "Educational excursions and world exploration", image: activityVisits, icon: MapPin, gradient: "from-grass to-secondary" },
        { title: "English", description: "First contact with English language through play", image: activityEnglish, icon: Languages, gradient: "from-sky to-lavender" },
        { title: "Sciences", description: "Experiments and nature discovery", image: activityScience, icon: FlaskConical, gradient: "from-accent to-sun" },
        { title: "Music-Movement-Rhythm", description: "Singing, dancing and rhythmic education", image: activityMusic, icon: Music, gradient: "from-secondary to-primary" },
      ],
    },
  };

  const t = content[language];

  // Blob shapes for cards
  const blobStyles = [
    "rounded-[2rem_3rem_2rem_3rem]",
    "rounded-[3rem_2rem_3rem_2rem]",
    "rounded-[2.5rem_2rem_3rem_2.5rem]",
    "rounded-[2rem_2.5rem_2rem_3rem]",
    "rounded-[3rem_2.5rem_2.5rem_2rem]",
  ];

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-secondary">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      
      {/* Floating decorative elements - enhanced */}
      <div className="absolute top-32 right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-primary/50 to-peach/40 animate-float-slow" style={{ animationDelay: "0s" }} />
      <div className="absolute top-1/2 left-[8%] w-12 h-12 rounded-full bg-gradient-to-br from-accent/50 to-sun/40 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 right-[5%] w-20 h-20 rounded-full bg-gradient-to-br from-secondary/50 to-grass/40 animate-float-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/4 left-[20%] w-10 h-10 rounded-full bg-gradient-to-br from-sky/60 to-lavender/40 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-[70%] right-[25%] w-8 h-8 rounded-full bg-gradient-to-br from-lavender/50 to-primary/30 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-[20%] left-[60%] w-14 h-14 rounded-full bg-gradient-to-br from-peach/50 to-accent/30 animate-float-slow" style={{ animationDelay: "2.5s" }} />
      <div className="absolute bottom-[30%] left-[3%] w-6 h-6 rounded-full bg-gradient-to-br from-grass/50 to-secondary/30 animate-float" style={{ animationDelay: "1.8s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-accent/30 font-semibold text-sm mb-6">
              <Palette className="w-4 h-4 text-accent" />
              {t.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Activities grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.activities.map((activity, index) => (
            <div
              key={activity.title}
              className={`group relative glass ${blobStyles[index]} overflow-hidden border-border/30 hover-lift transition-all duration-500`}
              style={getItemStyle(index)}
            >
              {/* Floating mini elements around card */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-gradient-to-br from-secondary/30 to-sky/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-float" style={{ animationDelay: "0.3s" }} />
              
              {/* Image with organic shape */}
              <div className={`aspect-[4/3] overflow-hidden ${blobStyles[index]}`}>
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              </div>
              
              {/* Icon badge */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center shadow-playful group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <activity.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
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
            d="M0 40L48 46C96 52 192 64 288 70C384 76 480 76 576 67C672 58 768 40 864 34C960 28 1056 34 1152 46C1248 58 1344 76 1392 85L1440 94V120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Activities;
