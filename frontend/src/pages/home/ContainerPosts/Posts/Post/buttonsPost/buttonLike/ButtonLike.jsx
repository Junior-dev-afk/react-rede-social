import { useState } from "react"


import like from "../../../../../../../../public/icons/heart.png"
import unlike from "../../../../../../../../public/icons/like.png"

function ButtonLike () {

    const [ curtido, setCurtido ] = useState(false)

    return <button className="button-post" onClick={() => setCurtido(!curtido)}>
        { curtido ? (
            <img width={"20px"} src={like} alt="" />
        ) : (
            <img width={"20px"} src={unlike} alt="" />
        ) }
    </button>

}


export default ButtonLike