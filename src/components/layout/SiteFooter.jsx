import { FiGithub, FiMail } from 'react-icons/fi'
import { site } from '../../data/siteContent.js'

function SiteFooter() {
  const { contact } = site

  return (
    <footer id="contact" className="site-footer">
      <a className="contact-link" href={`mailto:${contact.email}`}>
        連絡する <FiMail />
      </a>
      <a className="github-link" href={contact.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
        <FiGithub />
      </a>
    </footer>
  )
}

export default SiteFooter
