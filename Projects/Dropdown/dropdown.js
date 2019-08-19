function addItem() {
    let newText = document.getElementById('newItemText').value
    let newValue = document.getElementById('newItemValue').value

    let newOption = document.createElement('option')
    newOption.innerText = `${newText} ${newValue}`
    let appendEl = document.getElementById('menu')
    appendEl.appendChild(newOption)

    document.getElementById('newItemText').value = ''
    document.getElementById('newItemValue').value = ''
}