/*
 * Component: Navigation
 * Props:
 *  - pageFlag: 現在のページインデックス
 *  - setPageFlag: ページを切り替える関数
 * Description:
 *  - サイト内のページ切り替え用ナビゲーションを表示する。
 *  - `pageTitles` を元にボタンを並べ、クリックで `setPageFlag` を呼ぶ。
 *  - `AppContext.isOpen` を参照して、モーダル（ポートフォリオ詳細）表示時のスタイル変更を行う。
 */
import {useContext} from 'react';

import {AppContext} from './Context/Context.jsx'



const pageTitles = [{title:"TOP", id:0}, {title:"プロフィール", id:1}, {title:"制作物", id:2}, {title:"使用技術", id:3}, {title:"問い合わせ", id:4}];



const Navigation = ({pageFlag, setPageFlag}) => {

  const changePage = (title) =>{
    if(title === 'TOP'){
      setPageFlag(0);
    }
    if(title === 'プロフィール'){
      setPageFlag(1);
    }
    else if(title === '制作物'){
      setPageFlag(2);
    }
    else if(title === '使用技術'){
      setPageFlag(3);
    }
    else if(title === '問い合わせ'){
      setPageFlag(4);
    }
  };

  const { isOpen } = useContext(AppContext);

  return (
    <nav className="navArea">
      <header>
        <h1 className={ isOpen ? "pageTitle isOpen":"pageTitle"}>{ !pageFlag ? "岩室 怜弥" : pageTitles[pageFlag].title}</h1>
      </header>
      <ul className={ isOpen ? "navList isOpen":"navList"}>
        {pageTitles.map((pageTitle) => <li key={pageTitle.id}>
          <button onClick={() => changePage(pageTitle.title)} 
          className={pageFlag === pageTitle.id ? 'navItem selectedItem' : 'navItem'}>
            {pageTitle.title}
          </button>
          </li>)}
      </ul>
    </nav>
  )
}

export default Navigation
