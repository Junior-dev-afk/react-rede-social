import './buttonsTopProfile.css'

import more from '../../../../../../public/icons/more.png'


function ButtonsTopProfile ({usuario}) {
    return (
        <div className="container-buttons-top-profile">
            <button style={{
                width : "30px"
            }} className="button-top-profile">
                <img width={"100%"} src={more} alt="" />
            </button>
            <button style={{
                paddingInline : "20px",
            }} className="button-top-profile">
                Seguir
            </button>
        </div>
    )
}


export default ButtonsTopProfile