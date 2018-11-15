function CreateButton({ name, label, onClick }) {
  const button = document.createElement('button')
  button.setAttribute('name', name)
  button.textContent = label
  button.addEventListener('click', onClick)
  return button
}