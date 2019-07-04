function solve() {
    let score = 0
    var questionNum = 0
    var qestion1 = ''
    var qestion2 = ''

    document.getElementById(`correct${questionNum + 1}`).addEventListener("click", correctAnswer)
    function correctAnswer() {
        score += 1
        questionNum += 1

        qestion1 = document.getElementById(`q${questionNum}`)

        qestion1.setAttribute('class', 'hidden');

        qestion2 = document.getElementById(`q${questionNum + 1}`)

        qestion2.setAttribute('class', '');

        console.log(questionNum, score)
    }


}