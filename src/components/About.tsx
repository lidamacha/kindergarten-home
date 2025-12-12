import { Heart, Star, Users, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Αγάπη & Φροντίδα",
    description: "Κάθε παιδί αντιμετωπίζεται με αγάπη και προσοχή σε ένα ασφαλές περιβάλλον.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: Star,
    title: "Δημιουργικότητα",
    description: "Ενθαρρύνουμε τη φαντασία και τη δημιουργική έκφραση μέσα από το παιχνίδι.",
    color: "bg-accent/30",
    iconColor: "text-accent-foreground",
  },
  {
    icon: Users,
    title: "Κοινότητα",
    description: "Χτίζουμε ισχυρούς δεσμούς μεταξύ παιδιών, γονέων και εκπαιδευτικών.",
    color: "bg-secondary",
    iconColor: "text-secondary-foreground",
  },
  {
    icon: Award,
    title: "Εξέλιξη",
    description: "Βοηθάμε κάθε παιδί να αναπτύξει τις δεξιότητές του στο δικό του ρυθμό.",
    color: "bg-sky/30",
    iconColor: "text-sky-foreground",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm mb-4">
            Σχετικά με εμάς
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ένα σπίτι γεμάτο χαρά
          </h2>
          <p className="text-muted-foreground text-lg">
            Στα "Χρώματα και Γέλια" πιστεύουμε ότι κάθε παιδί είναι μοναδικό και αξίζει 
            την καλύτερη αρχή στη ζωή του.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-bubble bg-card shadow-soft hover:shadow-playful transition-all duration-300 hover:-translate-y-2 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-bubble ${feature.color} flex items-center justify-center mb-4 group-hover:animate-wiggle`}>
                <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "150+", label: "Χαρούμενα παιδιά" },
            { number: "20+", label: "Χρόνια εμπειρίας" },
            { number: "12", label: "Εκπαιδευτικοί" },
            { number: "100%", label: "Αγάπη" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6">
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
