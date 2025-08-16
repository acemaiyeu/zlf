import React from "react";
import MessageLeft from "./MessageLeft";
import '../scss/Message.scss';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.messagesEndRef = React.createRef(); // ref để cuộn xuống cuối
    }

    componentDidUpdate(prevProps) {
        if (prevProps.messages !== this.props.messages) {
            this.setState({
                messages: this.props.messages
            }, () => {
                this.scrollToBottom(); // cuộn sau khi state cập nhật
            });
        } else {
            this.scrollToBottom(); // cuộn khi render lại
        }
    }

    scrollToBottom = () => {
        if (this.messagesEndRef.current) {
            this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    render() {
        let { messages } = this.state;
        return (
            <div className="message-container" style={{overflowY: "auto"}}>
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
                                </div> 
                            }
                            {item.type !== "me" && 
                                <MessageLeft messages={item.messages}/>
                            }
                        </div> 
                    )
                })}
                {/* Thẻ ẩn để làm mốc cuộn xuống */}
                <div ref={this.messagesEndRef} />
            </div>
        )
    }
}

export default Message;
