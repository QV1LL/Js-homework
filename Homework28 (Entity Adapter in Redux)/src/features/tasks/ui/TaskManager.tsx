import { useSelector, useDispatch } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { selectTasksWithUsers } from '../model/selectors'
import { selectAllUsers } from '@/features/users'
import { updateTaskUser, setActiveTask } from '../model/tasksSlice'
import { TaskDetailsSheet } from './TaskDetailsSheet'

export const TaskManager = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(selectTasksWithUsers)
    const allUsers = useSelector(selectAllUsers)

    const handleUserChange = (taskId: string, userId: string) => {
        dispatch(updateTaskUser({ taskId, userId }))
    }

    const handleRowClick = (taskId: string) => {
        dispatch(setActiveTask(taskId))
    }

    return (
        <div className="p-6 border rounded-xl bg-background shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Project Tasks</h2>

            <div className="rounded-md border overflow-hidden">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow>
                            <TableHead className="w-[40%]">Task</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[250px]">Assignee</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow
                                key={task.id}
                                className="cursor-pointer hover:bg-muted/30 transition-colors"
                                onClick={() => handleRowClick(task.id)}
                            >
                                <TableCell className="font-medium text-primary">{task.title}</TableCell>
                                <TableCell>
                                    <Badge variant="secondary" className="capitalize">
                                        {task.status.replace(/([A-Z])/g, ' $1')}
                                    </Badge>
                                </TableCell>
                                <TableCell onClick={(e) => e.stopPropagation()}>
                                    <Select
                                        value={task.userId}
                                        onValueChange={(newUserId) => handleUserChange(task.id, newUserId)}
                                    >
                                        <SelectTrigger className="h-9 bg-background">
                                            <div className="flex items-center gap-2">
                                                <SelectValue placeholder="Unassigned" />
                                            </div>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {allUsers.map((user) => (
                                                <SelectItem key={user.id} value={user.id}>
                                                    <div className="flex items-center gap-2">
                                                        <Avatar className="h-5 w-5">
                                                            <AvatarImage src={user.avatarUrl} />
                                                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                                                        </Avatar>
                                                        <span className="text-sm">{user.name}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <TaskDetailsSheet />
        </div>
    )
}
