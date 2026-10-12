---
title: 'Blockchain / Smart Contract Engineer — EVM / ZK'
author: 'Sebastien Levy'
card:
  title: 'Blockchain / Smart Contract Engineer'
  description: 'EVM · Solidity · ZK · Foundry'
  order: 3
---
---

## Profile

Software engineer with **20+ years of experience**, now focused on **EVM-based
blockchain protocols, smart contracts and Zero-Knowledge systems**.

Hands-on experience designing and implementing Solidity protocols, EVM
execution logic, smart-contract security, Foundry-based testing and **Noir /
Barretenberg ZK circuits**.

Strong systems and backend background in C++, C#, Python and TypeScript,
bringing production software engineering and distributed-systems experience to
Web3 development.

---

<div class="page-break"></div>

## Experiences

### Protocol Engineer

| Company | Period |
| --- | --- |
| m374-crypt0 | January 2026 – Present |

Working on a **zero-knowledge eligibility proof system** for Real-World Asset
(RWA) protocols.

- Designed a zero-knowledge eligibility proof system enabling on-chain
  compliance verification **without disclosing identity or private compliance
  data**
- Implemented **Noir ZK circuits** proving that a Poseidon2 commitment was
  derived from secret user credentials while binding eligibility to a wallet
  address
- Engineered a two-party architecture consisting of an issuer API and a
  customer-side proof-generation flow
- Built an issuer API using Hono / TypeScript to store blinded commitments
  on-chain
- Built a customer client generating ZK proofs locally and submitting them to a
  Solidity verifier
- Implemented `Prover.sol` to inject `msg.sender` and commitment as public
  inputs during verification, preventing proof reuse across addresses
- Implemented `CommitmentStore.sol` as an on-chain revocation registry
- Achieved **EIP-170 bytecode compliance** for the generated UltraHonk verifier
  by locking Solidity optimizer runs to 112
- Used **Poseidon2** across Noir and TypeScript implementations to guarantee
  identical commitments
- Built full end-to-end tests covering issuer commitment, local Anvil
  deployment, customer proof generation and on-chain verification

*Stack: Solidity · Foundry · Noir · Barretenberg · TypeScript · Hono · Docker · Anvil*

