import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

async function geminiAI(prompt:string) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents:prompt,
  });
  
   return response.text;
}

export default geminiAI;

