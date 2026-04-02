import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { useTranslation } from "react-i18next";

const experiences = [
  {
    titleKey: "experience.1.title",
    companyKey: "experience.1.company",
    periodKey: "experience.1.period",
    descriptionKey: "experience.1.description",
    links: ["pi-dubai.com", "pipower.ae"],
  },
  {
    titleKey: "experience.2.title",
    companyKey: "experience.2.company",
    periodKey: "experience.2.period",
    descriptionKey: "experience.2.description",
  },
  {
    titleKey: "experience.3.title",
    companyKey: "experience.3.company",
    periodKey: "experience.3.period",
    descriptionKey: "experience.3.description",
  },
  {
    titleKey: "experience.4.title",
    companyKey: "experience.4.company",
    periodKey: "experience.4.period",
    descriptionKey: "experience.4.description",
  },
  {
    titleKey: "experience.5.title",
    companyKey: "experience.5.company",
    periodKey: "experience.5.period",
    descriptionKey: "experience.5.description",
  },
];

export default function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">// {t("experience.subtitle")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {t("experience.title")} <span className="text-gradient-primary">{t("experience.subtitle")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute right-6 md:right-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"} pr-12 md:pr-12`}
            >
              {/* Timeline dot */}
              <div className={`absolute top-2 ${i % 2 === 0 ? "right-0 md:-right-2" : "right-0 md:-left-2"} w-4 h-4 rounded-full bg-gradient-primary shadow-glow z-10`} />

              <div className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors group">
                <div className="flex items-center gap-2 text-primary font-mono text-xs mb-2">
                  <Calendar className="w-3 h-3" />
                  {t(exp.periodKey)}
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-gradient-primary transition-colors">
                  {t(exp.titleKey)}
                </h3>
                <p className="text-primary/80 text-sm font-medium flex items-center gap-1 mt-1">
                  <Briefcase className="w-3 h-3" />
                  {t(exp.companyKey)}
                </p>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{t(exp.descriptionKey)}</p>
                {exp.links && (
                  <div className="flex gap-2 mt-3 flex-wrap">
                    {exp.links.map((l) => (
                      <a key={l} href={`https://${l}`} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-mono text-primary/70 hover:text-primary border border-primary/20 rounded px-2 py-1 transition-colors">
                        {l}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
