import { sdk } from '../sdk'
import { configurePlayback } from './playback'

export const actions = sdk.Actions.of().addAction(configurePlayback)
