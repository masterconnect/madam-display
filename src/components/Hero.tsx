import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const phrases = [
  "Premium Domain",
  "Memorable Brand",
  "Global Recognition",
  "Instant Authority",
  "Timeless Elegance",
  "Market Advantage",
];

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      } else {
        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setTypingSpeed(150);
          return;
        }
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        setTypingSpeed(100);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex, typingSpeed]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-luxury">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(350_65%_45%_/_0.1),transparent_50%)]" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Main Domain Display */}
          <div className="space-y-6">
            <div className="inline-block">
              <h1 className="text-7xl md:text-9xl font-bold bg-gradient-gold bg-clip-text text-transparent animate-glow">
                Madam.com
              </h1>
            </div>
            
            {/* Typewriter Effect */}
            <div className="min-h-[80px] flex items-center justify-center">
              <p className="text-3xl md:text-5xl font-light text-foreground">
                A <span className="text-gold font-semibold">{displayText}</span>
                <span className="animate-pulse text-gold">|</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Acquire a domain that exudes sophistication, elegance, and timeless class. 
            Perfect for luxury brands, premium services, and distinguished businesses.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center items-center pt-8">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="text-lg px-12 py-8 bg-gradient-elegant hover:scale-105 transition-transform duration-300 shadow-elegant"
            >
              Make an Offer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
