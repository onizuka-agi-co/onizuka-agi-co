import { FlaskConical, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

interface NavigationProps {
  scrolled: boolean;
}

export default function Navigation({ scrolled }: NavigationProps) {
  const { t } = useLanguage();

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <FlaskConical className="w-5 h-5 text-red-600 group-hover:text-red-500 transition-colors" />
            <span className="text-sm font-medium tracking-tight text-white">ONIZUKA</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-xs font-medium tracking-wider text-white/60 hover:text-red-500 transition-colors uppercase"
            >
              {t('nav.about')}
            </a>
            <a
              href="#mission"
              className="text-xs font-medium tracking-wider text-white/60 hover:text-red-500 transition-colors uppercase"
            >
              {t('nav.mission')}
            </a>
            <a
              href="#team"
              className="text-xs font-medium tracking-wider text-white/60 hover:text-red-500 transition-colors uppercase"
            >
              {t('nav.team')}
            </a>
            <LanguageToggle />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-700 text-white text-xs font-medium tracking-wider uppercase hover:bg-red-600 transition-colors"
            >
              {t('hero.cta1')}
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
