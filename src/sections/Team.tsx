import { Cat, ClipboardList, Crown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type TeamMember = {
  number: string;
  name: string;
  role: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  avatarSrc?: string;
  avatarAlt?: string;
  avatarEmoji?: string;
};

export default function Team() {
  const { t } = useLanguage();

  // Team Members (3 people)
  const teamMembers: TeamMember[] = [
    {
      number: '00',
      name: t('team.renji'),
      role: t('team.roleRenji'),
      description: t('team.memberDescRenji'),
      icon: Crown,
      avatarSrc: './avatar-renji.jpg',
      avatarAlt: 'Renji ONIZUKA',
    },
    {
      number: '01',
      name: t('team.tuzuri'),
      role: t('team.roleTuzuri'),
      description: t('team.memberDescTuzuri'),
      icon: Cat,
      avatarSrc: './avatar-tuzuri.jpg',
      avatarAlt: 'TUZURI',
    },
    {
      number: '02',
      name: t('team.akari'),
      role: t('team.roleAkari'),
      description: t('team.memberDescAkari'),
      icon: ClipboardList,
      avatarSrc: './avatar-akari.png',
      avatarAlt: 'AKARI',
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

        {/* Team Members Section */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-white/80 mb-3">{t('team.membersLabel')}</h3>
          <p className="text-sm text-white/40 mb-6">{t('team.membersDescription')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-red-900/20">
            {teamMembers.map((member) => (
              <div
                key={member.number}
                className="bg-black p-8 hover:bg-red-950/10 transition-colors group border border-red-900/10 hover:border-red-500/30"
              >
                {/* Avatar */}
                <div className="mb-5">
                  <div className="w-16 h-16 rounded-full border border-red-500/30 bg-red-950/20 flex items-center justify-center overflow-hidden">
                    {member.avatarSrc ? (
                      <img
                        src={member.avatarSrc}
                        alt={member.avatarAlt ?? member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {member.avatarEmoji}
                      </span>
                    )}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <member.icon className="w-8 h-8 text-red-900/40 group-hover:text-red-500 transition-colors" />
                </div>

                {/* Number */}
                <span className="text-xs font-mono text-red-600 mb-4 block">
                  {member.number}
                </span>

                {/* Name */}
                <h3 className="text-lg font-medium text-white mb-1 uppercase tracking-wide group-hover:text-red-400 transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-red-400/80 leading-relaxed mb-2">
                  {member.role}
                </p>

                {/* Description */}
                <p className="text-sm text-white/40 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
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
