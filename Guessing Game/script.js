const challenges = [
  { image: "images/img1.webp", answers: ["vagrant", "Vagrant"] },
  { image: "images/img2.webp", answers: ["boreal valley knight", "outrider"] },
  { image: "images/img3.jpg", answers: ["darkstalker", "Darkstalker"] },
  { image: "images/img4.jpg", answers: ["manikin", "Manikin"] },
  { image: "images/img5.webp", answers: ["mastodon", "Mastodon", "Primal Knight", "primal knight"] },
  { image: "images/img6.webp", answers: ["alonne knight", "Alonne Knight"] },
  { image: "images/img7.webp", answers: ["misbegotten", "Misbegotten"] },
  { image: "images/img8.webp", answers: ["Stone Knight", "stone knight"] },
  { image: "images/img9.png", answers: ["Goblin", "goblin", "Forrest Grotesque Goblin"]},
  { image: "images/img10.png", answers: ["fume sorcerer", "Fume Sorcerer"]},
  { image: "images/img11.webp", answers: ["The Imperfect", "imperfect", "Imperfect", "the imperfect"]},
  { image: "images/img12.jpg", answers: ["Corvian", "corvian"]},
  { image: "images/img13.jpg", answers: ["Treant Gardener", "treant gardener"]},
  { image: "images/ugly.jpg", answers: ["Chaos Eater", "chaos eater"]},
  { image: "images/img14.png", answers: ["Divine Beast Warrior", "divine beast warrior"]},
  { image: "images/img15.png", answers: ["Divine Beast Dancing Lion", "dvine beast dancing lion"]},
  { image: "images/img16.png", answers: ["Rellana", "rellana"]},
  { image: "images/img17.jpg", answers: ["Winter Lantern", "winter lantern"]},
  { image: "images/img18.jpg", answers: ["Horned Warrior", "horned warrior"]},
  { image: "images/img19.png", answers: ["CurseBlade", "curseblade"]},
  { image: "images/img20.jpg", answers: ["Messmer Soldier", "messmer soldier"]},
  { image: "images/img21.jpg", answers: ["Royal Sentinel", "royal sentinel"]},
  { image: "images/img22.jpg", answers: ["Skeleton Beast", "skeleton beast"]},
  { image: "images/img23.jpg", answers: ["Holy Knight Hodrick", "holy knight hodrick"]},
  { image: "images/img24.jpg", answers: ["Knight Slayer Tsorig", "knight slayer tsorig"]},
  { image: "images/img25.webp", answers: ["Putrescent Knight", "putrescent knight"]},
  { image: "images/Images_29.webp", answers: ["Heolstor The Nightlord", "heolstor the nightlord"]},
  { image: "images/img26.webp", answers: ["Gladius", "gladius"]},
  { image: "images/img27.jpg", answers: ["Nito", "nito"]},
  { image: "images/img28.jpg", answers: ["Pursuer", "The Pursuer", "pursuer", "the pursuer"]},
  { image: "images/img30.png", answers: ["Ruin Sentinel", "ruin sentinel"]},
  { image: "images/img31.jpg", answers: ["Needle Knight Leda", "needle knight leda"]},
  { image: "images/img32.webp", answers: ["Bayle The Dread", "bayle the dread"]},
  { image: "images/img33.webp", answers: ["Metyr Mother of Fingers", "metry mother of fingers", "Metry", "metry"]},
  { image: "images/img34.jpg", answers: ["High Lord Wolnir", "high lord wolnir"]}
];

let remainingChallenges = [...challenges];
let currentChallenge = null;
let lives = 5;

function showNextChallenge() {
  if (remainingChallenges.length === 0) {
    document.getElementById("feedback").textContent = "🎉 You completed all challenges!";
    document.getElementById("gameImage").style.display = "none";
    return;
  }

    const randomIndex = Math.floor(Math.random() * remainingChallenges.length);
  currentChallenge = remainingChallenges.splice(randomIndex, 1)[0];
  document.getElementById("gameImage").src = currentChallenge.image;
  document.getElementById("userAnswer").value = "";
  document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
  const input = document.getElementById("userAnswer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const livesDisplay = document.getElementById("lives");

  const correctAnswers = currentChallenge.answers.map(ans => ans.toLowerCase());

  if (correctAnswers.includes(input)) {
    feedback.textContent = "✅ Correct!";

    if (remainingChallenges.length > 0) {
      showNextChallenge();
    } else {
      feedback.textContent = "🎉 You completed all challenges!";
      document.getElementById("gameImage").style.display = "none";
    }

  } else {
    lives--;
    updateHealthBar();

    if (lives > 0) {
      feedback.textContent = "❌ Wrong! Try again.";
    } else {
      feedback.textContent = "💀 Game Over!";
      document.querySelector("button").disabled = true;
    }
  }

  document.getElementById("userAnswer").value = "";
}


// Load the first image when the page loads
window.onload = function () {
  showNextChallenge();
  updateHealthBar();
};


document.getElementById("userAnswer").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
  }
});

function updateHealthBar() {
  const fill = document.getElementById("health-fill");
  const percent = (lives / 5) * 100;
  fill.style.width = percent + "%";
}

