function calculateSectionScores() {
  const sections = document.querySelectorAll('.section');
  let overallTotalScore = 0;
  let overallMaxScore = 0;
  const results = [];

  sections.forEach((section, index) => {
      const questions = section.querySelectorAll('.question');
      let sectionScore = 0;
      const sectionMaxScore = questions.length * 100;  // Assuming each question has a maximum score of 100

      questions.forEach(question => {
          const selectedAnswer = question.querySelector('input[type="radio"]:checked');
          if (selectedAnswer) {
              sectionScore += parseFloat(selectedAnswer.value);
          }
      });

      // Calculate percentage for the section
      const sectionPercentage = (sectionScore / sectionMaxScore) * 100;

      // Update overall scores
      overallTotalScore += sectionScore;
      overallMaxScore += sectionMaxScore;

      // Prepare section score result
      const sectionTitle = section.querySelector('h2').textContent;
      const scoreText = `Score pour la section ${sectionTitle}  <span class="result-percentage">${sectionPercentage.toFixed(2)}%</span>`;
      results.push(scoreText);
  });

  // Calculate overall percentage
  const overallPercentage = (overallTotalScore / overallMaxScore) * 100;
  /*const totalScoreText = `Votre score total est : <span class="result-percentage">${overallPercentage.toFixed(2)}%`;
  results.push(totalScoreText);*/

  // Display all results at the end of the form
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = results.map(text => `<p>${text}</p>`).join('');
}

// Call the function when needed, e.g., on form submission or button click
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent actual form submission for demonstration
  calculateSectionScores();
});



function submitResponsesToServer() {
  const form = document.getElementById('percentageForm');
  const formData = new FormData(form);
  const responses = {};

  for (const [name, value] of formData.entries()) {
      responses[name] = value;
  }

  fetch('http://localhost:3000/store-responses', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(responses),
  })
  .then(response => response.text())
  .then(data => {
      console.log(data); // Affiche la réponse du serveur
      alert('Réponses envoyées avec succès !');
  })
  .catch(error => {
      console.error('Erreur:', error);
  });
}
