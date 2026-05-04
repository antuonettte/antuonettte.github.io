npm# Turner Technologies — React Website

A dark-themed, engineering-forward website for Turner Technologies, built with React and CSS Modules.

## Project Structure

```
turner-technologies/
├── public/
│   └── index.html
└── src/
    ├── App.jsx               ← Root component + client-side routing
    ├── index.js              ← Entry point
    ├── components/
    │   ├── Navbar.jsx        ← Fixed top nav
    │   ├── Navbar.module.css
    │   ├── Footer.jsx        ← Footer with nav links
    │   └── Footer.module.css
    ├── pages/
    │   ├── Home.jsx          ← Hero + services strip
    │   ├── Home.module.css
    │   ├── About.jsx         ← Bio, skills, approach
    │   ├── About.module.css
    │   ├── Gallery.jsx       ← Project cards grid
    │   ├── Gallery.module.css
    │   ├── Contact.jsx       ← Inquiry form
    │   └── Contact.module.css
    └── styles/
        └── global.css        ← CSS variables, resets, shared utilities
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

## Customisation Checklist

### Content
- [ ] `src/pages/About.jsx` — Update bio copy, skills list, and badges
- [ ] `src/pages/Home.jsx` — Update stats (years, load time, etc.)
- [ ] `src/pages/Gallery.jsx` — Replace placeholder projects with real ones
- [ ] `src/pages/Contact.jsx` — Replace `hello@turnertech.co` with your email
- [ ] `src/pages/Contact.jsx` — Update starting price if needed
- [ ] `public/index.html` — Update `<meta name="description">` and `<title>`

### Form Backend
The contact form logs to the console by default. Wire it up to one of:
- **Formspree** — https://formspree.io (no backend needed, free tier available)
- **EmailJS** — https://www.emailjs.com (send directly from the browser)
- **Your own API** — POST to your Express/Node endpoint from `handleSubmit`

In `Contact.jsx`, find the `handleSubmit` function and replace the `console.log` with your integration.

### Branding
- Colors: edit CSS variables in `src/styles/global.css` (`:root` block)
- Fonts: swap the Google Fonts import at the top of `global.css`
- Logo text: edit `TURNER.TECH` in `src/components/Navbar.jsx`

### Routing (optional upgrade)
Currently uses simple React state for navigation. To add URL-based routing:
```bash
npm install react-router-dom
```
Then wrap `<App>` in `<BrowserRouter>` and replace the `activePage` state with `useNavigate` / `<Routes>`.
