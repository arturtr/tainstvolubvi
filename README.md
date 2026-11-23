# tainstvolubvi.ru

Redirect from `tainstvolubvi.ru` to the parish Taplink page. QR codes point to this domain, so the target can change without reprinting them.

- `go.js` holds the target URL and the Yandex Metrika counter id (`0` turns counting off).
- Each printed QR gets its own page: `stand.html` serves `tainstvolubvi.ru/stand` and tags the visit `utm_source=stand&utm_medium=qr`. A new carrier is a copy of `stand.html` with its own `data-source`.
- `404.html` catches any other path and redirects without a source tag.
