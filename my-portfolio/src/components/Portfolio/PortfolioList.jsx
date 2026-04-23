import comingSoon from '/images/ComingSoon.png'

import pdfDark0 from '/images/PDFdark0.png';
import pdfDark1 from '/images/PDFdark1.png';
import pdfDark2 from '/images/PDFdark2.png';
import pdfDark3 from '/images/PDFdark3.png';
import pdfDark4 from '/images/PDFdark4.png';

import ninoshima1 from '/images/Ninoshima1.png'
import ninoshima2 from '/images/Ninoshima2.png'
import ninoshima3 from '/images/Ninoshima3.png'

import interview1 from '/images/Interview1.png'
import interview2 from '/images/Interview2.png'
import interview3 from '/images/Interview3.png'

import remainderBOT1 from '/images/remainderBOT.png'

export const portfolioList = [
  {
    id: 0,
    title: "PDFダークモード",
    images: [{id: "00", image: pdfDark0, alt:"ダークモード化拡張機能の写真１"}, {id: "01", image: pdfDark1, alt:"拡張機能がPDFのみ反転できることを示すパネル"}, {id: "02", image: pdfDark2, alt:"拡張機能が写真とグラフを分けて反転できることを示すパネル"}, {id: "03", image: pdfDark3, alt:"拡張機能がPDFのみ反転できることを示すパネル（英語版）"}, {id: "04", image: pdfDark4, alt:"拡張機能が写真とグラフを分けて反転できることを示すパネル（英語版）"}],
    explanation: "これはPDFをダークモード化して表示する拡張機能です．\nこの拡張機能では，独自のアルゴリズムによって，従来手法では実現できなかったPDFのみの反転と写真,グラフを分けての反転を実現しました．\nこれらの機能によって，ブラウザのUIを崩さず，また，写真のような反転前の情報で閲覧したい内容の見やすさを向上させました．",
    links: [
      {id: "00", url: "https://chromewebstore.google.com/detail/invert-pdf-viewer/klndmcomjnjmcappeiibgklmlhdcihhe?hl=ja", urlName: "ダークモード拡張機能"},
      {id: "01", url: "https://qiita.com/gazeruorunit/items/ee0b707c382b9c3987d3", urlName: "【Chrome拡張機能】PDFの「完全」ダークモード化は可能か？(友人が執筆)"},
    ]
  },
  {
    id: 1,
    title: "面接想定質問集",
    images: [{id: "20", image: interview1, alt:"面接想定質問集の写真１"}, {id: "21", image: interview2, alt:"面接想定質問集の写真２"}, {id: "22", image: interview3, alt:"面接想定質問集の写真３"}],
    explanation: "この面接想定質問集を作成するシステムを開発しました．学内の就活報告書一覧ページは自分の行きたい企業は参考になるが，網羅的な面接を対策をしたいときに使いづらかったです．そこで，10年分の就活報告書からPDF解析によって過去の面接情報を抽出，個人情報が含まれるデータを削除，これで構築したデータベースをLLM API(学習しないモデル)で分類することで面接想定質問集を作成しました．実際に作成したものはNotionで公開しています．",
    links: [
      {id: "20", url: "https://www.notion.so/16-25-34b927cead3d804389f7e838401260f7?source=copy_link", urlName: "面接想定質問集"},
    ]
  },
  {
    id: 2,
    title: "似島歴史ガイドサイト",
    images: [{id: "30", image: ninoshima1, alt:"似島の歴史を伝えるwebサイトの写真（トップビジュアル）"}, {id: "31", image: ninoshima2, alt:"似島の歴史を伝えるwebサイトの写真（観光地案内用の地図）"}, {id: "32", image: ninoshima3, alt:"似島の歴史を伝えるwebサイトの写真（掲載されているコンテンツを示す写真）"}],
    explanation: "このwebサイトは，広島市の似島の歴史を伝えるための観光ガイドマップを作成する取り組みで制作したwebサイトです．\n私が初めて製作したwebサイトであるため，個人的に重要であるため掲載させていただきました．\nまた，現地の観光案内で実際に使われた実績のあるwebサイトでもあります．",
    links: [
      {id: "30", url: "https://hiroshima-cu.ninoshima.org/index.html", urlName: "似島歴史ガイド"},
    ]
  },
  {
    id: 3,
    title: "ゼミリマインダーBOT",
    images: [{id: "40", image: remainderBOT1, alt:"ゼミリマインダーBOTのシステム構成図"}, {id: "41", image: comingSoon, alt:"Coming Soon"}, {id: "42", image: comingSoon, alt:"Coming Soon"}],
    explanation: "私の研究室では，ゼミ日程が伝わっていないという問題が頻発していました．そこで，研究室のゼミ日程を管理しているWikiページから日程を抽出，ゼミのある日にリマインドするBOTを作成しました．",
    links: [
      {id: "40", url: "https://github.com/satoyaa/zemi-reminder", urlName: "ゼミリマインダーのソースコード"},
    ]
  },
  {
    id: 4,
    title: "仮想キーボード",
    images: [{id: "50", image: comingSoon, alt:"Coming Soon"}, {id: "51", image: comingSoon, alt:"Coming Soon"}, {id: "52", image: comingSoon, alt:"Coming Soon"}],
    explanation: "この仮想キーボードでは，将来あったらいいなというインターフェースをデザインしたいと考え，友人と一緒に作成しました．\n具体的には，コントローラのトラッキングを用いず，手画像認識のみで文字入力を可能にする取り組みです．\n最終的に，一定の精度での入力に成功した一方で，空中での入力は手の疲労が激しいため，適切なインターフェースではないと判明しました．",
    links: [
      {id: "50", url: "https://qiita.com/gazeruorunit/items/88c9ac2ee7f6e1c30b01", urlName: "【Meta XR All-in-One SDK】Virtual Keyboardで両手タイピング出来るようにすることは可能か？(友人が執筆)"},
    ]
  },
];