# Personal site

A single-page site with your projects and skills. Plain HTML — no build step.

Everything served lives in `public/`; files outside it (like this README) are not part of the website.

- `public/index.html` — layout and styles (you rarely need to touch this)
- `public/content.js` — **all your text**: name, bio, links, projects, skills
- `public/images/` — profile photo and project screenshots, referenced from `content.js`

## Preview locally

Open `public/index.html` in a browser, or run:

```bash
cd ~/personal-site/public && python3 -m http.server 8000
```

then visit http://localhost:8000.

## Features

- Projects grid with clickable cards (image optional)
- Grouped skills list
- Light & dark mode (follows your system, with a toggle)
- Empty sections hide themselves

## Put it online (free)

**GitHub Pages**
1. Create a repo named `your-username.github.io`
2. Push these files to it
3. Your site is live at `https://your-username.github.io`

**Netlify / Cloudflare Pages / Vercel** — drag-and-drop this folder in their dashboard, or connect the repo. All support custom domains.
