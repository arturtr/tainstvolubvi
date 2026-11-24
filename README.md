# tainstvolubvi.ru

Redirect from `tainstvolubvi.ru` to the parish Taplink page. QR codes point to this domain, so the target can change without reprinting them.

- Each printed QR carries its own UTM tags in the link, e.g. `https://tainstvolubvi.ru/?utm_source=organic&utm_medium=banner&utm_campaign=hram`.
- The page counts the visit in Yandex Metrika (counter `114580701`), then forwards to Taplink with the same query string. It leaves after the hit is sent, or after 1.5 s if Metrika does not answer.
- A 4-second meta refresh moves the visitor on if JavaScript fails.
- `404.html` is a copy of `index.html`: any path on the domain redirects the same way. Edit `index.html`, then `cp index.html 404.html`.

## Pages

Paths that exist as files are served before `404.html`, so a page added here does not change the redirect.

- `/ikonostas/` — iconostasis fundraising board: 36 icons by tier, price, bought or waiting. Data lives in the `ICONS` object in `ikonostas/index.html`, one line per icon; totals and the progress bar are computed from it. To close an icon, set its third value to `true` and update the "as of" date in the footer. The page carries `noindex` until the parish approves it for search.
