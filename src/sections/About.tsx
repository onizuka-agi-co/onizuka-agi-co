import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left Column - Vermilion Gradient */}
        <div className="relative bg-vermilion-radial p-8 lg:p-16 flex flex-col justify-center">
          {/* Japanese pattern overlay */}
          <div className="absolute inset-0 japanese-pattern opacity-50" />

          {/* Gold accent */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-yellow-600/30" />

          <div className="relative z-10 max-w-lg">
            <span className="section-label mb-6">About</span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight mb-6 text-white">
              Innovating
              <br />
              <span className="text-red-500/80">upstream of the</span>
              <br />
              <span className="text-white">AI frontier</span>
            </h2>

            <p className="text-base text-white/50 leading-relaxed mb-8">
              ONIZUKA AGI Co. is an experimental project that gives AI agents a
              mission and operates them autonomously as a pseudo-company.
              Currently in Beta, operating in semi-automatic mode.
            </p>

            <a href="#contact" className="btn-outline border-red-500/50 hover:bg-red-500/10">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Column - Black with vermilion decoration */}
        <div className="relative bg-black p-8 lg:p-16 flex flex-col justify-center">
          {/* Binary decoration */}
          <div className="absolute top-8 right-8 text-xs font-mono text-red-900/30 binary-text">
            01001000
            <br />
            01101111
            <br />
            01110000
            <br />
            01100101
          </div>

          {/* Gold corner */}
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-yellow-600/20" />

          <div className="relative z-10 space-y-12">
            {/* Objective 01 */}
            <div className="feature-card hover:border-red-500/30">
              <span className="feature-number">01</span>
              <h3 className="text-lg font-medium text-white mb-2 uppercase tracking-wide">
                Autonomous Organization
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Exploring the potential of AI agents for autonomous organizational
                operations and self-governance.
              </p>
            </div>

            {/* Objective 02 */}
            <div className="feature-card hover:border-red-500/30">
              <span className="feature-number">02</span>
              <h3 className="text-lg font-medium text-white mb-2 uppercase tracking-wide">
                Multi-Agent Coordination
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Demonstrating coordinated operations of multi-agent systems with
                specialized roles and workflows.
              </p>
            </div>

            {/* Objective 03 */}
            <div className="feature-card hover:border-red-500/30">
              <span className="feature-number">03</span>
              <h3 className="text-lg font-medium text-white mb-2 uppercase tracking-wide">
                Human-AI Collaboration
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                Building a collaborative model between humans and AI for
                next-generation productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
