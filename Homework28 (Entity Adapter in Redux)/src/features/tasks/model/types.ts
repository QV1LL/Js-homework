export interface Task {
    id: string
    title: string
    status: 'todo' | 'inProgress' | 'done'
    userId: string
}

export interface TaskWithUser {
    id: string
    title: string
    status: 'todo' | 'inProgress' | 'done'
    userId: string
    name: string
    avatarUrl: string
}
