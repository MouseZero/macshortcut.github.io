function BrowserShortcutFactory({ setField }) {
  class BrowserShortcut extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      const root = document.createElement("div");
      const field1 = this.input({ name: "test-field", setField });
      root.appendChild(this.button());
      root.appendChild(field1)
      shadow.appendChild(root);
      shadow.buttonClick = function() {
        console.log("shadow click");
      };
    }

    input({ name, setField }) {
      const input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("name", name);
      input.setField = setField;
      input.setAttribute("onkeyup", "this.setField({field: this.name, value: this.value})");
      return input;
    }

    button() {
      const button = document.createElement("button");
      button.setAttribute("type", "button");
      button.setAttribute("onclick", "this.clicked()");
      button.clicked = () => console.log("function from button");
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
