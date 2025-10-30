
import React, { useEffect, useRef } from 'react';
import { ChatMessage as ChatMessageType } from '../types';
import { Message } from './Message';

interface ChatWindowProps {
  messages: ChatMessageType[];
  isBotTyping: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isBotTyping }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isBotTyping]);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-rose-50/50">
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
      {isBotTyping && (
        <Message
          message={{
            id: 'typing',
            role: 'bot',
            text: '',
            isLoading: true,
          }}
        />
      )}
    </div>
  );
};
