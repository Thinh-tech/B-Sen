import React from 'react';
import { ChatMessage } from '../types';
import { AvatarIcon } from './icons/AvatarIcon';

interface MessageProps {
  message: ChatMessage;
}

const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1 p-2">
    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
  </div>
);

export const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.role === 'bot';

  if (isBot) {
    return (
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10">
          <AvatarIcon />
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-xl rounded-tl-none p-4 shadow-sm max-w-2xl">
            {message.isLoading ? (
              <TypingIndicator />
            ) : (
              <p className="text-gray-900 whitespace-pre-wrap">{message.text}</p>
            )}
          </div>
          {message.groundingChunks && message.groundingChunks.length > 0 && (
            <div className="mt-2 text-xs text-gray-500 space-y-1">
              <p className="font-semibold">Nguồn tham khảo:</p>
              <ul className="list-disc list-inside">
                {message.groundingChunks.map((chunk, index) => {
                  const source = chunk.web || chunk.maps;
                  if (source && source.uri) {
                    return (
                      <li key={index}>
                        <a
                          href={source.uri}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {source.title || source.uri}
                        </a>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }

  // User message
  return (
    <div className="flex justify-end">
      <div className="bg-pink-600 text-white rounded-xl rounded-br-none p-4 max-w-2xl shadow-sm">
        <p>{message.text}</p>
      </div>
    </div>
  );
};