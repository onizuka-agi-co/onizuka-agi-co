import { Network, Cpu, Code2, Eye, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function TeamStructure() {
  const { t } = useLanguage();

  const agents = [
    {
      name: t('team.mainSession'),
      model: 'GLM-5',
      role: t('team.roleMainSession'),
      level: 0,
      color: 'from-blue-500/20 to-blue-600/20',
      borderColor: 'border-blue-500/30',
      iconColor: 'text-blue-400',
    },
    {
      name: t('team.orchestrator'),
      model: 'Codex5.3',
      role: t('team.roleOrchestrator'),
      level: 1,
      color: 'from-primary/20 to-red-600/20',
      borderColor: 'border-primary/30',
      iconColor: 'text-primary',
    },
    {
      name: t('team.developer'),
      model: 'Codex5.3',
      role: t('team.roleDeveloper'),
      level: 2,
      color: 'from-emerald-500/20 to-emerald-600/20',
      borderColor: 'border-emerald-500/30',
      iconColor: 'text-emerald-400',
    },
    {
      name: t('team.reviewer'),
      model: 'Codex5.3',
      role: t('team.roleReviewer'),
      level: 2,
      color: 'from-amber-500/20 to-amber-600/20',
      borderColor: 'border-amber-500/30',
      iconColor: 'text-amber-400',
    },
    {
      name: t('team.fixer'),
      model: 'Codex5.3',
      role: t('team.roleFixer'),
      level: 2,
      color: 'from-purple-500/20 to-purple-600/20',
      borderColor: 'border-purple-500/30',
      iconColor: 'text-purple-400',
    },
  ];

  return (
    <section id="team" className="py-24 sm:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <Network className="w-3 h-3" />
            {t('teamStructure.badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('teamStructure.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('teamStructure.subtitle')}
          </p>
        </div>

        {/* Team Structure Diagram */}
        <div className="relative">
          {/* Connection Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(220, 38, 38, 0.3)" />
                <stop offset="100%" stopColor="rgba(220, 38, 38, 0.1)" />
              </linearGradient>
            </defs>
            {/* Vertical line from Main to Orchestrator */}
            <line
              x1="50%"
              y1="80"
              x2="50%"
              y2="160"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            {/* Horizontal line from Orchestrator */}
            <line
              x1="50%"
              y1="160"
              x2="50%"
              y2="160"
              stroke="url(#lineGradient)"
              strokeWidth="2"
            />
            {/* Lines to sub-agents */}
            <line
              x1="50%"
              y1="160"
              x2="20%"
              y2="240"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="50%"
              y1="160"
              x2="50%"
              y2="240"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
            <line
              x1="50%"
              y1="160"
              x2="80%"
              y2="240"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Agent Cards */}
          <div className="relative z-10 space-y-8">
            {/* Main Session */}
            <div className="flex justify-center">
              <div
                className={`w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br ${agents[0].color} border ${agents[0].borderColor} backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center">
                    <Network className={`w-6 h-6 ${agents[0].iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{agents[0].name}</h3>
                    <p className="text-xs text-muted-foreground">{agents[0].model}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{agents[0].role}</p>
              </div>
            </div>

            {/* Orchestrator */}
            <div className="flex justify-center">
              <div
                className={`w-full max-w-sm p-6 rounded-2xl bg-gradient-to-br ${agents[1].color} border ${agents[1].borderColor} backdrop-blur-sm`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center">
                    <Cpu className={`w-6 h-6 ${agents[1].iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{agents[1].name}</h3>
                    <p className="text-xs text-muted-foreground">{agents[1].model}</p>
                  </div>
                  <span className="ml-auto px-2 py-1 text-xs bg-primary/20 text-primary rounded-full">
                    {t('teamStructure.spawn')}
                  </span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">{agents[1].role}</p>
              </div>
            </div>

            {/* Sub Agents */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Developer */}
              <div
                className={`p-5 rounded-2xl bg-gradient-to-br ${agents[2].color} border ${agents[2].borderColor} backdrop-blur-sm hover-lift`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
                    <Code2 className={`w-5 h-5 ${agents[2].iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{agents[2].name}</h4>
                    <p className="text-xs text-muted-foreground">{agents[2].model}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{agents[2].role}</p>
              </div>

              {/* Reviewer */}
              <div
                className={`p-5 rounded-2xl bg-gradient-to-br ${agents[3].color} border ${agents[3].borderColor} backdrop-blur-sm hover-lift`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
                    <Eye className={`w-5 h-5 ${agents[3].iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{agents[3].name}</h4>
                    <p className="text-xs text-muted-foreground">{agents[3].model}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{agents[3].role}</p>
              </div>

              {/* Fixer */}
              <div
                className={`p-5 rounded-2xl bg-gradient-to-br ${agents[4].color} border ${agents[4].borderColor} backdrop-blur-sm hover-lift`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center">
                    <Wrench className={`w-5 h-5 ${agents[4].iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{agents[4].name}</h4>
                    <p className="text-xs text-muted-foreground">{agents[4].model}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{agents[4].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Table */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border/50">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                  {t('teamStructure.tableAgent')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                  {t('teamStructure.tableModel')}
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase">
                  {t('teamStructure.tableRole')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {agents.map((agent) => (
                <tr key={agent.name} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 text-sm font-medium">{agent.name}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{agent.model}</td>
                  <td className="px-4 py-3 text-sm text-muted-foreground">{agent.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
