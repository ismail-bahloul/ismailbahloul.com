# ismailbahloul.com

Portfolio personnel — **Ismaïl Bahloul**, ingénieur systèmes Linux & DevOps.

Site statique, zéro JavaScript, zéro dépendance à l'exécution : Astro génère du
HTML et une feuille de style, puis c'est servi par Cloudflare Pages.

## Stack

- **Astro** (sortie statique)
- **Cloudflare Pages** (hébergement)
- **GitHub Actions** (build + déploiement)

## Développement

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # sert dist/ localement
```

## Structure

```text
├── public/
│   ├── cv.pdf        # CV publié (voir plus bas)
│   ├── _headers      # en-têtes de sécurité (Cloudflare Pages)
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── layouts/Base.astro    # head, SEO, JSON-LD, nav, footer
    ├── pages/
    │   ├── index.astro       # accueil
    │   ├── projets.astro     # études de cas
    │   └── cv.astro
    └── styles/global.css
```

## Déploiement

Deux méthodes, **pas les deux à la fois** :

1. **GitHub Actions** (celle du repo) — il faut les secrets
   `CLOUDFLARE_API_TOKEN` et `CLOUDFLARE_ACCOUNT_ID` dans les réglages du repo,
   et le projet Pages créé une fois :

   ```bash
   npx wrangler pages project create ismailbahloul-com
   ```

2. **Intégration Git de Cloudflare Pages** — dans le dashboard, connecte le
   repo, framework `Astro`, build `npm run build`, sortie `dist`. Aucun secret
   à gérer ; il faut alors supprimer `.github/workflows/deploy.yml` pour éviter
   un double déploiement.

Le domaine `ismailbahloul.com` est branché dans Cloudflare Pages
(Custom domains). Cloudflare crée l'enregistrement CNAME lui-même — ne pas
ajouter de A record à la main.

## Publier le CV

Le PDF vient du pipeline `job-applier` (RenderCV), pas de ce repo :

```bash
# dans job-applier
./scripts/render.sh profiles/cdi-france/cv.yaml
./job publish          # copie le PDF rendu vers public/cv.pdf ici
```

## Règle de contenu

Tout ce qui est écrit ici doit être **vrai et vérifiable**. Pas de chiffre
inventé, pas de techno survolée une fois présentée comme maîtrisée. Ce site est
une preuve, pas un argumentaire.
