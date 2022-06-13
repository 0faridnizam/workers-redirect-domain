# 👷 workers-redirect-domain

A redirect domain with Cloudflare Workers.

## 💻 Usage

---

```bash
# Required
$ Cloudflare

# Install Package
$ yarn global add wrangler
$ yarn

# Run locally
$ yarn dev

# Deploy
$ 1. Clone the repository \\
  2. Edit `domain.js` for redirect domain in index.js \\
  3. `yarn deploy`

# After deploy, ensure that the source domain has a valid DNS record.
$ Create `A` pointing to `192.0.2.1` => Proxy status to `Proxied` not `DNS only`
$ Add Route with `domain.com/*` on Workers tab and Worker `redirect-domain`.
```

## 📄 License

---

This Project is Under [MIT License](LICENSE) &copy; Farid Nizam
