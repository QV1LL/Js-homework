export const SET_GAME_TIME = 'stats/SET_GAME_TIME'

export interface GameStatsState {
    gamesTime: number[]
}

export interface GameStatsAction {
    type: 'stats/SET_GAME_TIME'
    payload: number
}
