/*
 * Component: Footer
 * Props: none
 * Description:
 *  - SNS / 外部リンクのアイコン一覧をフッターに表示する単純なコンポーネント。
 *  - `mediaLinks` 配列をマップしてそれぞれの外部 URL にリンクする。
 * Dependencies:
 *  - react-icons のアイコン（FaGithub, FaInstagram, SiQiita）
 */
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

const mediaLinks = [{
  id: 'github',
  icon: FaGithub,
  url:"https://github.com/satoyaa",
  color:"#333"
},
{
  id: 'qiita',
  icon: SiQiita,
  url:"https://qiita.com/SatoyaIwamuro",
  color:"#55c500"
},
{
  id: 'instagram',
  icon: FaInstagram,
  url:"https://www.instagram.com/satoya0122?igsh=ZHAxaWEyOGRsaWw4",
  color:"#E1306C"
},
]

const Footer = () => {
    return (
        <footer className='mediaLinks'>
            {mediaLinks.map((media)=> <a key={media.id} className='icons' href={media.url} target="_blank" rel="noopener noreferrer">
            <media.icon size={40} color={media.color} />
            </a>)}
        </footer>
    );
}

export default Footer;