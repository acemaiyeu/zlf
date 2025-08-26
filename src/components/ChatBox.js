import React, { useState } from "react";
import { chatWithGPT } from "../service/openai.js";

function ChatBox() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Thêm tin nhắn user
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // Gọi API GPT
    const reply = await chatWithGPT(input);
    setMessages([...newMessages, { role: "assistant", content: reply }]);
  };

  return (
    <div className="chat-box" style={{ width: "400px", margin: "20px auto", border: "1px solid #ddd", padding: "10px" }}>
      <div className="messages" style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.role === "user" ? "right" : "left" }}>
            <b>{msg.role === "user" ? "Bạn" : "GPT"}:</b> {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Nhập tin nhắn..."
          style={{ width: "80%" }}
        />
        <button onClick={sendMessage} style={{ width: "18%" }}>Gửi</button>
      </div>
    </div>
  );
}

export default ChatBox;
