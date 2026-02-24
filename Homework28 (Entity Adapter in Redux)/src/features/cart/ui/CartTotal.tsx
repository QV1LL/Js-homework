import { useSelector } from 'react-redux'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components'
import { ShoppingCart, CreditCard } from 'lucide-react'
import { selectCartTotal } from '../model/selectors'

export const CartTotal = () => {
    const { totalPrice, totalQuantity } = useSelector(selectCartTotal)

    return (
        <Card className="w-full max-w-md border-zinc-200 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Order Summary</CardTitle>
                <ShoppingCart className="h-5 w-5 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Total Items</span>
                        <Badge variant="secondary" className="px-2.5 py-0.5">
                            {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
                        </Badge>
                    </div>

                    <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-primary" />
                            <span className="font-semibold text-base">Total Amount</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            ${totalPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
