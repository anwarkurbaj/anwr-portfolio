import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-primary text-sm tracking-widest">{"// تواصل معي"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            لنبني شيئاً <span className="text-gradient-primary">مذهلاً</span> معاً
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            مستعد دائماً لفرص جديدة ومشاريع مثيرة. لا تتردد بالتواصل!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {[
            { icon: Mail, label: "البريد الإلكتروني", value: "anwrkurbaj@gmail.com", href: "mailto:anwrkurbaj@gmail.com" },
            { icon: Phone, label: "الهاتف", value: "+963 99 626 0127", href: "tel:+963996260127" },
            { icon: MapPin, label: "الموقع", value: "السويداء، سوريا", href: null },
            { icon: Linkedin, label: "LinkedIn", value: "الملف الشخصي", href: "https://linkedin.com" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer"
                  className="block bg-gradient-card rounded-xl p-5 border border-border hover:border-primary/30 transition-all group">
                  <c.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-mono text-sm text-foreground">{c.value}</p>
                </a>
              ) : (
                <div className="block bg-gradient-card rounded-xl p-5 border border-border">
                  <c.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">{c.label}</p>
                  <p className="font-mono text-sm text-foreground">{c.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-muted-foreground text-sm font-mono"
        >
          {"< صُنع بشغف وكود />"} — أنور كرباج © {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
