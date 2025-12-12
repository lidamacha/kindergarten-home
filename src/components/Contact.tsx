import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Διεύθυνση",
    details: ["Οδός Παιδείας 25", "Αθήνα, 12345"],
  },
  {
    icon: Phone,
    title: "Τηλέφωνο",
    details: ["210 1234567", "697 1234567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@xromatakaigeleia.gr"],
  },
  {
    icon: Clock,
    title: "Ωράριο",
    details: ["Δευτέρα - Παρασκευή", "7:00 - 16:00"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium text-sm mb-4">
              Επικοινωνία
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ελάτε να μας γνωρίσετε!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Θα χαρούμε να σας υποδεχτούμε και να σας ξεναγήσουμε στο χώρο μας. 
              Επικοινωνήστε μαζί μας για να κλείσετε ραντεβού.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-bubble bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 rounded-bubble p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Στείλτε μας μήνυμα
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Όνομα
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Το όνομά σας"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Τηλέφωνο
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Το τηλέφωνό σας"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Πείτε μας τι θέλετε να μάθετε..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Αποστολή μηνύματος
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
