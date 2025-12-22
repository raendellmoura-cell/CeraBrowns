import React from 'react';
import { CHECKOUT_URL } from '../constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  href = CHECKOUT_URL,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform py-4 px-10 rounded-full text-base md:text-lg uppercase tracking-widest cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: `
      bg-brand-gold text-white 
      shadow-[0_0_20px_-5px_rgba(176,138,90,0.3)] 
      hover:shadow-[0_0_30px_-5px_rgba(176,138,90,0.5)] 
      hover:bg-brand-bronze
      hover:-translate-y-1
      border border-transparent
    `,
    outline: `
      bg-transparent border border-brand-gold/50 text-brand-gold 
      hover:border-brand-gold hover:text-brand-offwhite hover:bg-brand-gold/10
      hover:-translate-y-1
    `,
    text: `
      bg-transparent text-brand-gold hover:text-brand-bronze underline-offset-4 hover:underline padding-0
    `
  };

  const widthClass = fullWidth ? "w-full" : "";

  const Component = href ? 'a' : 'button';

  return (
    // @ts-ignore
    <Component
      href={href}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;