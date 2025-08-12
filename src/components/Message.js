import React from "react";
import MessageLeft from "./MessageLeft";

import '../scss/Message.scss';
class Message extends React.Component{
    state = {
        messages: [
            // {
            //     type: "me",
            //     message: "Xin chào",
            //     icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmgwNjNhMThhbW8wMDh3dW9hZDkzZjBwaWt5aTRhbnhzazc1dG95diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dsPBfiEEozyXUXShhB/giphy.gif",
            //     time: ""
            // },
            // {
            //     type: "Thanh",
            //     messages: [
            //         {
            //             message: "",
            //             icon: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmgwNjNhMThhbW8wMDh3dW9hZDkzZjBwaWt5aTRhbnhzazc1dG95diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dsPBfiEEozyXUXShhB/giphy.gif",
            //             time: "11:26 12/08/2025"
            //         }
            //     ]
            // }
        ]
    }
    // componentDidMount(){
    //     this.setState({
    //         messages: this.props.messages
    //     });
    // }
    componentDidUpdate(prevProps) {
    if (prevProps.messages !== this.props.messages) {
        this.setState({
            messages: this.props.messages
        });
    }
}


    render(){
        let { messages } = this.state;
        console.log("Messsage Rerender")
        return (
            <div className="message-container">
                {messages.map((item) => {
                    return (
                        <>
                        {item.type == "me" && 
                        <div className="list-message">
                            
                               {item.message != "" && 
                               <div className="form-message mess-right">
                                    <p>{item.message}</p>
                                </div>  
                                }
                             {item.icon != "" && 
                                    <img className="icon-message mess-right" src={item.icon} alt="icon"/>
                                }
                        </div> 
                        }
                        {item.type != "me" && 
                        
                            <MessageLeft messages={item.messages}/>
                        }
                        </> 
                    )
                })}
            </div>
        )
    }
}
export default Message;