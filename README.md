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

Le projet Pages `ismailbahloul-com` est relié au repo : chaque push sur `main`
déclenche le build et la mise en ligne, sans aucun secret à gérer.

```bash
npm run deploy   # déploiement manuel depuis la machine, via wrangler
```

`wrangler pages deploy` reste l'échappatoire si l'intégration Git casse.

Le workflow `.github/workflows/ci.yml` ne fait que vérifier que le build passe —
il ne déploie pas, pour éviter un double déploiement.

Node est imposé par `.nvmrc` (24) : Astro refuse les versions antérieures à
22.23.4, et le runner GitHub en fournissait une plus ancienne.

Le domaine est branché dans **Cloudflare Pages → Custom domains**
(`ismailbahloul.com` et `www`). Ne pas ajouter de A record à la main.
Une Redirect Rule renvoie `www` vers l'apex en 301.

## Publier le CV

Le PDF vient du pipeline `job-applier` (RenderCV), pas de ce repo :

```bash
# dans job-applier
./scripts/render.sh profiles/cdi-france/cv.yaml
cp profiles/cdi-france/rendered/*.pdf ../ismailbahloul.com/public/cv.pdf
```

## Règle de contenu

Tout ce qui est écrit ici doit être **vrai et vérifiable**. Pas de chiffre
inventé, pas de techno survolée une fois présentée comme maîtrisée. Ce site est
une preuve, pas un argumentaire.
