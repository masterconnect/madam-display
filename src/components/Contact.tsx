import { Phone, Mail } from "lucide-react";

export const Contact = () => {

  return (
    <section id="contact" className="py-32 bg-gradient-luxury relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(45_85%_65%_/_0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Acquire <span className="text-gold">Madam.com</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Make an offer or inquire about this premium domain
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-lg rounded-3xl p-12 shadow-elegant border border-border/50 animate-fade-in-up">
            <div className="text-center space-y-8">
              <p className="text-lg text-muted-foreground mb-12">
                For inquiries and offers, please contact our exclusive broker:
              </p>
              
              <div className="space-y-6">
                <a 
                  href="tel:+19043167232"
                  className="flex items-center justify-center gap-4 text-2xl text-foreground hover:text-gold transition-colors group"
                >
                  <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>+1 (904) 316-7232</span>
                </a>
                
                <a 
                  href="mailto:brian@gritbrokerage.com"
                  className="flex items-center justify-center gap-4 text-2xl text-foreground hover:text-gold transition-colors group"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>brian@gritbrokerage.com</span>
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">
            All inquiries are confidential and will receive a response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
