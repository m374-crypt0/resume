---
title: 'Blockchain Protocol Engineer EVM / ZK(noir) / Backend'
author: 'Sebastien Levy'
---
---

## Profile

15+ years in software engineering (C++/backend systems and others), now
specialized in distributed systems and protocol build for EVM-based blockchains
(Solidity / Yul) and Zero-Knowledge systems (Noir / Barretenberg).

I work on full time propositions.

---

<div class="page-break"></div>

## Experiences

### Protocol Engineer

| Company | Period |
| --- | --- |
| m374-crypt0 | From January 2026 to today |

Actively working on a **zero-knowledge** eligibility proof system for
Real-World Asset (**RWA**) protocols

- Designed a **zero-knowledge** eligibility proof system for Real-World Asset
  (RWA) protocols, enabling on-chain **compliance verification without
  disclosing** identity or private compliance data
- Implemented **Noir ZK circuits** proving a Poseidon2 commitment was derived
  from secret user credentials — **binding eligibility to a wallet address**
  without revealing the underlying data
- Engineered a **two-party architecture**
- an **issuer API** (Hono/TypeScript) that stores blinded commitments on-chain
- a customer client that **generates ZK proofs locally** and submits them to a
  **Solidity** verifier
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

*Stack:*

- Foundry · Solidity · Noir · Barretenberg · docker

