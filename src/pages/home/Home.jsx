import Header from "../../header/Header"
import Posts from "../../posts/Posts"
import SideBar from "../../sidebar/SideBar"
import "./home.css"

const Home = () => {
  return (
    <>
    <div className="home">
      <Header />
      <Posts />
      <SideBar />

    </div>
    
    </>
  )
}

export default Home