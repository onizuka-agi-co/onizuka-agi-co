import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ja' ? 'en' : 'ja')}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors border border-white/20 rounded-lg hover:border-white/40"
    >
      <Globe className="w-4 h-4" />
      <span>{language === 'ja' ? 'EN' : '日本語'}</span>
    </button>
  );
}
