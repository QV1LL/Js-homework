import { gameSettingsReducer } from '@features/gameSettings'
import { gameStatsReducer } from '@features/gameStats'
import { spotsReducer } from '@features/spots'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
    settings: gameSettingsReducer,
    stats: gameStatsReducer,
    spots: spotsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
