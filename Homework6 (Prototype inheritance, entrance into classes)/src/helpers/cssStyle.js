export function CssStyle() {
    this.selectors = new Map()
}

CssStyle.prototype.setSelector = function (name, styles) {
    this.selectors.set(name, styles)
}

CssStyle.prototype.removeSelector = function (name) {
    this.selectors.delete(name)
}

Object.defineProperty(CssStyle.prototype, 'css', {
    get: function () {
        if (this.selectors.size === 0) return '<style></style>'

        const stylesString = Array.from(this.selectors)
            .map(
                ([key, value]) =>
                    `${key} { ${Array.from(value)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(';')} }`,
            )
            .join(' ')

        return `<style>${stylesString}</style>`
    },
})
