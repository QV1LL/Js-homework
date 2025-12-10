export function HtmlBlock(rootElement, cssStyles) {
    this.rootElement = rootElement
    this.cssStyles = cssStyles
}

HtmlBlock.prototype.setRoot = function (rootElement) {
    this.rootElement = rootElement
}

HtmlBlock.prototype.setStyles = function (cssStyles) {
    this.cssStyles = cssStyles
}

Object.defineProperty(HtmlBlock.prototype, 'code', {
    get: function () {
        return this.cssStyles.css + this.rootElement.markup
    },
})
