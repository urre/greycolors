# GitHub Pages Deployment Guide

Your project is now configured for GitHub Pages deployment! 🚀

## Two Deployment Options

### Option 1: Manual Deployment (Quick & Easy)

Simply run:
```bash
npm run deploy
```

This will build your project and push it to the `gh-pages` branch automatically.

### Option 2: Automatic Deployment with GitHub Actions (Recommended)

The workflow file is already created at `.github/workflows/deploy.yml`.

**Setup Steps:**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Migrate to Vite + TypeScript and add GitHub Pages deployment"
   git push origin main
   ```

2. Enable GitHub Pages in your repository:
   - Go to: https://github.com/urre/greycolors/settings/pages
   - Under "Source", select **GitHub Actions**
   - Save the settings

3. The workflow will automatically deploy on every push to `main` or `master` branch

## Your GitHub Pages URL

Once deployed, your site will be available at:
**https://urre.github.io/greycolors/**

## Configuration Details

- ✅ Base path set to `/greycolors/` in `vite.config.ts`
- ✅ Deploy scripts added to `package.json`
- ✅ GitHub Actions workflow created
- ✅ `gh-pages` package installed

## Testing Locally

To test the production build locally:
```bash
npm run build
npm run preview
```

## Troubleshooting

If assets aren't loading after deployment:
- Verify the base path in `vite.config.ts` matches your repo name
- Check that GitHub Pages is enabled and set to use GitHub Actions
- Wait a few minutes for the deployment to complete

## First Deployment

For your first deployment, I recommend using **Option 1** (manual):
```bash
npm run deploy
```

Then set up GitHub Pages to use the `gh-pages` branch:
1. Go to Settings → Pages
2. Select "Deploy from a branch"
3. Choose `gh-pages` branch and `/ (root)` folder
4. Save

Later you can switch to GitHub Actions for automatic deployments.
