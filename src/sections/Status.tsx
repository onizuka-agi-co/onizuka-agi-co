import { BarChart3, Activity, GitBranch, FlaskConical } from 'lucide-react';

const statusItems = [
  {
    label: '自動化レベル',
    value: '半自動',
    subValue: 'Semi-Automatic',
    icon: Activity,
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
  },
  {
    label: 'バージョン',
    value: 'Beta',
    subValue: 'v0.1.0',
    icon: GitBranch,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    label: '運用体制',
    value: '実験中',
    subValue: 'Experimental',
    icon: FlaskConical,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-400/10',
  },
];

export default function Status() {
  return (
    <section className="py-24 sm:py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
            <BarChart3 className="w-3 h-3" />
            Project Status
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            プロジェクト状況
          </h2>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {statusItems.map((item) => (
            <div
              key={item.label}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover-lift text-center"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mx-auto mb-4`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>

              {/* Label */}
              <p className="text-sm text-muted-foreground mb-2">{item.label}</p>

              {/* Value */}
              <p className={`text-2xl font-bold ${item.color} mb-1`}>
                {item.value}
              </p>

              {/* Sub Value */}
              <p className="text-xs text-muted-foreground">{item.subValue}</p>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-card border border-border/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-muted-foreground">自動化進捗</span>
            <span className="text-sm font-medium text-primary">50%</span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-1000"
              style={{ width: '50%' }}
            />
          </div>
          <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
            <span>Manual</span>
            <span>Semi-Auto</span>
            <span>Full-Auto</span>
          </div>
        </div>
      </div>
    </section>
  );
}
