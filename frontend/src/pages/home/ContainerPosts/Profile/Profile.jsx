import HeaderProfile from "./HeaderProfile/HeaderProfile"
import ImagensTopPerfil from "./ImagensTopPerfil/ImagensTopPerfil"
import ButtonsTopProfile from "./ButtonsTopProfile/ButtonsTopProfile"

import banner from "../../../../../public/icons/manutencao.png"
import foto_perfil from "../../../../../public/icons/manutencao.png"


import "./profile.css"
import InfosProfile from "./InfosProfile/InfosProfile"
import { posts_exemplo } from "../Posts/posts.mjs"
import { useEffect, useRef, useState } from "react"
import Post from "../Posts/Post/Post"


async function getMorePosts (quantidade) {

    const filtro = posts_exemplo.filter((post, index) => index <= quantidade-1)

    console.log(filtro)

    return filtro
}


function Profile ({usuario, setarPage, pagina_anterior}) {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 5;
    const containerRef = useRef(null);

    const fetchPosts = async (page) => {
        setLoading(true);
        const response = await getMorePosts(limit)
        setPosts((prevPosts) => [...prevPosts, ...response]); 
        setLoading(false);
    };

    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
            if (scrollTop + clientHeight >= scrollHeight - 200 && !loading) {
                setPage((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            return () => {
                container.removeEventListener("scroll", handleScroll);
            };
        }
    }, [loading]);

    return(
        <div ref={containerRef} className="container-profile">
            <HeaderProfile usuario={usuario} setPage={setarPage} pagina_anterior={pagina_anterior}/>
            <ImagensTopPerfil banner={banner} perfil={foto_perfil} />
            <ButtonsTopProfile usuario={usuario}/>
            <InfosProfile/>
            {
                posts.map(post => {
                    return <Post detalhes={post} />
                })
            }
        </div>
    )
}

 
export default Profile