[Repository](https://github.com/m374-crypt0/zk-assets)

<div class="page-break"></div>

### C++ Technical Lead

| Company | Period |
| --- | --- |
| Ringover | September 2023 – March 2025 |

Technical lead on the C/C++ and Python backend of a cloud IP telephony platform.

- Implemented protocol-level components conforming to SIP and RTP RFCs
- Modernized the C++ codebase toward current standards
- Instrumented native components with OpenTelemetry
- Engineered deterministic Docker-based build and test environments
- Developed a parallelized Bitbucket Pipelines runner
- Upstreamed fixes and additions to FreeSwitch and Kamailio

*Stack: C++ · C · Python · SIP · RTP · OpenTelemetry · Docker · Proxmox*

### Solution Architect

| Company | Period |
| --- | --- |
| CMA-CGM | March 2023 – August 2023 |

Architecture design engagement for a maritime booking platform.

- Led structured discovery workshops
- Produced High-Level and Low-Level Design specifications
- Designed service boundaries and integration contracts
- Worked around an event-driven Kafka / Solace backbone

*Stack: C# · AWS · Kafka · Solace · MongoDB*

### AWS Solution Architect

| Company | Period |
| --- | --- |
| TerraceMetrics | September 2022 – April 2023 |

Platform stabilization and AWS migration engagement.

- Diagnosed production reliability issues
- Designed discovery workshops for the migration strategy
- Migrated workloads toward Lambda, DynamoDB and CloudFormation
- Worked across Node.js / TypeScript backend, React frontend and infrastructure

*Stack: AWS Lambda · CloudFormation · DynamoDB · EC2 · Node.js · TypeScript · React · PostgreSQL · Docker*

### Dotnet Senior Software Developer

| Company | Period |
| --- | --- |
| Agicap | December 2021 – August 2022 |

Greenfield development of a payment product line.

- Built payment flows using Domain-Driven Design
- Worked with aggregates, domain events and bounded contexts
- Applied strict TDD and BDD practices

*Stack: C# · .NET 6–7 · EF Core · Angular · TDD · DDD · BDD*

### Dotnet C# Technical Coach

| Company | Period |
| --- | --- |
| CDiscount | August 2020 – December 2021 |

Technical coaching engagement across Octopia product teams.

- Provided hands-on guidance on DDD, Clean Architecture and TDD
- Facilitated domain discovery workshops
- Designed and delivered technical training sessions

*Stack: C# · .NET 5–6 · EF Core · TDD · DDD · BDD*

### Backend Senior Software Developer

| Company | Period |
| --- | --- |
| Siemens PLM | September 2018 – August 2020 |
| Galaxy Semiconductor | June 2015 – September 2018 |

Development of semiconductor test engineering software.

- Developed C++ desktop applications from C++03 through C++17
- Worked with MySQL / MariaDB-backed applications
- Contributed to Node.js / VueJS web tooling
- Operated Docker / DigitalOcean infrastructure

*Stack: C++ · MySQL · MariaDB · .NET Core · Node.js · VueJS · Docker · DigitalOcean*

### Fullstack Software Engineer

| Company | Period |
| --- | --- |
| Atos Integration | October 2012 – June 2015 |

Designed and delivered bespoke enterprise software.

*Stack: C# · .NET Framework · ASP.NET · WPF · WinForms*

### Software Developer

| Company | Period |
| --- | --- |
| Isagri | February 2011 – October 2012 |

.NET Framework development for livestock management software.

*Stack: C# · .NET Framework · WPF · WCF · Delphi 7*

### IT Specialist

| Company | Period |
| --- | --- |
| French Air Force | April 2004 – February 2011 |

IT specialist working across network, systems and software engineering.

- Cisco / Enterasys network infrastructure
- Linux and Windows administration
- Web and DNS services
- Software development for network security equipment

---

## Web3 Projects

### zk-assets

Zero-knowledge eligibility system for Real-World Asset protocols.

- Designed a privacy-preserving eligibility protocol
- Implemented Noir circuits using **Poseidon2**
- Built Solidity verification and commitment contracts
- Implemented issuer and customer components
- Prevented proof reuse across wallet addresses through verifier-side
  public-input binding
- Implemented on-chain credential revocation
- Solved **EIP-170 verifier bytecode constraints**
- Built complete Foundry / Anvil end-to-end test coverage

*Stack: Solidity · Foundry · Noir · Barretenberg · TypeScript · Hono · Docker*

[Repository](https://github.com/m374-crypt0/zk-assets)

### nifty

Comprehensive **ERC-721 NFT implementation** featuring crowdsale mechanics and
upgradeable architecture.

- Implemented an ERC-721 system with enumeration, metadata, burnable and permit
  extensions
- Built a multi-phase **Crowdsale** with whitelist access and rate-based pricing
- Implemented a **Transparent Upgradeable Proxy** using low-level assembly for
  explicit storage-slot management
- Applied the **commit-reveal** pattern for time-locked metadata reveal
- Implemented two-step ownership transfer
- Achieved **100% test coverage across 15+ Foundry test suites**
- Integrated GitHub Actions, LCOV / Codecov and Slither security analysis
- Configured CI to block high-severity smart-contract vulnerabilities
- Built a TypeScript / Bun backend using ethers.js v6 and TypeChain
- Implemented O(1) token enumeration removal using swap-and-pop

*Stack: Solidity · Foundry · OpenZeppelin · TypeScript · Bun · ethers.js · Docker*

[Repository](https://github.com/m374-crypt0/nifty)

### dexterity

Full-stack decentralized exchange inspired by **Uniswap V2**.

- Implemented an AMM based on the **constant-product formula (x·y=k)**
- Supported exact-input and exact-output swaps
- Designed liquidity-pool architecture using XOR-based pool IDs and uint128 reserves
- Implemented LP share calculation using the geometric mean / Babylonian square
  root
- Integrated Uniswap V2 as a fallback router for unsupported pairs
- Implemented security controls including checks-effects-interactions, SafeERC20 and reentrancy-safe state management
- Integrated **Slither** into GitHub Actions CI/CD
- Built Foundry invariant and mainnet-fork tests against real Uniswap V2
  USDC/WETH pools
- Added LCOV / Codecov coverage and gas reporting
- Built TypeScript / Express.js backend for on-chain event indexing
- Built Next.js / React frontend
- Added Anvil, Sepolia deployment and Etherscan verification workflows

*Stack: Solidity · Foundry · Yul · TypeScript · Express.js · Next.js · React · Docker*

[Repository](https://github.com/m374-crypt0/dexterity)

---

## Articles

- [Understanding Solidity Transparent Upgradeable Proxy Pattern - A Practical Guide](https://dev.to/sebastien_levy_233585b9a3/understanding-solidity-transparent-upgradeable-proxy-pattern-a-practical-guide-1abm)
- [How to deploy you NFT on Sepolia - Simple and 100% under control](https://dev.to/sebastien_levy_233585b9a3/how-to-deploy-you-nft-on-sepolia-simple-and-100-under-control-245d)
- [Deep Dive in Transparent Proxy Code](https://dev.to/sebastien_levy_233585b9a3/deep-dive-in-transparent-proxy-code-2o45)

---

## Skills

### Smart Contracts

Solidity · EVM · Foundry · OpenZeppelin · Yul · Hardhat · ethers.js · Viem

### Security

Slither · Reentrancy Protection · Checks-Effects-Interactions · Invariant Testing · Mainnet Fork Testing · Access Control · Upgradeable Contracts

### Zero Knowledge

ZKP · Noir · Barretenberg · UltraHonk · Poseidon2 · Cryptographic Commitments

### Backend & Tooling

TypeScript · Bun.js · Node.js · Express.js · Hono · Docker · GitHub Actions

### Systems

C++ · C · Python · Distributed Systems · Linux · Networking

---

## Education

| Degree | School | Period |
| --- | --- | --- |
| Bachelor in Industrial IT | Lycée Pierre Méchain | 2001–2003 |

---

## Contact

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
