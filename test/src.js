import { mixinCSS } from '../';

class Element {
    constructor(){
        this.element = document.createElement('div');
        this.element.textContent = 'Hello universe!';
        document.body.appendChild(this.element);
    }
}

mixinCSS(Element.prototype);

let el = new Element();
el.css({
    'background-color': 'red',
    color: 'white'
});

el.stylesheet(`
    div { border: 1px solid black; }
`);

el.stylelink('styles.css');

console.log(el.css('background-color'));
console.log(el.css(['background-color', 'color']));
