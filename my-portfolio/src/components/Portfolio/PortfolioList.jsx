import comingSoon from '../../assets/ComingSoon.png'

import pdfDark0 from '../../assets/PDFdark0.png';
import pdfDark1 from '../../assets/PDFdark1.png';
import pdfDark2 from '../../assets/PDFdark2.png';
import pdfDark3 from '../../assets/PDFdark3.png';
import pdfDark4 from '../../assets/PDFdark4.png';

import ninoshima1 from '../../assets/Ninoshima1.png'
import ninoshima2 from '../../assets/Ninoshima2.png'
import ninoshima3 from '../../assets/Ninoshima3.png'


export const portfolioList = [
  {
    id: 0,
    title: "PDFダークモード",
    images: [{id: "00", image: pdfDark0, alt:"ダークモード化拡張機能の写真１"}, {id: "01", image: pdfDark1, alt:"拡張機能がPDFのみ反転できることを示すパネル"}, {id: "02", image: pdfDark2, alt:"拡張機能が写真とグラフを分けて反転できることを示すパネル"}, {id: "03", image: pdfDark3, alt:"拡張機能がPDFのみ反転できることを示すパネル（英語版）"}, {id: "04", image: pdfDark4, alt:"拡張機能が写真とグラフを分けて反転できることを示すパネル（英語版）"}],
    explanation: "これはPDFをダークモード化して表示する拡張機能です．\nこの拡張機能では，独自のアルゴリズムによって，従来手法では実現できなかったPDFのみの反転と写真,グラフを分けての反転を実現しました．\nこれらの機能によって，ブラウザのUIを崩さず，また，写真のような反転前の情報で閲覧したい内容の見やすさを向上させました．",
    links: [
      {id: "00", url: "https://chromewebstore.google.com/detail/invert-pdf-viewer/klndmcomjnjmcappeiibgklmlhdcihhe?hl=ja", urlName: "ダークモード拡張機能"},
      {id: "01", url: "https://qiita.com/gazeruorunit/items/ee0b707c382b9c3987d3", urlName: "【Chrome拡張機能】PDFの「完全」ダークモード化は可能か？"},
    ]
  },
  {
    id: 1,
    title: "仮想キーボード",
    images: [{id: "10", image: comingSoon, alt:"Coming Soon"}, {id: "11", image: comingSoon, alt:"Coming Soon"}, {id: "12", image: comingSoon, alt:"Coming Soon"}],
    explanation: "この仮想キーボードでは，将来あったらいいなというインターフェースをデザインしたいと考え，友人と一緒に作成しました．\n具体的には，コントローラのトラッキングを用いず，手画像認識のみで文字入力を可能にする取り組みです．\n最終的に，一定の精度での入力に成功した一方で，空中での入力は手の疲労が激しいため，適切なインターフェースではないと判明しました．",
    links: [
      {id: "00", url: "https://qiita.com/gazeruorunit/items/88c9ac2ee7f6e1c30b01", urlName: "【Meta XR All-in-One SDK】Virtual Keyboardで両手タイピング出来るようにすることは可能か？"},
    ]
  },
  {
    id: 2,
    title: "似島歴史ガイドサイト",
    images: [{id: "20", image: ninoshima1, alt:"似島の歴史を伝えるwebサイトの写真（トップビジュアル）"}, {id: "21", image: ninoshima2, alt:"似島の歴史を伝えるwebサイトの写真（観光地案内用の地図）"}, {id: "22", image: ninoshima3, alt:"似島の歴史を伝えるwebサイトの写真（掲載されているコンテンツを示す写真）"}],
    explanation: "このwebサイトは，広島市の似島の歴史を伝えるための観光ガイドマップを作成する取り組みで制作したwebサイトです．\n私が初めて製作したwebサイトであるため，個人的に重要であるため掲載させていただきました．\nまた，現地の観光案内で実際に使われた実績のあるwebサイトでもあります．",
    links: [
      {id: "00", url: "https://hiroshima-cu.ninoshima.org/index.html", urlName: "似島歴史ガイド"},
    ]
  }
  ,
];