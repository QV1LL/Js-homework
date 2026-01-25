import AddTag from './components/AddTag'
import Comments from './components/Comments'
import LiftingStateExample from './components/LiftingStateExample'
import OnlineShop from './components/OnlineShop'
import Posts from './components/Posts'
import ProductsLayout from './components/ProductsLayout'
import RegistrationForm from './components/RegistrationForm'
import TaskContainer from './components/TaskContainer'
import TasksEditor from './components/TasksEditor'
import UserProfile from './components/UserProfile'

function App() {
    return (
        <>
            <TaskContainer title='Level 1 "Лікар Мутацій" (State Healer)'>
                <TaskContainer title="Task 1">
                    <UserProfile />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <AddTag />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <LiftingStateExample />
                </TaskContainer>
            </TaskContainer>
            <TaskContainer title='Level 2 "Майстер Колекцій" (Collection Master)'>
                <TaskContainer title="Task 1">
                    <RegistrationForm />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <Comments />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <Posts />
                </TaskContainer>
            </TaskContainer>
            <TaskContainer title='Level 3 "Архітектор Дашбордів" (State Architect)'>
                <TaskContainer title="Task 1">
                    <ProductsLayout />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <TasksEditor />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <OnlineShop />
                </TaskContainer>
            </TaskContainer>
        </>
    )
}

export default App
