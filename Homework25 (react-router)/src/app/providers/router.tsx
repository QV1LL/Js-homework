import { createBrowserRouter, Navigate } from 'react-router-dom'
import { BaseLayout } from '../layouts/BaseLayout'
import { HomePageRoute } from '../../pages/home-page'
import { ViewProductPageRoute } from '../../pages/view-product-page'
import { ViewCategoryPageRoute } from '../../pages/view-category-page'
import { ViewNewsPageRoute } from '../../pages/view-news-page'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            HomePageRoute,
            ViewProductPageRoute,
            ViewCategoryPageRoute,
            ViewNewsPageRoute,
            {
                path: '*',
                element: <Navigate to="/" replace />,
            },
        ],
    },
])
