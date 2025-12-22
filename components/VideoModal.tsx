import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string; // Pode ser ID ou URL completa
  format?: 'horizontal' | 'vertical';
}

// Função auxiliar para extrair o ID do YouTube de vários formatos de link
const getYouTubeID = (url: string) => {
  if (!url) return '';
  // Se já for um ID curto (11 caracteres, sem barras), retorna ele mesmo
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;

  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : url;
};

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoId, format = 'horizontal' }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const cleanId = getYouTubeID(videoId);

  // Ajuste fino para vertical: usa altura da tela como base para não estourar em celulares pequenos
  const containerClasses = format === 'vertical'
    ? 'h-[80vh] aspect-[9/16] max-w-[90vw] md:max-w-md w-auto' 
    : 'w-full max-w-5xl aspect-video';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Close Button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-[110] bg-black/40 rounded-full p-2"
      >
        <X className="w-8 h-8" strokeWidth={1.5} />
      </button>

      {/* Video Container */}
      <div className={`relative ${containerClasses} bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 z-[105] animate-fade-up`}>
        {cleanId ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${cleanId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&playsinline=1&loop=1&playlist=${cleanId}`}
            title="Vídeo de Apresentação"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          ></iframe>
        ) : (
          <div className="flex items-center justify-center h-full text-white/50">
            Vídeo indisponível
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoModal;