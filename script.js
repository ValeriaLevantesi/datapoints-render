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
    },
    "7-seconds": {
        id: "7-seconds",
        reference_label: "7 Seconds",
        datapoints: {
            "pitch_deck": {
                type: "flat",
                fields: [
                    {
                        id: "content-financial_projections",
                        value: true,
                        reasoning: "The pitch includes a financial projections chart showing the expected EBITDA and revenue (RICAVI) from 2024 to 2027, which covers a period of four years, thus addressing long-term financial projections."
                    },
                    {
                        id: "content-frankenstein_claim",
                        value: false,
                        reasoning: "The pitch deck does not contain any claims that define the 7SECONDS APP by combining elements of existing companies in a 'Frankenstein claim' manner. It focuses on its unique value propositions and market positioning without directly comparing itself to other companies."
                    },
                    {
                        id: "content-mckynsey_claim",
                        value: true,
                        reasoning: "The pitch deck provides a comprehensive overview of the startup's value proposition, market validation, traction, and financial projections, which are essential for defining the problem and opportunity. However, it does not mention any primary data collection methods such as interviews or surveys, indicating a reliance on secondary sources."
                    },
                    {
                        id: "content-multiple_exit_scenarios",
                        value: false,
                        reasoning: "The pitch does not explicitly mention a multiple outcome scenario with detailed projections for worst-case, baseline, and best-case outcomes."
                    },
                    {
                        id: "content-onepercent_claim",
                        value: true,
                        reasoning: "The pitch deck mentions that the digital marketing industry has a turnover of over $350 billion annually, and it projects a revenue of 50 million euros by 2028 from the Italian market, which is over 9 billion euros in 2024. This implies a potential market share of approximately 0.5% of the total market, fitting the definition of a 'one percent claim.'"
                    },
                    {
                        id: "content-pre_money_calculation",
                        value: false,
                        reasoning: "The pitch does not explicitly address pre-money valuation calculations or methods such as multiples, discounted cash flow (DCF), or competitor benchmarking."
                    },
                    {
                        id: "content-required_funds",
                        value: true,
                        reasoning: "The pitch explicitly states an investment scenario of 300K€."
                    },
                    {
                        id: "content-trump_claim",
                        value: true,
                        reasoning: "The pitch deck contains statements that declare the 7SECONDS APP as a definitive solution to problems faced by brands on social media, such as '7SECONDS E' LA SOLUZIONE DEFINITIVA' and 'NON CI SONO AD OGGI COMPETITORS DIRETTI'. These statements are unsubstantiated and lack supporting evidence or metrics, fitting the definition of a Frankenstein claim."
                    },
                    {
                        id: "content-vanity_claim",
                        value: true,
                        reasoning: "The pitch deck claims that there are no direct competitors for the 7SECONDS APP, stating that while there are similar entities, they do not proceed in the same direction. This suggests a selective comparison that portrays the company as superior by implying a unique position in the market without acknowledging any relevant competition."
                    },
                    {
                        id: "content-wrong_use_of_funds",
                        value: false,
                        reasoning: "The pitch does not explicitly mention that the capital raised will be allocated to marketing or sales activities or hiring. Instead, it focuses on implementing new app features and expanding into new markets."
                    },
                    {
                        id: "meta-n_slides",
                        value: 16,
                        reasoning: "The pitch deck document contains a total of 16 pages as indicated by the page attributes in the markdown content."
                    },
                    {
                        id: "slide-awards",
                        value: false,
                        reasoning: "The pitch deck does not contain any slides that specifically mention awards or competitions won by the company."
                    },
                    {
                        id: "slide-competition",
                        value: true,
                        reasoning: "The pitch deck includes a slide titled 'Non Direct Competitors' which discusses the competitive landscape and mentions similar entities that do not operate in the same direction as the 7SECONDS APP."
                    },
                    {
                        id: "slide-problem_opportunity",
                        value: true,
                        reasoning: "The pitch deck includes a dedicated slide titled 'Il Problema' (The Problem) on page 3, which outlines three main issues: Zero Visibility, Fund Dispersion, and Negative ROI, indicating a clear focus on the problems the startup aims to address."
                    },
                    {
                        id: "slide-team",
                        value: true,
                        reasoning: "The pitch deck includes a slide dedicated to the founding team members, detailing their names, roles, and relevant experience."
                    },
                    {
                        id: "slide-traction",
                        value: true,
                        reasoning: "The pitch deck includes a slide titled 'Traction & Market Validation' which provides specific metrics about user growth, revenue generation, and profit margins, indicating a clear focus on the traction of the company's solution."
                    },
                    {
                        id: "slide-why_now",
                        value: false,
                        reasoning: "The provided pitch deck does not contain any slides explicitly addressing the 'why now' concept, such as market trends, technological advancements, or societal shifts that make the startup's solution relevant at this moment."
                    }
                ]
            },
            "team": {
                type: "iterable",
                elements: [
                    {
                        index_key: "gabriele_villani",
                        fields: [
                            {
                                id: "role",
                                value: "Digital and biddable media specialist",
                                reasoning: null
                            }
                        ]
                    },
                    {
                        index_key: "lorenzo_allamprese",
                        fields: [
                            {
                                id: "role",
                                value: "Account Manager",
                                reasoning: null
                            }
                        ]
                    },
                    {
                        index_key: "matteo_zobbi",
                        fields: [
                            {
                                id: "role",
                                value: "CTO / Sviluppatore",
                                reasoning: null
                            }
                        ]
                    },
                    {
                        index_key: "paola_fornasari",
                        fields: [
                            {
                                id: "role",
                                value: "Co-Founder",
                                reasoning: null
                            }
                        ]
                    },
                    {
                        index_key: "sergio_zuppiroli",
                        fields: [
                            {
                                id: "role",
                                value: "CEO & Co-Founder",
                                reasoning: null
                            }
                        ]
                    }
                ]
            }
        }
    }
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

        // Use the startup name from the reference_label field
        const startupName = candidate.reference_label;

        candidateCard.innerHTML = `
<h2>${startupName}</h2>
`;

        candidateCard.addEventListener('click', () => {
            window.location.href = `datapoints.html?id=${id}`;
        });

        candidatesList.appendChild(candidateCard);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
