const instruments = ["Piano", "Guitar", "Violin", "Drums", "Saxophone", "Flute"];

const ul = document.getElementById("instrument-list");

for (let instrument of instruments) {
    let li = document.createElement("li");
    li.textContent = instrument;
    ul.appendChild(li);
}
