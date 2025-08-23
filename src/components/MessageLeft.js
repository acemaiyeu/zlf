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
import { TIME_SHOW_TYPING } from '../constants/constants'

class MessageLeft extends React.Component {
    render() {
        let { messages, is_show } = this.props;
        let currentTime = Date.now();
       const isRecent = messages && messages.length > 0
            ? 
                (currentTime -  changeDateTextToTime((messages?.[messages.length - 1]?.time || "")) 
                                < TIME_SHOW_TYPING)
            : false;  
        return (
            
            <div className="list-message">
                {messages.map((item, index) => {
                    return (
                        <>
                        {((index <= messages.length || is_show === 1) && !isRecent)  && (
                        <div key={item.time}>
                            {item.message !== "" && (
                                <div className={`form-message mess-left`}>
                                    <p>{item.message}</p>
                                </div>
                            )}

                            {item.icon !== "" && (
                                <img className="icon-message" src={item.icon} alt="icon" />
                            )}
                        </div>
                        )}
                        </>
                    );
                })}
            </div>
        );
    }
}
  const changeDateTextToTime = (time_text) => {
        const [timePart, datePart] = time_text.split(" ");
        const [hours, minutes, seconds = 0] = timePart.split(":").map(Number); // thêm giây
        const [day, month, year] = datePart.split("/").map(Number);

        return new Date(year, month - 1, day, hours, minutes, seconds).getTime();
    };

export default MessageLeft;
