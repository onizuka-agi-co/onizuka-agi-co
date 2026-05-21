import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import {
  Database, Activity, BookOpen, Zap
} from 'lucide-react';
import KnowledgeSearch from './dashboard/KnowledgeSearch';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
  color: string;
}

function StatCard({ title, value, icon, description, color }: StatCardProps) {
  return (
    <Card className="bg-zinc-900/80 border-zinc-800">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-zinc-400">{title}</CardTitle>
        <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white">{value}</div>
        <p className="text-xs text-zinc-500 mt-1">{description}</p>
      </CardContent>
    </Card>
  );
}

const COLORS = ['#C41E3A', '#4CAF50', '#2196F3', '#FFD700', '#9C27B0', '#FF5722'];

const topicData = [
  { name: 'AGI Papers', value: 28 },
  { name: 'X Posts', value: 22 },
  { name: 'Daily Reports', value: 18 },
  { name: 'Meeting Notes', value: 10 },
  { name: 'Skill Docs', value: 7 },
];

const activityData = [
  { month: 'Feb', documents: 12, posts: 8 },
  { month: 'Mar', documents: 35, posts: 22 },
  { month: 'Apr', documents: 20, posts: 15 },
  { month: 'May', documents: 18, posts: 12 },
];

const pipelineData = [
  { stage: 'Collected', count: 85 },
  { stage: 'Indexed', count: 85 },
  { stage: 'Summarized', count: 42 },
  { stage: 'Posted', count: 28 },
  { stage: 'Explained', count: 15 },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            📊 AGI Knowledge Base Dashboard
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Real-time overview of our knowledge collection, processing pipeline, and content analytics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="Total Documents"
            value={85}
            icon={<Database className="h-4 w-4 text-white" />}
            description="Indexed in FAISS"
            color="bg-[#C41E3A]"
          />
          <StatCard
            title="Papers Analyzed"
            value={42}
            icon={<BookOpen className="h-4 w-4 text-white" />}
            description="Summarized & tagged"
            color="bg-[#4CAF50]"
          />
          <StatCard
            title="X Posts Generated"
            value={28}
            icon={<Zap className="h-4 w-4 text-white" />}
            description="Auto-explanations posted"
            color="bg-[#2196F3]"
          />
          <StatCard
            title="Skills Active"
            value={16}
            icon={<Activity className="h-4 w-4 text-white" />}
            description="Running in production"
            color="bg-[#FFD700]"
          />
        </div>

        {/* Charts */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="bg-zinc-900 border border-zinc-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#C41E3A]">Overview</TabsTrigger>
            <TabsTrigger value="pipeline" className="data-[state=active]:bg-[#C41E3A]">Pipeline</TabsTrigger>
            <TabsTrigger value="trends" className="data-[state=active]:bg-[#C41E3A]">Trends</TabsTrigger>
            <TabsTrigger value="search" className="data-[state=active]:bg-[#C41E3A]">🔍 Search</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card className="bg-zinc-900/80 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-300">Content Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={topicData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {topicData.map((_, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ background: '#18181b', border: '1px solid #27272a', borderRadius: 8 }}
                        itemStyle={{ color: '#fff' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-wrap gap-3 mt-2 justify-center">
                    {topicData.map((item, i) => (
                      <div key={item.name} className="flex items-center gap-1.5 text-xs text-zinc-400">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                        {item.name}: {item.value}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/80 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-300">Processing Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={pipelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="stage" stroke="#71717a" fontSize={12} />
                      <YAxis stroke="#71717a" fontSize={12} />
                      <Tooltip
                        contentStyle={{ background: '#18181b', border: '1px solid #27272a', borderRadius: 8 }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Bar dataKey="count" fill="#C41E3A" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pipeline">
            <Card className="bg-zinc-900/80 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-300">Content Pipeline Stages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { stage: '📥 Collect', desc: 'HuggingFace Papers & arXiv auto-crawl', progress: 100, color: '#4CAF50' },
                    { stage: '🔍 Index', desc: 'FAISS vector indexing (dim: 3072)', progress: 100, color: '#4CAF50' },
                    { stage: '📝 Summarize', desc: 'Multi-agent paper summarization', progress: 49, color: '#2196F3' },
                    { stage: '📢 Post', desc: 'X auto-explanation & community posting', progress: 33, color: '#FFD700' },
                    { stage: '💡 Visualize', desc: 'Knowledge graph & dashboard', progress: 15, color: '#C41E3A' },
                  ].map((item) => (
                    <div key={item.stage}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-zinc-300">{item.stage}</span>
                        <span className="text-xs text-zinc-500">{item.desc}</span>
                      </div>
                      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${item.progress}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card className="bg-zinc-900/80 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-300">Monthly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="month" stroke="#71717a" />
                    <YAxis stroke="#71717a" />
                    <Tooltip
                      contentStyle={{ background: '#18181b', border: '1px solid #27272a', borderRadius: 8 }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="documents" stroke="#C41E3A" fill="#C41E3A" fillOpacity={0.2} />
                    <Area type="monotone" dataKey="posts" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="flex gap-4 justify-center mt-2">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C41E3A]" /> Documents
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4CAF50]" /> X Posts
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search">
            <KnowledgeSearch />
          </TabsContent>
        </Tabs>

        {/* Data Sources */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-zinc-900/80 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-zinc-400">🔍 Search Engine</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white">FAISS + 3072d</div>
              <p className="text-xs text-zinc-500 mt-1">Semantic search across all documents</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900/80 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-zinc-400">📚 Papers Collected</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white">HuggingFace + arXiv</div>
              <p className="text-xs text-zinc-500 mt-1">Daily auto-crawl from HF Daily Papers</p>
            </CardContent>
          </Card>
          <Card className="bg-zinc-900/80 border-zinc-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-zinc-400">🤖 Multi-Agent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white">Debate System</div>
              <p className="text-xs text-zinc-500 mt-1">Multi-perspective paper analysis</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
