document.addEventListener('DOMContentLoaded', () => {
    const detectButton = document.getElementById('detectButton');
    const resultText = document.getElementById('resultText');
    const historique = document.getElementById('historique');

    let crashCount = 0;
    let multiplicateursRecents = [];

    detectButton.addEventListener('click', () => {
        // Simulation d'un crash avec un multiplicateur aléatoire
        const multiplicateur = Math.random() * 3;
        multiplicateursRecents.push(multiplicateur);

        // Enregistrer le crash dans l'historique
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        const historyEntry = `Heure: ${time} - Multiplicateur: ${multiplicateur.toFixed(2)}`;
        const li = document.createElement('li');
        li.textContent = historyEntry;
        historique.appendChild(li);

        if (multiplicateur < 2.5) {
            crashCount++;
        } else {
            crashCount = 0;
        }

        if (crashCount >= 3) {
            resultText.textContent = '3 crashs successifs détectés !';
            alert('3 crashs successifs détectés ! Appuyez sur OK pour continuer.');
            crashCount = 0;
            multiplicateursRecents = [];
            navigator.vibrate(200); // Faire vibrer le téléphone
        } else {
            resultText.textContent = `Crash détecté avec un multiplicateur de ${multiplicateur.toFixed(2)}.`;
        }
    });
});
