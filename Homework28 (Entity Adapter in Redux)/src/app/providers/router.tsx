import type { MenuSection } from '@/widgets/header'
import { createBrowserRouter, Navigate } from 'react-router'
import { BaseLayout } from '../layouts/BaseLayout'
import { Task1Route } from '@/pages/task1'

const sections: MenuSection[] = [
    {
        title: 'Level 1',
        menuOptions: [
            {
                id: '1',
                title: 'Task 1',
                to: '/task1',
            },
        ],
    },
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout sections={sections} />,
        children: [
            Task1Route,
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
])
