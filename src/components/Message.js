import React from "react";
import MessageLeft from "./MessageLeft";
import '../scss/Message.scss';
import ImportExcel from "./ExcelCompenent";

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            is_show: this.props.is_show || 0 // nhận is_show từ props
        };
        this.messagesEndRef = React.createRef(); // ref để cuộn xuống cuối
    }

    componentDidUpdate(prevProps) {
        // console.log("Component did update", this.props.messages, prevProps.messages);
        if (prevProps.messages !== this.props.messages) {
            this.setState({
                messages: this.props.messages,
                is_show: this.props.is_show || 0 // nhận is_show từ props
            }, () => {
                this.scrollToBottom(); // cuộn sau khi state cập nhật
            });
        } else {
            this.scrollToBottom(); // cuộn khi render lại
        }
    }

    scrollToBottom = () => {
        if (this.messagesEndRef.current && this.state.messages.length >= 3) {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    render() {
        let { messages } = this.state;
        let { is_show } = this.props;
        return (
            <div className="message-container" style={{
                ...(messages.length >= 10 ? { overflowY: "auto"}: { overflowY: "none"})
                }}>
                {messages && messages.length > 0 && messages.map((item, index) => {
                    return (
                        <div key={index}>
                            {item.type === "me" && 
                                <div className="list-message">
                                    {item.message !== "" && 
                                        <div className="form-message mess-right">
                                            <p>{item.message}</p>
                                        </div>  
                                    }
                                    {item.icon !== "" && 
                                        <img className="icon-message mess-right" src={item.icon} alt="icon"/>
                                    }
                                    {item.emoji !== "" && 
                                        <div className="form-message mess-right">
                                            <p style={{fontSize: "30px"}}>{item.emoji}</p>
                                        </div>  
                                    }
                                </div> 
                            }
                            {item.type !== "me" && 
                                <MessageLeft messages={item.messages} is_show={is_show} last_item={index === messages.length - 1 ? true : false} />
                            }
                        </div> 
                    )
                })}
                {/* Thẻ ẩn để làm mốc cuộn xuống */}
                <div ref={this.messagesEndRef}/>
                {/* <ImportExcel /> */}
            </div>
        )
    }
}

export default Message;
