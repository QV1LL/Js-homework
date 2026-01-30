import ChatList from './components/ChatList'
import ColorBoxWrapper from './components/ColorBoxWrapper'
import Counter from './components/Counter'
import LoginForm from './components/LoginForm'
import MemorizingCounter from './components/MemorizingCounter'
import ModalWrapper from './components/ModalWrapper'
import SilentCounter from './components/SilentCounter'
import TaskContainer from './components/TaskContainer'
import TimerWrapper from './components/TimerWrapper'
import VideoPlayer from './components/VideoPlayer'

function App() {
    return (
        <>
            <TaskContainer title='Рівень 1: "Спостерігач" (The Observer)'>
                <TaskContainer title="Task 1">
                    <LoginForm />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <Counter />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <SilentCounter />
                </TaskContainer>
            </TaskContainer>
            <TaskContainer title='Рівень 2: "Оператор" (The Operator)'>
                <TaskContainer title="Task 1">
                    <VideoPlayer />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <ColorBoxWrapper />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <MemorizingCounter />
                </TaskContainer>
            </TaskContainer>
            <TaskContainer title='Рівень 3: "Інженер Інтерфейсів" (UI Engineer)'>
                <TaskContainer title="Task 1">
                    <ChatList />
                </TaskContainer>
                <TaskContainer title="Task 2">
                    <TimerWrapper />
                </TaskContainer>
                <TaskContainer title="Task 3">
                    <ModalWrapper />
                </TaskContainer>
            </TaskContainer>
        </>
    )
}

export default App
