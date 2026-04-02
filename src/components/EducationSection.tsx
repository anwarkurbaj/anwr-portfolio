import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";

const educationItems = [
  {
    degreeKey: "education.1.degree",
    schoolKey: "education.1.school",
    periodKey: "education.1.period"
  },
  {
    degreeKey: "education.2.degree",
    schoolKey: "education.2.school",
    periodKey: "education.2.period"
  }
];

export default function EducationSection() {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">// {t("education.subtitle")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {t("education.title")} <span className="text-gradient-primary">{t("education.subtitle")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {educationItems.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-1">{t(edu.degreeKey)}</h3>
              <p className="text-muted-foreground text-sm">{t(edu.schoolKey)}</p>
              <p className="text-primary/70 font-mono text-xs mt-2">{t(edu.periodKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
