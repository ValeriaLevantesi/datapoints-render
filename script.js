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
                        id: "meta-n_slides",
                        value: 17,
                        reasoning: "The pitch deck contains 17 pages"
                    },
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
                        id: "content-onepercent_claim",
                        value: true,
                        reasoning: "The pitch deck mentions a market size of over 1 billion euros in Italy"
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
                    },
                    {
                        id: "content-multiple_exit_scenarios",
                        value: false,
                        reasoning: "The pitch does not explicitly mention multiple outcome scenarios"
                    },
                    {
                        id: "content-pre_money_calculation",
                        value: false,
                        reasoning: "The pitch does not explicitly address pre-money valuation calculations"
                    },
                    {
                        id: "content-wrong_use_of_funds",
                        value: false,
                        reasoning: "Does not explicitly mention allocation of funds"
                    },
                    {
                        id: "slide-awards",
                        value: false,
                        reasoning: "No slides mention awards or competitions"
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
                        id: "meta-n_slides",
                        value: 16,
                        reasoning: "The pitch deck document contains a total of 16 pages as indicated by the page attributes in the markdown content."
                    },
                    {
                        id: "content-financial_projections",
                        value: true,
                        reasoning: "The pitch includes a financial projections chart showing the expected EBITDA and revenue (RICAVI) from 2024 to 2027, which covers a period of four years, thus addressing long-term financial projections."
                    },
                    {
                        id: "content-mckynsey_claim",
                        value: true,
                        reasoning: "The pitch deck provides a comprehensive overview of the startup's value proposition, market validation, traction, and financial projections, which are essential for defining the problem and opportunity. However, it does not mention any primary data collection methods such as interviews or surveys, indicating a reliance on secondary sources."
                    },
                    {
                        id: "content-onepercent_claim",
                        value: true,
                        reasoning: "The pitch deck mentions that the digital marketing industry has a turnover of over $350 billion annually, and it projects a revenue of 50 million euros by 2028 from the Italian market, which is over 9 billion euros in 2024. This implies a potential market share of approximately 0.5% of the total market, fitting the definition of a 'one percent claim.'"
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
                        id: "content-frankenstein_claim",
                        value: false,
                        reasoning: "The pitch deck does not contain any claims that define the 7SECONDS APP by combining elements of existing companies in a 'Frankenstein claim' manner. It focuses on its unique value propositions and market positioning without directly comparing itself to other companies."
                    },
                    {
                        id: "content-multiple_exit_scenarios",
                        value: false,
                        reasoning: "The pitch does not explicitly mention a multiple outcome scenario with detailed projections for worst-case, baseline, and best-case outcomes."
                    },
                    {
                        id: "content-pre_money_calculation",
                        value: false,
                        reasoning: "The pitch does not explicitly address pre-money valuation calculations or methods such as multiples, discounted cash flow (DCF), or competitor benchmarking."
                    },
                    {
                        id: "content-wrong_use_of_funds",
                        value: false,
                        reasoning: "The pitch does not explicitly mention that the capital raised will be allocated to marketing or sales activities or hiring. Instead, it focuses on implementing new app features and expanding into new markets."
                    },
                    {
                        id: "slide-awards",
                        value: false,
                        reasoning: "The pitch deck does not contain any slides that specifically mention awards or competitions won by the company."
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
    },
    "worky": {
        id: "worky",
        reference_label: "Worky",
        datapoints: {
            "pitch_deck": {
                type: "flat",
                fields: [
                    {
                        id: "meta-n_slides",
                        value: 19,
                        reasoning: "The pitch deck document contains 19 pages as indicated by the number of distinct page references in the markdown content."
                    },
                    {
                        id: "content-frankenstein_claim",
                        value: true,
                        reasoning: "The pitch deck contains a statement that can be classified as a 'Frankenstein claim' in the section discussing the bundled HR + Payroll + Benefits product. It mentions that the company aims to monetize 10x more per user by integrating HR and Payroll, which suggests a combination of existing solutions in the market. Additionally, the mention of 'Worky+' as a single integral product with HR and Payroll also indicates a blending of functionalities from different companies."
                    },
                    {
                        id: "content-mckynsey_claim",
                        value: true,
                        reasoning: "The pitch deck provides a comprehensive overview of the startup's market, challenges, and solutions, relying on secondary data such as market size, employee churn statistics, and industry trends, without presenting primary data from interviews or surveys."
                    },
                    {
                        id: "content-onepercent_claim",
                        value: true,
                        reasoning: "The pitch deck mentions a US$15Bn market size and states that Worky can cater to ~25M Mexicans and 1.3M SMEs, which implies a potential revenue projection based on a small percentage of the total market."
                    },
                    {
                        id: "content-trump_claim",
                        value: true,
                        reasoning: "The pitch deck contains several statements that declare the company's offerings as the best or greatest without providing supporting evidence or metrics. For example, phrases like 'We are building the blocks to become the employee go-to platform for benefit management' and 'Our monthly net value retention rate is +100%' are assertions that lack substantiation in the context provided."
                    },
                    {
                        id: "content-vanity_claim",
                        value: true,
                        reasoning: "The pitch deck contains a competitive analysis table on page 7 that highlights Worky's strengths in various dimensions compared to competitors. It claims to have a fast onboarding speed, good employee experience, and specialized focus in Mexico, which may suggest a selective comparison that portrays Worky as superior across all measured dimensions without acknowledging the strengths of competitors."
                    },
                    {
                        id: "slide-competition",
                        value: true,
                        reasoning: "The pitch deck includes a table on page 7 that compares Worky with its competitors in terms of various metrics such as customer headcount, onboarding speed, employee experience, and pricing. This indicates a focus on market competition."
                    },
                    {
                        id: "slide-problem_opportunity",
                        value: true,
                        reasoning: "The pitch deck includes multiple slides that highlight the problems associated with manual HR and payroll management in Mexican SMEs, detailing inefficiencies and the financial impact of these issues. Specifically, slides 2 and 3 address the problems directly, making it clear that there is a significant opportunity for improvement in this market."
                    },
                    {
                        id: "slide-team",
                        value: true,
                        reasoning: "The pitch deck includes a slide dedicated to the founding team members, detailing their backgrounds, prior experiences, and education."
                    },
                    {
                        id: "slide-traction",
                        value: true,
                        reasoning: "The pitch deck includes multiple slides that discuss the company's traction, including metrics such as managing 20,000 employees, a monthly net value retention rate of +100%, and a 30% employee rotation reduction within the first 3 months of use. Additionally, it highlights strong customer engagement and retention metrics."
                    },
                    {
                        id: "slide-why_now",
                        value: true,
                        reasoning: "The pitch deck includes a slide on the HR Tech industry receiving strong tailwinds due to HR glorification and payroll regulation changes, indicating timely market trends that make the startup's solution relevant."
                    },
                    {
                        id: "content-financial_projections",
                        value: false,
                        reasoning: "The pitch does not provide any explicit long-term financial projections or forecasts of the company's financial performance over a period of more than 2 years."
                    },
                    {
                        id: "content-multiple_exit_scenarios",
                        value: false,
                        reasoning: "The pitch does not explicitly mention a multiple outcome scenario, including worst-case, baseline, and best-case projections."
                    },
                    {
                        id: "content-pre_money_calculation",
                        value: false,
                        reasoning: "The pitch does not explicitly mention any pre-money valuation calculations or methodologies such as multiples, discounted cash flow (DCF), or competitor benchmarking."
                    },
                    {
                        id: "content-required_funds",
                        value: false,
                        reasoning: "The pitch does not mention any specific amount of money that the company wants to raise."
                    },
                    {
                        id: "content-wrong_use_of_funds",
                        value: false,
                        reasoning: "The pitch does not explicitly mention any allocation of funds towards marketing or sales activities or hiring. It focuses on product development, market needs, and customer engagement without detailing a plan that includes 'wrong use of funds' as defined."
                    },
                    {
                        id: "slide-awards",
                        value: false,
                        reasoning: "The pitch deck does not contain any slides that specifically mention awards or competitions won by the company."
                    }
                ]
            },
            "team": {
                type: "iterable",
                elements: [
                    {
                        index_key: "ceo",
                        fields: [
                            {
                                id: "role",
                                value: "CEO",
                                reasoning: null
                            }
                        ]
                    },
                    {
                        index_key: "coo",
                        fields: [
                            {
                                id: "role",
                                value: "COO",
                                reasoning: null
                            }
                        ]
                    },
                    {
                        index_key: "cto",
                        fields: [
                            {
                                id: "role",
                                value: "CTO",
                                reasoning: null
                            }
                        ]
                    }
                ]
            }
        }
    },
};

