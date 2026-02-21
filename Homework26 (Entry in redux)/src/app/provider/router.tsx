import { GamePageRoute } from '@pages/gamePage'
import { HomePageRoute } from '@pages/homePage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([HomePageRoute, GamePageRoute])
