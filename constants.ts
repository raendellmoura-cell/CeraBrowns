import { ModuleItem, FaqItem, BonusItem, TestimonialItem } from './types';

export const CHECKOUT_URL = "https://pay.hotmart.com/T98968904H?sck=HOTMART_PRODUCT_PAGE&off=3wo1nx5c&hotfeature=32,34&_gl=1*1g9zlz1*_ga*NDg2Mjk4MDAxLjE3NjYyNjUyMDg.*_ga_GQH2V1F11Q*czE3NjYyNjUyMDgkbzEkZzEkdDE3NjYyNjUyMTMkajU3JGwwJGgw&bid=1766265219854";

export const MODULES: ModuleItem[] = [
  {
    id: 'm1',
    title: 'Introdução ao Cera Brows',
    description: 'Visão do método que fideliza e encanta, estabelecendo os pilares do seu novo atendimento.'
  },
  {
    id: 'm2',
    title: 'Entendendo a Cera',
    description: 'Benefícios, contraindicações, tipos, temperatura ideal e cuidados essenciais para segurança.'
  },
  {
    id: 'm3',
    title: 'Materiais e Ferramentas',
    description: 'Pré e pós, complementares e como utilizar o Molde Cera Brows exclusivo.'
  },
  {
    id: 'm4',
    title: 'Riscos e Prevenção',
    description: 'Intercorrências, pele reativa, alergias e checklist completo do que evitar.'
  },
  {
    id: 'm5',
    title: 'Prática e Confiança',
    description: 'Revisão de mapeamento e treino para ganhar segurança antes de atender.'
  },
  {
    id: 'm6',
    title: 'Protocolo Passo a Passo',
    description: 'Execução em partes com foco no acabamento perfeito.'
  },
  {
    id: 'm7',
    title: 'Henna no Cera Brows',
    description: 'Pilares, efeito ombré sofisticado e aplicação prática.'
  },
  {
    id: 'm8',
    title: 'Bônus: Aumentando o Ticket',
    description: 'Como oferecer serviços complementares (ex: buço) para faturar mais.'
  }
];

export const BONUSES: BonusItem[] = [
  {
    title: 'Molde Cera Brows',
    description: 'Ferramenta exclusiva para padronizar e agilizar a execução do design.',
    icon: 'Ruler'
  },
  {
    title: 'Ebook / Apostila',
    description: 'Material de apoio completo para revisar e aplicar sem se perder.',
    icon: 'Book'
  },
  {
    title: 'Grupo de Suporte',
    description: 'Comunidade no WhatsApp para tirar dúvidas e evoluir mais rápido.',
    icon: 'Users'
  },
  {
    title: 'Kit de Conteúdo Premium (Canva Editável)',
    description: 'Posts prontos para divulgar o método com visual premium.',
    icon: 'Palette'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'f1',
    question: 'Preciso ter experiência para fazer a Formação?',
    answer: 'É recomendável que você já seja designer de sobrancelhas, pois o foco é refinar o acabamento com cera e henna. Se você é iniciante do zero, terá que treinar mais os fundamentos de design.'
  },
  {
    id: 'f2',
    question: 'Quais materiais eu preciso para aplicar?',
    answer: 'Você precisará de uma panela de cera (termocera), cera de baixa fusão de qualidade, henna, e materiais descartáveis básicos. No curso indicamos as melhores marcas.'
  },
  {
    id: 'f3',
    question: 'O método serve para qual tipo de sobrancelha?',
    answer: 'Serve para a grande maioria das clientes que buscam limpeza, definição e alinhamento. Ensinamos a avaliar a pele para garantir segurança.'
  },
  {
    id: 'f4',
    question: 'Como acesso o curso depois da compra?',
    answer: 'Assim que o pagamento for confirmado, você recebe um e-mail da Hotmart com o link de acesso imediato à área de membros.'
  },
  {
    id: 'f5',
    question: 'Como funciona a garantia?',
    answer: 'Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo, basta solicitar o reembolso na plataforma que devolvemos 100% do valor.'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Camila Rodrigues',
    role: 'Designer há 2 anos',
    text: 'Eu demorava 1 hora pra fazer uma sobrancelha. Com o método da Day, baixei pra 30 minutos e o acabamento fica muito mais limpo. Minha agenda lotou.',
  },
  {
    id: 't2',
    name: 'Fernanda Souza',
    role: 'Esteticista',
    text: 'Tinha muito medo de usar cera no rosto. O módulo de segurança me deu a confiança que faltava. Hoje é o serviço que mais vendo.',
  },
  {
    id: 't3',
    name: 'Juliana Paiva',
    role: 'Designer Iniciante',
    text: 'O Molde Cera Brows salvou minha vida! Meus designs ficavam tortos, agora tenho um padrão. As clientes elogiam muito.',
  }
];