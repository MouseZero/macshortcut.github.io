function BrowserShortcutFactory({ setField }) {
  class BrowserShortcut extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      // const root = document.createElement("div");
      // const field1 = this.input({ name: "test-field", setField });
      // root.appendChild(this.button({name: 'submit', setField}));
      // root.appendChild(field1)
      // shadow.appendChild(root);
      shadow.appendChild(CreateTextInput({
        name: 'browser',
        label: 'Browser',
        setField
      }))

      shadow.appendChild(CreateTextInput({
        name: 'url',
        label: 'URL',
        setField
      }))

      shadow.appendChild(CreateTextInput({
        name: 'rc',
        label: 'RC File',
        setField
      }))

      shadow.appendChild(CreateTextInput({
        name: 'commandName',
        label: 'Command Name',
        setField
      }))

      shadow.appendChild(CreateButton({
        name: 'create-url',
        label: 'Bashify',
        onClick: () => alert('you clicked')
      }))
    }
  }
  customElements.define("browser-shortcut-page", BrowserShortcut);
}
