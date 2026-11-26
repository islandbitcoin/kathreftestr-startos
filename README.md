# kathreftestr-startos

StartOS (.s9pk) package for [Kathreftestr](https://github.com/bobodread876/kathreftestr)
that mirrors a livestream to Nostr (NIP-53), self-hosted. Builds the application from the pinned upstream source and package patches on the upstream 0.1.2 runtime image.

## Build

Requires `start-cli` (`curl -fsSL https://start9.com/start-cli/install.sh | sh`),
Docker, Node, and `jq`.

```bash
git submodule update --init
npm ci
make            # → kathreftestr.s9pk
```

## Public playback

**Set Playback URL** stores the public HLS endpoint on the backed-up main volume. New stream events advertise that address. An empty setting uses the local playback endpoint.
