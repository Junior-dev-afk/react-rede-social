import "./loader.css"


function Loader ({color}) {
    return <div style={{backgroundColor : color, color : color}} className="loader">.</div>
}


export default Loader