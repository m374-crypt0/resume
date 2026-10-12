---
title: 'Ingénieur Blockchain / Smart Contracts — EVM / ZK'
author: 'Sebastien Levy'
description: 'Ingénieur blockchain spécialisé en smart contracts EVM et systèmes Zero-Knowledge — Solidity, Foundry, Noir — fort de plus de 20 ans d''ingénierie logicielle.'
card:
  title: 'Ingénieur Blockchain / Smart Contracts'
  description: 'EVM · Solidity · ZK · Foundry'
  order: 3
---
---

## Profil

Ingénieur logiciel avec **plus de 20 ans d'expérience**, aujourd'hui concentré
sur les **protocoles blockchain basés sur l'EVM, les smart contracts et les
systèmes Zero-Knowledge**.

Expérience concrète de la conception et de l'implémentation de protocoles
Solidity, de la logique d'exécution EVM, de la sécurité des smart contracts,
des tests avec Foundry et des **circuits ZK Noir / Barretenberg**.

Solide expérience des systèmes et du backend en C++, C#, Python et
TypeScript, qui apporte au développement Web3 la rigueur de l'ingénierie
logicielle de production et l'expérience des systèmes distribués.

---

<div class="page-break"></div>

## Expériences

### Ingénieur protocole

| Entreprise | Période |
| --- | --- |
| m374-crypt0 | janvier 2026 – aujourd'hui |

Travail sur un **système de preuve d'éligibilité Zero-Knowledge** pour les
protocoles d'actifs du monde réel (Real-World Assets, RWA).

- Conception d'un système de preuve d'éligibilité Zero-Knowledge permettant de
  vérifier la conformité on-chain **sans divulguer l'identité ni les données
  de conformité privées**
- Implémentation de **circuits ZK Noir** prouvant qu'un engagement Poseidon2
  est dérivé des identifiants secrets de l'utilisateur, tout en liant
  l'éligibilité à une adresse de wallet
- Conception d'une architecture à deux parties : une API émettrice et un flux
  de génération de preuves côté client
- Développement d'une API émettrice en Hono / TypeScript stockant des
  engagements masqués on-chain
- Développement d'un client générant les preuves ZK localement et les
  soumettant à un vérificateur Solidity
- Implémentation de `Prover.sol` pour injecter `msg.sender` et l'engagement
  comme entrées publiques lors de la vérification, empêchant la réutilisation
  d'une preuve d'une adresse à l'autre
- Implémentation de `CommitmentStore.sol` comme registre de révocation on-chain
- Mise en **conformité EIP-170 de la taille du bytecode** du vérificateur
  UltraHonk généré, en fixant les runs de l'optimiseur Solidity à 112
- Utilisation de **Poseidon2** dans les implémentations Noir et TypeScript
  pour garantir des engagements identiques
- Tests de bout en bout couvrant l'engagement par l'émetteur, le déploiement
  local sur Anvil, la génération de preuve côté client et la vérification
  on-chain

*Stack : Solidity · Foundry · Noir · Barretenberg · TypeScript · Hono · Docker · Anvil*

