import { FaGithub, FaInstagram } from 'react-icons/fa';
import { SiQiita } from 'react-icons/si';

const mediaLinks = [{
  icon: FaGithub,
  url:"https://github.com/satoyaa",
  color:"#333"
},
{
  icon: SiQiita,
  url:"https://qiita.com/SatoyaIwamuro",
  color:"#55c500"
},
{
  icon: FaInstagram,
  url:"https://www.instagram.com/satoya0122?igsh=ZHAxaWEyOGRsaWw4",
  color:"#E1306C"
},
]

const Footer = () => {
    return (
        <footer className='mediaLinks'>
            {mediaLinks.map((media)=> <a key={media.color} className='icons' href={media.url} target="_blank" rel="noopener noreferrer">
            <media.icon size={40} color={media.color} />
            </a>)}
        </footer>
    );
}

export default Footer;