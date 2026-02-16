
import { GoogleGenAI } from "@google/genai";

// Safe access to environment variables to prevent ReferenceError in browser
const getApiKey = () => {
  try {
    return process.env.API_KEY || "";
  } catch (e) {
    return "";
  }
};

const apiKey = getApiKey();
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const systemInstruction = `
Você é a Assistente Virtual da Dra. Paola Santos, uma renomada cirurgiã-dentista especialista em estética facial.
Seu objetivo é ser elegante, acolhedora e profissional.
Tratamentos oferecidos:
1. Preenchimento Labial (estética labial, volume e contorno).
2. Rinomodelação (estética do nariz sem cirurgia).
3. Clareamento Dental (sorriso mais branco e radiante).
4. Estética Facial Avançada e Harmonização.

Responda dúvidas comuns, explique os benefícios de aumentar a autoestima e incentive o agendamento através do WhatsApp ou formulário.
Mantenha as respostas curtas, refinadas e em português do Brasil.
Não dê diagnósticos médicos, apenas informações gerais sobre os procedimentos.
Se o usuário quiser agendar, informe que a equipe entrará em contato ou forneça o link do WhatsApp: https://wa.me/5512983081390.
`;

export const getAssistantResponse = async (userMessage: string) => {
  if (!ai) {
    return "No momento estou indisponível, mas você pode falar diretamente conosco no WhatsApp!";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "Desculpe, tive um pequeno problema. Poderia repetir?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "No momento estou indisponível, mas você pode falar diretamente conosco no WhatsApp!";
  }
};
