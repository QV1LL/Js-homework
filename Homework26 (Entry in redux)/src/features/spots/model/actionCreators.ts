import type { Direction, SpotsAction } from './actionTypes'

export const shuffleBoard = (): SpotsAction => ({
    type: 'SHUFFLE_BOARD',
})

export const moveSpot = (value: number, direction: Direction): SpotsAction => ({
    type: 'MOVE_SPOT',
    payload: { value, direction },
})
