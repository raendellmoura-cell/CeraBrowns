import React, { useState, useEffect } from 'react';
import { Check, Star, Lock, ShieldCheck, Clock, PlayCircle, Book, Users, Ruler, ChevronRight, ArrowRight, X, Palette } from 'lucide-react';
import Button from './components/Button';
import Section from './components/Section';
import Accordion from './components/Accordion';
import { Reveal } from './components/Reveal';
import { MODULES, FAQS, BONUSES, TESTIMONIALS, CHECKOUT_URL } from './constants';

// Imagens de resultados reais fornecidas (Antes/Depois e Resultados)
const RESULT_IMAGES = [
  "https://i.postimg.cc/j5fzxCrr/Whats-App-Image-2025-12-20-at-16-24-53-(1).jpg",
  "https://i.postimg.cc/7Y9SYpjK/Whats-App-Image-2025-12-20-at-16-24-54.jpg",
  "https://i.postimg.cc/cJpnbZtP/Whats-App-Image-2025-12-20-at-16-28-38.jpg"
];

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Load Vimeo Script dynamically
    const script = document.createElement('script');
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if(document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-brand-offwhite selection:bg-brand-gold selection:text-white bg-brand-dark overflow-x-hidden">
      
      {/* 1. HERO (Refined Hierarchy & Trust Bar) */}
      <section className="relative min-h-[90vh] flex items-center pt-48 md:pt-64 pb-20 overflow-hidden bg-noise">
        {/* LOGO HEADER */}
        <div className="absolute top-0 left-0 w-full p-6 md:p-10 z-50 flex justify-center md:justify-start max-w-screen-xl mx-auto left-0 right-0">
             <img 
               src="https://i.postimg.cc/FKNtgkTN/Logo-Bronw-branca.png" 
               alt="Logo Cera Brows" 
               className="h-28 md:h-40 lg:h-48 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
             />
        </div>

        {/* Deep Gradient Background */}
        <div className="absolute inset-0 z-0 bg-brand-dark">
          <img 
            src="https://images.unsplash.com/photo-1522337360705-8763d84a783a?q=80&w=2076&auto=format&fit=crop" 
            alt="Design de sobrancelhas" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-dark to-transparent"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 md:px-8 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-10">
            
            <Reveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-white">
                Formação <span className="text-brand-gold italic">Cera Brows</span>:
              </h1>
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif mt-2 text-brand-offwhite/90">
                design com cera & henna que <span className="italic border-b border-brand-gold/50 pb-1">fideliza e encanta</span>.
              </p>
            </Reveal>

            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-gold/30 bg-brand-brown/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                <span className="text-brand-gold text-xs font-bold tracking-[0.2em] uppercase">
                  Formação Exclusiva
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-brand-sand/80 leading-relaxed max-w-lg font-light pl-6 border-l border-brand-gold/30">
                Um método com protocolo claro para você ganhar agilidade, aumentar o padrão de entrega e elevar a experiência da cliente — sem depender de tentativa e erro.
              </p>
            </Reveal>
            
            <Reveal delay={300}>
              <div className="flex flex-col gap-8">
                 <ul className="space-y-3">
                  {[
                    "Mais consistência no acabamento",
                    "Mais agilidade no atendimento (mais encaixes)",
                    "Mais fidelização: cliente volta e indica"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-brand-offwhite/90 font-light group">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border border-brand-gold/40 flex items-center justify-center group-hover:border-brand-gold group-hover:bg-brand-gold transition-colors">
                        <Check className="w-3 h-3 text-brand-gold group-hover:text-brand-dark transition-colors" />
                      </div>
                      <span className="tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <Button href={CHECKOUT_URL} className="shadow-2xl shadow-brand-gold/10">
                    Quero aprender Cera Brows agora
                  </Button>
                </div>

                {/* TRUST BAR */}
                <div className="grid grid-cols-3 gap-6 max-w-md pt-4 border-t border-white/5">
                  <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                    <Clock className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest font-medium">Acesso Imediato</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                    <ShieldCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest font-medium">Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
                    <Check className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-widest font-medium">Garantia</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Visual (Inline Video Player - Vertical 9:16 - Vimeo) */}
          <div className="md:col-span-5 relative flex justify-center mt-12 md:mt-0">
            {/* Adicionado width="100%" para evitar colapso do container Reveal */}
            <Reveal delay={300} width="100%" className="relative z-10 max-w-[400px]">
               <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] bg-black">
                 {/* Vimeo Embed with 9:16 Aspect Ratio Padding */}
                 <div style={{padding:'177.78% 0 0 0', position:'relative'}}>
                   <iframe 
                      src="https://player.vimeo.com/video/1148356995?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                      title="VSL Cera Brows"
                    ></iframe>
                 </div>
               </div>
               {/* Elegant lines */}
               <div className="absolute -top-8 -right-4 w-full max-w-[400px] h-full border border-brand-gold/10 rounded-[2.5rem] -z-10"></div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. DORES (Modern Cards) */}
      <Section darker borderTop>
        <Reveal width="100%">
          <div className="max-w-3xl mx-auto text-center space-y-8 mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
              Suas clientes voltam… ou só <span className="text-brand-gold italic">“passam”</span> pelo seu atendimento?
            </h2>
            <p className="text-brand-sand/70 text-lg md:text-xl font-light leading-relaxed">
              Se você já atende, sabe como é: às vezes você faz um bom design — mas o resultado não fica com aquele acabamento “uau” e a cliente não cria rotina com você.
            </p>
          </div>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Demora excessiva", desc: "Você demora mais do que gostaria pra finalizar e isso limita seus encaixes na agenda." },
            { title: "Resultado inconsistente", desc: "O resultado varia de cliente pra cliente e você sente que falta um 'padrão' de excelência." },
            { title: "Falta de encanto", desc: "Você quer um método que encante, fidelize e traga segurança no atendimento." }
          ].map((card, i) => (
            <Reveal key={i} delay={i * 150} className="h-full">
              <div className="h-full p-8 rounded-2xl border border-white/5 bg-brand-brown/20 hover:bg-brand-brown/40 hover:border-brand-gold/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                <div className="w-14 h-14 mb-6 rounded-full border border-white/10 bg-white/5 flex items-center justify-center font-serif text-2xl italic text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                   {i + 1}
                </div>
                <h3 className="text-xl font-serif font-medium text-brand-offwhite mb-4">{card.title}</h3>
                <p className="text-base text-brand-sand/60 font-light leading-relaxed">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={300}>
          <div className="mt-20 text-center border-t border-white/5 pt-16">
             <p className="text-brand-offwhite mb-8 text-lg font-light">O <strong className="font-serif text-brand-gold">Cera Brows</strong> foi criado pra você ter um protocolo mais rápido, seguro e eficaz.</p>
             <Button variant="outline" href={CHECKOUT_URL}>Quero resolver isso agora</Button>
          </div>
        </Reveal>
      </Section>

      {/* 3. MECANISMO (Clean) */}
      <Section>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <Reveal>
              <div className="relative z-10 p-2 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <img 
                  src="https://i.postimg.cc/SQTySdD6/Whats-App-Image-2025-12-20-at-16-28-39-(1).jpg" 
                  alt="Materiais Cera Brows" 
                  className="relative rounded-xl shadow-2xl grayscale-[10%] hover:grayscale-0 transition-all duration-700 block w-full"
                />
              </div>
              <div className="absolute -inset-10 bg-brand-gold/5 rounded-full blur-3xl -z-10"></div>
            </Reveal>
          </div>
          <div className="order-1 md:order-2 space-y-10">
            <Reveal delay={200}>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                O que é o Método <br/><span className="text-brand-gold italic">Cera Brows?</span>
              </h2>
            </Reveal>
            <Reveal delay={300}>
              <p className="text-brand-sand/70 text-lg leading-relaxed font-light border-l-2 border-brand-gold/30 pl-8 py-2">
                É um método de design com <strong>cera + henna</strong>, estruturado em um <strong>protocolo passo a passo</strong> para você executar com mais previsibilidade — focando em acabamento, experiência da cliente e padrão de entrega.
              </p>
            </Reveal>
            <div className="space-y-8 pt-4">
               {[
                 { title: "Protocolo Claro", desc: "Menos improviso, mais técnica fundamentada." },
                 { title: "Execução Consistente", desc: "Padronize seu atendimento para todas as clientes." },
                 { title: "Segurança Total", desc: "Domine contraindicações e biossegurança." }
               ].map((item, i) => (
                 <Reveal key={i} delay={400 + (i * 100)}>
                   <div className="flex gap-6 group">
                     <div className="w-12 h-12 flex-shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand-gold transition-colors bg-white/5">
                       <Check className="w-5 h-5 text-brand-gold" />
                     </div>
                     <div>
                       <h4 className="font-serif text-xl text-brand-offwhite mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h4>
                       <p className="text-sm text-brand-sand/60 font-light">{item.desc}</p>
                     </div>
                   </div>
                 </Reveal>
               ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. PROVA VISUAL (Result Images Grid) */}
      <Section darker borderTop>
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Resultado na Prática</h2>
            <p className="text-brand-sand/70 max-w-2xl mx-auto font-light text-lg">
              Antes e depois reais para você enxergar o acabamento e o padrão de entrega que o método proporciona.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
          {RESULT_IMAGES.map((img, i) => (
            <Reveal key={i} delay={i * 100}>
              <div 
                className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/5 cursor-zoom-in bg-brand-dark"
                onClick={() => setLightboxImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado Cera Brows ${i+1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest border border-white/30 px-6 py-3 rounded-full backdrop-blur-md hover:bg-white/10 transition-colors">
                    Ver Detalhe
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={400}>
          <div className="text-center mt-16">
            <Button href={CHECKOUT_URL} className="min-w-[280px]">Quero aplicar esse método</Button>
          </div>
        </Reveal>
      </Section>

      {/* 5. MÓDULOS */}
      <Section bgGradient>
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-8">
             <Reveal className="sticky top-32">
               <h2 className="text-4xl md:text-5xl font-serif leading-tight text-white mb-6">
                 O que você vai <br/> <span className="text-brand-gold italic">aprender</span> na Formação
               </h2>
               <p className="text-brand-sand/70 text-lg font-light leading-relaxed mb-8">
                 Do básico da cera até o acabamento ombré perfeito com henna. Um currículo completo desenhado para transformar seu atendimento.
               </p>
               <div className="hidden md:block">
                 <Button variant="outline" href={CHECKOUT_URL}>Ver Conteúdo Completo</Button>
               </div>
             </Reveal>
          </div>
          <div className="md:col-span-7">
            {/* Mobile: Accordion */}
            <div className="block md:hidden">
              <Accordion items={MODULES.map(m => ({ id: m.id, title: m.title, content: m.description }))} />
            </div>

            {/* Desktop: Cards Grid */}
            <div className="hidden md:grid grid-cols-1 gap-4">
              {MODULES.map((m, idx) => (
                <Reveal key={m.id} delay={idx * 50} width="100%">
                  <div className="bg-white/[0.03] border border-white/5 p-8 rounded-2xl transition-all duration-300 hover:bg-white/[0.06] hover:border-brand-gold/30 group flex items-start gap-6">
                    <div className="mt-1 w-8 h-8 rounded-full border border-brand-gold/30 flex items-center justify-center text-xs text-brand-gold font-serif italic group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-brand-offwhite mb-2 group-hover:text-brand-gold transition-colors">{m.title}</h3>
                      <p className="text-brand-sand/60 font-light leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* NEW BONUS SECTION - KIT COMERCIAL (Updated Content) */}
      <Section className="relative overflow-hidden">
         {/* Background decor */}
         <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none"></div>

         <div className="max-w-4xl mx-auto relative z-10">
            <Reveal width="100%">
               <div className="flex flex-col items-center text-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
                     <Star className="w-3 h-3" /> Novo Bônus Exclusivo
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                     Kit de Conteúdo Premium <span className="text-brand-gold italic">Cera Brows</span> <br/>
                     (Canva Editável)
                  </h2>
                  <p className="text-brand-sand/80 text-lg font-light leading-relaxed mb-10 max-w-2xl">
                     Posts prontos e editáveis no Canva para divulgar o método com visual premium — a aluna só ajusta logo e cores e publica.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 w-full text-left bg-brand-dark/40 border border-white/5 p-8 rounded-2xl mb-10 backdrop-blur-sm">
                     <div className="space-y-6">
                        <h3 className="text-brand-offwhite font-serif text-xl border-l-2 border-brand-gold pl-4">O que vem no Kit:</h3>
                        <ul className="grid grid-cols-1 gap-3">
                           {[
                              "Templates premium para feed e stories",
                              "Conteúdos explicando o Método Cera Brows e seus diferenciais",
                              "Peças prontas para responder objeções (“Dói?”, “É seguro?”, “Fica natural?”, “Serve pra minha cliente?”)",
                              "Textos curtos (legendas) para acompanhar os posts",
                              "Organização por temas para facilitar a postagem"
                           ].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 text-brand-sand/70 text-sm">
                                 <div className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0"></div>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>

                     <div className="flex flex-col justify-center">
                        <p className="text-sm text-brand-sand/50 uppercase tracking-widest mb-4">Objeções mapeadas:</p>
                        <div className="flex flex-wrap gap-2">
                           {["Dói?", "É seguro?", "Fica natural?", "Serve pra minha cliente?"].map((tag, i) => (
                              <span key={i} className="px-3 py-2 rounded-md bg-white/5 text-brand-offwhite text-sm border border-white/10">
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  <Button href={CHECKOUT_URL} variant="outline" className="text-sm py-3 px-8">
                     Quero garantir esse Kit
                  </Button>
               </div>
            </Reveal>
         </div>
      </Section>

      {/* 6. VOCÊ RECEBE (Premium Cards) */}
      <Section darker borderTop>
        <Reveal width="100%">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">Além das aulas, você recebe:</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BONUSES.map((bonus, i) => {
            const Icon = bonus.icon === 'Ruler' ? Ruler : bonus.icon === 'Book' ? Book : bonus.icon === 'Palette' ? Palette : Users;
            return (
              <Reveal key={i} delay={i * 150} className="h-full">
                <div className="h-full bg-brand-dark p-8 rounded-[2rem] border border-white/5 hover:border-brand-gold/30 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors"></div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="w-14 h-14 bg-brand-chocolate rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-dark text-brand-gold transition-colors duration-500 shadow-xl border border-white/5">
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-serif mb-3 text-brand-offwhite">{bonus.title}</h3>
                    <p className="text-brand-sand/60 font-light leading-relaxed text-sm">{bonus.description}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
        <Reveal width="100%">
          <div className="text-center mt-16">
            <Button href={CHECKOUT_URL}>Quero entrar na Formação</Button>
          </div>
        </Reveal>
      </Section>

      {/* 7. DEPOIMENTOS (Testimonial Grid) */}
      <Section>
        <Reveal width="100%">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">O que as alunas dizem</h2>
            <p className="text-brand-sand/70 font-light text-lg">Método bem aplicado muda a percepção da cliente — e isso muda seu retorno.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <div className="bg-brand-brown/10 p-8 rounded-2xl border border-white/5 hover:border-brand-gold/20 transition-all duration-300 h-full flex flex-col justify-between hover:bg-brand-brown/20">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3 h-3 text-brand-gold fill-current" />
                    ))}
                  </div>
                  <p className="text-brand-offwhite/90 mb-8 leading-relaxed font-light text-lg italic">"{t.text}"</p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="w-12 h-12 rounded-full bg-brand-sand/10 flex items-center justify-center text-brand-gold font-serif text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-brand-offwhite tracking-wide uppercase">{t.name}</p>
                    <p className="text-xs text-brand-sand/50 mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. AUTORIDADE (Composite Layout: Swapped Images for Priority) */}
      <Section darker borderTop>
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
           
           {/* IMAGE COMPOSITION */}
           <div className="w-full md:w-5/12 relative group perspective-1000">
              <Reveal width="100%">
                {/* Decorative glow behind */}
                <div className="absolute top-10 -left-10 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
                
                {/* Container Ratio */}
                <div className="relative w-full aspect-[4/5]">
                    
                    {/* Gold Frame Hint (Behind Main Image) */}
                    <div className="absolute top-4 left-4 w-[75%] h-[85%] border border-brand-gold/30 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>

                    {/* IMAGEM 1 (MAIN - NOW THE REQUESTED PHOTO) */}
                    <div className="absolute top-0 left-0 w-[75%] h-[85%] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] border border-white/10 bg-brand-brown z-10">
                       <img 
                         src="https://i.postimg.cc/QMYDqkVF/Whats-App-Image-2025-12-20-at-18-07-56.jpg" 
                         alt="Dayanna Ursini Principal" 
                         className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* IMAGEM 2 (SECONDARY - NOW THE PORTRAIT) */}
                    <div className="absolute bottom-0 right-0 w-[60%] h-[45%] rounded-[1.5rem] overflow-hidden shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9)] border-4 border-brand-chocolate z-20 group-hover:scale-105 transition-transform duration-500 ease-out">
                         <img 
                           src="https://i.postimg.cc/c1jmNyy4/Whats-App-Image-2025-12-20-at-16-22-32.jpg" 
                           alt="Dayanna Ursini Portrait" 
                           className="w-full h-full object-cover"
                         />
                         {/* Badge no Workshop */}
                         <div className="absolute bottom-3 right-3 bg-brand-gold/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Mentora
                         </div>
                    </div>

                </div>
              </Reveal>
           </div>
           
           {/* TEXT CONTENT */}
           <div className="w-full md:w-7/12 space-y-10">
              <Reveal delay={200}>
                <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">Com quem você <br/> vai aprender</h2>
              </Reveal>
              <Reveal delay={300}>
                <h3 className="text-3xl text-brand-gold font-serif italic">Dayanna Ursini</h3>
              </Reveal>
              <Reveal delay={400}>
                <div className="space-y-6 text-brand-sand/80 font-light text-lg leading-relaxed border-l-2 border-brand-gold/10 pl-6">
                  <p>
                    Dayanna Ursini atua há mais de 9 anos na área, é Embaixadora da Dermo Makeup e referência em educação no segmento, com experiência em cursos e workshops para profissionais que buscam acabamento premium e atendimento com segurança.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={500}>
                <div className="pt-6">
                  <span className="inline-block border-b border-brand-gold text-brand-gold text-sm uppercase tracking-wider pb-2 font-medium">
                    +9 anos de experiência • Embaixadora Dermo Makeup • Cursos e workshops
                  </span>
                </div>
              </Reveal>
           </div>
        </div>
      </Section>

      {/* 9. OFERTA + PREÇO */}
      <Section id="offer" bgGradient>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
           {/* Imagem Lateral (Desktop) */}
           <div className="hidden lg:block lg:col-span-5 relative">
              <Reveal>
                 <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                       src="https://i.postimg.cc/c1jmNyy4/Whats-App-Image-2025-12-20-at-16-22-32.jpg" 
                       alt="Mentora Dayanna Ursini" 
                       className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent"></div>
                 </div>
                 {/* Decorative Elements */}
                 <div className="absolute top-6 -left-6 w-full h-full border border-brand-gold/20 rounded-[2.5rem] -z-10"></div>
              </Reveal>
           </div>

           {/* Card da Oferta (Compact Version) */}
           <div className="lg:col-span-7">
              <Reveal width="100%">
                <div className="w-full text-center relative">
                  <div className="absolute inset-0 border border-brand-gold/10 rounded-[3rem] transform scale-y-105 scale-x-105 pointer-events-none"></div>
                  
                  <div className="bg-brand-dark/60 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>

                    <span className="inline-block py-1 px-4 border border-brand-gold/30 rounded-full text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-6 bg-brand-gold/5">
                      Oferta Exclusiva
                    </span>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-white">Formação <span className="italic text-brand-gold">Cera Brows</span></h2>
                    
                    <div className="space-y-3 mb-8 text-left max-w-sm mx-auto divide-y divide-white/5">
                      {[
                        "Acesso Imediato",
                        "Molde Cera Brows",
                        "Grupo de Suporte VIP",
                        "Certificado de Conclusão"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 text-brand-sand/80 group text-sm md:text-base">
                          <span className="font-light">{item}</span>
                          <Check className="w-4 h-4 text-brand-gold opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                    </div>

                    <div className="mb-8 bg-brand-gold/5 p-6 rounded-3xl border border-brand-gold/10 inline-block w-full max-w-sm">
                      <p className="text-xs text-brand-sand/40 line-through mb-1 tracking-wide">De R$ 297,00 por</p>
                      <div className="flex flex-col items-center">
                        <span className="text-5xl font-serif font-medium text-white tracking-tight">R$ 97</span>
                        <span className="text-brand-gold text-sm md:text-base font-light mt-1 tracking-wide">ou 12x de R$ 10,03*</span>
                      </div>
                    </div>

                    <Button href={CHECKOUT_URL} fullWidth className="text-lg py-4 hover:scale-[1.02] shadow-brand-gold/20 max-w-md mx-auto">
                      FAZER INSCRIÇÃO AGORA
                    </Button>

                    <div className="mt-6 flex justify-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                       <div className="flex flex-col items-center gap-1.5"><Lock className="w-4 h-4 mb-0.5 text-brand-gold"/> <span className="text-[8px] uppercase tracking-widest">Seguro</span></div>
                       <div className="flex flex-col items-center gap-1.5"><Clock className="w-4 h-4 mb-0.5 text-brand-gold"/> <span className="text-[8px] uppercase tracking-widest">Imediato</span></div>
                       <div className="flex flex-col items-center gap-1.5"><ShieldCheck className="w-4 h-4 mb-0.5 text-brand-gold"/> <span className="text-[8px] uppercase tracking-widest">Garantia</span></div>
                    </div>
                  </div>
                </div>
              </Reveal>
           </div>
        </div>
      </Section>

      {/* 10. FAQ */}
      <Section darker borderTop>
        <Reveal width="100%">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Dúvidas Frequentes</h2>
            <Accordion items={FAQS.map(f => ({ id: f.id, title: f.question, content: f.answer }))} />
          </div>
        </Reveal>
      </Section>

      {/* 11. FOOTER */}
      <footer className="bg-black py-16 border-t border-white/5 relative bg-noise">
        <div className="max-w-screen-xl mx-auto px-6 text-center space-y-8">
          
          {/* FOOTER BRANDING */}
          <div className="flex justify-center mb-4">
            <img 
               src="https://i.postimg.cc/FKNtgkTN/Logo-Bronw-branca.png" 
               alt="Logo Cera Brows" 
               className="h-32 md:h-40 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300" 
             />
          </div>
          
          <h3 className="text-3xl font-serif text-brand-gold italic">Dayanna Ursini</h3>
          <p className="text-brand-sand/40 text-sm max-w-md mx-auto font-light leading-relaxed">
            Ensinando designers a alcançarem a excelência através de métodos seguros e validados.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs text-brand-sand/30 uppercase tracking-widest">
             <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
             <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
             <a href="#" className="hover:text-brand-gold transition-colors">Suporte</a>
          </div>
          <p className="text-[10px] text-brand-sand/20">
            © {new Date().getFullYear()} Formação Cera Brows. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* LIGHTBOX OVERLAY */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Zoom" 
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl animate-fade-up"
          />
        </div>
      )}

      {/* STICKY MOBILE CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-t border-brand-gold/20 p-4 md:hidden z-50 transform transition-all duration-500 ease-in-out ${
          showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-brand-gold uppercase tracking-wider">Oferta Hoje</span>
            <span className="text-lg font-serif font-bold text-white">R$ 97,00</span>
          </div>
          <Button href={CHECKOUT_URL} className="py-3 px-6 text-sm tracking-wide w-auto shadow-none rounded-xl">
            Comprar por R$ 97
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default App;