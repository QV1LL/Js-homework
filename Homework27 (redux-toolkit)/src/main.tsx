import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'

import { WeatherPage } from '@/pages/weatherPage'
import { store } from '@/app'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <WeatherPage />
        </Provider>
    </StrictMode>,
)
