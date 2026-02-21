import type { Direction, SpotsAction, SpotsState } from './actionTypes'

const initialState: SpotsState = {
    spots: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0],
}

const getCoords = (index: number) => ({
    x: index % 4,
    y: Math.floor(index / 4),
})

const getIndex = (x: number, y: number) => y * 4 + x

export function spotsReducer(state = initialState, action: SpotsAction): SpotsState {
    switch (action.type) {
        case 'MOVE_SPOT': {
            const { value, direction } = action.payload
            const currentIndex = state.spots.indexOf(value)
            const emptyIndex = state.spots.indexOf(0)

            const curr = getCoords(currentIndex)
            const empty = getCoords(emptyIndex)

            let targetX = curr.x
            let targetY = curr.y

            if (direction === 'up') targetY -= 1
            if (direction === 'down') targetY += 1
            if (direction === 'left') targetX -= 1
            if (direction === 'right') targetX += 1

            if (targetX === empty.x && targetY === empty.y) {
                const newSpots = [...state.spots]
                ;[newSpots[currentIndex], newSpots[emptyIndex]] = [newSpots[emptyIndex], newSpots[currentIndex]]
                return { ...state, spots: newSpots }
            }

            return state
        }

        case 'SHUFFLE_BOARD': {
            let tempSpots = [...state.spots]
            const directions: Direction[] = ['up', 'down', 'left', 'right']

            for (let i = 0; i < 100; i++) {
                const emptyIndex = tempSpots.indexOf(0)
                const emptyCoords = getCoords(emptyIndex)

                const validMoves = directions
                    .map((dir) => {
                        let tx = emptyCoords.x
                        let ty = emptyCoords.y
                        if (dir === 'up') ty += 1
                        if (dir === 'down') ty -= 1
                        if (dir === 'left') tx += 1
                        if (dir === 'right') tx -= 1
                        return tx >= 0 && tx < 4 && ty >= 0 && ty < 4 ? getIndex(tx, ty) : -1
                    })
                    .filter((idx) => idx !== -1)

                const randomIdx = validMoves[Math.floor(Math.random() * validMoves.length)]
                ;[tempSpots[emptyIndex], tempSpots[randomIdx]] = [tempSpots[randomIdx], tempSpots[emptyIndex]]
            }

            return { ...state, spots: tempSpots }
        }

        default:
            return state
    }
}
