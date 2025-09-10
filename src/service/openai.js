import axios from "axios";
import { CHAT_GPT_key } from "../constants/constants";

const API_KEY = CHAT_GPT_key; // thay bằng key thật

let conversation = [
  // { role: "system", content: "Bạn tên là Bà xã nhỏ giờ hãy đóng vai như bà xã tui đi" }
];

export const chatWithGPT = async (message, name) => {
  try {
      if (conversation.length === 0){
        conversation.push({role: "system", content: "Bạn tên là " + name + " giờ hãy đóng vai như " + name + " đi"})
        console.log("init conversation with name:", "Bạn tên là " + name + " giờ hãy đóng vai như " + name + " đi");
      }else{
        if (conversation[conversation.length - 1].role === "user") {
          conversation.push({role: "system", content: "Bạn tên là " + name + " giờ hãy đóng vai như " + name + " đi"})
          console.log("init conversation with name:", "Bạn tên là " + name + " giờ hãy đóng vai như " + name + " đi");
        }
      }
    // push tin nhắn mới của user vào lịch sử
    conversation.push({ role: "user", content: message });

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: conversation,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    const reply = response.data.choices[0].message.content;

    // lưu câu trả lời của AI vào lịch sử
    conversation.push({ role: "assistant", content: reply });

    return reply;
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response?.data || error);
    return "Xin lỗi, có lỗi xảy ra!";
  }
};
