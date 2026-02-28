import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ja: {
    // Navigation
    'nav.about': '概要',
    'nav.mission': 'ミッション',
    'nav.team': 'チーム',
    'nav.skills': 'スキル',
    'nav.contact': 'お問い合わせ',
    
    // Hero
    'hero.label': 'イントロ',
    'hero.title': 'ONIZUKA AGI Co.',
    'hero.subtitle': 'Agent AGI Co. ONIZUKA',
    'hero.description': 'AIにミッションを与えて疑似的な会社を自律的に運用させる実験的プロジェクト',
    'hero.cta1': '参加する',
    'hero.cta2': 'お問い合わせ',
    
    // Mission
    'mission.label': 'ミッション',
    'mission.title': 'AGIの知見をほどき、世界に届ける',
    'mission.description': '実験的なAI組織運用を通して、実践知を体系化し、共有可能な形で発信する。',
    
    // About
    'about.label': '概要',
    'about.title': 'AIフロンティアの上流で\nイノベーションを',
    'about.description': 'ONIZUKA AGI Co.は、AIエージェントにミッションを与え、擬似的な会社として自律的に運用させる実験的プロジェクトです。現在ベータ版で、半自動モードで運用中です。',
    'about.status': 'ベータ版 / 半自動',
    'about.objective1Title': '自律的組織',
    'about.objective1Desc': 'AIエージェントによる自律的な組織運用と自己統治の可能性を探る。',
    'about.objective2Title': 'マルチエージェント連携',
    'about.objective2Desc': '専門的な役割とワークフローを持つマルチエージェントシステムの協調動作を実証。',
    'about.objective3Title': '人間-AI協働',
    'about.objective3Desc': '次世代の生産性を実現するための人間とAIの協働モデルを構築。',
    
    // Team
    'team.label': 'チーム',
    'team.title': 'チーム構成 (All-Codex Nested Sub-Agent)',
    'team.mainSession': 'メインセッション',
    'team.orchestrator': 'オーケストレーター',
    'team.developer': '開発者',
    'team.reviewer': 'レビュアー',
    'team.fixer': 'フィクサー',
    
    // Skills
    'skills.label': 'スキル',
    'skills.title': '開発中のスキル',
    'skills.description': 'AIエージェントのためのスキル（AgentSkills）を開発・公開しています。',
    
    // Activities
    'activities.label': '活動',
    'activities.title': '活動領域',
    'activities.item1': '@hAru_mAki_ch の投稿を深掘り・補足解説',
    'activities.item2': '最新AGI論文の要約・解説',
    'activities.item3': '知見を整理して公開',
    
    // Contact
    'contact.label': 'お問い合わせ',
    'contact.title': 'お問い合わせ',
    'contact.description': 'プロジェクトに関するお問い合わせは以下からお願いします。',
    'contact.github': 'GitHub Organization',
    'contact.project': 'プロジェクトボード',
    'contact.email': 'メール',
    
    // Footer
    'footer.tagline': '竹 × 朱色のインターフェース',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.mission': 'Mission',
    'nav.team': 'Team',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.label': 'Intro',
    'hero.title': 'ONIZUKA AGI Co.',
    'hero.subtitle': 'Agent AGI Co. ONIZUKA',
    'hero.description': 'An experimental project where AI agents operate autonomously as a pseudo-company, exploring the frontier of human-AI collaboration.',
    'hero.cta1': 'Join Us',
    'hero.cta2': 'Contact Us',
    
    // Mission
    'mission.label': 'Mission',
    'mission.title': 'Democratizing AGI Knowledge',
    'mission.description': 'Systematizing practical knowledge through experimental AI organizational operations and sharing it in accessible forms.',
    
    // About
    'about.label': 'About',
    'about.title': 'Innovating upstream of the AI frontier',
    'about.description': 'ONIZUKA AGI Co. is an experimental project that gives AI agents a mission and operates them autonomously as a pseudo-company. Currently in Beta, operating in semi-automatic mode.',
    'about.status': 'Beta / Semi-Automatic',
    'about.objective1Title': 'Autonomous Organization',
    'about.objective1Desc': 'Exploring the potential of AI agents for autonomous organizational operations and self-governance.',
    'about.objective2Title': 'Multi-Agent Coordination',
    'about.objective2Desc': 'Demonstrating coordinated operations of multi-agent systems with specialized roles and workflows.',
    'about.objective3Title': 'Human-AI Collaboration',
    'about.objective3Desc': 'Building a collaborative model between humans and AI for next-generation productivity.',
    
    // Team
    'team.label': 'Team',
    'team.title': 'Team Structure (All-Codex Nested Sub-Agent)',
    'team.mainSession': 'Main Session',
    'team.orchestrator': 'Orchestrator',
    'team.developer': 'Developer',
    'team.reviewer': 'Reviewer',
    'team.fixer': 'Fixer',
    
    // Skills
    'skills.label': 'Skills',
    'skills.title': 'Skills in Development',
    'skills.description': 'We develop and publish skills (AgentSkills) for AI agents.',
    
    // Activities
    'activities.label': 'Activities',
    'activities.title': 'Our Activities',
    'activities.item1': 'Deep dives and supplementary explanations of @hAru_mAki_ch posts',
    'activities.item2': 'Summaries and explanations of the latest AGI papers',
    'activities.item3': 'Organizing and publishing knowledge',
    
    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Get In Touch',
    'contact.description': 'For inquiries about the project, please contact us below.',
    'contact.github': 'GitHub Organization',
    'contact.project': 'Project Board',
    'contact.email': 'Email',
    
    // Footer
    'footer.tagline': 'Bamboo × Vermillion Interface',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ja']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
