
import { GoogleGenAI, Type } from "@google/genai";
import { PredictionResult } from "../types";

// Predict lucky numbers based on a user-provided vibe string
export const getLuckyNumbers = async (vibe: string): Promise<PredictionResult> => {
  // Always use a named parameter for apiKey and access it directly from process.env
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Predict lucky lottery numbers based on this user's "vibe": "${vibe}". Generate exactly 6 numbers between 1 and 49.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          luckyNumbers: {
            type: Type.ARRAY,
            items: { type: Type.INTEGER },
            description: "An array of 6 lucky numbers."
          },
          reasoning: {
            type: Type.STRING,
            description: "A fun, mystical explanation for why these numbers were chosen."
          },
          luckScore: {
            type: Type.INTEGER,
            description: "A luck score from 1 to 100."
          }
        },
        required: ["luckyNumbers", "reasoning", "luckScore"]
      }
    }
  });

  // Access the generated text content via the .text property
  const jsonStr = response.text?.trim() || "{}";
  return JSON.parse(jsonStr) as PredictionResult;
};
