// Put your JavaScript code in this file
const answers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes."
];

function displayAnswer() {
    const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];
        const circle = document.getElementById("circle");
        circle.innerHTML = answer;

}


document.getElementById("ball").addEventListner('mousedown', function() {
    const question = document.getElementById("question").value;
    if (question === "") {
        alert("Please enter a question!");
    } else {
        displayAnswer();
    }
});

document.getElementById("reset").addEventListener("click", function() {

    // Hide the circle when the reset button is clicked
    document.getElementById("circle").style.display = "none";
});