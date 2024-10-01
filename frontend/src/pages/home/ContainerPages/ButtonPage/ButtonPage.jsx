import { useState } from "react"
import "./buttonPage.css"

import { efeitos_buttons_prontos } from "./buttons.mjs"


function ButtonPage ({imagem, text, onClick, page}) {

    const [ selected, setSelected ] = useState(false)

    efeitos_buttons_prontos.push(setSelected)

    return (
        <div onClick={onClick} className="container-button-pages">

        {
            ( page == text ) ? (
                <div className="button-pages button-pages-selected">
                    <img className="icon-button-pages" src={"../../../../../public/icons/"+imagem} alt="" />
                    <label>{text}</label>
                </div>
            ) : (
                <div onClick={ () => {
                    removeAllButtonsSelected()
                    setSelected(true)                    
                } } className="button-pages">
                    <img className="icon-button-pages" src={"../../../../../public/icons/"+imagem} alt="" />
                    <label>{text}</label>
                </div>
            )
        }

            
        </div>
    )
}


function removeAllButtonsSelected () {
    efeitos_buttons_prontos.forEach((setSelected) => setSelected(false))
}



export default ButtonPage