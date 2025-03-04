# What is a Torrent?

Torrenting is a peer-to-peer (P2P) file sharing protocol that allows users to share files directly with each other rather than downloading from a central server. This decentralized approach enhances download speeds and reduces strain on individual servers.

### How Torrenting Works

1. **Decentralized System**: Unlike traditional downloads where you get a file from a single server, torrenting distributes the downloading process across multiple users (peers).
2. **Key Components**:

   - **Seeders**: Users who have the complete file and share it
   - **Leechers**: Users who are downloading the file (may share partial content)
   - **Trackers**: Servers that coordinate connections between peers (DHT/PEX can bypass)
   - **Torrent File/Magnet Link**: Contains metadata needed to find and download the content
   - **Swarm**: Collective group of all peers (seeders + leechers) sharing a torrent

3. **Process**:
   - Download a .torrent file (metadata) or use a magnet link (trackerless)
   - Torrent client connects to trackers/swarm using the metadata
   - File is downloaded in pieces from multiple sources simultaneously
   - Completed files are automatically shared (seeded) with others

## Getting Started

### Basic Torrent Usage

1. **Install a torrent client** (qBittorrent recommended)
2. **Find a torrent** via .torrent file or magnet link
3. **Open in client** (magnet links auto-start, .torrent files need manual import)
4. **Select download location/files**
5. **Monitor download progress** (speed depends on seeders/your connection)
6. **Seed after completion** (maintain at least 1:1 ratio)

## Important Considerations

### Privacy and Safety

> **Warning**: Always prioritize your privacy and security when torrenting.

- **Use a VPN**: Essential to hide IP from peers/ISP (avoid free VPNs)
- **Port Forwarding**: Improves connectivity (enable in client/router)
- **Seedbox Alternative**: Dedicated server for torrenting (avoids local risks)
- **Verify files**: Scan downloads with antivirus software
- **Trusted Sources**: Use reputable trackers like Nyaa.si

### Speed Optimization

- **Seeder Count**: More seeders = faster downloads
- **Open Ports**: Use port forwarding for better peer connections
- **Client Settings**: Adjust connection limits/throttling
- **Peer Priority**: Connect to seeders with open ports (green indicators)

### Terminology

| Term                | Definition                                                   |
| ------------------- | ------------------------------------------------------------ |
| **Ratio**           | Uploaded vs downloaded data (1:1 = 100%)                     |
| **Piece**           | File segment distributed through swarm                       |
| **Magnet Link**     | Trackerless torrent initiation URI                           |
| **Private Tracker** | Invite-only communities with ratio rules                     |
| **Connectability**  | Ability to receive incoming connections (requires open port) |

## Recommended Clients

::: tip
For optimal safety:

- Use VPN with kill switch
- Bind client to VPN interface
- Consider seedbox for passive seeding
  :::

### PC

- [<Pill name="qBittorrent" icon="twemoji:star" color="yellow" />](https://www.qbittorrent.org)
- [<Pill name="Deluge" />](https://www.deluge-torrent.org/)

### Android

- [<Pill name="LibreTorrent" icon="twemoji:star" color="yellow" />](https://github.com/proninyaroslav/libretorrent)
- [<Pill name="Flud" />](https://play.google.com/store/apps/details?id=com.delphicoder.flud)

## Advanced Configuration

### Port Forwarding Guide

1. Check client's listening port (qBittorrent: Tools → Options → Connection)
2. Access router settings via default gateway (192.168.0.1 etc)
3. Forward TCP/UDP ports (use 49152+ to avoid ISP blocking)
4. Verify with [CanYouSeeMe.org](https://canyouseeme.org)

### VPN Integration

- **Split Tunneling**: Route only torrent traffic through VPN
- **VPN Port Forwarding**: Services like AirVPN/ProtonVPN offer torrent-optimized ports
- **Kill Switch**: Prevent IP leaks if VPN disconnects

### Seedbox Benefits

- 24/7 seeding without local resources
- High-speed ratios on private trackers
- Integrated media servers/automation
- Geographic redundancy for rare torrents

## Important Notes

::: info Good Practices
Maintain healthy ratios (2:1+ on private trackers)
:::

- **Seed Responsibly**: Don't hit-and-run
- **Respect Throttling**: Limit uploads during active use
- **Verify Content**: Report bad torrents
- **Support Trackers**: Don't share private tracker invites publicly
