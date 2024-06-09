const answers = [
    "Yes",
    "No",
    "Maybe",
    "Ask again later",
    "Outlook not so good",
    "Most likely",
    "Cannot predict now",
    "Don't count on it"
];

const magic8ball = document.getElementById('magic8ball');
const answerElement = document.getElementById('answer');

magic8ball.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerElement.textContent = answers[randomIndex];
});
