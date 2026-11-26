import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.1.2:1',
  releaseNotes: {
    en_US: "Adds Set Playback URL so remote viewers can follow the stream address advertised on Nostr.",
    es_ES: "Permite configurar la URL de reproducción que se anuncia en Nostr.",
    de_DE: "Die auf Nostr veröffentlichte Wiedergabe-URL kann jetzt eingestellt werden.",
    pl_PL: "Umożliwia ustawienie adresu odtwarzania publikowanego w Nostr.",
    fr_FR: "Permet de configurer l’adresse de lecture annoncée sur Nostr.",
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
