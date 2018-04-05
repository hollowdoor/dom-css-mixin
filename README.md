dom-css-mixin
===

Install
---

`npm install dom-css-mixin`

Usage
---

```javascript
import { mixinCSS } from 'dom-mixin-css';

class MyElement {
    constructor(){
        this.element = document.createElement('div');
        this.element.textContent = 'Hello universe!';
        document.body.appendChild(this.element);
    }
}

mixinCSS(Element.prototype);

let el = new MyElement();
//Change css on this.element
el.css({
    'background-color': 'red',
    color: 'white'
});

//Add a style sheet to the head
el.stylesheet(`
    div { border: 1px solid black; }
`);

//Add a style sheet with an id
el.stylesheet(`
    div { border: 1px solid black; }
`, 'an-id');

//Link a style
el.stylelink('styles.css');
//Link a style with an id
el.stylelink('styles.css', 'style-id');
//Style sheets added with an id are unique
//A sheet with that id will not be used
//if one already exists.
```

About
---

Use this to create a getter/setter on an object with an element property. `dom-css-mixin` uses [dom-css](https://github.com/mattdesl/dom-css) underneath.

You can also add style sheets to the head. :)
