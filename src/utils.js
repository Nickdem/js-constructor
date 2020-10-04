export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function col(content) {
    return `<div class="col-sm">${content}</div>`
}

export function css(styles = {}) {
    // const keys = Object.keys(styles)
    // const array = keys.map(key => {
    //     return `${key}: ${styles[key]}`
    // })
    // return array.join(';')
    if (typeof styles === 'string') return styles
    return Object.keys(styles).map(key => `${key}: ${styles[key]}`).join(';')
}

export function block(type) {
    if (type === 'image') {
       return `
            <form name="${type}">
                <h5>${type}</h5>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="value" placeholder="value">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="styles" placeholder="styles">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="alt" placeholder="alt">
                </div>
                <div class="form-group">
                    <input class="form-control form-control-sm" name="imageStyles" placeholder="imageStyles">
                </div>
                <button class="btn btn-primary btn-sm" type="submit">Добавить</button>
            </form>
            <hr />
        `
    } else if (type === 'columns') {
        const field = () => {
            const arr = [1,2,3]
            return arr.map(n => {
                return `
                    <div class="form-group">
                        <input class="form-control form-control-sm" name="value_${n}" placeholder="value-${n}">
                    </div>
                `
            }).join('')
        }

        return `
            <form name="${type}">
                <h5>${type}</h5>
                ${field()}
                <div class="form-group">
                    <input class="form-control form-control-sm" name="styles" placeholder="styles">
                </div>
                <button class="btn btn-primary btn-sm" type="submit">Добавить</button>
            </form>
            <hr />
        `
    } else {
    return `
        <form name="${type}">
            <h5>${type}</h5>
            <div class="form-group">
                <input class="form-control form-control-sm" name="value" placeholder="value">
            </div>
            <div class="form-group">
                <input class="form-control form-control-sm" name="styles" placeholder="styles">
            </div>
            <button class="btn btn-primary btn-sm" type="submit">Добавить</button>
        </form>
        <hr />
    `}
}