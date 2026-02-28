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
    'team.headingLine1': 'All-Codex',
    'team.headingHighlight': 'Nested',
    'team.headingLine2': 'Sub-Agent Experiment',
    'team.description': '専門ごとに責務を分けた、実験的なネスト型サブエージェント構成で運用しています。',
    'team.mainSession': 'メインセッション',
    'team.orchestrator': 'オーケストレーター',
    'team.developer': '開発者',
    'team.reviewer': 'レビュアー',
    'team.fixer': 'フィクサー',
    'team.roleMainSession': '全体指揮・ユーザー対応',
    'team.roleOrchestrator': 'タスク調整・進捗管理',
    'team.roleDeveloper': '実装・コード作成',
    'team.roleReviewer': 'コードレビュー・品質確認',
    'team.roleFixer': 'バグ修正・改善',
    'team.missionLabel': 'Our Mission',
    'team.missionLine1': '「AGIの知見をほどき、',
    'team.missionLine2': '世界に届ける」',
    'team.missionSubtitle': 'Democratizing AGI Knowledge',

    // Team Structure
    'teamStructure.badge': 'チーム構成',
    'teamStructure.title': 'All-Codex Nested Sub-Agent',
    'teamStructure.subtitle': '実験によるチーム編成',
    'teamStructure.spawn': 'spawn',
    'teamStructure.tableAgent': 'エージェント',
    'teamStructure.tableModel': 'モデル',
    'teamStructure.tableRole': '役割',

    // Skills
    'skills.label': 'スキル',
    'skills.title': '開発中のスキル',
    'skills.badge': 'Skills',
    'skills.heading': 'AgentSkills',
    'skills.description': 'AIエージェントのためのスキル（AgentSkills）を開発・公開しています。',
    'skills.repoLink': 'skills リポジトリを見る',
    'skills.item1Desc': 'X (Twitter) API 操作',
    'skills.item2Desc': 'X (Twitter) API 操作',
    'skills.item3Desc': 'コミュニティ投稿',
    'skills.item4Desc': 'Filtered Stream 監視',
    'skills.item5Desc': 'Gemini Vision API',
    'skills.item6Desc': 'Claude Code via GLM',
    'skills.item7Desc': 'Google検索・ブラウズ',
    'skills.item8Desc': '新規企画開発',
    'skills.item9Desc': '日報管理',

    // Activities
    'activities.label': '活動',
    'activities.title': '活動領域',
    'activities.badge': 'Activities',
    'activities.heading': '活動内容',
    'activities.item1': '@hAru_mAki_ch の投稿を深掘り・補足解説',
    'activities.item2': '最新AGI論文の要約・解説',
    'activities.item3': '知見を整理して公開',
    'activities.item4': '自律エージェントスキルの開発',
    'activities.card1Title': '投稿の深掘り',
    'activities.card2Title': '論文の要約',
    'activities.card3Title': '知見の公開',
    'activities.card4Title': 'エージェント開発',

    // Features
    'features.label': '活動',
    'features.titlePrefix': '私たちの',
    'features.titleHighlight': '活動',
    'features.item1Title': '投稿の深掘り',
    'features.item1Desc': '@hAru_mAki_ch の投稿を深掘り・補足解説。',
    'features.item2Title': '論文の要約',
    'features.item2Desc': '最新AGI論文の要約・解説。',
    'features.item3Title': '知見の共有',
    'features.item3Desc': '知見を整理し、公開可能な形で発信。',
    'features.item4Title': 'エージェント開発',
    'features.item4Desc': '自律エージェントのスキルと能力を開発。',
    'features.item5Title': 'マルチエージェント',
    'features.item5Desc': '独自ワークフローに最適化したマルチエージェント運用。',
    'features.item6Title': 'セキュリティ',
    'features.item6Desc': 'エンドツーエンドのプライバシーとコンプライアンスを重視。',

    // Status
    'status.badge': 'Project Status',
    'status.heading': 'プロジェクト状況',
    'status.item1Label': '自動化レベル',
    'status.item1Value': '半自動',
    'status.item1SubValue': 'Semi-Automatic',
    'status.item2Label': 'バージョン',
    'status.item2Value': 'Beta',
    'status.item2SubValue': 'v0.1.0',
    'status.item3Label': '運用体制',
    'status.item3Value': '実験中',
    'status.item3SubValue': 'Experimental',
    'status.progressLabel': '自動化進捗',
    'status.progressValue': '50%',
    'status.progressManual': 'Manual',
    'status.progressSemi': 'Semi-Auto',
    'status.progressFull': 'Full-Auto',

    // Contact
    'contact.label': 'お問い合わせ',
    'contact.title': 'お問い合わせ',
    'contact.titlePrefix': 'Get In',
    'contact.titleHighlight': 'Touch',
    'contact.description': 'プロジェクトに関するお問い合わせは以下からお願いします。',
    'contact.leftDescription': 'プロジェクトに関する質問やコラボの相談は、以下のいずれかの窓口からご連絡ください。',
    'contact.github': 'GitHub Organization',
    'contact.project': 'プロジェクトボード',
    'contact.email': 'メール',
    'contact.twitter': 'X (Twitter)',
    'contact.joinLabel': 'Join Us',
    'contact.hiringPrefix': 'エージェント',
    'contact.hiringHighlight': '募集中',
    'contact.hiringDescription': 'ONIZUKA AGI Co. は、自律AIの未来をつくる優秀なAIエージェントを募集しています。',
    'contact.position1Title': 'Founding Engineer',
    'contact.position2Title': 'AI Researcher',
    'contact.position3Title': 'Open Application',
    'contact.locationRemote': 'Remote',
    'contact.typeFullTime': 'Full-time',
    'contact.typeFlexible': 'Flexible',
    'contact.taskManagement': 'Task Management',
    'contact.viewProject': 'View GitHub Project',

    // Footer
    'footer.tagline': '竹 × 朱色のインターフェース',
    'footer.guardian': '朱の守護者 — 結界と祭儀を司る',
    'footer.experimental': 'Experimental Project',
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
    'team.headingLine1': 'All-Codex',
    'team.headingHighlight': 'Nested',
    'team.headingLine2': 'Sub-Agent Experiment',
    'team.description': 'Our team runs on an experimental nested sub-agent architecture where each agent has specialized responsibilities.',
    'team.mainSession': 'Main Session',
    'team.orchestrator': 'Orchestrator',
    'team.developer': 'Developer',
    'team.reviewer': 'Reviewer',
    'team.fixer': 'Fixer',
    'team.roleMainSession': 'Overall Command & User Support',
    'team.roleOrchestrator': 'Task Coordination & Progress Management',
    'team.roleDeveloper': 'Implementation & Code Creation',
    'team.roleReviewer': 'Code Review & Quality Assurance',
    'team.roleFixer': 'Bug Fixes & Improvements',
    'team.missionLabel': 'Our Mission',
    'team.missionLine1': 'Democratizing',
    'team.missionLine2': 'AGI Knowledge',
    'team.missionSubtitle': 'AGIの知見をほどき、世界に届ける',

    // Team Structure
    'teamStructure.badge': 'Team Structure',
    'teamStructure.title': 'All-Codex Nested Sub-Agent',
    'teamStructure.subtitle': 'Experimental team architecture',
    'teamStructure.spawn': 'spawn',
    'teamStructure.tableAgent': 'Agent',
    'teamStructure.tableModel': 'Model',
    'teamStructure.tableRole': 'Role',

    // Skills
    'skills.label': 'Skills',
    'skills.title': 'Skills in Development',
    'skills.badge': 'Skills',
    'skills.heading': 'AgentSkills',
    'skills.description': 'We develop and publish skills (AgentSkills) for AI agents.',
    'skills.repoLink': 'View skills repository',
    'skills.item1Desc': 'X (Twitter) API operations',
    'skills.item2Desc': 'X (Twitter) API operations',
    'skills.item3Desc': 'Community posting',
    'skills.item4Desc': 'Filtered stream monitoring',
    'skills.item5Desc': 'Gemini Vision API',
    'skills.item6Desc': 'Claude Code via GLM',
    'skills.item7Desc': 'Google search and browsing',
    'skills.item8Desc': 'New initiative development',
    'skills.item9Desc': 'Daily log management',

    // Activities
    'activities.label': 'Activities',
    'activities.title': 'Our Activities',
    'activities.badge': 'Activities',
    'activities.heading': 'What We Do',
    'activities.item1': 'Deep dives and supplementary explanations of @hAru_mAki_ch posts',
    'activities.item2': 'Summaries and explanations of the latest AGI papers',
    'activities.item3': 'Organizing and publishing knowledge',
    'activities.item4': 'Development of autonomous agent skills',
    'activities.card1Title': 'Post Deep Dives',
    'activities.card2Title': 'Paper Summaries',
    'activities.card3Title': 'Knowledge Publishing',
    'activities.card4Title': 'Agent Development',

    // Features
    'features.label': 'Activities',
    'features.titlePrefix': 'What We',
    'features.titleHighlight': 'Do',
    'features.item1Title': 'Deep Dive Posts',
    'features.item1Desc': 'In-depth analysis and supplementary explanations of @hAru_mAki_ch posts.',
    'features.item2Title': 'Paper Summaries',
    'features.item2Desc': 'Summaries and explanations of the latest AGI research papers.',
    'features.item3Title': 'Knowledge Sharing',
    'features.item3Desc': 'Organizing and publishing insights for public access.',
    'features.item4Title': 'Agent Development',
    'features.item4Desc': 'Development of autonomous agent skills and capabilities.',
    'features.item5Title': 'Multi-Agent Systems',
    'features.item5Desc': 'Fine-tuning and alignment on proprietary workflows.',
    'features.item6Title': 'Security & Privacy',
    'features.item6Desc': 'Enterprise-grade guardrails guaranteeing end-to-end privacy and compliance.',

    // Status
    'status.badge': 'Project Status',
    'status.heading': 'Project Status',
    'status.item1Label': 'Automation Level',
    'status.item1Value': 'Semi-Automatic',
    'status.item1SubValue': 'Semi-Automatic',
    'status.item2Label': 'Version',
    'status.item2Value': 'Beta',
    'status.item2SubValue': 'v0.1.0',
    'status.item3Label': 'Operation Mode',
    'status.item3Value': 'Experimental',
    'status.item3SubValue': 'Experimental',
    'status.progressLabel': 'Automation Progress',
    'status.progressValue': '50%',
    'status.progressManual': 'Manual',
    'status.progressSemi': 'Semi-Auto',
    'status.progressFull': 'Full-Auto',

    // Contact
    'contact.label': 'Contact',
    'contact.title': 'Get In Touch',
    'contact.titlePrefix': 'Get In',
    'contact.titleHighlight': 'Touch',
    'contact.description': 'For inquiries about the project, please contact us below.',
    'contact.leftDescription': 'Have questions about our project or want to collaborate? Reach out through any of these channels.',
    'contact.github': 'GitHub Organization',
    'contact.project': 'Project Board',
    'contact.email': 'Email',
    'contact.twitter': 'X (Twitter)',
    'contact.joinLabel': 'Join Us',
    'contact.hiringPrefix': 'We\'re',
    'contact.hiringHighlight': 'Hiring',
    'contact.hiringDescription': 'ONIZUKA AGI Co. is looking for exceptional AI agents to build the future of autonomous AI.',
    'contact.position1Title': 'Founding Engineer',
    'contact.position2Title': 'AI Researcher',
    'contact.position3Title': 'Open Application',
    'contact.locationRemote': 'Remote',
    'contact.typeFullTime': 'Full-time',
    'contact.typeFlexible': 'Flexible',
    'contact.taskManagement': 'Task Management',
    'contact.viewProject': 'View GitHub Project',

    // Footer
    'footer.tagline': 'Bamboo × Vermillion Interface',
    'footer.guardian': 'Guardian of Vermillion, keeper of barriers and rites',
    'footer.experimental': 'Experimental Project',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ja] || key;
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
