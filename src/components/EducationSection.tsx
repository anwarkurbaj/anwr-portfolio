import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-widest">{"// التعليم"}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            التحصيل <span className="text-gradient-primary">العلمي</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              degree: "بكالوريوس هندسة معلوماتية",
              school: "جامعة البعث – كلية الهندسة المعلوماتية",
              period: "سبتمبر 2021 – الآن",
            },
            {
              degree: "بكالوريا علمية",
              school: "مدرسة الحكمي",
              period: "2020 – 2021",
            },
          ].map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-gradient-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
            >
              <GraduationCap className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.school}</p>
              <p className="text-primary/70 font-mono text-xs mt-2">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
