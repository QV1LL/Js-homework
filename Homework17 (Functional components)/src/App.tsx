import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FilmPage, { type Film } from './pages/FilmPage'
import ProfilePage, { type User } from './pages/ProfilePage'
import { useState } from 'react'
import type { Pet } from './pages/PetPage'
import PetPage from './pages/PetPage'

type AppProps = { favouriteFilm: Film; user: User; pet: Pet }

const App = ({ favouriteFilm, user, pet }: AppProps) => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date())

    function formatTimeFromDate(date: Date) {
        const pad = (number: number) => String(number).padStart(2, '0')

        const hh = pad(date.getHours())
        const mm = pad(date.getMinutes())
        const ss = pad(date.getSeconds())

        return `${hh}:${mm}:${ss}`
    }

    setInterval(() => setCurrentTime(new Date()), 1000)

    return (
        <BrowserRouter>
            <div className="size-full flex flex-col">
                <Header currentTime={formatTimeFromDate(currentTime)} />

                <main className="grow">
                    <Routes>
                        <Route path="/favourite-film" element={<FilmPage {...favouriteFilm} />} />
                        <Route path="/profile" element={<ProfilePage {...user} />} />
                        <Route path="/pet" element={<PetPage {...pet} />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    )
}

export default App
