function solve() {

    document.getElementById('send').addEventListener("click", mouseClicking)
    document.getElementById('chat_input').addEventListener("keyup", keyClicking)

    function mouseClicking() {
        createDiv()
    }
    function keyClicking(event) {
        if (event.keyCode === 13) {
            createDiv()
        }
    }
    function createDiv() {
        if (document.getElementById('chat_input').value !== '' && document.getElementById('chat_input').value !== '\n') {
            let newMessage = document.createElement('div')
            newMessage.innerText = document.getElementById('chat_input').value
            newMessage.setAttribute('class', 'message my-message');
            document.getElementById("chat_messages").appendChild(newMessage)
        }
        document.getElementById('chat_input').value = ''
    }
}