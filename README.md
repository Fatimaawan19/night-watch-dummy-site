# Fruit website

From the project root, run:

```powershell
npm run dev:fruit
```

Open http://127.0.0.1:5501/ for FreshCart. This serves only the `fruit_website`
directory. Stop the server with Ctrl+C in its terminal.

The SOC frontend uses http://127.0.0.1:5173/ (`npm run dev`), and the SOC backend
uses port 8000. The servers fail if their configured port is occupied rather
than silently selecting another port.

## Link fixtures

- `#foodpanda-play-store`: external Google Play link for `com.global.foodpanda.android`.
- `#foodpanda-app-store`: external Pakistan App Store link for `id758103884`.
- `#delivery-link`: internal navigation to `/delivery.html`, with a return link to `/`.
- Existing `#categories`, `#video`, and `#apps` links remain same-page anchors.

The delivery page has editable hours, fee, arrival time, and service area, each
with a stable element ID. App links open in a new tab. The homepage also retains
its image, video, styles, scripts, and social links for other change scenarios.

The Facebook, Instagram, and X icons link to NASA Artemis public accounts,
confirmed against [NASA's official directory](https://www.nasa.gov/social-media/):

- `#social-facebook`: https://www.facebook.com/NASAArtemis/
- `#social-instagram`: https://www.instagram.com/nasaartemis/
- `#social-x`: https://x.com/NASAArtemis

These links open in a new tab. Social platforms may require login or block
automated fetches even when the account URL is valid.
