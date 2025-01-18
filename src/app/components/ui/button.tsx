import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'solid';  // Example of adding a custom variant prop
}

export const Button: React.FC<ButtonProps> = ({ className, variant = 'solid', ...props }) => {
  return (
    <button
      className={`${className} ${variant === 'ghost' ? 'bg-transparent' : 'bg-blue-500'}`} 
      {...props}
    >
      {props.children}
    </button>
  );
};
