# Submission — Baby's First Website (Track 1: Pip)

**Live site:** https://pip-dream-workshop.netlify.app/
**GitHub:** https://github.com/Raj-nikam26/baby_hackathon

## Story behind the build
Pip's Dream Workshop is Pip's own 1998 homepage, hosted on "GeoCribs" and running on a pastel "PipOS 98" desktop. There's a dial-up boot screen, a marquee, beveled windows, a Start menu, a webring and an "under construction" sign. Pip is the narrator throughout, and floats in the corner as a tour guide who comments on every room.

Pip hates silence, so the site is never quiet: every sound (music-box bells, giggles, the rattle, the modem, the page flips) is synthesized live with the Web Audio API, and there's always a visible mute button. The Lullaby Lab composes a new "tonight song" every night from that night's date.

What I'm proudest of:
- The hero Pip is a hand-built SVG puppet, not a picture. It follows your cursor, tilts its head, blinks, gets sleepy in day mode, giggles when you boop it, and naps if you ignore it.
- The Nightlight Collection is a dark closet lit by a flashlight that follows your cursor (a CSS mask).
- On the Dream Delivery map, Pip flies along an SVG path as you scroll, and every window lights up as its dream arrives.
- PipIM is an AIM-style chat where Pip talks back in character and remembers your name.
- There's a live Dream Wish Guestbook and hit counter (Netlify Functions + Blobs), five hidden secrets, and a Responsive Chaos Mode that turns the site into a scrapbook with a different personality on phone, tablet and desktop.

Covered: all 6 required elements, all of Tier 1, Tier 2 (Lullaby Lab with real audio, flashlight cursor, scroll-synced map, page-flip storybook, mini-game), Tier 3 (live guestbook, visitor memory, chat, Lighthouse desktop 90/100/100/100) and all 5 side quests.

## Credits
- Pip and the 4 studio renders: official haX.baby Track 1 asset pack.
- All other art is hand-coded SVG/CSS/canvas. All sounds are synthesized with Web Audio. Twinkle Twinkle and Brahms' Lullaby are public domain.
- Fonts: Fredoka, Nunito, Pixelify Sans and Gochi Hand (SIL OFL) via Google Fonts.
- Built with plain HTML/CSS/JS, with help from AI coding tools (Claude). Backend on Netlify Functions + @netlify/blobs.
