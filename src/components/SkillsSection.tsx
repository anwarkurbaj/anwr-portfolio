import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Headphones, GraduationCap, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "WordPress Developer",
    desc: "تطوير وصيانة مواقع ووردبريس احترافية مع تحسين الأداء والأمان وتجربة المستخدم",
    tags: ["WordPress", "PHP", "CSS", "SEO"],
  },
  {
    icon: Smartphone,
    title: "Flutter Developer",
    desc: "بناء تطبيقات موبايل متعددة المنصات بواجهات مستخدم بديهية وأداء عالي",
    tags: ["Flutter", "Dart", "API", "UI/UX"],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    desc: "حل المشاكل التقنية بكفاءة وتقديم الدعم الفني للأنظمة والبرمجيات والعتاد",
    tags: ["Troubleshooting", "IT Support", "Networking"],
  },
  {
    icon: GraduationCap,
    title: "مدرب برمجة ومسابقات",
    desc: "تدريس أساسيات البرمجة والخوارزميات وتحضير الطلاب للمسابقات البرمجية",
    tags: ["C++", "Algorithms", "Teaching"],
  },
  {
    icon: Sparkles,
    title: "أدوات الذكاء الاصطناعي",
    desc: "خبرة متقدمة في استخدام أدوات AI الحديثة لتسريع التطوير وتحسين الإنتاجية",
    tags: ["Lovable", "ChatGPT", "AI Tools"],
  },
  {
    icon: Code2,
    title: "لغات البرمجة",
    desc: "إتقان مجموعة واسعة من لغات البرمجة لتطوير حلول متنوعة وفعالة",
    tags: ["HTML", "CSS", "JS", "Python", "C++", "Dart"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">{"// المهارات"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            ماذا <span className="text-gradient-primary">أقدم</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            مجموعة متنوعة من المهارات التقنية والخبرات العملية التي اكتسبتها خلال مسيرتي المهنية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="h-full bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
