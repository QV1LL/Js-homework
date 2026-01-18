import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

const favouriteFilm = {
    title: 'Back to the Future',
    description:
        "Марті МакФлай живе в каліфорнійському містечку. Має доброзичливий характер, хоча в родині його не все так гладко. Мати багато п'є, батько — типовий невдаха. Від реальності його рятує музика, дівчина Дженніфер і дружба з доком Брауном. Саме він покаже Марті своє нове дітище — машину часу, яку винайшов для благих цілей. Марті ж на ній потрапляє в 1955 рік, зустрічає батьків — зовсім молодими, і... Руйнує їм перше побачення.",
    director: 'Robert Zemeckis',
    releaseYear: 1985,
    studio: 'Universal Pictures',
    posterUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg',
    backdropUrl: 'https://scrapsfromtheloft.com/wp-content/uploads/2018/02/Back-to-the-Future-1985.jpg',
}

const user = {
    name: 'Bohdan',
    phoneNumber: '+38050*******',
    email: 'ghost228678@gmail.com',
    address: 'Ukraine, Zakarpatya',
    jobExperience: 'Create own site, a few desktop and mobile apps',
    skills: ['ASP.NET', 'REACT', 'TypeScript', 'C#', 'C++', 'Unity'],
    avatarUrl: 'https://avatars.githubusercontent.com/u/152691060?v=4',
}

const pet = {
    name: 'Альфа',
    type: 'Dog (Labrador)',
    age: 7,
    photoUrl: 'https://static1.bigstockphoto.com/4/1/3/large1500/314441920.jpg',
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App favouriteFilm={favouriteFilm} user={user} pet={pet} />
    </StrictMode>,
)
