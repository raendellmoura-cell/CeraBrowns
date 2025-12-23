import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-brand-sand/10 last:border-0 group">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none transition-colors duration-300"
        onClick={onClick}
      >
        <span className={`text-lg md:text-xl font-serif tracking-wide transition-colors ${isOpen ? 'text-brand-gold' : 'text-brand-offwhite group-hover:text-brand-gold'}`}>
          {title}
        </span>
        <div className={`p-2 rounded-full border border-white/10 transition-all duration-300 ${isOpen ? 'bg-brand-gold border-brand-gold text-brand-dark' : 'text-brand-gold'}`}>
          {isOpen ? (
            <Minus className="w-4 h-4" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-brand-sand/80 leading-relaxed text-base md:text-lg max-w-3xl font-light">
          {content}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: { id: string; title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;