[Repository link](https://github.com/m374-crypt0/zk-assets)

<div class="page-break"></div>

### C++ Technical Lead

| Company | Period |
| --- | --- |
| Ringover | From September 2023 to March 2025 |

Technical lead on the **C/C++ and Python backend** of a cloud IP telephony
platform, working directly on Ringover's internal forks of FreeSwitch and
Kamailio.

- Implemented protocol-level components conforming to **SIP and RTP RFCs**
  within the media and signaling stack
- Modernized the codebase toward current C++ standards, reducing undefined
  behavior surface and improving maintainability
- Instrumented native C/C++ codebases with **OpenTelemetry** to expose
  Real-time metrics and profiling data to the production observability stack
  (Grafana, Loki, Kibana)
- Engineered a **parallelized local Bitbucket Pipelines runner** for native
  builds, significantly cutting CI build costs
- Enforced **deterministic build and test environments** via Docker and Docker
  Compose across the team
- Provisioned and managed development infrastructure on **Proxmox**
- Upstreamed fixes and additions back to **FreeSwitch and Kamailio**
  open-source projects from Ringover's internal forks

*Stack:*

- C++ · C · Python · SIP · RTP · OpenTelemetry · Docker · Proxmox · Bitbucket Pipelines

### Solution Architect

| Company | Period |
| --- | --- |
| CMA-CGM | From March 2023 to August 2023 |

Architecture design engagement on the **digitalization of a maritime booking platform** at one of the world's largest container logistics operators.

The role was design-phase focused — bridging business stakeholders and engineering teams through structured discovery and formal specification work:

- Facilitated and led scoping workshops to extract, challenge and formalize business requirements into bounded system behaviors
- Produced **High-Level Design** documents establishing service boundaries, data flows and integration contracts over an event-driven messaging backbone (**Kafka / Solace**)
- Contributed to **Low-Level Design** specifications consumable directly by application architects and implementation teams
- Operated in an AWS-hosted context with a C# service layer and MongoDB as primary data store

*Stack:*

- C# · AWS · Kafka · Solace · MongoDB

<div class="page-break"></div>

### AWS Solution architect

| Company | Period |
| --- | --- |
| TerraceMetrics | From September 2022 to April 2023 |

Platform stabilization and cloud migration engagement for a behavioral analytics SaaS serving schools and enterprises.

- Diagnosed and resolved critical reliability issues on the production platform while delivering priority feature work in parallel
- Designed and facilitated discovery workshops (event storming, impact mapping, example mapping, story mapping) to structure a **progressive AWS migration strategy**
- Migrated workloads toward a **serverless architecture**: Lambda for service exposure, DynamoDB for hot-path storage, CloudFormation for infrastructure-as-code
- Operated across the full stack: Node.js / TypeScript backend, PostgreSQL, React frontend, EC2, Docker

*Stack:*

- AWS Lambda · CloudFormation · DynamoDB · EC2 · Node.js · TypeScript · React ·
  PostgreSQL · Docker

### Dotnet Senior Software Developer

| Company | Period |
| --- | --- |
| Agicap | From December 2021 to August 2022 |

Greenfield development of a **payment product line** at one of Europe's leading
cash management SaaS companies.

- Built new payment flows end-to-end within a **Domain-Driven Design** model,
  working from discovery (Event Storming, Example Mapping) through tactical
  implementation (aggregates, domain events, bounded contexts)
- Maintained a **zero-defect release cadence** sustained by BDD scenario
  coverage and strict TDD discipline across the team
- Practiced **mob programming** as the primary delivery mode, raising
  collective ownership and design consistency across the team

*Stack:*

- C# · .NET 6–7 · EF Core · Angular · TDD · DDD · BDD

<div class="page-break"></div>

### Dotnet C# tech Coach

| Company | Period |
| --- | --- |
| CDiscount | From August 2020 to December 2021 |

Technical coaching engagement across multiple product teams building
**Octopia**, a BtoB SaaS marketplace platform launched by Cdiscount.

- Ran structured discovery workshops (Event Storming, Example Mapping, Impact
  Mapping, Story Mapping) with business and engineering stakeholders to ground
  design in explicit domain models
- Provided hands-on technical guidance on tactical DDD (aggregates, domain
  events, bounded contexts), Clean Architecture, and TDD at the team level — not
  as theory but directly on delivery work
- Designed and delivered multi-day training sessions on Clean Code, TDD, and
  refactoring, with mob programming as the practical format

*Stack:*

- C# · .NET 5–6 · EF Core · TDD · DDD · BDD

### Backend Senior Software Developer

| Company | Period |
| --- | --- |
| Galaxy Semiconductor | From June 2015 to September 2018 |
| Siemens PLM | From September 2018 to August 2020 |

Development and maintenance of **semiconductor test engineering tools**.

The product suite targets yield optimization and quality assurance on
electronic component production lines (microcontrollers to high-end processors)
under automotive and aerospace standards:

- Developed and maintained thick-client **C++ desktop applications** across
  multiple standard revisions (C++03 → C++17) with MySQL / MariaDB as the data
  backend
- Contributed to a web-based companion platform (Node.js backend, VueJS
  frontend) extending the tooling to browser-accessible workflows
- Operated deployment infrastructure on Docker / DigitalOcean

*Stack:*

- C++ (03/11/14/17) · MySQL · MariaDB · .NET Core · Node.js · VueJS · Docker ·
DigitalOcean

*Product links:*

- [Pat-Man](https://www.galaxysemi.com/patman) · [Examinator-Pro](https://www.galaxysemi.com/examinatorpro) · [Yield-Man](https://www.galaxysemi.com/yieldman)

<div class="page-break"></div>

### Fullstack Software Engineer

| Company | Period |
| --- | --- |
| Atos Integration | From October 2012 to June 2015 |

Designed and delivered bespoke software solutions for enterprise customers on the **.NET Framework** stack (pre-.NET Core era).

- Built web applications (ASP.NET / C#) and rich thick-client desktop applications (WPF, WinForms) across multiple customer engagements
- Conducted technical audits of existing customer solutions and produced formal recommendations for evolution paths

*Stack:*

- C# · .NET Framework · ASP.NET · WPF · WinForms

### dotnet Software Developer

| Company | Period |
| --- | --- |
| Isagri | From February 2011 to October 2012 |

**.NET Framework** developer on a **livestock herd management** software package targeting agricultural professionals.

- Developed domain-specific features across a WPF thick-client frontend and a WCF service layer
- Maintained and extended a legacy Delphi 7 codebase alongside the .NET stack

*Stack:*

- C# · .NET Framework · WPF · WCF · Delphi 7

<div class="page-break"></div>

### IT Specialist

| Company | Period |
| --- | --- |
| French Air Force | From April 2004 to February 2011 |

7 years as an IT specialist across multiple postings, including **external
theaters of operations**.

- Commissioned, maintained and evolved a full **Cisco / Enterasys switching
  infrastructure** on-site and in deployed field environments
- Administered **Linux and Windows** systems covering web services, DNS, user
  management, and classified specialized services (security, meteorology)
- Developed software extensions for **network security equipment** within the
  Directorate of Military Intelligence (DRM)

---

<div class="page-break"></div>

## Open-Source projects

### nifty

#### A comprehensive, **NFT implementation** featuring **crowdsale** mechanics, **upgradeable architecture**, and extensive functionality built on Ethereum

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

*Stack:*

- Foundry · Solidity · docker

[Repository link](https://github.com/m374-crypt0/nifty)

<div class="page-break"></div>

### dexterity

#### A decentralized exchange system inspired by **Uniswap V2**

- Built a **full-stack decentralized exchange** in Solidity 0.8.30 with an
  automated market maker (AMM) implementing the **constant product formula
  (x·y=k)** for token swaps, supporting exact-input and exact-output swap types
- Designed a **liquidity pool architecture** using **XOR-based pool ID
  derivation**, uint128 reserves for **gas efficiency**, and **geometric mean
  (Babylonian square root)** for LP share calculation
- **Integrated Uniswap V2** as a fallback router for unsupported token pairs,
  with a **2 basis-point creator fee** collected on forwarded swaps
- **Enforced security best practices**: checks-effects-interactions pattern,
  OpenZeppelin SafeERC20, zero-address and overflow validation, and
  reentrancy-safe state management
- **Achieved continuous security assurance** via **Slither** static analysis
  **in CI/CD (GitHub Actions)**, configured to block merges on any high-severity
  vulnerability
- **Wrote a comprehensive Foundry test suite** covering edge cases, invariant
  violations, multi-holder scenarios, and **mainnet fork tests against real
  Uniswap V2** USDC/WETH pools
- **Configured code coverage reporting** with LCOV + Codecov integration and
  **gas reporting** via forge test --gas-report
- **Built a TypeScript/Express.js backend** using ethers.js v6 for **on-chain
  event indexing and data aggregation**, and a Next.js/React frontend
  (proof-of-concept) with Tailwind CSS v4
- **Structured the project as a monorepo** (contracts + backend + frontend)
  with a Makefile-driven build system supporting **local Anvil fork** deployment,
  **Sepolia testnet** deployment with Etherscan verification, and watch-mode
  development

*Stack:*

- Foundry · Solidity · docker · Yul

[Repository link](https://github.com/m374-crypt0/dexterity)

---

<div class="page-break"></div>

## Articles & Talks

- [Understanding Solidity Transparent Upgradeable Proxy Pattern - A Practical Guide](https://dev.to/sebastien_levy_233585b9a3/understanding-solidity-transparent-upgradeable-proxy-pattern-a-practical-guide-1abm)
- [How to deploy you NFT on Sepolia - Simple and 100% under control](https://dev.to/sebastien_levy_233585b9a3/how-to-deploy-you-nft-on-sepolia-simple-and-100-under-control-245d)
- [Deep Dive in Transparent Proxy Code](https://dev.to/sebastien_levy_233585b9a3/deep-dive-in-transparent-proxy-code-2o45)

---

## Education

| Degree | School | Period |
| --- | --- | --- |
| Bachelor in Industrial IT | Lycée Pierre Méchain | 2001-2003 |

---

## Skills

### Blockchain

Solidity - EVM - Foundry - Hardhat - OpenZeppelin - ZKP - Noir - Barretenberg -
Viem - Slither

### General IT

Typescript/Javascript - Bun.js/NodeJs - C++ - Docker - Github Actions -
BitBucket pipelines

---

<div class="page-break"></div>

## Contact details

**Mail**: <m374-crypt0@pm.me>

**Location**: France

**GitHub**: [m374-crypt0](https://github.com/m374-crypt0)

**LinkedIn**: [Sebastien Levy](https://www.linkedin.com/in/sebastien-levy-1a6148b2/)

**X**: @m374crypt0

**Telegram**: @M374crypto

---

## Languages

- French: Native
- English: Fluent
