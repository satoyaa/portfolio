
/*
 * Component: Portfolio
 * Props: none
 * Description:
 *  - `portfolioList` をマップして `PortfolioCard` を表示し、選択中の `portfolioId` に応じて `PortfolioContents` に詳細データを渡す。
 *  - 内部で `useState` によって現在選択中のポートフォリオを管理する。
 */
import { useState } from 'react';

import PortfolioCard from './PortfolioCard.jsx';
import PortfolioContents from './PortfolioContents.jsx'


import { portfolioList } from './Portfolio/PortfolioList.jsx';



const Portfolio = () => {
  const [portfolioId, setPortfolioId] = useState(0);

  return (
    <div className='Portfolio'>
      <div className="scrollContainer">
        {portfolioList.map((portfolio) => <PortfolioCard key={portfolio.id} portfolioId={portfolioId} portfolio={portfolio} setPortfolioId={setPortfolioId}></PortfolioCard>)}
      </div>
      <PortfolioContents portfolio={portfolioList[portfolioId]}></PortfolioContents>
    </div>
  )
}

export default Portfolio