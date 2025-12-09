function Circle(radius) {
    this._radius = radius
}

Circle.prototype.getSquare = function () {
    return Math.PI * this._radius ** 2
}

Circle.prototype.getLength = function () {
    return this.diameter * Math.PI
}

Object.defineProperty(Circle.prototype, 'radius', {
    get: function () {
        return this._radius
    },
    set: function (value) {
        if (value <= 0) throw new Error('Radius cannot be negative or zero')
        this._radius = value
    },
})

Object.defineProperty(Circle.prototype, 'diameter', {
    get: function () {
        return this._radius * 2
    },
})

export const testCircle = () => {
    const circle = new Circle(3)
    console.log(
        `Square of circle with diameter ${
            circle.diameter
        } is ${circle.getSquare()} and length is ${circle.getLength()}`,
    )
}
