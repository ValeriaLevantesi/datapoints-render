function loadCandidateDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const candidateId = urlParams.get('id');
    
    if (!candidateId || !candidatesData[candidateId]) {
        window.location.href = 'index.html';
        return;
    }
    
    const candidate = candidatesData[candidateId];
    
    // Set candidate name
    document.getElementById('candidateName').textContent = candidate.name;
    
    // Display datapoints
    const datapointsList = document.getElementById('datapointsList');
    for (const [datapoint, fields] of Object.entries(candidate.datapoints)) {
        const datapointElement = document.createElement('div');
        datapointElement.className = 'datapoint-item';
        datapointElement.innerHTML = `
            <h3>${datapoint}</h3>
            <ul class="datapoints-list">
                ${fields.map(field => `<li>${field}</li>`).join('')}
            </ul>
        `;
        
        datapointsList.appendChild(datapointElement);
    }
}

document.addEventListener('DOMContentLoaded', loadCandidateDetails); 