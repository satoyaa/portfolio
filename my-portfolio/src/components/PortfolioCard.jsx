import { useState, useContext} from 'react';

import {AppContext} from './Context/Context.jsx'

const PortfolioCard = ({portfolio, portfolioId, setPortfolioId}) => {
  
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <div className={(portfolio.id === portfolioId) & isOpen ? 'portfolioCard selected' : 'portfolioCard'} onClick={() => {setIsOpen(true), setPortfolioId(portfolio.id)}}>
        <img className='portfolioCardImage' src={portfolio.images[0].image} alt="ポートフォリオの顔写真" />
        <h1 className='portfolioCardTitle'>{portfolio.title}</h1>
        <div className="overlay">
          <span>詳細を表示</span>
        </div>
    </div>
  )
}

export default PortfolioCard