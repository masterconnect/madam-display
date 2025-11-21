export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="text-3xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Madam.com
          </div>
          <p className="text-muted-foreground">
            A Premium Domain for Distinguished Brands
          </p>
          <p className="text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
