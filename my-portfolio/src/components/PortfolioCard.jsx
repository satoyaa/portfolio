/*
 * Component: PortfolioCard
 * Props:
 *  - portfolio: オブジェクト (id, title, images, ...)
 *  - portfolioId: 現在選択されているポートフォリオの id
 *  - setPortfolioId: 選択 id を更新する関数
 * Description:
 *  - サムネイル画像とタイトルを表示するカード。
 *  - クリックで `setIsOpen(true)` と `setPortfolioId(portfolio.id)` を呼び、詳細表示を右からスライドして表示する。
 *  - 選択状態のスタイル切替を行う（`selected` クラス付与）。
 */
import { useState, useContext} from 'react';

import {AppContext} from './Context/Context.jsx'

const PortfolioCard = ({portfolio, portfolioId, setPortfolioId}) => {
  
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <div className={(portfolio.id === portfolioId) && isOpen ? 'portfolioCard selected' : 'portfolioCard'} onClick={() => {setIsOpen(true); setPortfolioId(portfolio.id)}}>
        <img className='portfolioCardImage' src={portfolio.images[0].image} alt="ポートフォリオの顔写真" />
        <h1 className='portfolioCardTitle'>{portfolio.title}</h1>
        <div className="overlay">
          <span>詳細を表示</span>
        </div>
    </div>
  )
}

export default PortfolioCard