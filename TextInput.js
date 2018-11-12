class TextInput extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
      .appendChild(this.createInput('my-component'))
  }

  createLabel(text) {
    console.log(text)
    const label = document.createElement('label')
    label.textContext = text
    return label
  }

  createInput(name) {
    const input = document.createElement('input')
    input.setAttribute('name', name)
    return input
  }
}

customElements.define('text-input', TextInput);