import {block} from '../utils'
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './blocks'

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.update = update

        this.init()
    }

    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [block('title'), block('text'), block('image'), block('columns')].join('')
    }

    add(e) {
        e.preventDefault()
        const type = e.target.name ?? null
        const value = e.target.value ? e.target.value.value : null
        const styles = e.target.styles.value ?? null
        const alt = e.target.alt ?? null
        const imageStyles = e.target.imageStyles ?? null
        const valuesArr = e.target.value_1 || e.target.value_2  || e.target.value_3 ? [e.target.value_1.value, e.target.value_2.value, e.target.value_3.value].filter(v => v !== '') : null

        const newBlock = type === 'text' ? new TextBlock(value, {styles}) : type === 'image' ? new ImageBlock(value, {styles, alt, imageStyles}) : type === 'title' ? new TitleBlock(value, {styles}) : new ColumnsBlock(valuesArr, {styles})

        this.update(newBlock)

        if (valuesArr) {
            e.target.styles.value = e.target.value_1.value = e.target.value_2.value = e.target.value_3.value = ''
        }
        if (alt || imageStyles) {
            e.target.imageStyles = e.target.alt = e.target.styles.value = e.target.value.value = ''
        }
        if (value) {
            e.target.styles.value = e.target.value.value = '' 
        }
        
    }
}
