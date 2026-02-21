export interface SpotsState {
    spots: number[]
}

export type Direction = 'up' | 'down' | 'left' | 'right'

export type SpotsAction =
    | { type: 'SHUFFLE_BOARD' }
    | { type: 'MOVE_SPOT'; payload: { value: number; direction: Direction } }