// Initialize the application
function initApp() {
    console.log('Initializing app...');
    console.log('Candidates Data:', candidatesData);
    const currentPage = window.location.pathname;

    if (currentPage.endsWith('index.html') || currentPage === '/') {
        displayCandidatesList();
    }
}

// Display candidates list on the index page
function displayCandidatesList() {
    console.log('Displaying candidates list...');
    const candidatesList = document.getElementById('candidatesList');

    for (const [id, candidate] of Object.entries(candidatesData)) {
        console.log('Creating candidate card for:', id);
        const candidateCard = document.createElement('div');
        candidateCard.className = 'candidate-card';

        // Use the startup name from the reference_label field
        const startupName = candidate.reference_label;

        candidateCard.innerHTML = `
<h2>${startupName}</h2>
<img src="assets/arrow-right.png" alt="Arrow Icon" class="arrow-icon">
`;

        candidateCard.addEventListener('click', () => {
            window.location.href = `datapoints.html?id=${id}`;
        });

        candidatesList.appendChild(candidateCard);
        console.log('Appended candidate card for:', id);
    }
}

function renderTeamDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const datapointId = urlParams.get('datapoint');
    console.log('Datapoint ID:', datapointId);
    const teamList = document.getElementById('team-list');
    console.log('Team List Element:', teamList);

    if (datapointId && candidatesData[datapointId]) {
        const teamData = candidatesData[datapointId].datapoints.team.elements;
        console.log('Team Data:', teamData);

        teamList.innerHTML = ''; // Clear existing content

        teamData.forEach(member => {
            console.log('Member:', member);
            const listItem = document.createElement('li');
            listItem.className = 'team-member';

            const nameDiv = document.createElement('div');
            nameDiv.className = 'name';
            nameDiv.textContent = member.index_key.replace('_', ' ');

            const roleDiv = document.createElement('div');
            roleDiv.className = 'role';
            roleDiv.textContent = member.fields.find(field => field.id === 'role').value;

            listItem.appendChild(nameDiv);
            listItem.appendChild(roleDiv);
            teamList.appendChild(listItem);
        });
    }
}

function renderPitchDeckDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const datapointId = urlParams.get('datapoint');
    const pitchDeckElement = document.getElementById('pitch_deck');

    if (datapointId && candidatesData[datapointId]) {
        const pitchDeckData = candidatesData[datapointId].datapoints.pitch_deck.fields;

        // Sort fields to have strings first, then booleans
        pitchDeckData.sort((a, b) => {
            if (typeof a.value === 'string') return -1;
            if (typeof b.value === 'string') return 1;
            return 0;
        });

        pitchDeckElement.innerHTML = ''; // Clear existing content

        pitchDeckData.forEach(field => {
            const listItem = document.createElement('li');
            listItem.className = 'list-item';

            const primaryText = document.createElement('div');
            primaryText.className = 'primary-text';
            primaryText.textContent = field.id.replace(/_/g, ' ');

            const secondaryText = document.createElement('div');
            secondaryText.className = 'secondary-text';
            secondaryText.textContent = field.value;

            listItem.appendChild(primaryText);
            listItem.appendChild(secondaryText);
            pitchDeckElement.appendChild(listItem);
        });
    }
}

document.addEventListener('DOMContentLoaded', initApp);
