import { Crown, Sparkles, TrendingUp, Globe } from "lucide-react";

const features = [
  {
    icon: Crown,
    title: "Premium Identity",
    description: "A single-word .com domain that commands respect and instant recognition in any industry.",
  },
  {
    icon: Sparkles,
    title: "Timeless Elegance",
    description: "Classic, memorable, and sophisticated - a name that transcends trends and cultural boundaries.",
  },
  {
    icon: TrendingUp,
    title: "Investment Value",
    description: "Premium domains appreciate over time. Secure this rare asset before it's gone.",
  },
  {
    icon: Globe,
    title: "Global Appeal",
    description: "Recognized and respected worldwide, perfect for international brands and audiences.",
  },
];

export const Features = () => {
  return (
    <section className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(350_65%_45%_/_0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground">
            Why <span className="text-gold">Madam.com</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than a domain - it's a statement of excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-10 rounded-2xl bg-background/50 backdrop-blur border border-border hover:border-gold/50 transition-all duration-500 hover:shadow-gold animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-elegant">
                <feature.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
