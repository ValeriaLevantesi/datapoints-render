document.addEventListener('DOMContentLoaded', () => {
    const mockData = {
        "id": "7-seconds",
        "reference_label": "7 Seconds",
        "flat_datapoints": [
            {
                "datapoint_id": "pitch_deck",
                "fields": [
                    {
                        "id": "content-financial_projections",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch includes a financial projections chart showing the expected EBITDA and revenue (RICAVI) from 2024 to 2027, which covers a period of four years, thus addressing long-term financial projections.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 0
                        }
                    },
                    {
                        "id": "content-frankenstein_claim",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The pitch deck does not contain any claims that define the 7SECONDS APP by combining elements of existing companies in a 'Frankenstein claim' manner. It focuses on its unique value propositions and market positioning without directly comparing itself to other companies.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": -1,
                            "execution": 0
                        }
                    },
                    {
                        "id": "content-mckynsey_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck provides a comprehensive overview of the startup's value proposition, market validation, traction, and financial projections, which are essential for defining the problem and opportunity. However, it does not mention any primary data collection methods such as interviews or surveys, indicating a reliance on secondary sources.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 1
                        }
                    },
                    {
                        "id": "content-multiple_exit_scenarios",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The pitch does not explicitly mention a multiple outcome scenario with detailed projections for worst-case, baseline, and best-case outcomes.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": -1,
                            "execution": 0
                        }
                    },
                    {
                        "id": "content-onepercent_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck mentions that the digital marketing industry has a turnover of over $350 billion annually, and it projects a revenue of 50 million euros by 2028 from the Italian market, which is over 9 billion euros in 2024. This implies a potential market share of approximately 0.5% of the total market, fitting the definition of a 'one percent claim.'",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": 1,
                            "execution": 0
                        }
                    },
                    {
                        "id": "content-pre_money_calculation",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The pitch does not explicitly address pre-money valuation calculations or methods such as multiples, discounted cash flow (DCF), or competitor benchmarking.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": -1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 0
                        }
                    },
                    {
                        "id": "content-required_funds",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch explicitly states an investment scenario of 300K€.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 1
                        }
                    },
                    {
                        "id": "content-trump_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck contains statements that declare the 7SECONDS APP as a definitive solution to problems faced by brands on social media, such as '7SECONDS E' LA SOLUZIONE DEFINITIVA' and 'NON CI SONO AD OGGI COMPETITORS DIRETTI'. These statements are unsubstantiated and lack supporting evidence or metrics, fitting the definition of a Frankenstein claim.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 1
                        }
                    },
                    {
                        "id": "content-vanity_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck claims that there are no direct competitors for the 7SECONDS APP, stating that while there are similar entities, they do not proceed in the same direction. This suggests a selective comparison that portrays the company as superior by implying a unique position in the market without acknowledging any relevant competition.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": 1,
                            "execution": 1
                        }
                    },
                    {
                        "id": "content-wrong_use_of_funds",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The pitch does not explicitly mention that the capital raised will be allocated to marketing or sales activities or hiring. Instead, it focuses on implementing new app features and expanding into new markets.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": -1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": -1
                        }
                    },
                    {
                        "id": "meta-n_slides",
                        "extracted_successfully": true,
                        "value": 16,
                        "reasoning": "The pitch deck document contains a total of 16 pages as indicated by the page attributes in the markdown content.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 0
                        }
                    },
                    {
                        "id": "slide-awards",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The pitch deck does not contain any slides that specifically mention awards or competitions won by the company.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": -1,
                            "execution": -1
                        }
                    },
                    {
                        "id": "slide-competition",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck includes a slide titled 'Non Direct Competitors' which discusses the competitive landscape and mentions similar entities that do not operate in the same direction as the 7SECONDS APP.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 0
                        }
                    },
                    {
                        "id": "slide-problem_opportunity",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck includes a dedicated slide titled 'Il Problema' (The Problem) on page 3, which outlines three main issues: Zero Visibility, Fund Dispersion, and Negative ROI, indicating a clear focus on the problems the startup aims to address.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 0,
                            "ambition": 1,
                            "execution": 0
                        }
                    },
                    {
                        "id": "slide-team",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck includes a slide dedicated to the founding team members, detailing their names, roles, and relevant experience.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 1,
                            "ambition": 0,
                            "execution": 0
                        }
                    },
                    {
                        "id": "slide-traction",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck includes a slide titled 'Traction & Market Validation' which provides specific metrics about user growth, revenue generation, and profit margins, indicating a clear focus on the traction of the company's solution.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 1
                        }
                    },
                    {
                        "id": "slide-why_now",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The provided pitch deck does not contain any slides explicitly addressing the 'why now' concept, such as market trends, technological advancements, or societal shifts that make the startup's solution relevant at this moment.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": -1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": -1
                        }
                    }
                ]
            }
        ],
        "iterable_datapoints": [
            {
                "datapoint_id": "team",
                "elements": [
                    {
                        "index_key": "gabriele_villani",
                        "fields": [
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "Digital and biddable media specialist",
                                "reasoning": null,
                                "source_id": "pitch_deck",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 0,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            }
                        ]
                    },
                    {
                        "index_key": "lorenzo_allamprese",
                        "fields": [
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "Account Manager",
                                "reasoning": null,
                                "source_id": "pitch_deck",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 0,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            }
                        ]
                    },
                    {
                        "index_key": "matteo_zobbi",
                        "fields": [
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "CTO / Sviluppatore",
                                "reasoning": null,
                                "source_id": "pitch_deck",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 0,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            }
                        ]
                    },
                    {
                        "index_key": "paola_fornasari",
                        "fields": [
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "Co-Founder",
                                "reasoning": null,
                                "source_id": "pitch_deck",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 0,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            }
                        ]
                    },
                    {
                        "index_key": "sergio_zuppiroli",
                        "fields": [
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "CEO & Co-Founder",
                                "reasoning": null,
                                "source_id": "pitch_deck",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 0,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };


    function renderPitchDeckDetails() {
        const pitchDeckSection = document.getElementById('pitch_deck');
        const ul = pitchDeckSection.querySelector('ul');
        ul.innerHTML = ''; // Clear existing content

        const pitchDeckData = mockData.flat_datapoints.find(dp => dp.datapoint_id === 'pitch_deck');
        if (pitchDeckData) {
            pitchDeckData.fields.forEach(field => {
                const listItem = document.createElement('li');
                listItem.className = 'list-item';

                const primaryText = document.createElement('div');
                primaryText.className = 'primary-text';
                primaryText.textContent = field.id.replace('content-', '').replace('_', ' ');

                const secondaryText = document.createElement('div');
                secondaryText.className = 'secondary-text';
                secondaryText.textContent = field.value;

                listItem.appendChild(primaryText);
                listItem.appendChild(secondaryText);
                ul.appendChild(listItem);
            });
        }
    }

    function renderTeamDetails() {
        const teamSection = document.getElementById('team');
        const ul = teamSection.querySelector('ul');
        ul.innerHTML = ''; // Clear existing content

        const teamData = mockData.iterable_datapoints.find(dp => dp.datapoint_id === 'team');
        if (teamData) {
            teamData.elements.forEach(member => {
                const li = document.createElement('li');
                const roleField = member.fields.find(field => field.id === 'role');
                li.textContent = `${member.index_key.replace('_', ' ')} - ${roleField.value}`;
                ul.appendChild(li);
            });
        }
    }

    // Determine which page is loaded and render the appropriate content
    const urlParams = new URLSearchParams(window.location.search);
    const datapointId = urlParams.get('datapoint');
    if (datapointId === 'pitch_deck') {
        renderPitchDeckDetails();
    } else if (datapointId === 'team') {
        renderTeamDetails();
    }
});
