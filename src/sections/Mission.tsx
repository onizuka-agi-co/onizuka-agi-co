import { Quote, Globe, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Mission() {
  const { t, language } = useLanguage();

  return (
    <section id="mission" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 pointer-events-none" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Sparkles className="w-3 h-3" />
            {t('mission.label')}
          </div>
        </div>

        {/* Mission Quote */}
        <div className="relative">
          {/* Quote Marks */}
          <Quote className="absolute -top-6 -left-4 w-16 h-16 text-primary/20" />
          <Quote className="absolute -bottom-6 -right-4 w-16 h-16 text-primary/20 rotate-180" />

          {/* Main Mission Text */}
          <div className="text-center py-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="gradient-text">
                {language === 'ja' ? '「AGIの知見をほどき、' : '"Democratizing'}
              </span>
              <br />
              <span className="gradient-text">
                {language === 'ja' ? '世界に届ける」' : 'AGI Knowledge"'}
              </span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <Globe className="w-5 h-5 text-primary/60" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>

            <p className="text-xl sm:text-2xl text-muted-foreground font-light tracking-wide">
              {language === 'ja' ? 'Democratizing AGI knowledge' : 'AGIの知見をほどき、世界に届ける'}
            </p>
          </div>
        </div>

        {/* Mission Description */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('mission.description')}
          </p>
        </div>

        {/* Decorative Binary */}
        <div className="mt-16 flex justify-center">
          <div className="font-mono text-xs text-muted/20 tracking-widest binary-rain">
            01001000 01101111 01110000 01100101
          </div>
        </div>
      </div>
    </section>
  );
}
