
export interface GroundingChunk {
  web?: {
    // FIX: uri and title are optional in the Gemini API response.
    uri?: string;
    title?: string;
  };
  maps?: {
    // FIX: uri and title are optional in the Gemini API response.
    uri?: string;
    title?: string;
  };
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  text: string;
  isLoading: boolean;
  groundingChunks?: GroundingChunk[];
}

export interface GeminiResponse {
  text: string;
  groundingChunks?: GroundingChunk[];
}