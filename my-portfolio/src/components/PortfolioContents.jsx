import {useContext} from 'react';

import {AppContext} from './Context/Context.jsx'

import PortfolioGallery from './PortfolioGallery.jsx'

const PortfolioContents = ({portfolio}) => {
  const { isOpen ,setIsOpen } = useContext(AppContext);
  return (
    <article className={isOpen ? 'portfolioContents' : 'portfolioContents isOpen'}>
      <PortfolioGallery images={portfolio.images}></PortfolioGallery>
      <div className='portfolioMain' style={{ whiteSpace: 'pre-wrap' }}>
        <h1 className='portfolioTitle'>{portfolio.title}</h1>
        <h2 className='portfolioExplanation'>{portfolio.explanation}</h2>
        {portfolio.links.map((link) => 
        <a key={link.id} href={link.url} target='_blank'>{link.urlName}<br></br></a>
        )}
      </div>
      <button className='portfolioCloser' onClick={() => setIsOpen(false)}>
        <span className="dli-close-circle"><span></span></span>
      </button>
    </article>
  )
}

export default PortfolioContents