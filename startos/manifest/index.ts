import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'kathreftestr',
  title: 'Kathreftestr',
  license: 'MIT',
  packageRepo: 'https://github.com/islandbitcoin/kathreftestr-startos',
  upstreamRepo: 'https://github.com/bobodread876/kathreftestr',
  marketingUrl: 'https://bobodread876.github.io/kathreftestr/',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    kathreftestr: {
      source: { dockerBuild: {} },
      arch: ['x86_64', 'aarch64'],
    },
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
