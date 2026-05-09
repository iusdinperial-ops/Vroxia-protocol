# Deployment Guide — Vroxia Protocol Docs

## Pre-flight checklist

Before deploying, update the following placeholders in `docusaurus.config.js`:

| Field | Current placeholder | Replace with |
|---|---|---|
| `url` | `https://vroxiaprotocol.com` | Official domain or GitHub Pages URL |
| `organizationName` | `vroxia-protocol` | GitHub org/user name |
| X link | `https://x.com/VroxiaProtocol` | Official X URL |
| Instagram link | `https://instagram.com/vroxiaprotocol` | Official Instagram URL |
| Facebook link | `https://facebook.com/vroxiaprotocol` | Official Facebook URL |
| Email | `contact@vroxiaprotocol.com` | Official organization email |

---

## Option A — GitHub Pages (Recommended)

### 1. Initialize and push the repository

```bash
cd vroxia-docs
git init
git add .
git commit -m "feat: initial Vroxia Protocol documentation"
git branch -M main
git remote add origin https://github.com/ORG_NAME/vroxia-docs.git
git push -u origin main
```

### 2. Enable GitHub Pages

In your GitHub repository:
1. Go to **Settings → Pages**
2. Set **Source** to `Deploy from a branch`
3. Select branch **`gh-pages`** and folder **`/ (root)`**
4. Save

The GitHub Actions workflow at `.github/workflows/deploy.yml` triggers automatically on every push to `main`.

### 3. Access the live site

```
https://ORG_NAME.github.io/vroxia-docs/
```

---

## Option B — Custom Domain

If Vroxia Protocol has its own domain (e.g. `docs.vroxiaprotocol.com`):

1. Update `docusaurus.config.js`:
   ```js
   url: 'https://docs.vroxiaprotocol.com',
   baseUrl: '/',
   ```
2. Add a `CNAME` file inside `vroxia-docs/static/` with the domain:
   ```
   docs.vroxiaprotocol.com
   ```
3. Point the DNS CNAME record to `ORG_NAME.github.io`

---

## Manual Deploy (without CI)

```bash
cd vroxia-docs
npm run build
npm run deploy
```
