import { FileHelper, z } from '@start9labs/start-sdk'
import { sdk } from '../sdk'

export const playbackSettings = FileHelper.json(
  { base: sdk.volumes.main, subpath: './playback.json' },
  z.object({ url: z.string().default('') }),
)

const inputSpec = sdk.InputSpec.of({
  url: sdk.Value.text({
    name: 'Public playback URL',
    description:
      'Full HTTPS URL of the public HLS endpoint, including /live. Leave blank for local playback.',
    required: false,
    default: null,
  }),
})

export const configurePlayback = sdk.Action.withInput(
  'configure-playback',
  async () => ({
    name: 'Set Playback URL',
    description:
      'Choose the playback address advertised in new Nostr stream events.',
    warning: null,
    allowedStatuses: 'any',
    group: null,
    visibility: 'enabled',
  }),
  inputSpec,
  async ({ effects }) => ({
    url:
      (await playbackSettings
        .read((settings) => settings.url)
        .const(effects)) || undefined,
  }),
  async ({ effects, input }) => {
    let url = (input.url ?? '').trim()
    if (url) {
      const parsed = new URL(url)
      if (
        parsed.protocol !== 'https:' ||
        parsed.username ||
        parsed.password ||
        parsed.search ||
        parsed.hash
      ) {
        throw new Error(
          'Use a public HTTPS playback URL without credentials, a query, or a fragment.',
        )
      }
      url = parsed.href.replace(/\/+$/, '')
    }
    await playbackSettings.merge(effects, { url })
  },
)
