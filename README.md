# Dentalid — Site vitrine du Cabinet Dentaire Dr Marzak

Site vitrine moderne pour le cabinet dentaire à Champs‑sur‑Marne. Le projet est construit avec Vite, React, TypeScript et Tailwind CSS.

## Démarrage rapide

Pré‑requis : Node.js 20.19+ ou 22.12+ et npm.

```sh
npm install
npm run dev
```

Le site est ensuite accessible sur l’URL affichée par Vite.

## Scripts utiles

```sh
npm run dev      # serveur de dev
npm run build    # build de production
npm run preview  # prévisualisation du build
npm run lint     # lint ESLint
```

## Structure du projet

- `src/pages/Index.tsx` : page d’accueil et sections principales.
- `src/components/` : composants UI (carousel, FAQ, équipe, etc.).
- `public/images/` : images du site (héros, services, etc.).
- `public/favicon.svg` : favicon du site.

## Personnalisation rapide

- Textes principaux : `src/pages/Index.tsx`
- Images : remplacer dans `public/images/` en conservant les mêmes chemins.
- Couleurs / styles : via Tailwind (`tailwind.config.ts`) et les classes utilitaires.

## Déploiement

```sh
npm run build
```

Le dossier `dist/` contient les fichiers statiques à déployer sur votre hébergeur (Netlify, Vercel, OVH, etc.).
