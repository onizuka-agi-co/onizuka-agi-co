import { Network, Cpu, Code2, Eye, Wrench, Cat, Bell, ClipboardList, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const agents = [
    {
      number: '00',
      name: t('team.renji'),
      role: t('team.roleRenji'),
      description: t('team.memberDescRenji'),
      icon: Crown,
    },
    {
      number: '01',
      name: t('team.mainSession'),
      model: 'GLM-5',
      role: t('team.roleMainSession'),
      description: t('team.memberDescMainSession'),
      icon: Network,
    },
    {
      number: '02',
      name: t('team.orchestrator'),
      model: 'Codex5.3',
      role: t('team.roleOrchestrator'),
      description: t('team.memberDescOrchestrator'),
      icon: Cpu,
    },
    {
      number: '03',
      name: t('team.developer'),
      model: 'Codex5.3',
      role: t('team.roleDeveloper'),
      description: t('team.memberDescDeveloper'),
      icon: Code2,
    },
    {
      number: '04',
      name: t('team.reviewer'),
      model: 'Codex5.3',
      role: t('team.roleReviewer'),
      description: t('team.memberDescReviewer'),
      icon: Eye,
    },
    {
      number: '05',
      name: t('team.fixer'),
      model: 'Codex5.3',
      role: t('team.roleFixer'),
      description: t('team.memberDescFixer'),
      icon: Wrench,
    },
    {
      number: '06',
      name: t('team.tuzuri'),
      role: t('team.roleTuzuri'),
      description: t('team.memberDescTuzuri'),
      icon: Cat,
    },
    {
      number: '07',
      name: t('team.notificationManager'),
      role: t('team.roleNotificationManager'),
      description: t('team.memberDescNotificationManager'),
      icon: Bell,
    },
    {
      number: '08',
      name: t('team.akari'),
      role: t('team.roleAkari'),
      description: t('team.memberDescAkari'),
      icon: ClipboardList,
    },
  ];

  return (
    <section id="team" className="relative py-24 lg:py-32 bg-black">
      {/* Vermilion accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="section-label border-red-500/30 text-red-400/80 mb-6">{t('team.label')}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            {t('team.headingLine1')} <span className="text-red-600">{t('team.headingHighlight')}</span>
            <br />
            <span className="text-white/60">{t('team.headingLine2')}</span>
          </h2>
          <p className="text-base text-white/40 max-w-xl">
            {t('team.description')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-red-900/20">
          {agents.map((agent) => (
            <div
              key={agent.number}
              className="bg-black p-8 hover:bg-red-950/10 transition-colors group border border-red-900/10 hover:border-red-500/30"
            >
              {/* Icon */}
              <div className="mb-6">
                <agent.icon className="w-8 h-8 text-red-900/40 group-hover:text-red-500 transition-colors" />
              </div>

              {/* Number */}
              <span className="text-xs font-mono text-red-600 mb-4 block">
                {agent.number}
              </span>

              {/* Name */}
              <h3 className="text-lg font-medium text-white mb-1 uppercase tracking-wide group-hover:text-red-400 transition-colors">
                {agent.name}
              </h3>

              {/* Model */}
              {agent.model && (
                <p className="text-xs font-mono text-white/30 mb-4">
                  {agent.model}
                </p>
              )}

              {/* Role */}
              <p className="text-sm text-red-400/80 leading-relaxed mb-2">
                {agent.role}
              </p>

              {/* Description */}
              <p className="text-sm text-white/40 leading-relaxed">
                {agent.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center relative">
          {/* Decorative elements */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-16 bg-gradient-to-b from-transparent to-red-900/50" />

          <p className="text-xs font-mono text-red-900/60 mb-4 tracking-widest uppercase">
            {t('team.missionLabel')}
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light">
            <span className="text-red-600 glow-vermilion">{t('team.missionLine1')}</span>
            <br />
            <span className="text-red-600 glow-vermilion">{t('team.missionLine2')}</span>
          </h3>
          <p className="text-sm text-yellow-600/60 mt-4 tracking-wide font-mono">
            {t('team.missionSubtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
