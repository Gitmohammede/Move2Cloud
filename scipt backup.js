<script>
            function downloadResponses() {
              const form = document.getElementById('percentageForm');
              const formData = new FormData(form);
              const responses = [];
            
              // Parcourir chaque élément du formulaire
              for (const [name, value] of formData.entries()) {
                // Trouver l'élément input correspondant à la réponse sélectionnée
                const inputElement = document.querySelector(`input[name="${name}"]:checked`);
                if (inputElement && !isNaN(inputElement.value)) {
                  const labelElement = inputElement.parentElement;
            
                  // Trouver l'élément contenant le texte de la question
                  let questionElement = labelElement;
                  while (questionElement && !questionElement.classList.contains('question') && !questionElement.dataset.question) {
                    questionElement = questionElement.parentElement;
                  }
            
                  // Si un élément contenant la question a été trouvé, extraire le texte
                  if (questionElement) {
                    const questionText = questionElement.textContent.trim();
                    responses.push(`${questionText}: ${inputElement.value}`);
                  } else {
                    console.error(`Impossible de trouver la question pour l'élément ${name}`);
                  }
                }
              }
            
              // Créer le fichier à télécharger
              const blob = new Blob([responses.join('\n')], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'responses.txt';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }
            </script>