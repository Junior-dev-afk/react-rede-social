import Notify from "./Notify/Notify"
import "./notifys.css"


const notifys = [
    {
        type : "follow",
        name : "Junior"
    },
    {
        type : "like",
        name : "Junior"
    },
    {
        type : "comment",
        name : "Junior",
        content : "Kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    },
    {
        type : "follow",
        name : "Junior"
    },
    {
        type : "like",
        name : "Junior"
    },
    {
        type : "comment",
        name : "Junior",
        content : "Kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"
    },
    {
        type : "share",
        name : "Junior"
    }
]


function Notifys () {
    return (
        <div className="container-notifys">
            {
                notifys.map(notify => <Notify type={notify.type} name={notify.name} content={notify.content}/>)
            }
        </div>
    )
}


export default Notifys