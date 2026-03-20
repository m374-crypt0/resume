---
title: 'Blockchain Protocol Engineer EVM / Yul / ZK(noir)'
author: 'Sebastien Levy'
---
---

## Who am I?

I help teams to build secure, optimize, and scale EVM-based blockchain
protocols.

15+ years in software engineering (C++/backend systems and others), now
specialized in low-level smart contracts for EVM-based blockchains (Solidity /
Yul) and Zero-Knowledge systems (Noir / Barretenberg).

---

## Open source contributions

### zk-assets

> A **zero-knowledge** eligibility proof system for Real-World Asset (**RWA**)
> protocols.

This framework is an attempt to **answer real challenges** companies face with
tokenized assets:

> How to **prove eligibility** on-chain **without revealing** why the user is
> eligible.

- Designed a **zero-knowledge** eligibility proof system for Real-World Asset
  (RWA) protocols, enabling on-chain **compliance verification without
  disclosing** identity or private compliance data
- Implemented **Noir ZK circuits** proving a Poseidon2 commitment was derived
  from secret user credentials — **binding eligibility to a wallet address**
  without revealing the underlying data
- Engineered a **two-party architecture**:
  - an **issuer API** (Hono/TypeScript) that stores blinded commitments
    on-chain
  - a customer client that **generates ZK proofs locally** and submits them to
    a Solidity verifier
- Built **Prover.sol** to inject msg.sender and commitment as public inputs at
  verification time, **preventing proof reuse across addresses** while keeping
  credentials **fully private**
- Deployed **CommitmentStore.sol** as an **on-chain revocation registry** —
  issuers can revoke eligibility **without knowing which wallet** holds the
  credential
- Achieved **EIP-170** bytecode compliance for the auto-generated UltraHonk
  verifier contract by locking Solidity optimizer runs to exactly 112
  (empirically derived limit)
- Used **Poseidon2 hash (ZK-friendly)** over 6 fields  — reproduced identically
  in-circuit (Noir) and off-chain (TypeScript via @zkpassport/poseidon2)
- Wrote **full tests suites covering the full flow**: issuer commitment → local
  Anvil blockchain → customer proof generation → on-chain verification via viem

[Repository link](https://github.com/m374-crypt0/zk-assets)

### nifty

> A comprehensive, **NFT implementation** featuring **crowdsale** mechanics,
> **upgradeable architecture**, and extensive functionality built on Ethereum.

- Designed and implemented a full **ERC-721** NFT smart contract system in
  Solidity 0.8, including enumeration, metadata, burnable, and permit
  (meta-transaction approval) extensions
- Built a **Crowdsale** contract supporting **multi-phase NFT drops** with
  whitelist access, **rate-based pricing**, and ETH fund withdrawal mechanics
- Implemented a **Transparent Upgradeable Proxy** using low-level assembly for
  explicit storage slot management, preventing storage collisions between proxy
  and implementation
- Applied the **commit-reveal** pattern for time-locked NFT metadata reveal,
  **preventing token sniping** prior to collection reveal
- Engineered a **two-step ownership** transfer (Ownable2Steps) to prevent
  accidental ownership loss to wrong addresses
- Achieved **100% test coverage across 15+ Foundry test suites** covering edge
  cases, access control, integration scenarios, and gas behavior
- Set up **GitHub Actions CI pipeline** with test execution, lcov coverage
  reporting (Codecov), and Slither security analysis with OpenZeppelin dependency
  filtering
- Integrated **Slither static analysis into CI/CD** to automatically block
  high-severity smart contract vulnerabilities on every push
- Developed a **TypeScript/Bun backend** with ethers.js v6 and
  **TypeChain-generated contract bindings** to demonstrate off-chain permit
  feature integration
- Implemented a swap-and-pop enumeration strategy for O(1) token removal from
  owner/global token arrays without external libraries

[Repository link](https://github.com/m374-crypt0/nifty)

---

## Working Experiences

---
