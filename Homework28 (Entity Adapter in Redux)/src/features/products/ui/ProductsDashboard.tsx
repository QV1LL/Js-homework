import { useSelector, useDispatch } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label, Switch } from '@/components'
import { selectCategoryFilter, selectFilteredProducts, selectInStockFilter } from '../model/selectors'
import { PRODUCT_CATEGORIES, type ProductCategory } from '../model/types'
import { setCategoryFilter, setInStockFilter } from '../model/productsSlice'
import { useEffect, useRef } from 'react'
import autoAnimate from '@formkit/auto-animate'

export const ProductsDashboard = () => {
    const dispatch = useDispatch()

    const products = useSelector(selectFilteredProducts)
    const category = useSelector(selectCategoryFilter)
    const onlyInStock = useSelector(selectInStockFilter)

    const parent = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (parent.current) autoAnimate(parent.current)
    }, [parent])

    return (
        <div className="p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 bg-muted/50 p-4 rounded-lg border">
                <div ref={parent} className="flex flex-col gap-2">
                    <Label className="text-foreground">Category</Label>
                    <Select
                        value={category}
                        onValueChange={(value) => dispatch(setCategoryFilter(value as ProductCategory))}
                    >
                        <SelectTrigger className="w-[200px] bg-background text-foreground border-input">
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover text-popover-foreground">
                            {['All', ...PRODUCT_CATEGORIES].map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex items-center space-x-2 pt-6 sm:pt-0">
                    <Switch
                        id="stock-filter"
                        checked={onlyInStock}
                        onCheckedChange={(checked) => dispatch(setInStockFilter(checked))}
                        className="data-[state=checked]:bg-primary"
                    />
                    <Label htmlFor="stock-filter" className="text-foreground cursor-pointer">
                        In Stock Only
                    </Label>
                </div>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product Name</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead className="text-right">Price</TableHead>
                            <TableHead className="text-center">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.length > 0 ? (
                            products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.name}</TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell className="text-right">${product.price.toLocaleString()}</TableCell>
                                    <TableCell className="text-center">
                                        {product.inStock ? (
                                            <span className="text-green-600 text-sm">Available</span>
                                        ) : (
                                            <span className="text-red-400 text-sm">Out of Stock</span>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4} className="h-24 text-center">
                                    No products found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
