import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product, ProductCategory } from './types'

export const productsAdapter = createEntityAdapter<Product>({
    sortComparer: (a, b) => a.name.localeCompare(b.name),
})

const initialState = productsAdapter.getInitialState(
    {
        loadingStatus: 'idle',
        error: null as string | null,
        filters: {
            category: 'All' as ProductCategory | 'All',
            onlyInStock: false,
            sortOrder: 'asc' as 'asc' | 'desc',
            sortBy: 'name' as 'price' | 'name',
        },
    },
    [
        {
            id: 'p1',
            name: 'MacBook Pro 16',
            price: 2499,
            category: 'Electronics',
            inStock: true,
        },
        {
            id: 'p2',
            name: 'VS Code Enterprise Plugin',
            price: 49,
            category: 'Software',
            inStock: true,
        },
        {
            id: 'p3',
            name: 'Ergonomic Standing Desk',
            price: 550,
            category: 'Furniture',
            inStock: false,
        },
        {
            id: 'p4',
            name: 'Cloud Infrastructure Audit',
            price: 1200,
            category: 'Services',
            inStock: true,
        },
        {
            id: 'p5',
            name: 'Social Media Campaign Package',
            price: 3000,
            category: 'Marketing',
            inStock: true,
        },
        {
            id: 'p6',
            name: 'Standard Employment Contract Template',
            price: 150,
            category: 'Legal',
            inStock: true,
        },
        {
            id: 'p7',
            name: 'Annual Recruitment Service',
            price: 5000,
            category: 'Human Resources',
            inStock: true,
        },
        {
            id: 'p8',
            name: 'Mechanical Keyboard Blue Switches',
            price: 120,
            category: 'Hardware',
            inStock: true,
        },
        {
            id: 'p9',
            name: '4K Ultra-Wide Monitor',
            price: 899,
            category: 'Electronics',
            inStock: false,
        },
        {
            id: 'p10',
            name: 'Cybersecurity Firewall Software',
            price: 299,
            category: 'Software',
            inStock: true,
        },
        {
            id: 'p11',
            name: 'Mesh Office Chair',
            price: 350,
            category: 'Furniture',
            inStock: true,
        },
        {
            id: 'p12',
            name: 'High-Speed NVMe SSD 2TB',
            price: 180,
            category: 'Hardware',
            inStock: true,
        },
    ],
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setCategoryFilter(state, action: PayloadAction<ProductCategory | 'All'>) {
            state.filters.category = action.payload
        },
        setInStockFilter(state, action: PayloadAction<boolean>) {
            state.filters.onlyInStock = action.payload
        },
        setSortBy(state, action: PayloadAction<'name' | 'price'>) {
            state.filters.sortBy = action.payload
        },
        setSortOrder(state, action: PayloadAction<'asc' | 'desc'>) {
            state.filters.sortOrder = action.payload
        },
    },
})

export const productsReducer = productsSlice.reducer
export const { setCategoryFilter, setInStockFilter, setSortBy, setSortOrder } = productsSlice.actions
