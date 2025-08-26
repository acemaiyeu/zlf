import axios from "axios";
import { CHAT_GPT_key } from "../constants/constants";

const API_KEY = CHAT_GPT_key; // thay bằng key thật

export const chatWithGPT = async (message) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini", // hoặc gpt-4o, gpt-3.5-turbo tuỳ nhu cầu
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    return "Xin lỗi, có lỗi xảy ra!";
  }
};
