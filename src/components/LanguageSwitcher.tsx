import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded border text-sm ${
          i18n.language === 'en'
            ? 'bg-primary text-primary-foreground border-primary'
            : 'border-border text-muted-foreground hover:border-primary/40'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-3 py-1 rounded border text-sm ${
          i18n.language === 'ar'
            ? 'bg-primary text-primary-foreground border-primary'
            : 'border-border text-muted-foreground hover:border-primary/40'
        }`}
      >
        AR
      </button>
    </div>
  );
}