import {useContext} from 'react';

import {AppContext} from './Context/Context.jsx'



const pageTitles = [{title:"TOP", id:0}, {title:"プロフィール", id:1}, {title:"制作物", id:2}, {title:"問い合わせ", id:3}];



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
    else if(title === '問い合わせ'){
      setPageFlag(3);
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
