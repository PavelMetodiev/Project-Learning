function toggle() {
    let button = document.getElementsByClassName('button')[0]
    if (document.getElementById('extra').style.display === 'none') {
        
        button.innerHTML = 'Less'
        document.getElementById('extra').style.display = 'block'
    } else {
        
        button.innerHTML = 'More'
        document.getElementById('extra').style.display = 'none'
    }
}