/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
  return (
    <input
      className={`${className} p-2 border border-gray-300 rounded-md`}
      {...props}
    />
  );
};