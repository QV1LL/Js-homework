import axios from 'axios'

export const api = axios.create({
    baseURL: import.meta.env.VITE_WEATHER_URL,
    params: {
        appid: import.meta.env.VITE_WEATHER_API_KEY,
    },
})
