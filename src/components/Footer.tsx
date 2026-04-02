const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-heading font-semibold text-foreground">
          PKFARE <span className="text-gradient">USA</span>
        </span>
        <span>© {new Date().getFullYear()} PKFARE USA. All rights reserved.</span>
        <span>A <span className="text-primary font-medium">ChillTripTravel</span> Company</span>
      </div>
    </footer>
  );
};

export default Footer;
