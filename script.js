// Sample data structure
const candidatesData = {
    "BRUM": {
        name: "BRUM",
        role: "Sales Representative",
        datapoints: {
            "Communication Skills": ["Verbal Communication", "Written Communication", "Presentation Skills"],
            "Sales Performance": ["Revenue Generated", "Conversion Rate", "Deal Closure Time"],
            "Customer Relations": ["Client Satisfaction", "Follow-up Rate", "Response Time"]
        }
    }
    // Add more candidates here
};

// Initialize the application
function initApp() {
    const currentPage = window.location.pathname;
    
    if (currentPage.endsWith('index.html') || currentPage === '/') {
        displayCandidatesList();
    }
}

// Display candidates list on the index page
function displayCandidatesList() {
    const candidatesList = document.getElementById('candidatesList');
    
    for (const [id, candidate] of Object.entries(candidatesData)) {
        const candidateCard = document.createElement('div');
        candidateCard.className = 'candidate-card';
        candidateCard.innerHTML = `
            <h2>${candidate.name}</h2>
            <p>${candidate.role}</p>
        `;
        
        candidateCard.addEventListener('click', () => {
            window.location.href = `candidate.html?id=${id}`;
        });
        
        candidatesList.appendChild(candidateCard);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
