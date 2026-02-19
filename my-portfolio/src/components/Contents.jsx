import Profile from './Profile'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Top from './Top'

const Contents = ({pageFlag}) => {
  const changePage = (pageFlag) => {
    if(pageFlag === 0){
      return <Top></Top>;
    }
    if(pageFlag === 1){
      return <Profile></Profile>;
    }
    if(pageFlag === 2){
      return <Portfolio></Portfolio>;
    }
    if(pageFlag === 3){
      return <Contact></Contact>;
    }
  }
  return (
    <section className="contentsArea">
      {changePage(pageFlag)}
    </section>
  )
}

export default Contents