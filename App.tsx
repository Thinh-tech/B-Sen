
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { ChatWindow } from './components/ChatWindow';
import { InputBar } from './components/InputBar';
import { ZaloWidget } from './components/ZaloWidget';
import { getBotResponse } from './services/geminiService';
import { ChatMessage, GroundingChunk } from './types';
import { SYSTEM_INSTRUCTION } from './constants';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-1',
      role: 'bot',
      text: 'Chào bạn, mình là Bé Sen! Mình có thể giúp gì cho bạn trong chuyến du lịch tại Festival Hoa - Kiểng Sa Đéc 2025?',
      isLoading: false,
    },
  ]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);
  const [userLocation, setUserLocation] = useState<GeolocationCoordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation(position.coords);
      },
      (error) => {
        console.error("Error getting location: ", error);
      }
    );
  }, []);


  const handleSendMessage = useCallback(async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text,
      isLoading: false,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsBotTyping(true);

    try {
      const botResponse = await getBotResponse(text, userLocation);
      
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'bot',
        text: botResponse.text,
        groundingChunks: botResponse.groundingChunks,
        isLoading: false,
      };
      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error("Failed to get response from Gemini:", error);
      const errorMessage: ChatMessage = {
        id: `bot-error-${Date.now()}`,
        role: 'bot',
        text: "Ôi, có lỗi xảy ra rồi. Bé Sen đang hơi mệt, bạn thử lại sau nhé!",
        isLoading: false,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsBotTyping(false);
    }
  }, [userLocation]);


  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col antialiased">
      <Header />
      <ChatWindow messages={messages} isBotTyping={isBotTyping} />
      <InputBar onSendMessage={handleSendMessage} disabled={isBotTyping} />
      <ZaloWidget />
    </div>
  );
};

export default App;
