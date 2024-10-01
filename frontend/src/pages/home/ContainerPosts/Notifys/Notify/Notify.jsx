import "./notify.css";

function Notify({ type, name, content }) {
    const notifications = {
        follow: {
            content: `${name} começou a te seguir`,
        },
        like: {
            content: `${name} curtiu sua postagem`,
        },
        share: {
            content: `${name} compartilhou sua postagem`,
        },
        comment: {
            content: (
                <>
                    <label>{`${name} comentou na sua postagem`}</label>
                    <span className="notiy-content-comment">{content}</span>
                </>
            ),
        },
    };

    const notification = notifications[type];

    return (
        <div>
            {notification && (
                <div className="notify">
                    {notification.content}
                </div>
            )}
        </div>
    );
}

export default Notify;
