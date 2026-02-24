import type { RootState } from '@/app'
import { createSelector } from '@reduxjs/toolkit'
import { productsAdapter } from './productsSlice'

const { selectAll } = productsAdapter.getSelectors((state: RootState) => state.products)
export const selectCategoryFilter = (state: RootState) => state.products.filters.category
export const selectInStockFilter = (state: RootState) => state.products.filters.onlyInStock
export const selectSortByFilter = (state: RootState) => state.products.filters.sortBy
export const selectSortOrderFilter = (state: RootState) => state.products.filters.sortOrder

export const selectFilteredProducts = createSelector(
    [selectAll, selectCategoryFilter, selectInStockFilter],
    (allProducts, category, onlyInStock) => {
        return allProducts.filter((product) => {
            const matchesCategory = category === 'All' || product.category === category
            const matchesStock = !onlyInStock || product.inStock
            return matchesCategory && matchesStock
        })
    },
)

export const selectSortedProducts = createSelector(
    [selectFilteredProducts, selectSortByFilter, selectSortOrderFilter],
    (filteredProducts, sortBy, sortOrder) => {
        return [...filteredProducts].sort((a, b) => {
            const valueA = a[sortBy]
            const valueB = b[sortBy]

            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA)
            }

            return sortOrder === 'asc'
                ? (valueA as number) - (valueB as number)
                : (valueB as number) - (valueA as number)
        })
    },
)
