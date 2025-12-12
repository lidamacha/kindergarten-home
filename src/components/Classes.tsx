import { Baby, GraduationCap, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Classes = () => {
  const { t } = useLanguage();

  const classes = [
    {
      icon: Baby,
      title: t.classes.items.infant.title,
      ages: t.classes.items.infant.ages,
      description: t.classes.items.infant.description,
      color: "from-primary/20 to-primary/5",
      iconBg: "bg-primary",
    },
    {
      icon: BookOpen,
      title: t.classes.items.preschool.title,
      ages: t.classes.items.preschool.ages,
      description: t.classes.items.preschool.description,
      color: "from-accent/40 to-accent/10",
      iconBg: "bg-sun",
    },
    {
      icon: GraduationCap,
      title: t.classes.items.prek.title,
      ages: t.classes.items.prek.ages,
      description: t.classes.items.prek.description,
      color: "from-sky/30 to-sky/5",
      iconBg: "bg-sky",
    },
  ];

  return (
    <section id="classes" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-sky/30 text-sky-foreground font-medium text-sm mb-4">
            {t.classes.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.classes.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t.classes.description}
          </p>
        </div>

        {/* Classes grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={classItem.title}
              className={`group relative p-8 rounded-bubble bg-gradient-to-b ${classItem.color} border border-border/30 transition-all duration-300 hover:shadow-playful hover:-translate-y-2 overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-card/20 blur-2xl" />
              
              <div className={`relative w-16 h-16 rounded-full ${classItem.iconBg} flex items-center justify-center mb-6 shadow-soft group-hover:animate-wiggle`}>
                <classItem.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {classItem.title}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-card/80 text-sm font-medium text-muted-foreground mb-4">
                  {classItem.ages}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {classItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
