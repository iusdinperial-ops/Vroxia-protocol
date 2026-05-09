# Deployment Guide — Vroxia Protocol Docs

## GitHub Pages Setup

### 1. Create a GitHub repository

```bash
git init
git add .
git commit -m "feat: initial Vroxia Protocol documentation"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/vroxia-docs.git
git push -u origin main
```

### 2. Update docusaurus.config.js

Before pushing, edit `docusaurus.config.js` and replace the placeholders:

```js
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/vroxia-docs/',
organizationName: 'YOUR_USERNAME',
projectName: 'vroxia-docs',
```

### 3. Enable GitHub Pages

In your GitHub repository:
1. Go to **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Select branch **`gh-pages`** and folder **`/ (root)`**
4. Save

### 4. Trigger deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers automatically on every push to `main`. It will:
- Install dependencies
- Build the static site
- Push the output to the `gh-pages` branch

### 5. Access your site

After the first successful workflow run, your docs will be live at:

```
https://YOUR_USERNAME.github.io/vroxia-docs/
```

---

## Manual Deployment (alternative)

If you prefer to deploy manually without GitHub Actions:

```bash
npm run build
npm run deploy
```

This uses the built-in Docusaurus deploy command which pushes directly to `gh-pages`.
