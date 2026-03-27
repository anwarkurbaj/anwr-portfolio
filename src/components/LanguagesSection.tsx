import { motion } from "framer-motion";

const languages = [
  { name: "HTML", level: 90, color: "from-orange-500 to-red-500" },
  { name: "CSS", level: 85, color: "from-blue-500 to-cyan-500" },
  { name: "JavaScript", level: 75, color: "from-yellow-400 to-amber-500" },
  { name: "Python", level: 70, color: "from-green-400 to-emerald-500" },
  { name: "C++", level: 80, color: "from-violet-500 to-purple-600" },
  { name: "Dart", level: 80, color: "from-cyan-400 to-blue-500" },
];

const spokenLangs = [
  { name: "العربية", level: "اللغة الأم", flag: "🇸🇾" },
  { name: "English", level: "Fluent", flag: "🇬🇧" },
];

export default function LanguagesSection() {
  return (
    <section id="languages" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">{"// اللغات"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            لغات <span className="text-gradient-primary">البرمجة</span> والتواصل
          </h2>
        </motion.div>

        {/* Programming Languages */}
        <div className="grid gap-5 mb-16">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono font-semibold text-sm">{lang.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{lang.level}%</span>
              </div>
              <div className="h-3 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Spoken Languages */}
        <div className="grid sm:grid-cols-2 gap-6">
          {spokenLangs.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card rounded-xl p-6 border border-border text-center hover:border-primary/30 transition-colors"
            >
              <span className="text-4xl mb-3 block">{lang.flag}</span>
              <h3 className="text-xl font-bold">{lang.name}</h3>
              <p className="text-muted-foreground text-sm mt-1">{lang.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
