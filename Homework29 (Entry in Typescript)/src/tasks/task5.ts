const enum OrderStatus {
    Pending,
    Shipped,
    Delivered,
    Cancelled,
}

function checkStatus(status: OrderStatus) {
    if (status === OrderStatus.Shipped) console.log('Замовлення в дорозі')
}

checkStatus(OrderStatus.Shipped)
