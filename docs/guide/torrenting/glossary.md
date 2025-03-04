# Glossary

#### Core Concepts

| Term              | Definition                                                                         |
| ----------------- | ---------------------------------------------------------------------------------- |
| **Tracker**       | Server coordinating peer connections (public/private)                              |
| **DHT**           | Distributed Hash Table - decentralized peer discovery                              |
| **PEX**           | Peer Exchange - peer sharing between clients                                       |
| **Swarm**         | All peers (seeders + leechers) sharing a torrent                                   |
| **Piece**         | File segment (typically 256KB-2MB) distributed through swarm                       |
| **Seeder**        | Peer with a complete copy of the file actively uploading to others                 |
| **Leecher**       | Peer in the process of downloading, often contributing less to upload              |
| **Torrent File**  | Metadata file containing information about the files and trackers                  |
| **Magnet Link**   | URL linking directly to a torrent resource without needing a .torrent file         |
| **Super-seeding** | Seeder mode optimizing initial seeding by sending unique pieces to different peers |

#### Network Types

| Term                | Definition                     |
| ------------------- | ------------------------------ |
| **Public Tracker**  | Open to anyone (e.g., Nyaa.si) |
| **Private Tracker** | Invite-only with ratio rules   |
| **Hybrid**          | Uses both trackers and DHT/PEX |

#### Client Metrics

| Term               | Definition                                             |
| ------------------ | ------------------------------------------------------ |
| **Ratio**          | Uploaded/downloaded ratio (1:1 = 100%)                 |
| **Snatched**       | Number of times torrent was completed                  |
| **FL**             | Free Leech - downloads don't count against ratio       |
| **FL Token**       | Private tracker perk for ratio exemption               |
| **Download Speed** | Rate at which data is received (e.g., kB/s, MB/s)      |
| **Upload Speed**   | Rate at which data is sent to peers (e.g., kB/s, MB/s) |

#### User Behavior

| Term               | Definition                                                             |
| ------------------ | ---------------------------------------------------------------------- |
| **Seedbox**        | Remote server for 24/7 seeding                                         |
| **Connectability** | Ability to receive incoming connections                                |
| **Ratio Hopping**  | Rapidly switching torrents to avoid seeding responsibilities           |
| **Blocklist**      | List used to block connections from malicious or unwanted IP addresses |
