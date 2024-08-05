// script.js
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.getElementsByClassName('accordion');

    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
});

function calculateScore() {
    const form = document.getElementById('percentageForm');
    const formData = new FormData(form);
    let totalScore = 0;

    for (const entry of formData) {
        if (entry[1]) { // Check if a value is selected
            totalScore += parseFloat(entry[1]);
        }
    }

    totalScore = (totalScore / 9200) * 100;

    // Déterminer la catégorie du score
    let message;
    if (totalScore <= 25) {
        message = "La platforme n'est pas prête pour migrer vers le cloud";
    } else if (totalScore <= 50) {
        message = "La platforme n'est pas prête pour migrer vers le cloud";
    } else if (totalScore <= 75) {
        message = "La platforme n'est pas prête pour migrer vers le cloud";
    } else {
        message = "La platforme est prête pour migrer vers le cloud";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Votre score final est : <span class="result-percentage">${totalScore.toFixed(2)}%</span> (${message})`;

    /*resultDiv.textContent = `Votre score final est : <span class="result-percentage">${totalScore.toFixed(2)}% </span> (${message})`; */
}

function showSection(id) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const section = document.getElementById(id);
    if (section) {
        section.classList.add('active');
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function nextSection(id) {
    const current = document.querySelector('.section.active');
    const next = document.getElementById(id);
    if (current && next) {
        current.classList.remove('active');
        next.classList.add('active');
        next.scrollIntoView({ behavior: 'smooth' });
    }
}

function prevSection(id) {
    const current = document.querySelector('.section.active');
    const prev = document.getElementById(id);
    if (current && prev) {
        current.classList.remove('active');
        prev.classList.add('active');
        prev.scrollIntoView({ behavior: 'smooth' });
    }
}







