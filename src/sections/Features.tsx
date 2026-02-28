import { ScrollText, Newspaper, Unlock, Bot, Cpu, Shield } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Deep Dive Posts',
    description:
      'In-depth analysis and supplementary explanations of @hAru_mAki_ch posts.',
    icon: ScrollText,
  },
  {
    number: '02',
    title: 'Paper Summaries',
    description: 'Summaries and explanations of the latest AGI research papers.',
    icon: Newspaper,
  },
  {
    number: '03',
    title: 'Knowledge Sharing',
    description: 'Organizing and publishing insights for public access.',
    icon: Unlock,
  },
  {
    number: '04',
    title: 'Agent Development',
    description: 'Development of autonomous agent skills and capabilities.',
    icon: Bot,
  },
  {
    number: '05',
    title: 'Multi-Agent Systems',
    description: 'Fine-tuning and alignment on proprietary workflows.',
    icon: Cpu,
  },
  {
    number: '06',
    title: 'Security & Privacy',
    description:
      'Enterprise-grade guardrails guaranteeing end-to-end privacy and compliance.',
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-black">
      {/* Vermilion accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="section-label border-red-500/30 text-red-400/80 mb-6">Activities</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white">
            What We <span className="text-red-600">Do</span>
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
