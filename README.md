# Shaadi Sutra

The Wedding Wardrobe Edit for Kalpak & Shreeyas, 3 to 5 December 2026.
A swipeable lookbook that tells guests what to wear at each event.

## Folder

```
index.html        the page
css/style.css     all styling
js/app.js         event content, swiping, falling petals animation
images/           photos (cover, one per event) and outfit illustrations (*_fig.jpg)
.nojekyll         tells GitHub Pages to serve files as they are
```

No build step and no dependencies. Fonts load from Google Fonts.

## Put it live on GitHub Pages

1. Create a new repository on GitHub, for example `shaadi-sutra`. Make it Public.
2. Click **Add file > Upload files**, drag in everything inside this folder
   (index.html, css, js, images, .nojekyll, README.md) and click **Commit changes**.
   `.nojekyll` is hidden on Mac and Windows; it is optional, the site works without it.
3. Go to **Settings > Pages**. Under **Build and deployment**, set Source to
   **Deploy from a branch**, Branch to **main** and folder to **/ (root)**, then **Save**.
4. After a minute or two the site is live at
   `https://<your-username>.github.io/shaadi-sutra/`

## WhatsApp link preview

For the cover photo to show when you share the link, change the `og:image` line in
`index.html` to the full address once the site is live, for example:

```html
<meta property="og:image" content="https://<your-username>.github.io/shaadi-sutra/images/cover.jpg">
```

## Editing

- **Event text, dates, dress codes, colours:** the `EVENTS` list at the top of `js/app.js`.
- **Cover text:** the `cover` block in `js/app.js`.
- **Photos:** replace a file in `images/` with one of the same name.
- Each screen has its own link, e.g. `.../#sangeet`, handy for sending one event.

## Preview on your computer

Open `index.html` in a browser, or run `python3 -m http.server` inside the folder
and visit http://localhost:8000.
