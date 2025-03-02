# <iconify-icon icon="mdi:chat-processing" style="margin-right:0.25em;color:#3498db;"></iconify-icon> IRC Guide

## Step 1: Choose a Client

| Client             | Platform                                                                                   | Download Link                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **HexChat**        | <iconify-icon icon="mdi:microsoft-windows" /> / <iconify-icon icon="simple-icons:linux" /> | [<Pill name="HexChat" />](https://hexchat.github.io)                         |
| **mIRC**           | <iconify-icon icon="mdi:microsoft-windows" />                                              | [<Pill name="mIRC" />](https://www.mirc.com)                                 |
| **LimeChat**       | <iconify-icon icon="mdi:apple" />                                                          | [<Pill name="LimeChat" />](https://limechat.net/mac/)                        |
| **Irssi**          | <iconify-icon icon="simple-icons:linux" />                                                 | [<Pill name="Irssi" />](https://www.irssi.org/)                              |
| **Revolution IRC** | <iconify-icon icon="mdi:android" />                                                        | [<Pill name="Revolution IRC" />](https://f-droid.org/packages/io.mrarm.irc/) |
| **IRCCloud**       | <iconify-icon icon="mdi:android" />                                                        | [<Pill name="IRCCloud" />](https://github.com/irccloud/android)              |

## Step 2: Server Configuration

- **Server:** `irc.rizon.net`
- **Port:** `6697` (SSL/TLS required)
- **Nickname:** `YourUsername` (register with NickServ)

### Example Configuration (HexChat)

1. Go to **File > New Server**
2. Enter `irc.rizon.net` under "Server"
3. Check **SSL** and set port to `6697`
4. Click **Connect**

## Step 3: Join Channels

```bash
/join #nibl       :: For Nibl downloads
/join #subsplease :: For SubsPlease content
```

## Step 4: Download Files

### Nibl (#nibl)

1. **Search:**

   ```bash
   !search <keyword>
   ```

   Example:

   ```bash
   !search anime episode 5
   ```

2. **Download:**
   ```bash
   !pack <number>
   ```
   Example:
   ```bash
   !pack 3055
   ```

### SubsPlease (#subsplease)

1. Check channel topic for bot names/pack numbers
2. **XDCC Command:**
   ```bash
   /msg SubsPleaseBot xdcc send #123
   ```

## Command Reference

| Category       | Command                      | Example                            |
| -------------- | ---------------------------- | ---------------------------------- |
| **Help**       | `/msg BotName XDCC HELP`     |                                    |
| **List Packs** | `/msg [BotName] XDCC LIST`   | `LIST 100-200` for range           |
| **Search**     | `/msg [BotName] XDCC SEARCH` | `SEARCH anime episode 5`           |
| **Download**   | `/msg [BotName] XDCC SEND`   | `SEND 3055` or `SEND 123 password` |
| **Batch**      | `/msg [BotName] XDCC BATCH`  | `BATCH 100-150` or `101,105-110`   |
| **Queue**      | `/msg [BotName] XDCC QUEUE`  | `REMOVE 3055` to cancel            |

::: warning IMPORTANT
**Command Formatting Notes:**

- Remove square brackets in actual commands
- Use proper bot names from channel topics
- Example valid command:
  ```bash
  /msg SubsPleaseBot XDCC SEND 123
  ```
  :::

## Notes

**Always enable:**

- SSL/TLS (port 6697)
- DCC transfers in client settings
- Bots may have queues - wait for confirmation
- Avoid public networks without SSL
