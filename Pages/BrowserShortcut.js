function BrowserShortcutFactory({ setField }) {
  class BrowserShortcut extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const root = document.createElement("div");
      const field1 = this.input({ name: "test-field", setField });
      root.appendChild(this.button({name: 'submit', setField}));
      root.appendChild(field1)
      shadow.appendChild(root);
    }

    input({ name, setField }) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("name", name);
      input.addEventListener('keyup', (e) => setField({field: name, value: e.target.value}))
      return input;
    }

    button({name, setField}) {
      const button = document.createElement("button");
      button.setAttribute("name", name)
      button.setAttribute("type", "button");
      button.addEventListener('click', () => alert('post the form'))
      button.textContent = "Click Me";
      return button;
    }

    writeToState() {
      alert("you click the button");
      // setField({
      //   field: 'foo',
      //   value: 'bar'
      // })
    }
  }
  customElements.define("browser-shortcut-page", BrowserShortcut);
}
