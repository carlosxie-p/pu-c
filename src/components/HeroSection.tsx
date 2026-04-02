import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="AI-powered global travel network"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/70" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
            PKFARE <span className="text-gradient">USA</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light">
            AI-Powered Travel Solutions for the Global Supply Chain
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Headquartered in Seattle · Transforming travel industry with intelligent automation since 2020
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#solutions" className="inline-flex items-center justify-center px-8 py-3 rounded-md bg-gradient-primary text-primary-foreground font-heading font-semibold tracking-wide hover:opacity-90 transition-opacity">
            Explore Solutions
          </a>
          <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 rounded-md border border-glow text-foreground font-heading font-medium hover:bg-secondary transition-colors">
            Get in Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "2020", label: "Founded" },
            { value: "50+", label: "Global Partners" },
            { value: "100%", label: "AI-Driven" },
            { value: "24/7", label: "Automation" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
