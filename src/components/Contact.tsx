import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollReveal, useStaggerAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { t } = useLanguage();
  const { ref: infoRef, getItemStyle } = useStaggerAnimation(4, { staggerDelay: 100 });

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      details: t.contact.addressDetails,
      gradient: "from-primary to-peach",
    },
    {
      icon: Phone,
      title: t.contact.phone,
      details: t.contact.phoneDetails,
      gradient: "from-grass to-secondary",
    },
    {
      icon: Mail,
      title: t.contact.email,
      details: t.contact.emailDetails,
      gradient: "from-sky to-lavender",
    },
    {
      icon: Clock,
      title: t.contact.hours,
      details: t.contact.hoursDetails,
      gradient: "from-accent to-sun",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{ background: 'var(--gradient-sunset)' }}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-peach/30 animate-float blur-sm" />
      <div className="absolute top-1/3 right-[15%] w-16 h-16 rounded-full bg-gradient-to-br from-secondary/40 to-sky/30 animate-float-slow" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 left-[20%] w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-grass/30 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-20 right-[25%] w-8 h-8 rounded-full bg-gradient-to-br from-lavender/50 to-primary/30 animate-float-slow blur-sm" style={{ animationDelay: "1.5s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal animation="fade-up">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border-secondary/30 font-semibold text-sm mb-6">
              <Mail className="w-4 h-4 text-primary" />
              {t.contact.badge}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t.contact.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t.contact.description}
            </p>
          </ScrollReveal>
        </div>

        {/* Contact Info Cards - Centered grid */}
        <div 
          ref={infoRef as React.RefObject<HTMLDivElement>}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {contactInfo.map((item, index) => (
            <div 
              key={item.title} 
              className="group glass rounded-3xl p-8 border-border/30 hover-lift transition-all duration-300 text-center"
              style={getItemStyle(index)}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-playful`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-foreground text-lg mb-3">{item.title}</h4>
              <div className="space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