[Dépôt](https://github.com/m374-crypt0/zk-assets)

<div class="page-break"></div>

### Tech Lead C++

| Entreprise | Période |
| --- | --- |
| Ringover | septembre 2023 – mars 2025 |

Tech lead sur le backend C/C++ et Python d'une plateforme de téléphonie IP dans le cloud.

- Implémentation de composants protocolaires conformes aux RFC SIP et RTP
- Modernisation de la base de code C++ vers les standards actuels
- Instrumentation de composants natifs avec OpenTelemetry
- Mise en place d'environnements de build et de test déterministes basés sur Docker
- Développement d'un runner Bitbucket Pipelines parallélisé
- Contribution de correctifs et d'ajouts en amont à FreeSwitch et Kamailio

*Stack : C++ · C · Python · SIP · RTP · OpenTelemetry · Docker · Proxmox*

### Architecte solution

| Entreprise | Période |
| --- | --- |
| CMA-CGM | mars 2023 – août 2023 |

Mission de conception d'architecture pour une plateforme de réservation maritime.

- Animation d'ateliers de découverte structurés
- Rédaction des spécifications de High-Level et Low-Level Design
- Conception des frontières de services et des contrats d'intégration
- Travail autour d'une colonne vertébrale événementielle Kafka / Solace

*Stack : C# · AWS · Kafka · Solace · MongoDB*

<div class="page-break"></div>

### Architecte solution AWS

| Entreprise | Période |
| --- | --- |
| TerraceMetrics | septembre 2022 – avril 2023 |

Mission de stabilisation de plateforme et de migration vers AWS.

- Diagnostic de problèmes de fiabilité en production
- Conception d'ateliers de découverte pour la stratégie de migration
- Migration des charges de travail vers Lambda, DynamoDB et CloudFormation
- Intervention sur le backend Node.js / TypeScript, le frontend React et l'infrastructure

*Stack : AWS Lambda · CloudFormation · DynamoDB · EC2 · Node.js · TypeScript · React · PostgreSQL · Docker*

### Développeur .NET senior

| Entreprise | Période |
| --- | --- |
| Agicap | décembre 2021 – août 2022 |

Développement from scratch d'une gamme de produits de paiement.

- Construction des parcours de paiement selon le Domain-Driven Design
- Travail avec agrégats, événements de domaine et bounded contexts
- Application de pratiques TDD et BDD strictes

*Stack : C# · .NET 6–7 · EF Core · Angular · TDD · DDD · BDD*

### Coach technique .NET / C\#

| Entreprise | Période |
| --- | --- |
| CDiscount | août 2020 – décembre 2021 |

Mission de coaching technique auprès des équipes produit d'Octopia.

- Accompagnement hands-on sur le DDD, la Clean Architecture et le TDD
- Animation d'ateliers de découverte du domaine
- Conception et animation de formations techniques

*Stack : C# · .NET 5–6 · EF Core · TDD · DDD · BDD*

### Développeur backend senior

| Entreprise | Période |
| --- | --- |
| Siemens PLM | septembre 2018 – août 2020 |
| Galaxy Semiconductor | juin 2015 – septembre 2018 |

Développement de logiciels d'ingénierie de test des semi-conducteurs.

- Développement d'applications desktop C++, de C++03 à C++17
- Travail sur des applications s'appuyant sur MySQL / MariaDB
- Contribution à des outils web en Node.js / VueJS
- Exploitation de l'infrastructure Docker / DigitalOcean

*Stack : C++ · MySQL · MariaDB · .NET Core · Node.js · VueJS · Docker · DigitalOcean*

### Ingénieur logiciel fullstack

| Entreprise | Période |
| --- | --- |
| Atos Integration | octobre 2012 – juin 2015 |

Conception et livraison de logiciels d'entreprise sur mesure.

*Stack : C# · .NET Framework · ASP.NET · WPF · WinForms*

### Développeur logiciel

| Entreprise | Période |
| --- | --- |
| Isagri | février 2011 – octobre 2012 |

Développement .NET Framework pour un logiciel de gestion d'élevage.

*Stack : C# · .NET Framework · WPF · WCF · Delphi 7*

<div class="page-break"></div>

### Spécialiste informatique

| Entreprise | Période |
| --- | --- |
| Armée de l'Air | avril 2004 – février 2011 |

Spécialiste informatique intervenant en réseau, systèmes et ingénierie logicielle.

- Infrastructure réseau Cisco / Enterasys
- Administration Linux et Windows
- Services web et DNS
- Développement logiciel pour des équipements de sécurité réseau

---

<div class="page-break"></div>

## Projets Web3

### zk-assets

Système d'éligibilité Zero-Knowledge pour les protocoles d'actifs du monde réel
(Real-World Assets).

- Conception d'un protocole d'éligibilité respectueux de la vie privée
- Implémentation de circuits Noir utilisant **Poseidon2**
- Développement des contrats Solidity de vérification et d'engagement
- Implémentation des composants émetteur et client
- Prévention de la réutilisation des preuves d'une adresse de wallet à l'autre
  grâce au liage des entrées publiques côté vérificateur
- Implémentation de la révocation on-chain des identifiants
- Résolution des **contraintes EIP-170 sur le bytecode du vérificateur**
- Couverture complète par des tests de bout en bout Foundry / Anvil

*Stack : Solidity · Foundry · Noir · Barretenberg · TypeScript · Hono · Docker*

[Dépôt](https://github.com/m374-crypt0/zk-assets)

### nifty

**Implémentation complète de NFT ERC-721** avec mécanique de crowdsale et
architecture upgradeable.

- Implémentation d'un système ERC-721 avec les extensions enumeration,
  metadata, burnable et permit
- Développement d'une **crowdsale** en plusieurs phases avec accès par liste
  blanche et tarification basée sur un taux
- Implémentation d'un **Transparent Upgradeable Proxy** en assembly bas niveau
  pour une gestion explicite des slots de stockage
- Application du pattern **commit-reveal** pour une révélation des métadonnées
  verrouillée dans le temps
- Implémentation d'un transfert de propriété en deux étapes
- **100 % de couverture de tests sur plus de 15 suites de tests Foundry**
- Intégration de GitHub Actions, LCOV / Codecov et de l'analyse de sécurité Slither
- Configuration de la CI pour bloquer les vulnérabilités de smart contracts de sévérité élevée
- Développement d'un backend TypeScript / Bun avec ethers.js v6 et TypeChain
- Suppression en O(1) dans l'énumération des tokens grâce au swap-and-pop

*Stack : Solidity · Foundry · OpenZeppelin · TypeScript · Bun · ethers.js · Docker*

[Dépôt](https://github.com/m374-crypt0/nifty)

<div class="page-break"></div>

### dexterity

Exchange décentralisé full-stack inspiré d'**Uniswap V2**.

- Implémentation d'un AMM basé sur la **formule du produit constant (x·y=k)**
- Prise en charge des swaps à montant d'entrée exact et à montant de sortie exact
- Conception de l'architecture des pools de liquidité avec des identifiants de pool basés sur XOR et des réserves en uint128
- Calcul des parts de LP par moyenne géométrique / racine carrée babylonienne
- Intégration d'Uniswap V2 comme routeur de repli pour les paires non prises en charge
- Contrôles de sécurité, dont checks-effects-interactions, SafeERC20 et une gestion d'état protégée contre la réentrance
- Intégration de **Slither** dans la CI/CD GitHub Actions
- Tests d'invariants Foundry et tests sur fork du mainnet contre les vrais pools
  USDC/WETH d'Uniswap V2
- Couverture LCOV / Codecov et rapports de consommation de gas
- Développement d'un backend TypeScript / Express.js pour l'indexation des événements on-chain
- Développement d'un frontend Next.js / React
- Workflows de déploiement sur Anvil et Sepolia et de vérification sur Etherscan

*Stack : Solidity · Foundry · Yul · TypeScript · Express.js · Next.js · React · Docker*

[Dépôt](https://github.com/m374-crypt0/dexterity)

---

## Articles (en anglais)

- [Understanding Solidity Transparent Upgradeable Proxy Pattern - A Practical Guide](https://dev.to/sebastien_levy_233585b9a3/understanding-solidity-transparent-upgradeable-proxy-pattern-a-practical-guide-1abm)
- [How to deploy you NFT on Sepolia - Simple and 100% under control](https://dev.to/sebastien_levy_233585b9a3/how-to-deploy-you-nft-on-sepolia-simple-and-100-under-control-245d)
- [Deep Dive in Transparent Proxy Code](https://dev.to/sebastien_levy_233585b9a3/deep-dive-in-transparent-proxy-code-2o45)

---

<div class="page-break"></div>

## Compétences

### Smart Contracts

Solidity · EVM · Foundry · OpenZeppelin · Yul · Hardhat · ethers.js · Viem

### Sécurité

Slither · Protection contre la réentrance · Checks-Effects-Interactions · Tests d'invariants · Tests sur fork du mainnet · Contrôle d'accès · Contrats upgradeables

### Zero-Knowledge

ZKP · Noir · Barretenberg · UltraHonk · Poseidon2 · Engagements cryptographiques

### Backend et outillage

TypeScript · Bun.js · Node.js · Express.js · Hono · Docker · GitHub Actions

### Systèmes

C++ · C · Python · Systèmes distribués · Linux · Réseaux

---

## Formation

| Diplôme | École | Période |
| --- | --- | --- |
| BTS Informatique industrielle | Lycée Pierre Méchain | 2001–2003 |

---

<div class="page-break"></div>

## Contact

**E-mail** : <m374-crypt0@pm.me>

**Localisation** : France

**GitHub** : [m374-crypt0](https://github.com/m374-crypt0)

**LinkedIn** : [Sebastien Levy](https://www.linkedin.com/in/sebastien-levy-1a6148b2/)

**X** : @m374crypt0

**Telegram** : @M374crypto

---

## Langues

- Français : langue maternelle
- Anglais : courant
