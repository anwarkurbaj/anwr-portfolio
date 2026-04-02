import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    titleKey: "projects.gstudio.title",
    descKey: "projects.desc1",
    url: "https://www.gstudioleiden.nl",
    tech: ["WordPress", "CSS", "PHP"],
  },
  {
    titleKey: "projects.besoshial.title",
    descKey: "projects.desc1",
    url: "https://besoshial.com",
    tech: ["Lovable", "AI", "Web"],
  },
  {
    titleKey: "projects.pidubai.title",
    descKey: "projects.desc2",
    url: "https://pi-dubai.com",
    tech: ["WordPress", "Support", "SEO", "Performance"],
  },
  {
    titleKey: "projects.pipower.title",
    descKey: "projects.desc3",
    url: "https://pipstec.com/",
    tech: ["WordPress", "Support", "SEO", "Performance"],
  },
];

export default function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">// {t("projects.subtitle")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {t("projects.title")} <span className="text-gradient-accent">Featured</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group block"
            >
              <div className="h-full bg-gradient-card rounded-xl p-6 border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-glow-accent">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold group-hover:text-gradient-accent transition-colors">{t(p.titleKey)}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{t(p.descKey)}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-accent/80">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
