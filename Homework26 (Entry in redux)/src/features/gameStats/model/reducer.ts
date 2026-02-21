import { SET_GAME_TIME, type GameStatsAction, type GameStatsState } from './actionTypes'

const GAMES_TIME = 'gamesTime'

const loadState = (): GameStatsState => {
    try {
        const gamesTime = Array.from<number>(JSON.parse(localStorage.getItem(GAMES_TIME)!))

        return {
            gamesTime,
        }
    } catch {
        return {
            gamesTime: [],
        }
    }
}

const saveState = (state: GameStatsState) => {
    localStorage.setItem(GAMES_TIME, JSON.stringify(state.gamesTime))
}

const initialState: GameStatsState = loadState()

export const gameStatsReducer = (state = initialState, action: GameStatsAction): GameStatsState => {
    switch (action.type) {
        case SET_GAME_TIME: {
            const newState = { ...state, gamesTime: [...state.gamesTime, action.payload] }

            if (action.payload < 0) return state
            saveState(newState)

            return newState
        }
        default:
            return state
    }
}
