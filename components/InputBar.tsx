
import React, { useState, useEffect } from 'react';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { MicIcon } from './icons/MicIcon';
import { SendIcon } from './icons/SendIcon';

interface InputBarProps {
  onSendMessage: (text: string) => void;
  disabled: boolean;
}

export const InputBar: React.FC<InputBarProps> = ({ onSendMessage, disabled }) => {
  const [inputValue, setInputValue] = useState('');
  const { transcript, isListening, startListening, stopListening } = useVoiceRecognition();

  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !disabled) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      setInputValue('');
      startListening();
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-2 md:p-4">
      <form onSubmit={handleSubmit} className="flex items-center max-w-4xl mx-auto">
        <button
          type="button"
          onClick={handleMicClick}
          className={`p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 text-white' : 'text-gray-500 hover:bg-gray-100'}`}
          aria-label={isListening ? 'Stop listening' : 'Start listening'}
        >
          <MicIcon className="w-6 h-6" />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isListening ? "Đang nghe..." : "Hỏi Bé Sen điều gì đó..."}
          className="flex-1 mx-4 p-3 border-gray-300 rounded-full focus:ring-pink-500 focus:border-pink-500 transition shadow-sm bg-gray-100 text-black"
          disabled={disabled}
        />
        <button
          type="submit"
          className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 disabled:bg-pink-300 transition-colors shadow-sm"
          disabled={!inputValue.trim() || disabled}
          aria-label="Send message"
        >
          <SendIcon className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};
