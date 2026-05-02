/*
 * Component: PortfolioContents
 * Props:
 *  - portfolio: { id, title, explanation, images, links }
 * Description:
 *  - 詳細表示のメイン部分，スライドおよび説明やリンクを表示する．
 *  - `AppContext` の `isOpen`/`setIsOpen` を参照し、モーダル風に詳細表示するセクションをレンダリングする。
 *  - `PortfolioGallery` に画像配列を渡し、タイトル・説明・リンクを表示する。
 *  - 閉じるボタンで `setIsOpen(false)` を呼ぶ。
 */
import {useContext} from 'react';

import {AppContext} from './Context/Context.jsx'

import PortfolioGallery from './PortfolioGallery.jsx'

const PortfolioContents = ({portfolio}) => {
  const { isOpen ,setIsOpen } = useContext(AppContext);
  return (
    <article className={isOpen ? 'portfolioContents' : 'portfolioContents isClose'}>
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