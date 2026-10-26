// Static content for the current portfolio. Assets are served from public/.
export const site = {
  brand: 'Feel So Good',
  brandCopy: [''],
  navigation: [
    { label: 'Index', sectionId: 'top' },
    { label: 'Work', sectionId: 'work' },
    { label: 'Profile', sectionId: 'profile' },
    { label: 'Contact', sectionId: 'contact' },
  ],
  hero: {
    eyebrow: 'FRONTEND ENGINEER / ALGORITHM DESIGNER',
    name: '岩室 怜弥',
    lead: '開発，制作物すべてで心地よい体験を',
    description: [
      'フロントエンドとアルゴリズム設計で，',
      '様々な課題を解決する体験をつくります．',
    ],
    actionLabel: 'プロジェクトを見る',
    modelPaths: ['/Creature.glb', '/PolarBear.glb'],
    modelCaption: ['IDEA', 'CODE', 'INTERACTION', 'EXPERIENCE'],
  },
  profile: {
    eyebrow: 'PROFILE / ABOUT ME',
    name: '岩室 怜弥',
    romanizedName: 'IWAMURO SATOYA',
    image: '/images/Profile.jpg',
    imageAlt: 'VRヘッドセットを装着する岩室怜弥',
    lead: '「Feel So Good!!」をモットーに，心地よい体験をつくります．',
    description: 'これまで，様々なプロジェクトで培ってきた「欲しいを見つける力」で，ユーザーにとっての「心地よい体験」をつくります．',
    technologies: [
      'React / Vite / JavaScript',
      'Three.js / React Three Fiber',
      'Python / C / Erlang',
      'blender / HTML / CSS /',
    ],
    certification: '基本情報技術者試験 合格',
  },
  contact: {
    eyebrow: "Feel So Good",
    heading: '心地よい体験を',
    email: 'mm68003@e.hiroshima-cu.ac.jp',
    githubUrl: 'https://github.com/satoyaa',
  },
}

export const projects = [
  {
    id: '01',
    title: 'PDF Dark Mode',
    intro: 'PDFを、見やすく美しく',
    description: 'PDFの文字・画像・グラフを判別し、閲覧体験を崩さずダークモードへ変換するChrome拡張機能。',
    image: '/images/PDFdark0.png',
    tags: ['React', 'Chrome Extension', 'Image Processing'],
    href: 'https://chromewebstore.google.com/detail/invert-pdf-viewer/klndmcomjnjmcappeiibgklmlhdcihhe?hl=ja',
  },
  {
    id: '02',
    title: '面接質問ジェネレーター',
    intro: 'AIで深い質問を生成',
    description: '就職活動の記録を解析し、企業ごとの想定面接質問を届けるリサーチ支援プロダクト。',
    image: '/images/Interview1.png',
    tags: ['LLM', 'PDF Parsing', 'Notion'],
    href: 'https://www.notion.so/16-25-34b927cead3d804389f7e838401260f7?source=copy_link',
  },
  {
    id: '03',
    title: 'Ninoshima Guide',
    intro: '地域の記憶を、歩ける体験に',
    description: '似島の歴史を、現地で使いやすい観光ガイドとして再構成したWebサイト。',
    image: '/images/Ninoshima1.png',
    tags: ['Web Design', 'Map', 'Content'],
    href: 'https://hiroshima-cu.ninoshima.org/index.html',
  },
  {
    id: '04',
    title: 'Seminar Reminder Bot',
    intro: '予定を逃さない仕組み',
    description: '研究室Wikiから予定を取得し、必要な日にDiscordへリマインドを送る自動化Bot。',
    image: '/images/remainderBOT.png',
    tags: ['Node.js', 'Discord', 'Automation'],
    href: 'https://github.com/satoyaa/zemi-reminder',
  },
]
