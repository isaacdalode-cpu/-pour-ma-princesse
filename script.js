
/* =====================================
   POUR MA PRINCESSE ❤️
   ANIMATION ET LETTRE D'EXCUSE
   De Isaac Dalo
===================================== */

const welcomeScreen = document.getElementById("welcomeScreen");
const letterScreen = document.getElementById("letterScreen");
const finalScreen = document.getElementById("finalScreen");

const openLetterButton = document.getElementById("openLetter");
const finishLetterButton = document.getElementById("finishLetter");

const letterBody = document.getElementById("letterBody");
const floatingHearts = document.getElementById("floatingHearts");

// =====================================
// MA LETTRE POUR MA PRINCESSE ❤️
// =====================================

const letterText = `Ma Princesse, mère ya palais... ❤️

Je sais que tu es fâchée contre moi, et je tiens sincèrement à te demander pardon.

Je n'aurais pas dû t'accuser comme je l'ai fait, surtout sans que moi-même je sois un exemple. Je reconnais mon erreur et je te promets de faire attention pour que cela ne se reproduise plus.

Tout cela est parti d'une histoire de forfaits que je n'avais pas pu acheter. C'est ce qui a provoqué cette situation, mais ce n'est pas une raison pour te faire de la peine.

Je t'en prie, pardonne-moi. Je n'aime vraiment pas te voir fâchée contre moi comme ça. Cela ne me donne aucune joie, au contraire, ça me fait mal de savoir que tu n'es pas heureuse à cause de moi.

Tu sais, tu es ma Princesse, et je tiens énormément à toi.

Je veux que nous puissions oublier cette dispute et surtout chercher ensemble un moyen d'améliorer les choses, pour que tout se passe bien entre nous et que ce genre de situation ne se reproduise plus.

Pour finir, je vais faire des efforts pour arranger les choses. Ne t'inquiète pas, je sais que j'ai déjà gâché ton humeur, mais ce que je veux réellement, c'est te voir sourire et te savoir heureuse.

Je te promets de faire tout mon possible pour préserver ce magnifique sourire que j'aime tant.

Pardonne-moi, ma Princesse. Je ne suis pas parfait, mais je veux apprendre de mes erreurs et faire mieux pour nous.

Avec tout mon amour,

Isaac Dalo ❤️

À ma Princesse, mère ya palais.

JE T'AIME. ❤️

PARDONNE-MOI ET GROS BISOUS ! 💋`;

// =====================================
// CŒURS FLOTTANTS
// =====================================

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart-particle");

    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize = (12 + Math.random() * 25) + "px";

    heart.style.animationDuration = (5 + Math.random() * 7) + "s";

    floatingHearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);
}

setInterval(createHeart, 350);

// =====================================
// ÉCRITURE PROGRESSIVE DE LA LETTRE
// =====================================

let typingStarted = false;
let typingTimer = null;

function writeLetter() {

    if (typingStarted) return;

    typingStarted = true;

    let index = 0;

    letterBody.textContent = "";

    function typeCharacter() {

        if (index < letterText.length) {

            const character = letterText.charAt(index);

            letterBody.textContent += character;

            index++;

            const delay = character === "\n" ? 250 : 35;

            typingTimer = setTimeout(typeCharacter, delay);
        }
    }

    typeCharacter();
}

// =====================================
// OUVERTURE DE LA LETTRE
// =====================================

openLetterButton.addEventListener("click", () => {

    welcomeScreen.classList.add("hidden");

    letterScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    writeLetter();

});

// =====================================
// MESSAGE FINAL
// =====================================

finishLetterButton.addEventListener("click", () => {

    if (typingTimer) {
        clearTimeout(typingTimer);
    }

    letterBody.textContent = letterText;

    letterScreen.classList.add("hidden");

    finalScreen.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    for (let i = 0; i < 35; i++) {

        setTimeout(createHeart, i * 80);

    }

});

// =====================================
// INITIALISATION
// =====================================

console.log("❤️ Pour ma Princesse est prêt !");
console.log("Une lettre sincère de Isaac Dalo.");
