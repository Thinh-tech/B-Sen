
import React from 'react';
import { AvatarIcon } from './icons/AvatarIcon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md w-full p-4 flex items-center z-10">
      <div className="w-12 h-12 mr-4">
        <AvatarIcon />
      </div>
      <div>
        <h1 className="text-xl font-bold text-pink-600">Bé Sen</h1>
        <p className="text-sm text-gray-500">
          Trợ lý du lịch Festival Hoa Sa Đéc 2025
        </p>
      </div>
    </header>
  );
};
