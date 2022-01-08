const Msg = (props) => {
    const {id, user, date, content } = props
    return (
        <div className="msg-wrapper" key={id}>
            <div className="msg-header">
                <span className="msg-user">@{user}</span>
                <span className="msg-created-on">{date}</span>
            </div>
            <div className="msg-content">{content}</div>
        </div>
    ) 
}



export default Msg

