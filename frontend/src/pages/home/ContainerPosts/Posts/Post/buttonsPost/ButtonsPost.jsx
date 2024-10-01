import ButtonLike from "./buttonLike/ButtonLike"
import "./buttonspost.css"


import comentario from "../../../../../../../public/icons/comment.png"
import compartilhar from "../../../../../../../public/icons/share.png"


function ButtonsPost () {
    return (
        <div className="container-buttons-post">
            <ButtonLike/>
            <button className="button-post" >
                <img width={"20px"} src={comentario} alt="" />
            </button>
            <button className="button-post" >
                <img width={"20px"} src={compartilhar} alt="" />
            </button>
        </div>
    )
}


export default ButtonsPost