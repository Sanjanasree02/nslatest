import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'ghost' | 'solid' }> = ({ className, variant = 'solid', ...props }) => {
  return (
    <button
      className={`${className} ${variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500'}`} 
      {...props}
    >
      {props.children}
    </button>
  );
};
