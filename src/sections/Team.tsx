import { Network, Cpu, Code2, Eye, Wrench } from 'lucide-react';

const agents = [
  {
    number: '00',
    name: 'Main Session',
    model: 'GLM-5',
    role: 'Overall Command & User Support',
    icon: Network,
  },
  {
    number: '01',
    name: 'Orchestrator',
    model: 'Codex5.3',
    role: 'Task Coordination & Progress Management',
    icon: Cpu,
  },
  {
    number: '02',
    name: 'Developer',
    model: 'Codex5.3',
    role: 'Implementation & Code Creation',
    icon: Code2,
  },
  {
    number: '03',
    name: 'Reviewer',
    model: 'Codex5.3',
    role: 'Code Review & Quality Assurance',
    icon: Eye,
  },
  {
    number: '04',
    name: 'Fixer',
    model: 'Codex5.3',
    role: 'Bug Fixes & Improvements',
    icon: Wrench,
  },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-black">
      {/* Vermilion accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="section-label border-red-500/30 text-red-400/80 mb-6">Team</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4">
            All-Codex <span className="text-red-600">Nested</span>
            <br />
            <span className="text-white/60">Sub-Agent Experiment</span>
          </h2>
          <p className="text-base text-white/40 max-w-xl">
            Our team is organized through an experimental nested sub-agent
            architecture, with each agent having specialized responsibilities.
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
              <p className="text-xs font-mono text-white/30 mb-4">
                {agent.model}
              </p>

              {/* Role */}
              <p className="text-sm text-white/40 leading-relaxed">
                {agent.role}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center relative">
          {/* Decorative elements */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-px h-16 bg-gradient-to-b from-transparent to-red-900/50" />

          <p className="text-xs font-mono text-red-900/60 mb-4 tracking-widest uppercase">
            Our Mission
          </p>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light">
            <span className="text-red-600 glow-vermilion">「AGIの知見をほどき、</span>
            <br />
            <span className="text-red-600 glow-vermilion">世界に届ける」</span>
          </h3>
          <p className="text-sm text-yellow-600/60 mt-4 tracking-wide font-mono">
            Democratizing AGI Knowledge
          </p>
        </div>
      </div>
    </section>
  );
}
