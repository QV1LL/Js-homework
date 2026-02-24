import { useSelector, useDispatch } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label, Switch } from '@/components'
import {
    selectCategoryFilter,
    selectSortedProducts,
    selectInStockFilter,
    selectSortByFilter,
    selectSortOrderFilter,
} from '../model/selectors'
import { PRODUCT_CATEGORIES, type ProductCategory } from '../model/types'
import { setCategoryFilter, setInStockFilter, setSortBy, setSortOrder } from '../model/productsSlice'
import { useEffect, useRef, useCallback } from 'react'
import autoAnimate from '@formkit/auto-animate'

export const EnhancedProductsDashboard = () => {
    const dispatch = useDispatch()

    const products = useSelector(selectSortedProducts)
    const category = useSelector(selectCategoryFilter)
    const onlyInStock = useSelector(selectInStockFilter)
    const sortBy = useSelector(selectSortByFilter)
    const sortOrder = useSelector(selectSortOrderFilter)

    const parent = useRef<HTMLTableSectionElement>(null)

    useEffect(() => {
        if (parent.current) autoAnimate(parent.current)
    }, [])

    const handleCategoryChange = useCallback(
        (value: string) => {
            dispatch(setCategoryFilter(value as ProductCategory))
        },
        [dispatch],
    )

    const handleSortByChange = useCallback(
        (value: string) => {
            dispatch(setSortBy(value as 'price' | 'name'))
        },
        [dispatch],
    )

    const handleSortOrderChange = useCallback(
        (value: string) => {
            dispatch(setSortOrder(value as 'asc' | 'desc'))
        },
        [dispatch],
    )

    const handleStockFilterChange = useCallback(
        (checked: boolean) => {
            dispatch(setInStockFilter(checked))
        },
        [dispatch],
    )

    return (
        <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-muted/50 p-4 rounded-lg border items-end">
                <div className="flex flex-col gap-2">
                    <Label className="text-foreground text-sm font-medium">Category</Label>
                    <Select value={category} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="All">All Categories</SelectItem>
                            {PRODUCT_CATEGORIES.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2">
                    <Label className="text-foreground text-sm font-medium">Sort By</Label>
                    <Select value={sortBy} onValueChange={handleSortByChange}>
                        <SelectTrigger className="bg-background">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="price">Price</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex flex-col gap-2">
                    <Label className="text-foreground text-sm font-medium">Order</Label>
                    <Select value={sortOrder} onValueChange={handleSortOrderChange}>
                        <SelectTrigger className="bg-background">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="asc">Ascending</SelectItem>
                            <SelectItem value="desc">Descending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center space-x-2 pb-2">
                    <Switch id="stock-filter" checked={onlyInStock} onCheckedChange={handleStockFilterChange} />
                    <Label htmlFor="stock-filter" className="text-sm font-medium cursor-pointer">
                        In Stock Only
                    </Label>
                </div>
            </div>

            <div className="rounded-md border overflow-hidden shadow-sm">
                <Table>
                    <TableHeader className="bg-muted/30">
                        <TableRow>
                            <TableHead className="font-semibold">Product Name</TableHead>
                            <TableHead className="font-semibold">Category</TableHead>
                            <TableHead className="text-right font-semibold">Price</TableHead>
                            <TableHead className="text-center font-semibold">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody ref={parent}>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <TableRow key={product.id} className="transition-colors hover:bg-muted/10">
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell className="text-right font-mono text-sm">
                                        ${product.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {product.inStock ? (
                                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">
                                                Available
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300">
                                                Out of Stock
                                            </span>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="h-32 text-center text-muted-foreground italic">
                                    No products found matching your current filters.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
