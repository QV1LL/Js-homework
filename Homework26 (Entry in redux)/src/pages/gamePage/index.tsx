import type { RouteObject } from 'react-router'
import { GamePage } from './ui/GamePage'

export const GamePageRoute: RouteObject = {
    path: '/game',
    element: <GamePage />,
}
