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
    lead: '開発から制作物すべてで心地よい体験を',
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
    intro: 'PDFを，見やすく美しく',
    description: 'PDFの文字・画像・グラフを判別し，閲覧体験を崩さずダークモードへ変換するChrome拡張機能．',
    image: '/images/PDFdark.png',
    tags: ['Chrome拡張機能', '画像処理', '最適化アルゴリズム'],
    href: 'https://chromewebstore.google.com/detail/invert-pdf-viewer/klndmcomjnjmcappeiibgklmlhdcihhe?hl=ja',
  },
  {
    id: '02',
    title: 'ごみ分別ゲーム',
    intro: '楽しく，学べぶごみ分別',
    description: '株式会社コーヨー様とごみ問題とリサイクルについて，発信するために作成したゲーム．大学祭では，こどもに大人気!!',
    image: '/images/BunbetuGame.png',
    tags: ['React', 'ウェブデザイン', 'ゲーム設計', 'ごみ問題'],
    href: '',
  },
  {
    id: '03',
    title: '似島歴史ガイド',
    intro: '似島の記憶を，いつでも体験に',
    description: '広島の歴史では，失われた命が数えられます．一方で，救われた命も多くあります．検疫所によって，多くの命を救った似島の歴史を伝え，観光ガイドを補助するサイトを現地ガイドの方々と再構成しました．',
    image: '/images/Ninoshima.png',
    tags: ['ウェブデザイン', '地図', 'ガイド補助'],
    href: 'https://hiroshima-cu.ninoshima.org/index.html',
  },
  {
    id: '04',
    title: 'ゼミリマインダーBot',
    intro: '予定を逃さない仕組み',
    description: '研究室Wikiから予定を取得し，必要な日にLINEグループへリマインドを送るBot．',
    image: '/images/remainderBOT.png',
    tags: ['Python', 'LINE', '自動化'],
    href: 'https://github.com/satoyaa/zemi-reminder',
  },
]
