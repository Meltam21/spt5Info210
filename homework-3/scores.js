const scores = [95, 72, 88, 45, 60, 79, 82, 91, 50, 38];

const ul = document.getElementById("score-list");
const avgParagraph = document.getElementById("average-score");

let total = 0;
for (let score of scores) {
    let li = document.createElement("li");
    li.textContent = score;
    ul.appendChild(li);
    total += score;
}

let average = total / scores.length;
avgParagraph.textContent = `Average Score: ${average.toFixed(2)}`;