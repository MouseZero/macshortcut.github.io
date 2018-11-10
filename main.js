class MyFirstElement extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({mode: 'open'})

    const root = document.createElement('div')
    root.setAttribute('foo', 'bar')
    root.textContent = this.getAttribute('text')

    shadow.appendChild(root)
  }
}

customElements.define('my-first-element', MyFirstElement)