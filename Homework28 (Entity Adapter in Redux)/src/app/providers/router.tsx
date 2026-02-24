import type { MenuSection } from '@/widgets/header'
import { createBrowserRouter, Navigate } from 'react-router'
import { BaseLayout } from '../layouts/BaseLayout'
import { Task13Route } from '@/pages/level1/task1-3'
import { Task1Route as Level1Task1Route } from '@/pages/level2/task1'
import { Task2Route } from '@/pages/level2/task2'
import { Task3Route } from '@/pages/level2/task3'
import { Task1Route as Level3Task1Route } from '@/pages/level3/task1-2'
import { Task3Route as Level3Task3Route } from '@/pages/level3/task3'

const sections: MenuSection[] = [
    {
        title: 'Level 1',
        menuOptions: [
            {
                id: '1',
                title: 'Task 1-3',
                to: '/level1/task1-3',
            },
        ],
    },
    {
        title: 'Level 2',
        menuOptions: [
            {
                id: '1',
                title: 'Task 1',
                to: '/level2/task1',
            },
            {
                id: '2',
                title: 'Task 2',
                to: '/level2/task2',
            },
            {
                id: '3',
                title: 'Task 3',
                to: '/level2/task3',
            },
        ],
    },
    {
        title: 'Level 3',
        menuOptions: [
            {
                id: '1',
                title: 'Task 1-2',
                to: '/level3/task1-2',
            },
            {
                id: '2',
                title: 'Task 3',
                to: '/level3/task3',
            },
        ],
    },
]

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout sections={sections} />,
        children: [
            Task13Route,
            Level1Task1Route,
            Task2Route,
            Task3Route,
            Level3Task1Route,
            Level3Task3Route,
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
])
