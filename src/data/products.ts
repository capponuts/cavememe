export type Product = {
  name: string;
  description: string;
  image: string;
  category: string;
  price: string;
};

export const products: Product[] = [
  {
    name: 'Smartphone reconditionné X100',
    description: 'Écran 6.1", 128 Go, batterie testée, garantie 6 mois.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
    category: 'High-tech',
    price: '149€'
  },
  {
    name: 'Casque Audio Pro',
    description: 'Son clair, arceau confortable, câble détachable.',
    image: 'https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1200&auto=format&fit=crop',
    category: 'Audio',
    price: '29€'
  },
  {
    name: 'Aspirateur balai',
    description: 'Puissant, léger, idéal pour petits espaces. Reconditionné A+',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    category: 'Électroménager',
    price: '79€'
  },
  {
    name: 'Montre connectée S2',
    description: 'Suivi santé, notifications, autonomie 2 jours.',
    image: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1200&auto=format&fit=crop',
    category: 'High-tech',
    price: '39€'
  },
  {
    name: 'Grille-pain Inox',
    description: '2 fentes larges, fonction décongélation, facile à nettoyer.',
    image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c86?q=80&w=1200&auto=format&fit=crop',
    category: 'Électroménager',
    price: '19€'
  },
  {
    name: 'Mini projecteur',
    description: 'Compact, idéal pour soirées cinéma, HDMI/USB.',
    image: 'https://images.unsplash.com/photo-1522784081430-8f30bd2e5f8b?q=80&w=1200&auto=format&fit=crop',
    category: 'Gadgets',
    price: '59€'
  }
];

