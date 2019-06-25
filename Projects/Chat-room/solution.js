function solve() {
    let count = 0
    let repeats = '\n'.repeat(count)
    document.getElementById('send').addEventListener("click", mouseClicking)
    document.getElementById('chat_input').addEventListener("keyup", keyClicking)

    function createDiv() {
        if (document.getElementById('chat_input').value !== '' && document.getElementById('chat_input').value !== '\n') {
            let newMessage = document.createElement('div')
            newMessage.innerText = document.getElementById('chat_input').value
            newMessage.setAttribute('class', 'message my-message');
            document.getElementById("chat_messages").appendChild(newMessage)
            document.getElementById('chat_input').value = ''
            console.log(repeats)
        } else {
            document.getElementById('chat_input').value = ''
        }
    }
    function mouseClicking() {
        createDiv()
    }
    function keyClicking(event) {
        count++
        if (event.keyCode === 13) {
            createDiv()
        }
    }
}