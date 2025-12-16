import { Baby, GraduationCap, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const Classes = () => {
  const { t } = useLanguage();
  const { ref: gridRef, getItemStyle } = useStaggerAnimation(3, { staggerDelay: 150 });

  const classes = [
    {
      icon: Baby,
      title: t.classes.items.infant.title,
      ages: t.classes.items.infant.ages,
      description: t.classes.items.infant.description,
      gradient: "from-primary to-peach",
      bgGradient: "from-primary/15 to-peach/10",
      features: ["🧸", "🎵", "🖍️"],
      link: "/nipia",
    },
    {
      icon: BookOpen,
      title: t.classes.items.preschool.title,
      ages: t.classes.items.preschool.ages,
      description: t.classes.items.preschool.description,
      gradient: "from-accent to-sun",
      bgGradient: "from-accent/20 to-sun/10",
      features: ["📚", "🎨", "🌱"],
      featured: true,
      link: "/pronipia",
    },
    {
      icon: GraduationCap,
      title: t.classes.items.prek.title,
      ages: t.classes.items.prek.ages,
      description: t.classes.items.prek.description,
      gradient: "from-sky to-lavender",
      bgGradient: "from-sky/20 to-lavender/10",
      features: ["✏️", "🔢", "🌍"],
      link: "/proscholiko",
    },
  ];

  return (
    <section id="classes" className="py-24 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-lavender/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />

      {/* Wave decoration at bottom */}
      <div className="absolute -bottom-1 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 60L60 66C120 72 240 84 360 84C480 84 600 72 720 60C840 48 960 36 1080 42C1200 48 1320 72 1380 84L1440 96V120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-sky/30 font-semibold text-sm mb-6">
              <GraduationCap className="w-4 h-4 text-sky" />
              {t.classes.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.classes.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t.classes.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Classes grid */}
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-3 gap-8"
        >
          {classes.map((classItem, index) => (
            <div
              key={classItem.title}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover-lift ${
                classItem.featured ? 'md:-mt-4 md:mb-4' : ''
              }`}
              style={getItemStyle(index)}
            >
              {/* Card background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${classItem.bgGradient}`} />
              <div className="absolute inset-0 glass opacity-80" />
              
              {/* Featured badge */}
              {classItem.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-accent to-sun text-xs font-bold text-accent-foreground">
                  ⭐ Popular
                </div>
              )}

              <div className="relative z-10 p-8">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${classItem.gradient} flex items-center justify-center mb-6 shadow-playful group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <classItem.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {classItem.title}
                </h3>
                <span className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${classItem.gradient} text-white text-sm font-semibold mb-4`}>
                  {classItem.ages}
                </span>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {classItem.description}
                </p>

                {/* Features */}
                <div className="flex items-center gap-3 mb-6">
                  {classItem.features.map((emoji, i) => (
                    <span key={i} className="text-2xl hover:scale-125 transition-transform cursor-default">
                      {emoji}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link to={classItem.link}>
                  <Button variant="outline" className="w-full group/btn glass">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
