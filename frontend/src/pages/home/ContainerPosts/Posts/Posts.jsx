import { useEffect, useRef, useState } from "react"
import Post from "./Post/Post"


import {posts_exemplo} from "./posts.mjs"
import Loader from "../../../../loading/Loader"


async function getMorePosts (quantidade) {

    const filtro = posts_exemplo.filter((post, index) => index <= quantidade-1)

    console.log(filtro)

    return filtro
}


function Posts() {
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

    return (
        <div
            ref={containerRef}
            id="container-posts"
            style={{ width: '100%', height: "100%", overflowY: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            {posts.map((post) => (
                <Post detalhes={post} />
            ))}
            {loading && <Loader color={"white"}/>}
        </div>
    );
}

export default Posts;