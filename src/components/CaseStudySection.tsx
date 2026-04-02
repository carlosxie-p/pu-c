import { motion } from "framer-motion";
import { Quote, TrendingUp, Clock, DollarSign } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section id="case-study" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] font-heading mb-3">Success Story</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            The <span className="text-gradient">One-Person Company</span> Revolution
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass rounded-xl p-8 md:p-12"
        >
          <div className="flex items-start gap-4 mb-8">
            <Quote className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Dreamable Travel Agency</h3>
              <p className="text-muted-foreground text-sm">North America · Powered by ChillTripTravel</p>
            </div>
          </div>

          <p className="text-foreground/90 leading-relaxed text-lg mb-8">
            Dreamable, a North American travel agency, has achieved what was once impossible — operating as a fully functional 
            <strong className="text-primary"> one-person company</strong>. By leveraging ChillTripTravel's complete AI product suite, 
            a single operator now manages booking, customer service, pricing, supplier negotiations, and compliance — tasks that 
            traditionally required a team of 15–20 people.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, value: "95%", label: "Operations Automated" },
              { icon: Clock, value: "90%", label: "Time Saved" },
              { icon: DollarSign, value: "80%", label: "Cost Reduction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg bg-secondary/50">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-heading font-bold text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
