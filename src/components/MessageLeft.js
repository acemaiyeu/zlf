import React from "react";

class MessageLeft extends React.Component{
    render(){ 
        let { messages } = this.props;
        console.log(messages)
        return (
            <div className="list-message">
                {messages.map((item) => {
                    return (<>
                        
                            {item.message !== "" && 
                            <div className="form-message mess-left">
                                <p>{item.message}</p>
                            </div> 
                            }
                            
                        
                        {item.icon != "" && 
                                <img className="icon-message" src={item.icon} alt="icon"/>
                            }
                            </>
                        )    
                })}
                 
            </div>
            
        )
    }
}

export default MessageLeft;