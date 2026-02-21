import { SET_GAME_TIME } from './actionTypes'

export const setGameTime = (time: number) => ({
    type: SET_GAME_TIME,
    payload: time,
})
