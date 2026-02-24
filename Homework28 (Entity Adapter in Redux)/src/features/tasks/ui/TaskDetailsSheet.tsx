import { useSelector, useDispatch } from 'react-redux'
import { Badge, Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components'
import { setActiveTask } from '../model/tasksSlice'
import { selectActiveTask } from '../model/selectors'
import { CheckCircle2, Hash } from 'lucide-react'

export const TaskDetailsSheet = () => {
    const dispatch = useDispatch()
    const activeTask = useSelector(selectActiveTask)

    const handleClose = () => dispatch(setActiveTask(null))

    return (
        <Sheet open={!!activeTask} onOpenChange={handleClose}>
            <SheetContent className="sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>{activeTask?.title}</SheetTitle>
                </SheetHeader>

                <Tabs defaultValue="details" className="mt-6">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="details">Details</TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>

                    <TabsContent value="details" className="mt-4 space-y-6 animate-in fade-in-50 duration-300">
                        <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-muted/50">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold">Status</span>
                            </div>
                            <Badge
                                variant={activeTask?.status === 'done' ? 'default' : 'secondary'}
                                className="capitalize shadow-sm"
                            >
                                {activeTask?.status}
                            </Badge>
                        </div>

                        <div className="space-y-4 px-1">
                            <div className="grid grid-cols-[24px_1fr] items-start gap-3">
                                <Hash className="h-4 w-4 mt-0.5 text-muted-foreground" />
                                <div className="space-y-1">
                                    <p className="text-xs font-medium text-muted-foreground leading-none">
                                        Task Identifier
                                    </p>
                                    <p className="text-sm font-mono text-primary/80">{activeTask?.id}</p>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="history" className="pt-4">
                        <p className="text-sm text-muted-foreground italic">No history events for this task yet.</p>
                    </TabsContent>
                </Tabs>
            </SheetContent>
        </Sheet>
    )
}
