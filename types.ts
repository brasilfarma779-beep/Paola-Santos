
export interface ServiceImage {
  url: string;
  category: 'labial' | 'rino' | 'clareamento';
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
