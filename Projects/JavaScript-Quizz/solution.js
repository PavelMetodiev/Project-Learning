function solve() {
    let score = 0
    var questionNum = 1

    function correctAnswer() {
        score += 1
        document.getElementById(`q${questionNum}`)
        document.getElementById(`q${questionNum}`).setAttribute('class', 'hidden');
        let check = document.getElementById(`q${questionNum + 1}`)
        if (check !== document.getElementById('q4')) {
            document.getElementById(`q${questionNum + 1}`).setAttribute('class', '');
        }
        questionNum += 1
        if (score >= 3) {
            document.getElementById('champ').setAttribute('class', 'result');
        } else if (questionNum > 3) {
            document.getElementById('moreToGo').setAttribute('class', 'result');
            document.getElementById('score').innerHTML = `You have ${score} right answers.`
        }
    }
    document.getElementById('correct1').addEventListener("click", correctAnswer)
    document.getElementById('correct2').addEventListener("click", correctAnswer)
    document.getElementById('correct3').addEventListener("click", correctAnswer)

    function wrongAnswer() {
        document.getElementById(`q${questionNum}`)
        document.getElementById(`q${questionNum}`).setAttribute('class', 'hidden');
        let check = document.getElementById(`q${questionNum + 1}`)
        if (check !== document.getElementById('q4')) {
            document.getElementById(`q${questionNum + 1}`).setAttribute('class', '');
        }
        questionNum += 1
        if (questionNum > 3) {
            document.getElementById('moreToGo').setAttribute('class', 'result');
            document.getElementById('score').innerText = `You have ${score} right answers.`
        }
    }
    document.getElementById('wrong1').addEventListener("click", wrongAnswer)
    document.getElementById('wrong2').addEventListener("click", wrongAnswer)
    document.getElementById('wrong3').addEventListener("click", wrongAnswer)

}