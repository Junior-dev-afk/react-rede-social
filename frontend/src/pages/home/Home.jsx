import ButtonPage from "./ContainerPages/ButtonPage/ButtonPage"
import Posts from "./ContainerPosts/Posts/Posts"
import Notifys from "./ContainerPosts/Notifys/Notifys"
import Friends from "./ContainerPosts/Friends/Friends"
import Profile from "./ContainerPosts/Profile/Profile"


import { buttons } from "./ContainerPages/ButtonPage/buttons.mjs"
import { useState } from "react"


import "./home.css"
import "./ContainerPosts/containerPosts.css"
import "./ContainerPages/containerPages.css"
import Messages from "./ContainerPosts/Messages/Messages"


function Home () {

    const [page, setPage] = useState("Home")

    return (
        <div className="container-home">

            <div className="container-pages">
                {/* <IconPage /> */}
                {buttons.map(btn => {

                    const butt = <ButtonPage page={page} onClick={() => setPage(btn.text)} imagem={btn.imagem} text={btn.text} />

                    return butt
                })}
            </div>

            <div className="container-posts">
                {page == "Home" && <Posts/>}
                {page == "Explore" && <Posts/>}
                {page == "Notification" && <Notifys/>}
                {page == "Friends" && <Friends setaPage={setPage} pagina_anterior={"Home"}/>}
                {page == "Messages" && <Messages/>}
                {page == "Profile" && <Profile usuario={"me"} setarPage={setPage} pagina_anterior={"Home"} />}
                {page == "More" && "mais"}
            </div>
        </div>
    )
}


export default Home