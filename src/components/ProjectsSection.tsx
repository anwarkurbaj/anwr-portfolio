import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "G Studio Leiden",
    desc: "موقع ووردبريس احترافي لاستوديو في هولندا مع تصميم عصري وأداء محسّن",
    url: "https://www.gstudioleiden.nl",
    tech: ["WordPress", "CSS", "PHP"],
  },
  {
    title: "BeSoshial",
    desc: "موقع مبني باستخدام أدوات الذكاء الاصطناعي (Lovable) لإدارة وتطوير المحتوى",
    url: "https://besoshial.com",
    tech: ["Lovable", "AI", "Web"],
  },
  {
    title: "PI Dubai & PI Power",
    desc: "مواقع ووردبريس لشركات في دبي مع الدعم الفني المستمر وتحسين الأداء",
    url: "https://pi-dubai.com",
    tech: ["WordPress", "Support", "SEO"],
  },
];

export default function ProjectsSection() {
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
          <span className="font-mono text-primary text-sm tracking-widest">{"// المشاريع"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            أعمالي <span className="text-gradient-accent">المميزة</span>
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
                  <h3 className="text-lg font-bold group-hover:text-gradient-accent transition-colors">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
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
