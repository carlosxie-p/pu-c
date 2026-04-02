import { motion } from "framer-motion";
import { Building2, Globe, Bot, Cpu } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Seattle Headquarters",
    description: "Based in the heart of the Pacific Northwest tech hub, PKFARE USA operates at the intersection of innovation and global commerce.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our AI solutions serve travel businesses across North America, Europe, Asia-Pacific, and beyond — enabling seamless cross-border operations.",
  },
  {
    icon: Bot,
    title: "AI-First Workforce",
    description: "We've achieved a highly AI-automated organization where intelligent agents handle operations from customer service to supply chain optimization.",
  },
  {
    icon: Cpu,
    title: "Full-Stack AI Solutions",
    description: "End-to-end B2B AI products covering booking engines, pricing optimization, inventory management, and intelligent customer engagement.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-heading mb-3">About Us</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Pioneering <span className="text-gradient">AI Innovation</span> in Travel
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Founded in 2020, PKFARE USA is redefining how the travel industry operates. Through advanced artificial intelligence and machine learning, we empower businesses to achieve unprecedented efficiency and scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-lg p-6 hover:shadow-glow transition-shadow duration-500"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
