function totalPrice(price: number, discount: number): number {
    return price - (price * discount) / 100
}

// Will not compile :(
console.log(totalPrice(100, '10%'))
