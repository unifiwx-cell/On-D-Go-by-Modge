# On D Go by Modge (অন ডি গো বাই মধ্যে)

A modern dessert atelier and specialty coffee destination in Sector V, Kolkata (Indo Japan House).

---

## 🚀 Deployment Guide

### Deploying to Netlify

#### Option A: Automatic via Git (Recommended)
1. Push this project to your GitHub repository.
2. In [Netlify Dashboard](https://app.netlify.com), click **"Add new site" → "Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will automatically detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**. The included `netlify.toml` and `public/_redirects` ensure smooth single-page routing and asset resolution.

#### Option B: Manual Drag & Drop
1. Run `npm run build` in your terminal.
2. Drag and drop the generated `dist` folder into the Netlify Drop zone.

---

### Deploying to GitHub & GitHub Pages

#### Option A: GitHub Actions (Automated, Included)
1. Push this project to GitHub on the `main` (or `master`) branch.
2. Go to your repository **Settings → Pages**.
3. Under **Build and deployment → Source**, select **"GitHub Actions"**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and deploy the website.

#### Option B: Deploy from Branch
1. Run `npm run build`.
2. Push the contents of `dist` to a `gh-pages` branch.
3. In repository **Settings → Pages**, select the `gh-pages` branch and root `/`.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server (Port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
