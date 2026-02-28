import { Wrench, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const skillNames = [
  'x-read',
  'x-write',
  'x-community',
  'x-stream',
  'gemini-vision',
  'glm-code',
  'google-browse',
  'idea-dev',
  'daily-memory',
];

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { name: skillNames[0], description: t('skills.item1Desc') },
    { name: skillNames[1], description: t('skills.item2Desc') },
    { name: skillNames[2], description: t('skills.item3Desc') },
    { name: skillNames[3], description: t('skills.item4Desc') },
    { name: skillNames[4], description: t('skills.item5Desc') },
    { name: skillNames[5], description: t('skills.item6Desc') },
    { name: skillNames[6], description: t('skills.item7Desc') },
    { name: skillNames[7], description: t('skills.item8Desc') },
    { name: skillNames[8], description: t('skills.item9Desc') },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Wrench className="w-3 h-3" />
            {t('skills.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('skills.heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all hover-lift"
            >
              {/* Index Number */}
              <div className="absolute top-3 right-3 text-xs font-mono text-muted/30">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                <div>
                  <h3 className="font-mono text-sm font-medium group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Link */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/onizuka-agi-co/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm"
          >
            {t('skills.repoLink')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
