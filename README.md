# Brooklyn Psychiatric Society — Static Prototype

Multi-page static website prototype for the Brooklyn Psychiatric Society, modeled on the information architecture of the New York County Psychiatric Society (NYCPS).

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, pathway cards, advocacy, membership tiers, events sidebar, careers |
| `membership.html` | Membership paths, benefits, join/renew flow |
| `news-and-announcements.html` | Statements, policy updates, member announcements |
| `event-calendar.html` | Upcoming events, annual programs |
| `committees.html` | Standing committees, how to join |
| `create-login.html` | Member login / account access |

## Shared Assets

- `styles.css` — Full responsive stylesheet (Fraunces + IBM Plex Sans)
- `app.js` — Mobile nav toggle + auto-year in footer

## Preview

From the project folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`

## Confirmed Real Content

- Organization name: **Brooklyn Psychiatric Society**
- Executive Director email: `lindabps@aol.com`

All other content (leadership names, address, phone, event dates, dues, committee rosters) remains placeholder and should be verified before public use.

## Design Reference

- Primary inspiration: [NYCPS](https://nycpsych.memberclicks.net/)
- Typography: Fraunces (headings), IBM Plex Sans (body)
- Color palette: warm paper backgrounds, navy accents, terracotta highlights
