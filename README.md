# Ramble Ventures Marketing — MetaSlider Dashboard

A branded marketing dashboard for planning MetaSlider (WordPress slideshow/gallery plugin) YouTube content: daily AI-generated video ideas, a to-do list, a searchable video library, and an AI chat assistant.

## Project structure

```
.
├── index.html                     # Page structure
├── css/
│   └── style.css                  # All styling (brand colors, layout, components)
├── js/
│   └── app.js                     # App logic, seed data, state, rendering
├── .github/workflows/deploy.yml   # GitHub Actions workflow that deploys to GitHub Pages
└── .nojekyll                      # Tells GitHub Pages not to run Jekyll on this static site
```

## Important: AI features

The "Refresh Ideas" button and the AI chat assistant call `window.cowork.askClaude(...)`, a bridge that only exists when this dashboard is opened inside **Cowork** (as a Cowork artifact). When this project is hosted on GitHub Pages (or anywhere outside Cowork), those two features will show a small notice instead of running, but everything else — today's seeded ideas, the to-do list, and the video library — works normally as a static site.

If you want the AI features to work on the public GitHub Pages copy too, you'll need to replace the `window.cowork.askClaude(...)` calls in `js/app.js` (see `regenerateIdeas()` and `sendChat()`) with calls to your own backend/API that wraps the Claude API, since a static site can't safely hold an API key in the browser.

## Deploying to GitHub Pages

This repo includes a ready-to-go GitHub Actions workflow (`.github/workflows/deploy.yml`) that publishes the site automatically.

1. Create a new GitHub repository and push this project to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. In your repository on GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions** (not "Deploy from a branch").
4. Push any commit to `main` (or re-run the workflow manually from the **Actions** tab) — the included workflow will build and deploy automatically.
5. Your dashboard will be live at `https://<your-username>.github.io/<your-repo>/`.

No build step or dependencies are required — it's a plain static site, so the workflow just uploads the files as-is and publishes them.

## Updating the data

`js/app.js` contains four constants near the top that hold the dashboard's content:

- `SYNC_META` — last-checked dates shown in Settings and the Video Library.
- `EXISTING_VIDEOS` — the seeded Video Library (already-published MetaSlider videos).
- `BLOG_TOPICS` — short summaries of MetaSlider blog/doc topics used to ground new ideas.
- `SEED_IDEAS` — today's default set of video ideas shown before any AI regeneration.

Inside Cowork, these are refreshed automatically once a day by a scheduled task that checks the MetaSlider YouTube channel and blog. On this standalone copy, update them by hand whenever you want to refresh the seeded content.

## Branding

- Primary blue: `#2A4A93`
- Background: white, text: near-black (`#161616`)
- Font: Arial / Helvetica, sans-serif
