import Nav from "../components/Nav/Nav"
import Sidebar from "../components/Sidebar/Sidebar"
import Content from "../components/Content/Content"
import Player from "../components/Player/Player"

function MainLayout() {
  return (
    <section id='main-layout'>
        <Nav></Nav>
        <Sidebar></Sidebar>
        <Content></Content>
        <Player></Player>
    </section>
  )
}

export default MainLayout