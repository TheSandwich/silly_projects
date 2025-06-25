const challenges = [
  { image: "images/vagrant.webp", answers: ["vagrant", "Vagrant"] },
  { image: "images/Boreal_outrider_knight.webp", answers: ["boreal valley knight", "outrider"] },
  { image: "images/Darkstalker.jpg", answers: ["darkstalker", "Darkstalker"] },
  { image: "images/assasin.jpg", answers: ["manikin", "Manikin"] },
  { image: "images/mastodon.webp", answers: ["mastodon", "Mastodon", "Primal Knight", "primal knight"] },
  { image: "images/alonne_knight.webp", answers: ["alonne knight", "Alonne Knight"] },
  { image: "images/misbegotten.webp", answers: ["misbegotten", "Misbegotten"] },
  { image: "images/Stone_knight.webp", answers: ["Stone Knight", "stone knight"] },
  { image: "images/forrest_grotesque_goblin", answers: ["Goblin", "goblin", "Forrest Grotesque Goblin"]},
  { image: "images/fume_sorcerer.png", answers: ["fume sorcerer", "Fume Sorcerer"]},
  { image: "images/imperfect.webp", answers: ["The Imperfect", "imperfect", "Imperfect", "the imperfect"]},
  { image: "images/corvian.jpg", answers: ["Corvian", "corvian"]},
  { image: "images/treant_gardener.jpg", answers: ["Treant Gardener", "treant gardener"]},
  { image: "images/ugly.jpg", answers: ["Chaos Eater", "chaos eater"]},
  { image: "images/divine_beast.png", answers: ["Divine Beast Warrior", "divine beast warrior"]},
  { image: "images/divine_beast_dancing_lion.png", answers: ["Divine Beast Dancing Lion", "dvine beast dancing lion"]},
  { image: "images/rellana_twin_moon_knight2.png", answers: ["Rellana", "rellana"]},
  { image: "images/winter.jpg", answers: ["Winter Lantern", "winter lantern"]},
  { image: "images/horned_warrior.jpg", answers: ["Horned Warrior", "horned warrior"]},
  { image: "images/curseblade_bosses.png", answers: ["CurseBlade", "curseblade"]},
  { image: "images/messmer_soldier.jpg", answers: ["Messmer Soldier", "messmer soldier"]},
  { image: "images/roayl_sentinel_enemy.jpg", answers: ["Royal Sentinel", "royal sentinel"]},
  { image: "images/skeleton_beast.jpg", answers: ["Skeleton Beast", "skeleton beast"]},
  { image: "images/", answers: ["Holy Knight Hodrick", "holy knight hodrick"]},
  { image: "images/knight-slayer-tsorig.jpg", answers: ["Knight Slayer Tsorig", "knight slayer tsorig"]}

];

let current = 0;
let lives = 5;

function checkAnswer() {
  const input = document.getElementById("userAnswer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");
  const livesDisplay = document.getElementById("lives");

  const correctAnswers = challenges[current].answers.map(ans => ans.toLowerCase());

  if (correctAnswers.includes(input)) {
    feedback.textContent = "✅ Correct!";
    current++;

    if (current < challenges.length) {
      showNextChallenge();
    } else {
      feedback.textContent = "🎉 You completed all challenges!";
      document.getElementById("gameImage").style.display = "none";
    }

  } else {
    lives--;
    livesDisplay.textContent = lives;
    updateHealthBar(); // ✅ Update bar after losing a life

    if (lives > 0) {
      feedback.textContent = "❌ Wrong! Try again.";
    } else {
      feedback.textContent = "💀 Game Over!";
      document.querySelector("button").disabled = true;
    }
  }

  document.getElementById("userAnswer").value = "";
}


function showNextChallenge() {
  document.getElementById("gameImage").src = challenges[current].image;
  document.getElementById("userAnswer").value = "";
  document.getElementById("feedback").textContent = "";
}

// Load the first image when the page loads
window.onload = function () {
  showNextChallenge();
  updateHealthBar();
};
// Make Enter key act like clicking the button
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

