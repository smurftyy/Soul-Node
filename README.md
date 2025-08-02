# SoulNode

**SoulNode** is a decentralized creative platform that combines portfolio showcasing, project collaboration, and token-based identity in one unified frontend experience. The goal is to give creatives and developers a place to share, co-create, and prove their work — *on-chain and off-chain*.

---

## 🚧 Project Status

This is an early-stage **frontend-only implementation** of the SoulNode landing page and marketing interface. 
The backend and smart contract integrations are reserved for later stages post-hackathon MVP delivery.

> ✅ UI components: Hero, Features, Use Cases, Value Propositions, CTA, Footer
> 
> 🚫 No backend / wallet / token logic yet
> 
> 🛠️ Built for scalability — componentized and tailwind-first

---

## 🎯 Vision

SoulNode aims to become the go-to playground for creatives and technologists who want:
- Proof-of-Work powered portfolios
- Collaborative micro-project launchpads
- Token-gated contribution systems
- Cross-network identity binding

A space where every contribution is linked, tokenized, and composable.

---

## 🧱 Tech Stack (Phase 1)

- **Frontend Framework**: React + Vite
- **Styling**: Tailwind CSS
- **Bundler**: Vite
- **Component Structure**: TypeScript (for scalability)
- **Animations**: Framer Motion *(planned)*
- **State Management**: Minimal local state; context API later

---

## 📦 File Structure

```bash
apps/
└── soulnode/
    ├── public/            # Static assets
    ├── src/
    │   ├── assets/        # Logos, images
    │   ├── components/    # Reusable UI blocks
    │   ├── pages/         # Landing page entry
    │   ├── App.jsx        # Main app shell
    │   └── main.jsx       # Entry point
    ├── index.html
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

---

## 🧪 Features (Planned + Implemented)

| Feature | Status |
|--------|--------|
| Hero Banner with CTA | ✅ |
| Feature List Section | ✅ |
| Use Case Highlights | ✅ |
| Value Proposition Cards | ✅ |
| How it Works Section | 🔜 |
| Animated Scroll | 🔜 |
| Dark/Light Mode | 🔜 (Post-auth)
| Wallet Connect | 🚫 (Future)
| Project Feed | 🚫 (Future)
| On-chain Portfolio Upload | 🚫 (Future)

---

## 🛣️ Next Steps

- [ ] Polish copywriting and marketing tone
- [ ] Add dark/light theme switch (post-auth only)
- [ ] Implement animation with Framer Motion
- [ ] Mobile responsiveness and testing
- [ ] Push to live preview (e.g., Vercel or Netlify)

---

## 🔗 Contributing

This is a **solo dev sprint** for now. Contributions are closed until MVP is stable. If you’re interested in contributing later (design, contracts, frontend, copy), ping `@xanesfkasmurftyy` on GitHub.

---

## 📜 License

MIT — open-source and remixable. Build something original.

---

## 🙏 Acknowledgements

Thanks to:
- Mesh.js and Cardano Dev Community (future integrations)
- Tailwind Labs for elegant utility-first styling
- YouTube + sleepless nights
-Gimbalabs Africa initiative
---

## 🧠 Notes 

- Backend will likely use Supabase or Firebase for quickstart
- Smart contract layer may be built in Aiken (Cardano)
- Token logic may use CIP-68 metadata standard
- Auth system could integrate Lucid/Mesh + wallet SSO

For now: **keep it clean, sharp, and componentized**.
