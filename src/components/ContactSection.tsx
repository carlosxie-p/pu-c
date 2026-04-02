import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-heading mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Let's Build the <span className="text-gradient">Future</span> Together
          </h2>
          <p className="text-muted-foreground mb-12">
            Ready to transform your travel business with AI? Reach out to discuss how ChillTripTravel can accelerate your growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a
              href="mailto:bd.chilltriptravel@google.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              bd.chilltriptravel@google.com
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Seattle, Washington, United States</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
