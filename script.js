// Updated data structure with complete fields
const candidatesData = {
    "BRUM": {
        id: "brum-batch-3-2",
        reference_label: "BRUM Batch 3.2",
        datapoints: {
            "pitch_deck": {
                type: "flat",
                fields: [
                    {
                        id: "content-financial_projections",
                        value: true,
                        reasoning: "The pitch includes a financial table projecting metrics such as the number of students, revenue, and other financial indicators from 2024 to 2028"
                    },
                    {
                        id: "content-frankenstein_claim",
                        value: true,
                        reasoning: "The pitch deck includes a section that describes BRUM as a combination of DVento Group and OneDay Group"
                    },
                    {
                        id: "content-mckynsey_claim",
                        value: true,
                        reasoning: "The pitch deck provides a comprehensive overview of the driving license market in Italy"
                    },
                    {
                        id: "content-multiple_exit_scenarios",
                        value: false,
                        reasoning: "The pitch does not explicitly mention multiple outcome scenarios"
                    },
                    {
                        id: "content-onepercent_claim",
                        value: true,
                        reasoning: "The pitch deck mentions a market size of over 1 billion euros in Italy"
                    },
                    {
                        id: "content-pre_money_calculation",
                        value: false,
                        reasoning: "The pitch does not explicitly address pre-money valuation calculations"
                    },
                    {
                        id: "content-required_funds",
                        value: true,
                        reasoning: "The pitch mentions a financing round for Seed of €2M"
                    },
                    {
                        id: "content-trump_claim",
                        value: true,
                        reasoning: "Contains statements about becoming market leader by 2028"
                    },
                    {
                        id: "content-vanity_claim",
                        value: true,
                        reasoning: "Presents comparison table highlighting BRUM's superiority"
                    },
                    {
                        id: "content-wrong_use_of_funds",
                        value: false,
                        reasoning: "Does not explicitly mention allocation of funds"
                    },
                    {
                        id: "meta-n_slides",
                        value: 17,
                        reasoning: "The pitch deck contains 17 pages"
                    },
                    {
                        id: "slide-awards",
                        value: false,
                        reasoning: "No slides mention awards or competitions"
                    },
                    {
                        id: "slide-competition",
                        value: true,
                        reasoning: "Includes slide on digital players in Europe"
                    },
                    {
                        id: "slide-problem_opportunity",
                        value: true,
                        reasoning: "Highlights inefficiencies and unmet needs in traditional driving school market"
                    },
                    {
                        id: "slide-team",
                        value: true,
                        reasoning: "Includes slide dedicated to founding team"
                    },
                    {
                        id: "slide-traction",
                        value: true,
                        reasoning: "Shows growth of BRUM Students YTD"
                    },
                    {
                        id: "slide-why_now",
                        value: true,
                        reasoning: "Discusses market timing and opportunity"
                    }
                ]
            },
            "team": {
                type: "iterable",
                elements: [
                    {
                        index_key: "lorenzo_lodigiani",
                        fields: [
                            {
                                id: "developer",
                                value: true,
                                reasoning: "Has experience in technology and operations"
                            },
                            {
                                id: "full_time",
                                value: true,
                                reasoning: "Has multiple active roles"
                            },
                            {
                                id: "linkedin_ex_claim",
                                value: false,
                                reasoning: "No ex-something expressions in summary"
                            },
                            {
                                id: "role",
                                value: "Tech & Operations",
                                reasoning: null
                            },
                            {
                                id: "sales_guy",
                                value: false,
                                reasoning: "Profile focuses on education and technology roles"
                            }
                        ]
                    },
                    {
                        index_key: "luca_cozzarini",
                        fields: [
                            {
                                id: "developer",
                                value: false,
                                reasoning: "No software development experience indicated"
                            },
                            {
                                id: "full_time",
                                value: true,
                                reasoning: "Has one active role as Co-Founder"
                            },
                            {
                                id: "linkedin_ex_claim",
                                value: false,
                                reasoning: "No ex-something expressions in summary"
                            },
                            {
                                id: "role",
                                value: "Co-Founder, Finance & Ops in WeRoad",
                                reasoning: null
                            },
                            {
                                id: "sales_guy",
                                value: false,
                                reasoning: "Profile focuses on finance and operations"
                            }
                        ]
                    },
                    {
                        index_key: "nicolò_martino",
                        fields: [
                            {
                                id: "developer",
                                value: false,
                                reasoning: "No software development experience"
                            },
                            {
                                id: "full_time",
                                value: true,
                                reasoning: "Has two active roles"
                            },
                            {
                                id: "linkedin_ex_claim",
                                value: false,
                                reasoning: "No ex-something expressions in summary"
                            },
                            {
                                id: "role",
                                value: "Responsabile didattico",
                                reasoning: null
                            },
                            {
                                id: "sales_guy",
                                value: true,
                                reasoning: "Has experience as sales consultant at Tecnocasa"
                            }
                        ]
                    }
                ]
            }
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
            window.location.href = `datapoints.html?id=${id}`;
        });
        
        candidatesList.appendChild(candidateCard);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
