import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl" />
      
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Contact Info */}
          <div 
            ref={infoRef as React.RefObject<HTMLDivElement>}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((item, index) => (
              <div 
                key={item.title} 
                className="group glass rounded-2xl p-6 border-border/30 hover-lift transition-all duration-300"
                style={getItemStyle(index)}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
