# Deploying to Vercel and pointing the domain

## 1. Push the code

**Push only the `site/` folder.** The parent folder contains
`PARM-PROJECTS-HANDOVER.md`, which has plaintext passwords in it. That must never reach
GitHub. `site/` already has its own git repo, so from inside `site/`:

```bash
git add -A && git commit -m "Bhatia Auto Engineers website"
```

Then create an **empty private** repo on GitHub and push to it.

## 2. Import into Vercel

1. vercel.com → **Add New → Project** → import the repo
2. Framework preset: **Next.js** (auto-detected). Leave build settings alone.
3. Add environment variables before the first deploy:

| Name | Value |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://bhatiaautoengineers.in` |
| `RESEND_API_KEY` | from resend.com, free tier |
| `CONTACT_FROM_EMAIL` | `website@bhatiaautoengineers.in` |
| `CONTACT_TO_EMAIL` | wherever enquiries should land |

4. Deploy. You get a `something.vercel.app` URL immediately.

**The contact form will not send until `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` are set.**
Without them it shows a clear message telling visitors to phone or email instead, so it
fails gracefully, but it does not deliver. Resend also requires you to verify the domain
before it will send from an address at it, which cannot happen until DNS is under our
control (see below).

## 3. DNS: what it is, and which one is yours

Your domain currently answers to **`ns1.md-77.webhostbox.net` / `ns2.md-77.webhostbox.net`**.
Those are Parm Projects' hosting nameservers. Nameservers are the address book that
decides where `bhatiaautoengineers.in` sends visitors. Whoever controls them controls
where the site points, which is why this matters as much as owning the domain.

**Right now you control neither.** DNS Management is greyed out in the panel, behind the
same reseller lock. So the domain cannot be pointed at Vercel yet. That is a blocker on
Parm Projects, not on the code.

### Route A: after they unlock DNS Management (quickest)

Add two records in the panel's DNS manager:

| Type | Name | Value |
|---|---|---|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Vercel shows the exact values under **Project → Settings → Domains**; use those rather
than the table above if they differ. Propagation is usually minutes, up to a few hours.

### Route B: after you transfer the domain (the better end state)

Once the domain is at a registrar you control (Cloudflare, GoDaddy, Namecheap), the
cleanest setup is to point the nameservers at Vercel entirely, then Vercel manages DNS and
issues the TLS certificate automatically. Add the domain in Vercel first, and it tells you
which nameservers to set.

This is the option to aim for. It ends the dependency on Parm Projects completely.

### Route C: if you need the site live before any of that is resolved

Deploy to Vercel and use a temporary domain, or a subdomain of any domain you already
control. The `.vercel.app` URL works immediately and can be shared. Not ideal for SEO, but
it gets the new site in front of customers while the ownership question is settled.

## 4. After the domain is connected

- Vercel provisions HTTPS automatically. Nothing to configure.
- Point `kometauto.com` at the same project as a redirect. It already 301s to
  `bhatiaautoengineers.in`, so preserve that behaviour.
- Set up the `info@bhatiaautoengineers.in` mailbox somewhere you control. The old site
  sent every contact form submission there and you have never had access to it.
- Submit `https://bhatiaautoengineers.in/sitemap.xml` to Google Search Console. The old
  site's URLs (`/index.html`, `/about.html`, `/product.html`, `/contact.html`) have changed
  to `/`, `/about`, `/products`, `/contact`, so add redirects to preserve the existing
  search ranking. Tell me when you are at this point and I will add them to
  `next.config.ts`.
