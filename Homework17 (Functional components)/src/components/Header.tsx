import { Link } from 'react-router-dom'

type HeaderItemProps = { title: string; to: string }

const HeaderItem = ({ title, to }: HeaderItemProps) => {
    return (
        <li className="cursor-pointer hover:text-blue-400 transition-colors">
            <Link to={to}>{title}</Link>
        </li>
    )
}

const Header = ({ currentTime }: { currentTime: string }) => {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <div className="text-xl font-bold">{currentTime}</div>
            <nav className="hidden md:flex">
                <ul className="flex gap-4">
                    <HeaderItem title="Favourite Film" to="/favourite-film" />
                    <HeaderItem title="Profile" to="/profile" />
                    <HeaderItem title="My Pet" to="/pet" />
                </ul>
            </nav>
        </header>
    )
}

export default Header
