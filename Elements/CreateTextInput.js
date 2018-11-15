function CreateTextInput({ name, setField, ...props}) {
  const div = document.createElement("div")
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", name);
  input.addEventListener('keyup', (e) => setField({field: name, value: e.target.value}))
  if (props.label) {
    const label = document.createElement("label")
    label.setAttribute("value", name)
    label.setAttribute("for", name)
    label.textContent = props.label
    div.appendChild(label)
  }
  div.appendChild(input)
  return div;
}