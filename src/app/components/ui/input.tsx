import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`${className} p-2 border border-gray-300 rounded-md`}
      {...props}
    />
  );
};
