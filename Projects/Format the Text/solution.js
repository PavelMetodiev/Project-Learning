function solve() {
  let textToPocess = document.getElementById('input').textContent

  let sentances = textToPocess.split('.')
  let pharagraph = []
  let sentance = ''

  while (sentances.length > 3) {
    pharagraph = []
    for (let i = 0; i < 3; i++) {
      sentance = sentances.shift()
      pharagraph.push(sentance)
    }
    pharagraph.push('')
    let p = document.createElement('p')
    p.id = "koleda"
    p.innerHTML = pharagraph.join('.')
    output.appendChild(p)
  }

  pharagraph = []
  for (let i = 0; i < sentances.length; i++) {
    sentance = sentances.shift()
    pharagraph.push(sentance)
  }
  pharagraph.push('')
  let p = document.createElement('p')
  p.id = "koleda"
  p.innerHTML = pharagraph.join('.')
  output.appendChild(p)
}



