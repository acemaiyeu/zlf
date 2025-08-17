// import React from "react";

// class MessageLeft extends React.Component{
//     render(){ 
//         let { messages } = this.props
//         return (
//             <div className="list-message">
//                 {messages.map((item) => {
//                     return (<div key={item.time}>
                        
//                             {item.message !== "" && 
//                             <div className="form-message mess-left">
//                                 <p>{item.message}</p>
//                             </div> 
//                             }
                            
                        
//                         {item.icon !== "" && 
//                                 <img className="icon-message" src={item.icon} alt="icon"/>
//                             }
//                             </div>
//                         )    
//                 })}
                 
//             </div>
            
//         )
//     }
// }

// export default MessageLeft;

import React from "react";
import "../scss/MessageLeft.scss"; // Import the MessageLeft component 

class MessageLeft extends React.Component {
    render() {
        const { messages } = this.props;
        const currentTime = Date.now();
        // console.log("Messages in MessageLeft:", currentTime - changeDateTextToTime(messages[1].time), currentTime);
        return (
            <div className="list-message">
                {messages.map((item, index) => {
                    const isRecent = currentTime - changeDateTextToTime(item.time) < 100000; // 10s
                    const isLastMessage = index === messages.length - 1;

                    return (
                        <div key={item.time}>
                            {item.message !== "" && (
                                <div className={`form-message mess-left ${isRecent && isLastMessage ? "typing" : ""}`}>
                                    <p>{isRecent && isLastMessage ? "Typing..." : item.message}</p>
                                </div>
                            )}

                            {item.icon !== "" && (
                                <img className="icon-message" src={item.icon} alt="icon" />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}
const changeDateTextToTime = (time_text) => {
    const [timePart, datePart] = time_text.split(" ");
    const [hours, minutes] = timePart.split(":").map(Number);
    const [day, month, year] = datePart.split("/").map(Number);

    console.log("Parsed time:", hours, minutes, day, month, year);
    return new Date(year, month - 1, day, hours, minutes).getTime();
};

export default MessageLeft;
