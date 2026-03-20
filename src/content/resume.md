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

### dexterity

> A decentralized exchange system inspired by **Uniswap V2**.

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

[Repository link](https://github.com/m374-crypt0/dexterity)

---

## Working Experiences

> My past experiences that have contributed to build the builder I am today

Experiences described below are *not related to the blockchain expertise* I can
provide right now.

However, they have *significantly contributed* to make me proficient in a very
large set of my problem solving skills.

### Technical Lead - Ringover

> From September 2023 to March 2025

Ringover offers a **SaaS solution** to manage exchanges with customers and
prospects more efficiently. The solutions offered are innovative and are based
on several ambitious technological foundations such as automated tools and
customizable multi-channel prospecting, an advanced IP telephony offering with
multi-channel communication, a suite of tools based on AI-assisted
conversational analysis.

Ringover has more than 200 employees in 5 offices in France and abroad (US,
Spain, etc.). More than 10,000 customers already trust Ringover around the
world. At the end of 2021, Ringover raised €15 million.

My role in this organization is to **support and participate** in the tasks of a
team of **backend developers**, mainly around **C/C++ stacks and python**.

Ringover has its own server infrastructure as well, the management aspects of
systems are also omnipresent.

*Context of the mission:*

- **C/C++** and **python** back-end development
- Implementation of components related to **RFCs in the telephony field** (SIP,
  RTP)
- **Deployments and Observability** on Systems Deployed in Production Technologies
- **docker**, docker compose
- Proxmox
- **CI/CD** with bitbucket pipelines
- **OpenSource contributions** (Freeswitch; Kamailio)
- TDD
- OpenTelemetry

### Solution Architect - CMA-CGM

> From March 2023 to August 2023

**CMA-CGM** is a global player in maritime, land, air and logistics solutions.

In 2022, this company made a profit of nearly €25 billion, most of which was
reinvested in the group's activities, in particular on concrete commitments for
the energy transition and the environment (-50% CO2 emissions per container
since 2008).

During my mission at CMA-CGM as a solution architect, I was able to contribute
to the development of the design around one of their flagship products: a
digitalized booking solution.

This solution allows CMA-CGM to achieve between 40% and 50% of its turnover.

My contribution to this great project has allowed me to work on these different
aspects:

- Collect, discuss and understand the different needs expressed by business
  stakeholders regarding the expected functionalities of this platform.
- Participate in and lead various scoping workshops around the development of
  'High-Level' solutions allowing the creation of design models for application
  architects and development teams.
- Participate in the drafting of 'Low Level' design models to specify the
  technical needs for the implementation of the chosen solution.

*Context of the mission:*

Scoping Negotiation Solution Design
Engineering Design Technology

- C#
- AWS
- Kafka
- Solace
- MongoDB

### AWS Solution architect - TerraceMetrics

> From September 2022 to April 2023

Terrace Metrics (<https://www.terracemetrics.org/>) is a leading behavioral
management company that is seen as a key asset for maximizing performance at
both the individual and organizational levels.

The main users of TerraceMetrics are schools and companies concerned with
solving the challenges associated with the study of behavioral science.

TerraceMetrics' partners include prestigious institutions such as Goodwall
(<http://goodwall.io/>), Cincinnati Public Schools and GrantUsHope
(<https://grantushope.org/>).

During this mission, I was initially asked to contribute to the stabilization
of the existing platform while implementing critical features for its users.

Secondly, I was able to contribute to a strategic and progressive migration of
the platform by proposing and facilitating various discovery workshops and
relying on the AWS ecosystem to achieve this.

*Context of the mission:*

- event storming workshops, impact mapping, example mapping and story mapping Technologies:
- AWS serverless ecosystem
- AWS Lambda
- AWS CloudFormation DynamoDB
- NodeJs Javascript Typescript
- AWS EC2
- React
- Docker
- PostgreSQL

### Senior Software Developer - Agicap

> From December 2021 to August 2022

Agicap is one of the largest European leaders in cash management. This company
counts among its customers more than 6000 European SMEs who manage their
activity through cash flow with their solution.

During this mission, I contributed to the creation of the payment product line
which allowed Agicap to increase their conversion rate by facilitating the
payment process for its customers.

I have had the chance to work with multidisciplinary and very mature teams on
topics such as Domain Driven Design and Test Driven Development. Thanks to
these methodologies, Agicap has been able to continuously deliver a product in
full evolution with a zero bug rate.

*Context of the mission:*

- Event Storming
- Example Mapping
- Story Mapping
- TDD
- DDD
- BDD
- Mob programming
- dotnet 6-7
- C#
- EFCore
- Angular

### Dotnet C# tech Coach - CDiscount

> From August 2020 to December 2021

Cdiscount is one of the largest players in French e-commerce. This large group
has nearly 2000 employees and achieved a turnover of more than 2 billion euros
in 2021.

During this mission, I accompanied several product teams responsible for the
launch of Octopia, a BtoB SaaS marketplace solution. Whether it is for the
field of logistics, fulfillment, catalog or customer repositories, my
contribution has enabled the teams by gaining maturity on different aspects of
product design, including:

- The construction of the vision and the pre-design phases through discovery
  workshops such as event storming, example mapping, impact mapping and story
  mapping with various actors (product teams and tech teams). This has had the
  benefit of strengthening the understanding of the vision, aligning
  implementations with needs while reducing the risk of communication silos,
  characteristic of large groups with a high hierarchy.
- real technical support for teams on their own delivery challenges, by
  applying good development practices, a logical continuation of the previous
  workshops (tactical DDD, BDD, TDD, Clean Code, Clean Architecture)
- Training of teams when necessary, particularly on Clean Code, TDD,
  refactoring and Clean Architecture topics. These trainings took place over
  several days and included practical exercises with mob programming.

*Context of the mission:*

- Event Storming
- Example Mapping
- Story Mapping
- Impact Mapping
- TDD
- DDD
- BDD
- Mob programming
- dotnet 5-6
- C#
- EFCore

### Senior Software Developer - SiemensPLM, Galaxy Semiconductor

> From June 2015 to August 2020

Siemens PLM is a key player in the digital transformation of companies,
enabling them to benefit from such transformations and to reveal themselves in
relation to competing players.

My mission at Siemens PLM took place more specifically within Galaxy
Semiconductor and Mentor Graphics, a division of Siemens PLM. I have
contributed to the maintenance and development of various products, in
particular, a range of thick client type software for semiconductor test
engineers. The purpose of these tools is to obtain on the one hand the best
possible performance of the production lines of electronic components of all
kinds (from the most basic micro-controller to the most advanced processors)
while ensuring an optimal level of quality with regard to the standards in
force (automotive, aerospace, etc.)

*Job context:*

- Desktop applications using C++ (03/11/14/17)
- DBMS MySQL and MariaDB
- .Net Core platform product development
- Web based application using several Javascript backend (nodeJS)
- Frontend frameworks (VueJS)
- Docker and DigitalOcean cloud platform

*Product links:*

- [Pat-Man](https://www.galaxysemi.com/patman)
- [Examinator-Pro](https://www.galaxysemi.com/examinatorpro)
- [Yield-Man](https://www.galaxysemi.com/yieldman)

### Software Engineer - Atos Integration

> From October 2012 to June 2015

Atos Integration is the ENS subsidiary of the Atos Group.
I work there as a designer of software solutions for end customers.
The technical areas concerned are above all the use of Microsoft technologies
based on the .Net Framework.

If necessary, I intervene from time to time with potential customers in order
to audit or advise them with regard to an existing solution that they would
like to develop.

*Job context:*

- Web (client/server) with ASP and C#
- Thick client with C# (WPF and Winforms)

### Software Developer - Isagri

> From February 2011 to October 2012

Publisher of software packages for agricultural professions and accounting.

In this company, I was a .Net development engineer.

The project I was working on was aimed at livestock farmers (herd management
software package) and concerning all aspects related to this profession.

*job context:*

- Microsoft's dotnet framework
- WPF
- WCF
- Delphi 7

---
