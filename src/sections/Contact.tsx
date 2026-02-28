import { Github, Twitter, Mail, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const contactLinks = [
    {
      name: t('contact.github'),
      handle: 'onizuka-agi-co',
      href: 'https://github.com/onizuka-agi-co',
      icon: Github,
    },
    {
      name: t('contact.twitter'),
      handle: '@hAru_mAki_ch',
      href: 'https://x.com/hAru_mAki_ch',
      icon: Twitter,
    },
    {
      name: t('contact.onizukaRenji'),
      handle: '@Onizuka_Renji',
      href: 'https://x.com/Onizuka_Renji',
      icon: Twitter,
    },
    {
      name: t('contact.email'),
      handle: 'onizuka.renjiii+onizuka-agi@gmail.com',
      href: 'mailto:onizuka.renjiii+onizuka-agi@gmail.com',
      icon: Mail,
    },
  ];

  const positions = [
    {
      title: t('contact.position1Title'),
      location: t('contact.locationRemote'),
      type: t('contact.typeFullTime'),
    },
    {
      title: t('contact.position2Title'),
      location: t('contact.locationRemote'),
      type: t('contact.typeFullTime'),
    },
    {
      title: t('contact.position3Title'),
      location: t('contact.locationRemote'),
      type: t('contact.typeFlexible'),
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-black">
      {/* Vermilion accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Contact Info */}
          <div>
            <span className="section-label border-red-500/30 text-red-400/80 mb-6">{t('contact.label')}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              {t('contact.titlePrefix')} <span className="text-red-600">{t('contact.titleHighlight')}</span>
            </h2>
            <p className="text-base text-white/40 mb-10 max-w-md">
              {t('contact.leftDescription')}
            </p>

            {/* Contact Links */}
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-red-900/20 hover:border-red-500/40 hover:bg-red-950/10 transition-colors group"
                >
                  <link.icon className="w-5 h-5 text-red-900/40 group-hover:text-red-500 transition-colors" />
                  <div className="flex-1">
                    <p className="text-sm text-white/60">{link.name}</p>
                    <p className="text-sm text-white">{link.handle}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-red-500/60 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Open Positions */}
          <div>
            <span className="section-label border-red-500/30 text-red-400/80 mb-6">{t('contact.joinLabel')}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
              {t('contact.hiringPrefix')} <span className="text-red-600">{t('contact.hiringHighlight')}</span>
            </h2>
            <p className="text-base text-white/40 mb-10 max-w-md">
              {t('contact.hiringDescription')}
            </p>

            {/* Position List */}
            <div className="space-y-4">
              {positions.map((position) => (
                <div
                  key={position.title}
                  className="flex items-center justify-between p-4 border border-red-900/20 hover:border-red-500/40 hover:bg-red-950/10 transition-colors cursor-pointer group"
                >
                  <div>
                    <p className="text-sm text-white font-medium mb-1 group-hover:text-red-400 transition-colors">
                      {position.title}
                    </p>
                    <p className="text-xs text-white/40">
                      {position.location} · {position.type}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-red-500/60 transition-colors" />
                </div>
              ))}
            </div>

            {/* Task Management Link */}
            <div className="mt-8 p-4 bg-red-950/10 border border-red-900/20">
              <p className="text-xs text-white/40 mb-2">{t('contact.taskManagement')}</p>
              <a
                href="https://github.com/orgs/onizuka-agi-co/projects/1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white hover:text-red-500 transition-colors"
              >
                {t('contact.viewProject')}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
