function loadDatapoints() {
    const urlParams = new URLSearchParams(window.location.search);
    const candidateId = urlParams.get('id');

    if (!candidateId || !candidatesData[candidateId]) {
        window.location.href = 'index.html';
        return;
    }

    const candidate = candidatesData[candidateId];

    // Set candidate name
    document.getElementById('candidateName').textContent = candidate.reference_label;

    // Display datapoints
    const datapointsList = document.getElementById('datapointsList');

    // Add Pitch Deck datapoint
    const pitchDeckItem = document.createElement('li');
    pitchDeckItem.className = 'datapoint-item';
    pitchDeckItem.innerHTML = `
        <img src="assets/document-text.png" alt="Document Icon" class="document-icon">
<h3>Pitch Deck</h3>
        <img src="assets/arrow-right.png" alt="Arrow Icon" class="arrow-icon">
    `;
    pitchDeckItem.addEventListener('click', () => {
        window.location.href = `datafields.html?id=${candidateId}&datapoint=pitch_deck`;
    });
    datapointsList.appendChild(pitchDeckItem);

    // Add Team datapoint
    const teamItem = document.createElement('li');
    teamItem.className = 'datapoint-item';
    teamItem.innerHTML = `
        <img src="assets/team.png" alt="Team Icon" class="document-icon">
<h3>Team</h3>
        <img src="assets/arrow-right.png" alt="Arrow Icon" class="arrow-icon">
    `;
    teamItem.addEventListener('click', () => {
        window.location.href = `datafields.html?id=${candidateId}&datapoint=team`;
    });
    datapointsList.appendChild(teamItem);
}

document.addEventListener('DOMContentLoaded', loadDatapoints);
