import { useRef, useState } from "react";
import Friend from "./Friend/Friend";

import "./friends.css";
import "./Pesquisa/pesquisa.css";
import Profile from "../Profile/Profile";

const amigos = [
    {
        foto: "#",
        nome: "Junior",
    },
    {
        foto: "#",
        nome: "João",
    },
    {
        foto: "#",
        nome: "Kaio",
    },
    {
        foto: "#",
        nome: "Laura",
    },
];

function Friends({setaPage, pagina_anterior}) {

    const input = useRef(null);
    const [filter, setFilter] = useState("");

    const [perfil, setPerfil] = useState(false)

    const amigos_filtrados = amigos.filter(amigo =>
        amigo.nome.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <>
        {perfil === false ? (
            <div className="container-friends">
                <div className="container-pesquisa">
                    <input
                        ref={input}
                        onInput={() => {
                            const valorAtual = input.current.value;
                            setFilter(valorAtual);
                        }}
                        placeholder="Search"
                        type="text"
                        className="input-pesquisa-amigos"
                    />
                </div>
                {amigos_filtrados.map((amigo) => (
                    <Friend setPerfil={setPerfil} imagem={amigo.foto} nome={amigo.nome} />
                ))}
            </div>
        ) : (
            <Profile setarPage={setaPage} usuario={perfil} pagina_anterior={pagina_anterior} />
        )}
        </>
    );
}

export default Friends;
