document.getElementById("startBtn").addEventListener("click", startStory);

const storyDiv = document.getElementById("story");
const choicesDiv = document.getElementById("choices");

function startStory() {
    let userName = prompt("What is your name, Chef?");
    storyDiv.innerHTML = `<p>Welcome, Chef ${userName}! You are on a quest to discover the world's most legendary dish. Where do you start?</p>`;

    showChoices([
        { text: "Visit a Secret Farm", next: "farm" },
        { text: "Explore the City", next: "city" }
    ]);
}

const storyPaths = {
    farm: {
        text: "You arrive at a secret farm where legendary ingredients grow. The farmer offers you two rare ingredients. Which one do you choose?",
        choices: [
            { text: "Golden Truffle ", next: "truffle" },
            { text: "Ruby Chocolate", next: "chocolate" }
        ]
    },
    city: {
        text: "The city is full of famous chefs and hidden street food gems. You find a cooking competition. Do you enter?",
        choices: [
            { text: "Enter the Competition", next: "competition" },
            { text: "Search for a Rare Spice", next: "spice" }
        ]
    },
    truffle: {
        text: "You choose the rare Golden Truffle. What dish do you make?",
        choices: [
            { text: "Truffle Risotto ", next: "win" },
            { text: "Tiramisu", next: "fail" }
        ]
    },
    chocolate: {
        text: "The ruby chocolate is rumored to have magical properties. Do you eat it raw or make a dish?",
        choices: [
            { text: "Eat It Raw", next: "win" },
            { text: "Mix it into the risotto", next: "win" }
        ]
    },
    competition: {
        text: "You enter the competition! The challenge: create a dish using surprise ingredients. Do you take a risk?",
        choices: [
            { text: "Take a Risk ", next: "win" },
            { text: "Play It Safe ", next: "fail" }
        ]
    },
    spice: {
        text: "You find a rare spice called 'Dragon’s Breath.' It is tricky to use. What do you do?",
        choices: [
            { text: "Use It in a Dish", next: "win" },
            { text: "Sell It for money", next: "fail" }
        ]
    },
    win: {
        text: "Congratulations! You've created a masterpiece, it looks great but does it taste good too? I guess we'll never know",
        choices: [{ text: "Play Again", next: "startStory" }]
    },
    fail: {
        text: " Oh no! Your dish was a fail... but every chef learns from mistakes. Maybe next you'll make it but this time you did not cook with that",
        choices: [{ text: "Play Again ", next: "startStory" }]
    }
};

function showChoices(options) {
    choicesDiv.innerHTML = "";
    options.forEach(option => {
        let btn = document.createElement("button");
        btn.textContent = option.text;
        btn.classList.add("choice-button");
        btn.onclick = () => nextScene(option.next);
        choicesDiv.appendChild(btn);
    });
}

function nextScene(scene) {
    if (scene === "startStory") {
        startStory();
    } else {
        storyDiv.innerHTML = `<p>${storyPaths[scene].text}</p>`;
        showChoices(storyPaths[scene].choices);
    }
}