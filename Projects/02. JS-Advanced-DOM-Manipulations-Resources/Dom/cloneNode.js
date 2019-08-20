const textTemplate = document.createElement('p')
textTemplate.innerHTML = 'Hello'
textTemplate.style.background = 'black'
textTemplate.style.color = 'white'
document.body.appendChild(textTemplate)
console.log(textTemplate)

const p = textTemplate.cloneNode(true)
p.textContent = 'text 1'

const p2 = textTemplate.cloneNode(true)
p2.style.border = '3px solid green'
p2.innerHTML = '<h2>text 2</h2>'

const p3 = textTemplate.cloneNode(true)
p3.textContent = 'text 3'

document.body.appendChild(p)
document.body.appendChild(p2)
document.body.appendChild(p3)