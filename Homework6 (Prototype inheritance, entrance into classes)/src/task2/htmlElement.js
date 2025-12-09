function HtmlElement(tag, isSelfClosed = false) {
    this.tag = tag
    this.isSelfClosed = isSelfClosed
    this.text = ''
    this.attributes = new Map()
    this.styles = new Map()
    this.tags = []

    this.setAttribute = function (name, value) {
        this.attributes.set(name, value)
    }

    this.setStyle = function (name, value) {
        this.styles.set(name, value)
    }

    this.enqueue = function (htmlElement) {
        this.tags.unshift(htmlElement)
    }

    this.push = function (htmlElement) {
        this.tags.push(htmlElement)
    }
}

Object.defineProperty(HtmlElement.prototype, 'markup', {
    get: function () {
        const attributesString = Array.from(this.attributes)
            .map(([key, value]) => `${key}="${value}"`)
            .join(' ')
        const stylesString =
            this.styles.size > 0
                ? `style="${Array.from(this.styles)
                      .map(([key, value]) => `${key}: ${value};`)
                      .join('')}"`
                : ''

        const allAttributes = [attributesString, stylesString].filter((s) => s.length > 0).join(' ')
        const finalAttrs = allAttributes.length > 0 ? ' ' + allAttributes : ''

        if (this.isSelfClosed) {
            return `<${this.tag}${finalAttrs}/>`
        }

        const childrenHtmls = this.tags.map((tag) => tag.markup)

        return `<${this.tag}${finalAttrs}>${this.text}${childrenHtmls.join('')}</${this.tag}>`
    },
})
