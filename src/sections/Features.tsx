import { ScrollText, Newspaper, Unlock, Bot, Cpu, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const features = [
    {
      number: '01',
      title: t('features.item1Title'),
      description: t('features.item1Desc'),
      icon: ScrollText,
    },
    {
      number: '02',
      title: t('features.item2Title'),
      description: t('features.item2Desc'),
      icon: Newspaper,
    },
    {
      number: '03',
      title: t('features.item3Title'),
      description: t('features.item3Desc'),
      icon: Unlock,
    },
    {
      number: '04',
      title: t('features.item4Title'),
      description: t('features.item4Desc'),
      icon: Bot,
    },
    {
      number: '05',
      title: t('features.item5Title'),
      description: t('features.item5Desc'),
      icon: Cpu,
    },
    {
      number: '06',
      title: t('features.item6Title'),
      description: t('features.item6Desc'),
      icon: Shield,
    },
  ];

  return (
    <section id="features" className="relative py-24 lg:py-32 bg-black">
      {/* Vermilion accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="section-label border-red-500/30 text-red-400/80 mb-6">{t('features.label')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            {t('features.titlePrefix')} <span className="text-red-600">{t('features.titleHighlight')}</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-red-900/20">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="bg-black p-8 hover:bg-red-950/10 transition-colors group border border-red-900/10 hover:border-red-500/30"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon className="w-8 h-8 text-red-900/40 group-hover:text-red-500 transition-colors" />
              </div>

              {/* Number */}
              <span className="text-xs font-mono text-red-600 mb-4 block">
                {feature.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-medium text-white mb-3 uppercase tracking-wide group-hover:text-red-400 transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-white/40 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
