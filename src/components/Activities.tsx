import { Palette, Music, BookOpen, TreePine, Puzzle, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const Activities = () => {
  const { t } = useLanguage();
  const { ref: gridRef, isVisible, getItemStyle } = useStaggerAnimation(6, { staggerDelay: 100 });

  const activities = [
    {
      icon: Palette,
      title: t.activities.items.art.title,
      description: t.activities.items.art.description,
      gradient: "from-primary to-peach",
      bgGradient: "from-primary/10 via-primary/5 to-transparent",
    },
    {
      icon: Music,
      title: t.activities.items.music.title,
      description: t.activities.items.music.description,
      gradient: "from-accent to-sun",
      bgGradient: "from-accent/20 via-accent/10 to-transparent",
    },
    {
      icon: BookOpen,
      title: t.activities.items.stories.title,
      description: t.activities.items.stories.description,
      gradient: "from-lavender to-primary",
      bgGradient: "from-lavender/20 via-lavender/10 to-transparent",
    },
    {
      icon: TreePine,
      title: t.activities.items.nature.title,
      description: t.activities.items.nature.description,
      gradient: "from-grass to-secondary",
      bgGradient: "from-grass/15 via-grass/5 to-transparent",
    },
    {
      icon: Puzzle,
      title: t.activities.items.puzzles.title,
      description: t.activities.items.puzzles.description,
      gradient: "from-sky to-lavender",
      bgGradient: "from-sky/20 via-sky/10 to-transparent",
    },
    {
      icon: Users,
      title: t.activities.items.team.title,
      description: t.activities.items.team.description,
      gradient: "from-peach to-primary",
      bgGradient: "from-peach/20 via-peach/10 to-transparent",
    },
  ];

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
              {t.activities.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.activities.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t.activities.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Activities grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group relative glass rounded-3xl p-8 border-border/30 hover-lift transition-all duration-500"
              style={getItemStyle(index)}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300`}>
                  <activity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${activity.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
