class Template extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'})
    shadow.attachChild(this.createStyle())
  }

  createStyle() {
    const style = document.createElement("style")
    style.textContent = `
      label: {
        display: block;
      }
    `
    return style
  }
}