# ismailbahloul.com

Page personnelle — **Ismaïl Bahloul**, ingénieur systèmes Linux & DevOps.

Une seule page, monochrome, sans JavaScript : la marque, un profil court, le CV
en PDF et quatre liens. C'est tout, volontairement.

## Stack

- **Astro** (sortie statique)
- **Cloudflare Pages** (build à chaque push sur `main`)

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
│   ├── _headers      # en-têtes de sécurité
│   ├── _redirects    # anciennes URLs (/projets, /cv) → 301
│   ├── favicon.svg
│   ├── og.png        # carte de partage
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── layouts/Base.astro   # head, SEO, JSON-LD
    ├── pages/index.astro    # la page
    └── styles/global.css    # monochrome, clair/sombre automatique
```

Le thème suit `prefers-color-scheme` : fond blanc et encre noire par défaut,
inversé si le système est en sombre. Aucune couleur d'accent.

## Déploiement

Le projet Pages `ismailbahloul-com` est relié au repo : chaque push sur `main`
déclenche le build et la mise en ligne.

```bash
npm run deploy   # déploiement manuel, via wrangler (secours)
```

Le workflow `.github/workflows/ci.yml` vérifie seulement que le build passe.
Node est imposé par `.nvmrc` (24) : Astro refuse les versions antérieures à
22.23.4.

Le domaine est branché dans **Cloudflare Pages → Custom domains**, et une
Redirect Rule renvoie `www` vers l'apex en 301.

## Publier le CV

Le PDF vient du pipeline `job-applier` (RenderCV), pas de ce repo :

```bash
# dans job-applier
./job publish     # rend profiles/cdi-france/cv.yaml et copie le PDF ici
```

Puis commit + push, et le site se reconstruit.

## Règle de contenu

Tout ce qui est écrit ici doit être **vrai et vérifiable**. Ce site est une
preuve, pas un argumentaire.
