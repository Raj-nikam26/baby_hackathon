# ☾ Pip's Dream Workshop

> *"I build the dreams you fall asleep inside."*

The portfolio homepage of **Pip**, Junior Dream Engineer at the Midnight Nursery, built for **[Baby's First Website](https://hax.baby/baby-problem)** (haX.baby, 17–19 Oct 2026), **Track 1: The Skull Baby**.

It's styled as a 1998 GeoCribs homepage that Pip made on a pastel "PipOS 98" desktop: a dial-up boot screen, a marquee, beveled windows, a Start menu, a taskbar, a webring, 88×31 badges and an "under construction" sign. Underneath that, the craft is modern: Web Audio, SVG motion, CSS masks, canvas, and no frameworks or build step.

**Live site:** _add your deploy URL here_
**Repo:** _add your GitHub URL here_

---

## Brief checklist

| Requirement | Where |
| --- | --- |
| **What Pip is** | Hero `pip.exe` window: an interactive SVG Pip, plus a `Pip — Properties` character sheet |
| **What Pip does** (3+ works) | **All 6** canon projects: Lullaby Lab, Nightlight Collection, Dream Delivery Routes, Rattle & Block Toys, Bedtime Storybook, Growth Chart |
| **Pip's story** (not a text wall) | Chapter 01: five scroll-driven animated scenes (falling star → cradle → sleepless ghosts → firefly jar → the job) |
| **Immersion** | Eyes follow the cursor and the head tilts (touch fallback: Pip glances around by itself), clicks, sound with a mute toggle |
| **Mobile-friendly** | Built mobile-first; at phone size the story re-frames and the map camera follows Pip |
| **Easter egg** | Five of them (see below) |
| Pip is the host/narrator | Every line on the site is in Pip's voice |

### Tiers
- **Tier 1:** cursor-reactive character ✓ · scroll-driven story ✓ · day/night mood toggle that changes Pip's expression *and* the palette ✓ · responsive ✓ · easter egg ✓
- **Tier 2:** Lullaby Lab with real Web Audio ✓ · flashlight cursor (CSS mask) ✓ · Dream Delivery map with SVG path motion synced to scroll ✓ · interactive page-flip storybook (buttons, ← →, swipe, tap) ✓ · mini-game ✓
- **Tier 3:** live guestbook backend ✓ · Pip remembers you (visit count, your name, custom greetings) ✓ · Pip chats back (rule-based PipIM, in character) ✓ · built lean for Lighthouse (no framework, ~100 KB of images, WebP, lazy-loading) ✓

### Side quests (+13)
- **Live Guestbook** (+2): "Dream Wish Guestbook", persisted with Netlify Functions + Netlify Blobs, with a kindness filter, a honeypot and a rate limit
- **Sparkle Cursor Trail** (+2): stars, tiny dreamy bones, hearts and bubbles on a canvas
- **Hit Counter Odometer** (+1): rolling green digits, backed by the server
- **Click Sounds + Mute** (+3): every click chimes; the mute button is always visible in the taskbar and the choice is remembered
- **Responsive Chaos Mode** (+5): the ✺ button. Windows tilt and scatter, title bars turn into rainbow stripes, Comic Sans takes over, and the layout takes on a different personality at each size: *pocket* (phone), *scrapbook* (tablet) and *MAXIMUM* (desktop). Pip notices when you resize, and on desktop you can drag windows by their title bars.

### Easter eggs (🔑 counter in the taskbar)
1. **Pom-Pom Polka**: boop Pip's nightcap pom-pom 3×
2. **Nap time**: stay still for about 30 s and Pip falls asleep; click to wake Pip
3. **All lit**: switch on all 6 nightlights in the dark closet
4. **The Attic**: knock on the moon 3×
5. **Dream Disco**: ↑ ↑ ↓ ↓ ← → ← → B A (on touch: tap the 🔑 button 5× fast)

Bonus jokes: Start → Shut Down ("It's now safe to go to sleep."), window ✕ buttons that refuse to close, and a webring with only one member.

---

## The story behind the build

Pip hates silence, so the site is never quiet. Every sound is **synthesized live with Web Audio**: the music-box bells, the giggles, the rattle, the dial-up modem, the AIM door-open sound and the page-flip swish. That means there are no audio files to download and nothing to license. The Lullaby Lab plays two public-domain classics plus a **"tonight song"**: a waltz generated from a seed made of tonight's date, so everyone who visits on the same night hears the same song, and it never plays again.

The proudest bits:
- **A puppet, not a picture.** The hero Pip is hand-built SVG. Its glowing pupils ease toward your pointer, its head tilts, it blinks (sometimes twice), it gets sleepy in day mode, its eyes become ^^ when you boop it, and it dozes off if you ignore it.
- **The flashlight closet.** The darkness is a single div whose CSS mask is several radial gradients *intersected*: one hole for your flashlight and one for every lamp you've switched on.
- **The delivery route.** One SVG path drives everything: Pip's position, the glowing trail, which windows light up, the speech bubbles and the odometer. On phones the camera follows Pip.
- **PipIM.** An AIM-style buddy window where Pip asks your name, remembers it on later visits, tells jokes, comforts you if you can't sleep, and gives hints about the secrets.

## Run it locally

```bash
npm run dev
```
→ http://localhost:5173. This uses the zero-dependency `dev-server.mjs`, which serves the site and fakes the API in memory. Opening `index.html` directly also works; the guestbook and counter then fall back to "this browser only" mode.

## Deploy (Netlify, ~2 minutes)
1. Push this repo to GitHub (public).
2. On Netlify, choose **Add new site → Import from Git** and pick the repo. No build command is needed; `netlify.toml` handles it.
3. The functions in `netlify/functions/` deploy automatically, and Netlify Blobs needs no setup.

The site also works as plain static hosting (GitHub Pages, Vercel static); the guestbook and counter then quietly switch to local mode.

## Project structure
```
index.html            all sections + shared SVG sprites
css/style.css         themes (day/night), windows, layout, Chaos Mode
js/main.js            boot screen, taskbar, mood, sound, sparkles, hit counter
js/pip.js             the interactive SVG Pip puppet
js/audio.js           Web Audio synth (bells, giggles, rattle, modem…) and tune player
js/story.js           scroll-driven origin story
js/lullaby.js         Lullaby Lab + generative "tonight song"
js/nightlights.js     flashlight closet
js/routes.js          Dream Delivery Routes
js/toys.js            Catch the Dreams game, rattle, letter blocks
js/storybook.js       "Goodnight, Boo" flip book
js/growth.js          growth chart
js/chat.js            PipIM rule-based chat
js/guestbook.js       Dream Wish Guestbook client
js/chaos.js           Responsive Chaos Mode
js/eggs.js            secrets tracker
netlify/functions/    guestbook + counter API (Netlify Blobs)
dev-server.mjs        local preview server
```

Accessibility: keyboard-reachable controls, visible focus, `aria-live` regions for Pip's speech, chat and status text, `prefers-reduced-motion` support (no boot animation, no sparkles, calm transitions), alt text on every image, and a skip link.

## Credits
- **Pip** (name, look, profession) and the four studio renders (portrait, Pip on a cloud, music box, moon lantern) are from the official **haX.baby Track 1 creator asset pack**, used under its terms.
- Everything else visual (the SVG Pip puppet, ghosts, houses, story scenes, storybook pages, nightlights, game sprites) is hand-coded SVG, CSS and canvas made for this site.
- All sounds are synthesized with the Web Audio API. "Twinkle Twinkle Little Star" and Brahms' "Wiegenlied" are public domain.
- Fonts: [Fredoka](https://fonts.google.com/specimen/Fredoka) and [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans), SIL Open Font License, via Google Fonts.
- Built with plain HTML/CSS/JS, with help from AI coding tools (Claude). Backend: Netlify Functions + `@netlify/blobs`.
