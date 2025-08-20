import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'La Caverne de Mémé | Déstockage & Reconditionné à Legé',
  description: 'Magasin de déstockage et produits reconditionnés: high-tech, électroménager, gadgets, et plus. Legé (44).',
  metadataBase: new URL('https://la-caverne-de-meme.example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

