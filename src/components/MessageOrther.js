
export const MessageOrther = (props) => {
    const { Message } = props;
    console.log("Message.time:", Message.time);
    console.log("Type of Message.time:", typeof Message.time);

    const formattedTime = Message.time?.toDate()?.toISOString(); 
    let date = null;
    if(formattedTime){
        // Chuyển chuỗi thành đối tượng Date
        date = new Date(formattedTime);

    }
   
    return (
        <div className="message-child">
            <div className="ortherName">{Message.user}</div>
            <div className="ortherDisplay">
                <img className="ortherImg"
                src={Message.userImg}
                style={{ width: '30px', height: '30px', border: 'solit 1px', borderRadius: '15px'}} >
                </img>
                <div className="ortherText">{Message.text}</div>
            </div>
            <div className="ortherTime">{date ? date.toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" }) : "Loading..."}</div>
        </div>
    );
};
