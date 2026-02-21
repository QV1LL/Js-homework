export const SET_GAME_MODE = 'settings/SET_GAME_MODE'
export const SET_TIME_LIMIT = 'settings/SET_TIME_LIMIT'

export interface GameSettingsState {
    isTimed: boolean
    timeLimit: number
}

interface SetGameModeAction {
    type: 'settings/SET_GAME_MODE'
    payload: boolean
}

interface SetTimeLimitAction {
    type: 'settings/SET_TIME_LIMIT'
    payload: number
}

export type GameSettingsAction = SetGameModeAction | SetTimeLimitAction
