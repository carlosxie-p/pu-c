import { motion } from "framer-motion";

const partners = [
  { name: "AWS", subtitle: "Cloud Infrastructure" },
  { name: "Google Cloud", subtitle: "AI & ML Platform" },
  { name: "Amadeus", subtitle: "GDS Integration" },
  { name: "Sabre", subtitle: "Travel Technology" },
  { name: "Travelport", subtitle: "Distribution" },
  { name: "Stripe", subtitle: "Payment Processing" },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-heading mb-3">Ecosystem</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Trusted <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We collaborate with industry-leading technology and travel companies to deliver world-class AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-glow transition-shadow duration-500"
            >
              <span className="font-heading font-bold text-lg text-foreground">{partner.name}</span>
              <span className="text-xs text-muted-foreground mt-1">{partner.subtitle}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
