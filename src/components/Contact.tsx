import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

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
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-border focus:border-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 border-border focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="offer" className="text-sm font-medium text-foreground">
                  Your Offer (Optional)
                </label>
                <Input
                  id="offer"
                  placeholder="$XXX,XXX"
                  className="bg-background/50 border-border focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in Madam.com..."
                  rows={6}
                  required
                  className="bg-background/50 border-border focus:border-gold transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-8 text-lg bg-gradient-elegant hover:scale-[1.02] transition-transform duration-300 shadow-elegant"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">
            All inquiries are confidential and will receive a response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};
