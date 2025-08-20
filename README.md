# La Caverne de Mémé — Site vitrine (Next.js 14 + TypeScript)

Projet Next.js (App Router) pour le magasin de déstockage et produits reconditionnés « La Caverne de Mémé » à Legé (44).

## Stack
- Next.js 14 (App Router) + TypeScript
- CSS Modules (styles isolés par composant)
- framer-motion (animations)
- lucide-react (icônes)
- Déploiement: Vercel

## Démarrage
```bash
npm install
npm run dev
```
Ouvrez `http://localhost:3000`.

## Build & Start (prod)
```bash
npm run build
npm start
```

## Déploiement sur Vercel
1. Créez un nouveau projet sur Vercel et connectez ce repo.
2. Réglages par défaut (Framework: Next.js). Aucune variable d’env requise.
3. Déployez. Vercel détecte `next build` et gère l’hébergement.

## Structure
- `src/app` : pages (App Router)
- `src/components` : composants UI (`Header`, `Footer`, sections)
- `src/styles` : CSS Modules

## Accessibilité
- Sémantique: `header`, `main`, `footer`, `nav`, `section`, `h1..h3`
- Labels explicites, attributs ARIA pour les erreurs de formulaire
- Respect `prefers-reduced-motion`

## Remarques
- Les images produits utilisent Unsplash (autorisé via `next.config.mjs`). Remplacez par vos visuels.
- Le formulaire de contact est côté client uniquement (pas d’envoi). Connectez-le à un service (Formspree, API route, etc.) selon vos besoins.