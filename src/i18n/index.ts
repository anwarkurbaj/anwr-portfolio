import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
const resources = {
  en: {
    translation: {
      // Hero
      "hero.greeting": "Hello World",
      "hero.role": "Software Engineer",
      "hero.description": "Passionate software engineer specializing in web and mobile development, with expertise in Flutter, WordPress, technical support, and programming training.",
      "hero.cta": "View My Work",
      "hero.contact": "Get In Touch",

      // Experience
      "experience.title": "Experience",
      "experience.subtitle": "Professional Journey",
      "experience.1.title": "WordPress Developer & Support Developer",
      "experience.1.company": "BeSoshial",
      "experience.1.period": "Mar 2025 - Present",
      "experience.1.description": "Develop and maintain WordPress sites, support, optimize performance, and manage updates.",
      "experience.1.links": "pi-dubai.com, pipower.ae",
      "experience.2.title": "Technical Support",
      "experience.2.company": "Mays Private School",
      "experience.2.period": "Jan 2025 - Present",
      "experience.2.description": "Provide technical support to staff and students, manage digital learning systems.",
      "experience.3.title": "Flutter Developer Intern",
      "experience.3.company": "Darbeni",
      "experience.3.period": "2024 - 6 months",
      "experience.3.description": "Build cross-platform mobile apps, UI design, API integration and performance tuning.",
      "experience.4.title": "C++ Trainer & Support",
      "experience.4.company": "Awnak",
      "experience.4.period": "2021 - 2024",
      "experience.4.description": "Teach C++ programming and provide technical support for software/hardware issues.",
      "experience.5.title": "Technical Support",
      "experience.5.company": "Smart Syrian Virtual School",
      "experience.5.period": "Mar 2022 - 2023",
      "experience.5.description": "Develop and maintain Flutter applications, UI and multi-platform features.",

      // Education
      "education.title": "Education",
      "education.subtitle": "Academic Background",
      "education.1.degree": "BSc in Informatics Engineering",
      "education.1.school": "Al-Baath University",
      "education.1.period": "Sep 2021 - Present",
      "education.2.degree": "Scientific Baccalaureate",
      "education.2.school": "Al-Hukmi School",
      "education.2.period": "2020 - 2021",

      // Projects
      "projects.title": "Featured Projects",
      "projects.subtitle": "My Work",
      "projects.gstudio.title": "G Studio Leiden",
      "projects.besoshial.title": "BeSoshial",
      "projects.pidubai.title": "PI Dubai",
      "projects.pipower.title": "PI Power",
      "projects.desc1": "Website built using AI tools (Lovable) for content management and development",
      "projects.desc2": "WordPress websites for companies in Dubai with ongoing technical support and performance optimization",
      "projects.desc3": "WordPress websites for companies in Dubai with ongoing technical support and performance optimization",

      // Skills
      "skills.title": "Skills",
      "skills.subtitle": "Technologies I Work With",
      "skills.description": "A diverse set of technical skills and practical experiences gained throughout my career",
      "skills.wordpress": "WordPress Developer",
      "skills.wordpressDesc": "Developing and maintaining professional WordPress websites with performance optimization, security, and user experience",
      "skills.flutter": "Flutter Developer",
      "skills.flutterDesc": "Building cross-platform mobile applications with intuitive user interfaces and high performance",
      "skills.support": "Technical Support",
      "skills.supportDesc": "Efficiently solving technical problems and providing support for systems, software, and hardware",
      "skills.training": "Programming Trainer & Competitions",
      "skills.trainingDesc": "Teaching programming fundamentals and algorithms, preparing students for programming competitions",
      "skills.ai": "AI Tools",
      "skills.aiDesc": "Advanced experience in using modern AI tools to accelerate development and improve productivity",
      "skills.languages": "Programming Languages",
      "skills.languagesDesc": "Mastering a wide range of programming languages for developing diverse and effective solutions",

      // Contact
      "contact.title": "Contact",
      "contact.subtitle": "Let's Connect",
      "contact.description": "Always open to new opportunities and exciting projects. Feel free to reach out!",
      "contact.email.label": "Email",
      "contact.phone.label": "Phone",
      "contact.location.label": "Location",
      "contact.linkedin.label": "LinkedIn",
      "contact.whatsapp.label": "WhatsApp",
      "contact.signature": "<Built with passion and code /> — Anwar Karbaj © {{year}}"
    }
  },
  ar: {
    translation: {
      // Hero
      "hero.greeting": "مرحباً بالعالم",
      "hero.role": "مهندس برمجيات",
      "hero.description": "مهندس برمجيات شغوف بتطوير تطبيقات الويب والموبايل، خبرة في Flutter و WordPress والدعم الفني وتدريب البرمجة",
      "hero.cta": "عرض أعمالي",
      "hero.contact": "تواصل معي",

      // Experience
      "experience.title": "الخبرة",
      "experience.subtitle": "رحلتي المهنية",
      "experience.1.title": "مطور WordPress ودعم",
      "experience.1.company": "BeSoshial",
      "experience.1.period": "مارس 2025 – الآن",
      "experience.1.description": "تطوير وصيانة مواقع ووردبريس، تقديم الدعم الفني، تحسين الأداء وإدارة التحديثات.",
      "experience.1.links": "pi-dubai.com، pipower.ae",
      "experience.2.title": "الدعم الفني",
      "experience.2.company": "مدرسة ميس الخاصة",
      "experience.2.period": "يناير 2025 – الآن",
      "experience.2.description": "تقديم الدعم التقني للكادر والطلاب، وتهيئة أنظمة التعلم الرقمي.",
      "experience.3.title": "متدرب Flutter",
      "experience.3.company": "شركة دربني",
      "experience.3.period": "2024 – 6 أشهر",
      "experience.3.description": "تطوير تطبيقات موبايل متعددة المنصات بواجهات مستخدم بديهية وربط API.",
      "experience.4.title": "مدرب C++ ودعم فني",
      "experience.4.company": "شركة عونك",
      "experience.4.period": "2021 – 2024",
      "experience.4.description": "تدريس برمجة C++ والدعم الفني للبرمجيات والعتاد.",
      "experience.5.title": "الدعم الفني",
      "experience.5.company": "المدرسة الافتراضية السورية الذكية",
      "experience.5.period": "مارس 2022 – 2023",
      "experience.5.description": "تطوير وصيانة تطبيقات Flutter، وتصميم واجهات المستخدم.",

      // Education
      "education.title": "التعليم",
      "education.subtitle": "الخلفية الأكاديمية",
      "education.1.degree": "بكالوريوس هندسة معلوماتية",
      "education.1.school": "جامعة البعث",
      "education.1.period": "سبتمبر 2021 – الآن",
      "education.2.degree": "بكالوريا علمية",
      "education.2.school": "مدرسة الحكمي",
      "education.2.period": "2020 – 2021",

      // Projects
      "projects.title": "المشاريع المميزة",
      "projects.subtitle": "أعمالي",
      "projects.gstudio.title": "G Studio Leiden",
      "projects.besoshial.title": "BeSoshial",
      "projects.pidubai.title": "PI Dubai",
      "projects.pipower.title": "PI Power",
      "projects.desc1": "موقع مبني باستخدام أدوات الذكاء الاصطناعي (Lovable) لإدارة وتطوير المحتوى",
      "projects.desc2": "مواقع ووردبريس لشركات في دبي مع الدعم الفني المستمر وتحسين الأداء",
      "projects.desc3": "مواقع ووردبريس لشركات في دبي مع الدعم الفني المستمر وتحسين الأداء",

      // Skills
      "skills.title": "المهارات",
      "skills.subtitle": "التقنيات التي أعمل بها",
      "skills.description": "مجموعة متنوعة من المهارات التقنية والخبرات العملية التي اكتسبتها خلال مسيرتي المهنية",
      "skills.wordpress": "مطور ووردبريس",
      "skills.wordpressDesc": "تطوير وصيانة مواقع ووردبريس احترافية مع تحسين الأداء والأمان وتجربة المستخدم",
      "skills.flutter": "مطور فلاتر",
      "skills.flutterDesc": "بناء تطبيقات موبايل متعددة المنصات بواجهات مستخدم بديهية وأداء عالي",
      "skills.support": "الدعم الفني",
      "skills.supportDesc": "حل المشاكل التقنية بكفاءة وتقديم الدعم الفني للأنظمة والبرمجيات والعتاد",
      "skills.training": "مدرب برمجة ومسابقات",
      "skills.trainingDesc": "تدريس أساسيات البرمجة والخوارزميات وتحضير الطلاب للمسابقات البرمجية",
      "skills.ai": "أدوات الذكاء الاصطناعي",
      "skills.aiDesc": "خبرة متقدمة في استخدام أدوات AI الحديثة لتسريع التطوير وتحسين الإنتاجية",
      "skills.languages": "لغات البرمجة",
      "skills.languagesDesc": "إتقان مجموعة واسعة من لغات البرمجة لتطوير حلول متنوعة وفعالة",

      // Contact
      "contact.title": "التواصل",
      "contact.subtitle": "دعنا نتواصل",
      "contact.description": "مستعد دائماً لفرص جديدة ومشاريع مثيرة. لا تتردد بالتواصل!",
      "contact.email.label": "البريد الإلكتروني",
      "contact.phone.label": "الهاتف",
      "contact.location.label": "الموقع",
      "contact.linkedin.label": "LinkedIn",
      "contact.whatsapp.label": "واتس اب",
      "contact.signature": "<صُنع بشغف وكود /> — أنور كرباج © {{year}}"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;