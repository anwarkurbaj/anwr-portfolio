import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} custom={0} className="font-mono text-primary text-sm md:text-base tracking-widest mb-4">
            {"< مرحباً بالعالم />"}
          </motion.p>
          
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            أنور <span className="text-gradient-primary">كرباج</span>
          </motion.h1>
          
          <motion.div variants={fadeUp} custom={2} className="flex items-center justify-center gap-2 mb-8">
            <span className="h-px w-12 bg-gradient-primary" />
            <h2 className="text-xl md:text-2xl font-light text-muted-foreground">
              Software Engineer
            </h2>
            <span className="h-px w-12 bg-gradient-primary" />
          </motion.div>

          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            مهندس برمجيات شغوف بتطوير تطبيقات الويب والموبايل، خبرة في Flutter و WordPress والدعم الفني وتدريب البرمجة
          </motion.p>

          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap justify-center gap-4">
            <a href="#experience" className="px-8 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
              الخبرات
            </a>
            <a href="#skills" className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:border-primary/60 transition-colors">
              المهارات
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg border border-accent/30 text-accent hover:border-accent/60 transition-colors">
              تواصل معي
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="mt-12 flex justify-center gap-6 font-mono text-xs text-muted-foreground">
            {["Flutter", "WordPress", "Python", "C++", "Dart"].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-border hover:border-primary/40 hover:text-primary transition-colors cursor-default">
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-primary/40 flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
