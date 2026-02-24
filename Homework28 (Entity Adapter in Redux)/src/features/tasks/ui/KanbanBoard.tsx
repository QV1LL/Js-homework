import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd'
import { taskUpdated } from '../model/tasksSlice'
import { selectTasksGroupedByStatus } from '../model/selectors'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'

const COLUMNS = [
    { id: 'todo', title: 'To Do', color: 'bg-slate-500' },
    { id: 'inProgress', title: 'In Progress', color: 'bg-blue-500' },
    { id: 'done', title: 'Done', color: 'bg-green-500' },
] as const

export const KanbanBoard = () => {
    const dispatch = useDispatch()
    const groupedTasks = useSelector(selectTasksGroupedByStatus)

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId } = result
        if (!destination) return
        if (destination.droppableId === source.droppableId && destination.index === source.index) return

        dispatch(
            taskUpdated({
                id: draggableId,
                changes: {
                    status: destination.droppableId as 'todo' | 'inProgress' | 'done',
                },
            }),
        )
    }

    return (
        <div className="flex flex-col gap-6 p-6 bg-background h-auto">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Project Board</h2>
                <Badge variant="outline" className="px-3 py-1">
                    {Object.values(groupedTasks).flat().length} Total Tasks
                </Badge>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    {COLUMNS.map((column) => (
                        <div
                            key={column.id}
                            className="flex flex-col bg-muted/50 rounded-xl border p-4 shadow-sm h-fit"
                        >
                            <div className="flex items-center gap-2 mb-4 px-2">
                                <div className={`h-2 w-2 rounded-full ${column.color}`} />
                                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                                    {column.title}
                                </h3>
                                <Badge variant="secondary" className="ml-auto rounded-sm px-1.5 font-mono">
                                    {groupedTasks[column.id].length}
                                </Badge>
                            </div>

                            <Droppable droppableId={column.id}>
                                {(provided, snapshot) => (
                                    <ScrollArea className="max-h-[600px] pr-4">
                                        <div
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            className={`flex flex-col gap-3 min-h-[50px] transition-colors rounded-lg p-1 ${
                                                snapshot.isDraggingOver ? 'bg-accent/50' : ''
                                            }`}
                                        >
                                            {groupedTasks[column.id].map((task, index) => (
                                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                                    {(provided, snapshot) => (
                                                        <Card
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={`group select-none hover:border-primary/50 transition-all ${
                                                                snapshot.isDragging
                                                                    ? 'shadow-2xl border-primary rotate-2'
                                                                    : 'shadow-sm'
                                                            }`}
                                                        >
                                                            <CardHeader className="p-4 pb-2 space-y-0 flex flex-row items-center justify-between">
                                                                <CardTitle className="text-sm font-semibold leading-none truncate">
                                                                    {task.title}
                                                                </CardTitle>
                                                            </CardHeader>
                                                            <CardContent className="p-4 pt-0 flex items-center justify-between mt-4">
                                                                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                                                                    {task.id}
                                                                </span>
                                                            </CardContent>
                                                        </Card>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                        </div>
                                    </ScrollArea>
                                )}
                            </Droppable>
                        </div>
                    ))}
                </div>
            </DragDropContext>
        </div>
    )
}
