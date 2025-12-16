import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Palette } from "lucide-react";

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
        { title: "Εικαστικά", description: "Ζωγραφική, χειροτεχνίες και καλλιτεχνική έκφραση", image: activityArt },
        { title: "Επισκέψεις", description: "Εκπαιδευτικές εκδρομές και εξερεύνηση του κόσμου", image: activityVisits },
        { title: "Αγγλικά", description: "Πρώτη επαφή με την αγγλική γλώσσα μέσα από το παιχνίδι", image: activityEnglish },
        { title: "Επιστήμες", description: "Πειράματα και ανακάλυψη της φύσης", image: activityScience },
        { title: "Μουσική-Κίνηση-Ρυθμός", description: "Τραγούδι, χορός και ρυθμική αγωγή", image: activityMusic },
      ],
    },
    en: {
      badge: "Activities",
      title: "Every day a new adventure",
      description: "We offer a rich program of activities that help children develop physically, mentally and emotionally.",
      activities: [
        { title: "Visual Arts", description: "Painting, crafts and artistic expression", image: activityArt },
        { title: "Field Trips", description: "Educational excursions and world exploration", image: activityVisits },
        { title: "English", description: "First contact with English language through play", image: activityEnglish },
        { title: "Sciences", description: "Experiments and nature discovery", image: activityScience },
        { title: "Music-Movement-Rhythm", description: "Singing, dancing and rhythmic education", image: activityMusic },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="activities" className="py-24 relative overflow-hidden" style={{ background: 'var(--gradient-ocean)' }}>
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
      
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
              className="group relative glass rounded-3xl overflow-hidden border-border/30 hover-lift transition-all duration-500"
              style={getItemStyle(index)}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
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
    </section>
  );
};

export default Activities;
