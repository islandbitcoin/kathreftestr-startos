# Kathreftestr

Mirror a YouTube/Twitch livestream onto Nostr (NIP-53) with Lightning zaps.

1. Open the **Web Interface**.
2. Paste a YouTube or Twitch livestream URL and click **Mirror to Nostr**.
3. The stream is published as a NIP-53 live event; open it in any Nostr live
   client (zap.stream, Amethyst) via the npub shown.

**Zaps:** each stream gets a `<npub>@npub.cash` Lightning address. To claim the
sats, sign in to npub.cash with the stream's nsec (shown when you go live) and
withdraw. Copy the nsec. A fresh key is generated per stream.

**External playback.** Configure your reverse proxy to forward only playback requests under `/live/` to Kathreftestr. Keep the dashboard and `/api/` on your private network. In **Set Playback URL**, save the full playback endpoint (for example, `https://stream.example.com/live`) before starting a stream. Clear the field to restore local playback.
