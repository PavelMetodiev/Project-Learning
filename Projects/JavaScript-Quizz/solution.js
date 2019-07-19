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
        if (score >= 3) {
            document.getElementById('champ').setAttribute('class', '');
            //document.getElementById('results').setAttribute('class', '');
            console.log('Ole')
        }
        questionNum += 1
        console.log(score)
        console.log(questionNum)
        
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
        } else {
            document.getElementById('champ').setAttribute('class', '');
        }
        questionNum += 1
        console.log(score)
        console.log(questionNum)
    }
    document.getElementById('wrong1').addEventListener("click", wrongAnswer)
    document.getElementById('wrong2').addEventListener("click", wrongAnswer)
    document.getElementById('wrong3').addEventListener("click", wrongAnswer)

}