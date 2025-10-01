# SoulNode

**SoulNode** SoulNode is a Cardano-based trust layer that uses attestations to verify actions and soul points to measure user reputation. Together, they create a framework for socially impactful governance where active participants, not just wealthy stakers, shape the ecosystem.

Attestations → Proof of engagement, tied to wallet actions.

Soul Points → A non-monetary NFT-based incentive system representing reputation.

Trust Layer → Endorsed by attestations, secured by Cardano, transparent by design.

Governance Model → Attestations (engagement) + Soul Points (reputation) = decentralized governance framework.

This ensures every participant, whether developer, staker, or user, has a chance at influence and governance not as a function of their resource but rather that of their engagement with the ecosystem.

## 🚧 Project Status

This is an early-stage **frontend-only implementation** of the SoulNode landing page and marketing interface. 
The backend and smart contract integrations are reserved for later stages post-hackathon MVP delivery.

> ✅ UI components: Hero, Features, Use Cases, Value Propositions, CTA, Footer
> 
>  Transaction, wallet and token logic
> 
> 🛠️ Built for scalability — componentized and tailwind-first

---

## 🎯 Vision

SoulNode exists to redefine governance in decentralized ecosystems. Instead of wealth dictating influence, we propose a balance of commitment, reputation, and engagement. In a world where proof-of-stake gives voting power to those holding the most resources, SoulNode introduces a trust layer built on attestations and reputation-driven soul points.

Here, governance is no longer a measure of your stake size — it’s a measure of your contribution, visibility, and dedication to the Cardano ecosystem.

---

## 🧱 Tech Stack (Phase 1)

- **Frontend Framework**: Next.js
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

## 🧪 Features 


 The following are the features  that are currently live in the app:
Attestation Cards → Blue-themed digital proof-of-engagement cards generated after actions (staking, minting, etc.).

Soul Points → Reputation NFTs that grow with user activity and unlock governance weight.

Social Connect → Network layer for users to interact, verify, and build reputation together.

Profile System → Users create identities that anchor attestations and Soul Points.

Governance Layer → Influence in the ecosystem is earned through activity, not just stake.

---

## 🛣️ Next Steps

- [ ] Polish copywriting and marketing tone
- [ ] Mobile responsiveness and testing
- [ ] Push to live preview (e.g., Vercel or Netlify)


##  How It Works

Connect Wallet → Users onboard with Cardano wallets.

Set Up Profile → Identity creation anchors all activity.

Engage → Actions like staking, minting, or other ecosystem contributions trigger attestations.

Attestation Cards → Generated instantly as proof, containing key wallet + activity metadata.

Soul Points → Issued as reputation rewards; displayed on attestation cards.

Track Growth → Users can view accumulated points and attestations over time.

Governance Participation → Reputation + engagement, not just financial stake, defines influence.

---

## 🔗 Contributing

This is a **solo dev sprint** for now. Contributions are closed until MVP is stable. If you’re interested in contributing later (design, contracts, frontend, copy), ping `@xanesfkasmurftyy` on GitHub.
SoulNode is open to developers, designers, and researchers who want to help shape this new governance framework.

Smart Contracts → Extend or refine Aiken-based contracts.

Frontend → Strengthen Next.js + Mesh.js integration.

Research → Collaborate on governance modeling and scaling.

For now, the project is built solo, but contributions are welcome. The goal is to bridge the skill and vision gap by inviting aligned developers and thinkers to join.

---
## Development Roadmap

Phase 1 – Development & Testing

Build SoulPoint distribution algorithm

Core UI/UX flow with attestation cards

Wallet connect integration

Phase 2 – Beta & Testnet

Deploy contracts on Cardano testnet

Expand attestation triggers

Feedback and refinement cycle

Phase 3 – Social Awareness & Adoption

Community onboarding campaign

Extend for mobile and desktop formats

Governance model testing with live users

Phase 4 – Production & Scale

Launch on Cardano mainnet

Expand SoulNode features beyond MVP

Support for developer integrations and extended governance modules


## 📜 License

MIT — open-source and remixable. Build something original.

---

## 🙏 Acknowledgements

Thanks to:
- Mesh.js and Cardano Dev Community (future integrations)
- Tailwind Labs for elegant utility-first styling
- YouTube + sleepless nights
-Gimbalabs Africa initiative
-Next.js 
---

## 🧠 Notes 

- Backend will likely use Supabase or Firebase for quickstart
- Smart contract layer may be built in Aiken (Cardano)
- Token logic may use CIP-68 metadata standard
- Auth system could integrate Lucid/Mesh + wallet SSO
- Whitepaper and Demo vid in a bit 
- Presentation link ; https://gamma.app/docs/SoulNode-bw3eywget3am540.

For now: **keep it clean, sharp, and componentized**.
