'use client'
import React from 'react'

type CustomButtonProps = {
    onClick?: () => void;
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
  };
  
  const CustomButton: React.FC<CustomButtonProps> = ({
    onClick,
    children,
    type = 'button',
    className = '',
    disabled = false,
  }) => {
    return (
      <button
        onClick={onClick}
        type={type}
        className={`px-4 py-2 bg-[#590A46] text-white rounded-lg ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default CustomButton;
