import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
  borderTop?: boolean;
  bgGradient?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  children, 
  className = '', 
  darker = false,
  borderTop = false,
  bgGradient = false
}) => {
  const bgClass = bgGradient 
    ? 'bg-gradient-to-b from-brand-chocolate to-brand-dark' 
    : darker 
      ? 'bg-brand-chocolate' 
      : 'bg-transparent';

  const borderClass = borderTop ? 'border-t border-white/5' : '';

  return (
    <section 
      id={id} 
      className={`py-24 md:py-32 relative overflow-hidden bg-noise ${bgClass} ${borderClass} ${className}`}
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;