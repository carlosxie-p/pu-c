import { motion } from "framer-motion";
import { Zap, BarChart3, Users, ShieldCheck, Plane, Database } from "lucide-react";

const solutions = [
  {
    icon: Zap,
    title: "AI Booking Engine",
    description: "Intelligent booking automation that processes thousands of requests simultaneously with real-time pricing and availability.",
  },
  {
    icon: BarChart3,
    title: "Dynamic Pricing AI",
    description: "Machine learning algorithms that optimize pricing strategies across multiple channels and markets in real time.",
  },
  {
    icon: Users,
    title: "AI Customer Service",
    description: "24/7 intelligent customer support agents that handle inquiries, modifications, and issue resolution autonomously.",
  },
  {
    icon: Database,
    title: "Supply Chain Intelligence",
    description: "End-to-end visibility and optimization of the travel supply chain with predictive analytics and automated sourcing.",
  },
  {
    icon: Plane,
    title: "Content Aggregation",
    description: "AI-powered aggregation of global travel content — flights, hotels, transfers — normalized and enriched for instant distribution.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Risk AI",
    description: "Automated regulatory compliance monitoring and risk assessment across global travel markets and jurisdictions.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-heading mb-3">ChillTripTravel</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            B2B AI <span className="text-gradient">Product Suite</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our flagship brand <strong className="text-foreground">ChillTripTravel</strong> delivers a comprehensive suite of B2B AI products designed to transform every layer of the travel supply chain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass rounded-lg p-8 hover:shadow-glow transition-all duration-500 hover:border-glow"
            >
              <div className="w-12 h-12 rounded-md bg-gradient-primary flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
