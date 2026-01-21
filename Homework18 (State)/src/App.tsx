import { useState } from 'react'
import AccordionItem from './components/AccordionItem'
import Button from './components/Button'
import Carousel from './components/Carousel'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import OrderItems from './components/OrderItems'
import PizzaControls from './components/PizzaControls'
import type { Pizza } from './components/PizzaDisplay'
import TaskContainer from './components/TaskContainer'
import ThemeContainer from './components/ThemeContainer'
import UserCard from './components/UserCard'

const faq = [
    {
        id: 1,
        q: 'Що таке React?',
        a: 'Це JavaScript-бібліотека з відкритим кодом для створення інтерфейсів користувача, яка розробляється компанією Meta.',
    },
    {
        id: 2,
        q: 'Для чого потрібен Tailwind CSS?',
        a: 'Це utility-first CSS фреймворк, який дозволяє стилізувати елементи, комбінуючи готові класи прямо в розмітці.',
    },
    {
        id: 3,
        q: 'Що таке компоненти в React?',
        a: 'Це незалежні блоки коду, які можна використовувати повторно. Вони працюють як функції, що повертають HTML-розмітку.',
    },
]

function App() {
    const [pizza, setPizza] = useState<Pizza>({
        ingredients: [],
        cheesePrice: 20,
        meatPrice: 40,
    })

    return (
        <>
            <TaskContainer title="Level 1 'React-інтерн' (Code Repair)">
                <TaskContainer title="Task 1">
                    <Counter></Counter>
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <UserCard name="Alex" age={25} />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <Button onClick={() => alert('Привіт!')}>Натисни мене</Button>
                </TaskContainer>
            </TaskContainer>
            <TaskContainer title="Level 2 'Майстер Інтерактивності' (Logic & State)">
                <TaskContainer title="Task 1">
                    <Greeting></Greeting>
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <ThemeContainer></ThemeContainer>
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <Carousel
                        images={[
                            'https://i.ytimg.com/vi/sSXaO2jeoXg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBRyHRH3BcwC1rb_qRlcW787hDPsg',
                            'https://thumbs.dreamstime.com/b/stunning-cosmic-images-372595719.jpg',
                            'https://www.shutterstock.com/image-photo/kitty-cat-munchkin-fluffy-animal-260nw-1151252645.jpg',
                            'https://www.shutterstock.com/image-photo/kitty-cat-munchkin-fluffy-animal-260nw-1151252645.jpg',
                        ]}
                    ></Carousel>
                </TaskContainer>
            </TaskContainer>
            <TaskContainer title="Level 3 'UI-Архітектор' (Mini-Apps)">
                <TaskContainer title="Task 1">
                    <OrderItems />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <ul className="flex flex-col">
                        {faq.map((item) => (
                            <li key={item.id}>
                                <AccordionItem title={item.q}>
                                    <p>{item.a}</p>
                                </AccordionItem>
                            </li>
                        ))}
                    </ul>
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <PizzaControls
                        pizza={pizza}
                        onIngredientAdd={(ingredient) =>
                            setPizza({ ...pizza, ingredients: [...pizza.ingredients, ingredient] })
                        }
                    />
                </TaskContainer>
            </TaskContainer>
        </>
    )
}

export default App
