import { Flame, ScrollText, Newspaper, Unlock, Bot } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Activities() {
  const { t } = useLanguage();

  const activities = [
    {
      number: '01',
      title: t('activities.card1Title'),
      description: t('activities.item1'),
      icon: ScrollText,
    },
    {
      number: '02',
      title: t('activities.card2Title'),
      description: t('activities.item2'),
      icon: Newspaper,
    },
    {
      number: '03',
      title: t('activities.card3Title'),
      description: t('activities.item3'),
      icon: Unlock,
    },
    {
      number: '04',
      title: t('activities.card4Title'),
      description: t('activities.item4'),
      icon: Bot,
    },
  ];

  return (
    <section id="activities" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Flame className="w-3 h-3" />
            {t('activities.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('activities.heading')}
          </h2>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.number}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover-lift border-glow overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute -right-4 -top-8 text-[120px] font-bold text-muted/5 group-hover:text-primary/5 transition-colors leading-none select-none">
                {activity.number}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">
                      {activity.number}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <activity.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
