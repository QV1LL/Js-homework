type TaskContainerProps = { title: string; children: React.ReactNode }

const TaskContainer = ({ title, children }: TaskContainerProps) => {
    return (
        <div className="w-full bg-gray-100 flex flex-col border border-double border-white">
            <header className="w-full bg-white border-b px-4 py-3 shadow-sm">
                <h1 className="text-lg font-bold text-gray-800">{title}</h1>
            </header>

            <main className="flex-1 w-full bg-white shadow-lg overflow-hidden flex flex-col">
                <div className="flex-1 overflow-y-auto p-6">{children}</div>
            </main>
        </div>
    )
}

export default TaskContainer
