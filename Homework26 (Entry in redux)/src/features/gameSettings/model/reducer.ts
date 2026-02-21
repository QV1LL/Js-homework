import { SET_GAME_MODE, SET_TIME_LIMIT, type GameSettingsAction, type GameSettingsState } from './actionTypes'

const initialState: GameSettingsState = {
    isTimed: true,
    timeLimit: 300,
}

export const gameSettingsReducer = (state = initialState, action: GameSettingsAction): GameSettingsState => {
    switch (action.type) {
        case SET_GAME_MODE:
            return { ...state, isTimed: action.payload }
        case SET_TIME_LIMIT:
            return { ...state, timeLimit: action.payload }
        default:
            return state
    }
}
