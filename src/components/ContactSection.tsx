import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const contactItems = [
  { icon: Mail, labelKey: "contact.email.label", value: "anwrkurbaj@gmail.com", href: "mailto:anwrkurbaj@gmail.com" },
  { icon: FaWhatsapp, labelKey: "contact.whatsapp.label", value: "+963 99 626 0127", href: "https://wa.me/963996260127" },
  { icon: MapPin, labelKey: "contact.location.label", value: "السويداء، سوريا", href: null },
  { icon: Linkedin, labelKey: "contact.linkedin.label", value: "linkedin.com/in/anwar-kurbaj", href: "https://www.linkedin.com/in/anwar-kurbaj-8749873a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
];
export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-primary text-sm tracking-widest">// {t("contact.subtitle")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            {t("contact.title")} <span className="text-gradient-primary">{t("contact.subtitle")}</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            {t("contact.description")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {contactItems.map((c, i) => (
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
                  <p className="text-xs text-muted-foreground mb-1">{t(c.labelKey)}</p>
                  <p className="font-mono text-sm text-foreground">{c.value}</p>
                </a>
              ) : (
                <div className="block bg-gradient-card rounded-xl p-5 border border-border">
                  <c.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">{t(c.labelKey)}</p>
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
          {t("contact.signature", { year: new Date().getFullYear() })}
        </motion.p>
      </div>
    </section>
  );
}

