import { SET_GAME_MODE, SET_TIME_LIMIT } from './actionTypes'

export const setGameMode = (isTimed: boolean) => ({
    type: SET_GAME_MODE,
    payload: isTimed,
})

export const setTimeLimit = (timeLimit: number) => ({
    type: SET_TIME_LIMIT,
    payload: timeLimit,
})
