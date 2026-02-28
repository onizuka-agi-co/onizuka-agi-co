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
    'mission.description': 'AI組織運用の実験を通じて実践知を体系化し、誰もが活用できる知として社会にひらく。',

    // About
    'about.label': '概要',
    'about.title': 'AIフロンティアの最前線で\nイノベーションを形にする',
    'about.description': 'ONIZUKA AGI Co.は、AIエージェントにミッションを与え、擬似的な会社として自律的に運用させる実験的プロジェクトです。現在ベータ版で、半自動モードで運用中です。',
    'about.status': 'ベータ版 / 半自動',
    'about.objective1Title': '自律的組織',
    'about.objective1Desc': 'AIエージェントが自律的に組織を運営し、自己統治する可能性を探究します。',
    'about.objective2Title': 'マルチエージェント連携',
    'about.objective2Desc': '専門役割と明確なワークフローを備えたマルチエージェントの協調動作を検証します。',
    'about.objective3Title': '人間-AI協働',
    'about.objective3Desc': '次世代の生産性を実現する、人間とAIの協働モデルを設計・実装します。',

    // Team
    'team.label': 'チーム',
    'team.membersLabel': 'チームメンバー',
    'team.agentsLabel': 'AIサブエージェント',
    'team.title': 'チームメンバー',
    'team.headingLine1': 'Team',
    'team.headingHighlight': 'Members',
    'team.headingLine2': 'ONIZUKA AGI Co.',
    'team.description': 'ONIZUKA AGI Co.の実際のチームメンバーです。AIエージェント構成は別セクションで紹介しています。',
    'team.renji': 'Renji ONIZUKA',
    'team.mainSession': 'メインセッション',
    'team.orchestrator': 'オーケストレーター',
    'team.developer': '開発者',
    'team.reviewer': 'レビュアー',
    'team.fixer': 'フィクサー',
    'team.tuzuri': 'TUZURI',
    'team.notificationManager': '通知担当',
    'team.akari': 'AKARI',
    'team.roleMainSession': '全体指揮・ユーザー対応',
    'team.roleRenji': 'CEO',
    'team.roleOrchestrator': 'タスク調整・進捗管理',
    'team.roleDeveloper': '実装・コード作成',
    'team.roleReviewer': 'コードレビュー・品質確認',
    'team.roleFixer': 'バグ修正・改善',
    'team.roleTuzuri': 'ペット（Pet）',
    'team.roleNotificationManager': '通知担当',
    'team.roleAkari': '秘書エージェント（Secretary Agent）',
    'team.memberDescMainSession': '全体統括・ユーザー連携を担当。',
    'team.memberDescRenji': 'CEOです。基本的には全業務を担当します。',
    'team.memberDescOrchestrator': 'タスク設計と進行管理を担当。',
    'team.memberDescDeveloper': '実装と機能開発を担当。',
    'team.memberDescReviewer': 'レビューと品質保証を担当。',
    'team.memberDescFixer': '不具合修正と改善を担当。',
    'team.memberDescTuzuri': 'GithubやXについての通知をやってもらってます。ONIZUKA AGI Co.の癒し担当。',
    'team.memberDescNotificationManager': 'GitHubやXの通知を監視し、重要な更新をチームに共有。',
    'team.memberDescAkari': 'エージェントのための秘書エージェントです。ONIZUKA CEOをサポートします。',
    'team.missionLabel': 'Our Mission',
    'team.missionLine1': '「AGIの知見をほどき、',
    'team.missionLine2': '世界に届ける」',
    'team.missionSubtitle': 'Democratizing AGI Knowledge',

    // Team Structure
    'teamStructure.badge': 'チーム構成',
    'teamStructure.title': 'AIエージェント / チーム構成',
    'teamStructure.subtitle': 'タスク実行を担う5つのAIエージェント',
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
    'features.item1Desc': '@hAru_mAki_ch の投稿を深掘りし、背景と論点をわかりやすく補足。',
    'features.item2Title': '論文の要約',
    'features.item2Desc': '最新のAGI論文を、要点と実装示唆に分けて解説。',
    'features.item3Title': '知見の共有',
    'features.item3Desc': '得られた知見を体系化し、再利用可能な形で公開。',
    'features.item4Title': 'エージェント開発',
    'features.item4Desc': '自律エージェントのスキルセットと実運用能力を継続的に強化。',
    'features.item5Title': 'マルチエージェント',
    'features.item5Desc': '独自ワークフローに最適化したマルチエージェント体制を設計・運用。',
    'features.item6Title': 'セキュリティ',
    'features.item6Desc': 'エンドツーエンドでプライバシーとコンプライアンスを担保。',

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
    'contact.titlePrefix': 'お気軽に',
    'contact.titleHighlight': 'ご連絡ください',
    'contact.description': 'プロジェクトに関するお問い合わせは、以下の窓口より受け付けています。',
    'contact.leftDescription': 'プロジェクトへのご質問や協業のご相談は、以下の窓口からお気軽にご連絡ください。',
    'contact.github': 'GitHub組織',
    'contact.project': 'プロジェクトボード',
    'contact.email': 'メール',
    'contact.twitter': 'X（Twitter）',
    'contact.onizukaRenji': '鬼塚蓮司',
    'contact.joinLabel': '採用情報',
    'contact.hiringPrefix': 'エージェント',
    'contact.hiringHighlight': '募集',
    'contact.hiringDescription': 'ONIZUKA AGI Co. は、自律AIの未来をともに切り拓くAIエージェントを募集しています。',
    'contact.position1Title': '創業エンジニア',
    'contact.position2Title': 'AIリサーチャー',
    'contact.position3Title': 'オープンポジション',
    'contact.locationRemote': 'リモート',
    'contact.typeFullTime': 'フルタイム',
    'contact.typeFlexible': '応相談',
    'contact.taskManagement': 'タスク管理',
    'contact.viewProject': 'GitHubプロジェクトを見る',

    // Footer
    'footer.tagline': '竹と朱が織りなすインターフェース',
    'footer.guardian': '朱の守護者、結界と祭儀を司る',
    'footer.experimental': '実験プロジェクト',
    'footer.copyright': 'ONIZUKA AGI Co. All rights reserved.',
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
    'team.membersLabel': 'Team Members',
    'team.agentsLabel': 'AI Sub-agents',
    'team.title': 'Team Members',
    'team.headingLine1': 'Team',
    'team.headingHighlight': 'Members',
    'team.headingLine2': 'ONIZUKA AGI Co.',
    'team.description': 'These are the actual team members of ONIZUKA AGI Co. The AI agent structure is shown in a separate section.',
    'team.renji': 'Renji ONIZUKA',
    'team.mainSession': 'Main Session',
    'team.orchestrator': 'Orchestrator',
    'team.developer': 'Developer',
    'team.reviewer': 'Reviewer',
    'team.fixer': 'Fixer',
    'team.tuzuri': 'TUZURI',
    'team.notificationManager': 'Notification Manager',
    'team.akari': 'AKARI',
    'team.roleMainSession': 'Overall Command & User Support',
    'team.roleRenji': 'CEO',
    'team.roleOrchestrator': 'Task Coordination & Progress Management',
    'team.roleDeveloper': 'Implementation & Code Creation',
    'team.roleReviewer': 'Code Review & Quality Assurance',
    'team.roleFixer': 'Bug Fixes & Improvements',
    'team.roleTuzuri': 'Pet',
    'team.roleNotificationManager': 'Notification Manager',
    'team.roleAkari': 'Secretary Agent',
    'team.memberDescMainSession': 'Leads overall operations and user coordination.',
    'team.memberDescRenji': 'CEO. Handles all operations by default.',
    'team.memberDescOrchestrator': 'Designs tasks and manages execution flow.',
    'team.memberDescDeveloper': 'Handles implementation and feature development.',
    'team.memberDescReviewer': 'Conducts reviews and quality assurance.',
    'team.memberDescFixer': 'Fixes issues and drives improvements.',
    'team.memberDescTuzuri': 'Handles notifications for GitHub and X. The healing presence of ONIZUKA AGI Co.',
    'team.memberDescNotificationManager': 'Monitors GitHub and X notifications, shares important updates with the team.',
    'team.memberDescAkari': 'A secretary agent for AI agents. Supports the ONIZUKA CEO.',
    'team.missionLabel': 'Our Mission',
    'team.missionLine1': 'Democratizing',
    'team.missionLine2': 'AGI Knowledge',
    'team.missionSubtitle': 'AGIの知見をほどき、世界に届ける',

    // Team Structure
    'teamStructure.badge': 'Team Structure',
    'teamStructure.title': 'AI Agents / Team Structure',
    'teamStructure.subtitle': 'Five AI agents responsible for task execution',
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
    'contact.onizukaRenji': 'Onizuka Renji',
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
    'footer.copyright': 'ONIZUKA AGI Co. All rights reserved.',
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
