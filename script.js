document.addEventListener('DOMContentLoaded', () => {
    const mockData = {
        "id": "brum-batch-3-2",
        "reference_label": "BRUM Batch 3.2",
        "flat_datapoints": [
            {
                "datapoint_id": "pitch_deck",
                "fields": [
                    {
                        "id": "content-financial_projections",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch includes a financial table projecting metrics such as the number of students, revenue, and other financial indicators from 2024 to 2028, which is a period of more than 2 years.",
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
                        "value": true,
                        "reasoning": "The pitch deck includes a section on page 6 that describes BRUM as a combination of two groups, DVento Group and OneDay Group, highlighting their respective competencies and how they come together to form BRUM. This can be classified as a 'Frankenstein claim' as it defines BRUM by combining elements from existing companies.",
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
                        "id": "content-mckynsey_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck provides a comprehensive overview of the driving license market in Italy, including statistics and insights about traditional driving schools and the proposed digital solution by BRUM. However, it primarily relies on secondary data sources such as government statistics and market analysis without presenting primary data from interviews or surveys.",
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
                        "reasoning": "The pitch does not explicitly mention a multiple outcome scenario, including worst-case, baseline, and best-case projections.",
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
                        "reasoning": "The pitch deck mentions a market size of over 1 billion euros in Italy for the driving license market, which implies that capturing even 1% of this market would represent a significant revenue opportunity. This aligns with the definition of a 'one percent claim' as it projects potential revenue based on a small percentage of a large market.",
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
                        "reasoning": "The pitch does not explicitly address pre-money valuation calculations or methodologies such as multiples, discounted cash flow (DCF), or competitor benchmarking.",
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
                        "reasoning": "The pitch mentions a financing round for Seed, stating that the company needs an additional €2M to become profitable by December 2027 and to finance the opening of 4 cities and scaling up the product, team, and marketing.",
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
                        "reasoning": "The pitch deck contains several statements that can be classified as Frankenstein claims, such as the assertion that BRUM aims to become the market leader by 2028 without providing specific metrics or evidence to support this claim.",
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
                        "reasoning": "The pitch deck presents a comparison table on page 11 that highlights BRUM's offerings as being superior to traditional driving schools across multiple dimensions, such as price, flexibility, and service quality. This could be seen as a 'Vanity Metric claim' as it portrays BRUM as better in every aspect compared to competitors without acknowledging any potential weaknesses or areas where traditional schools might excel.",
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
                        "reasoning": "The pitch does not explicitly mention any allocation of funds to marketing or sales activities or hiring. It focuses on the business model, growth metrics, and financial projections without detailing specific uses of raised capital.",
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
                        "value": 17,
                        "reasoning": "The pitch deck document contains 17 pages as indicated by the number of distinct blocks present in the provided markdown content.",
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
                        "reasoning": "The pitch deck includes a slide on digital players in Europe, highlighting their revenues and business models, which indicates a focus on market competition.",
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
                        "reasoning": "The pitch deck includes multiple slides that highlight the inefficiencies and unmet needs in the traditional driving school market in Italy, such as the long process, high failure rates, lack of transparency, and high costs. These points clearly outline the problem/opportunity that the startup aims to address.",
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
                        "reasoning": "The pitch deck includes a slide dedicated to the founding team, detailing the roles and backgrounds of the co-founders and certified instructors.",
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
                        "reasoning": "The pitch deck includes a slide (page 12) that presents a bar chart showing the growth of 'Allievi BRUM YTD' (BRUM Students YTD) from February to September, along with key metrics such as website sessions, followers, leads, and student satisfaction. This indicates a clear focus on the traction of the company's solution.",
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
                        "value": true,
                        "reasoning": "The pitch deck discusses the inefficiencies of traditional driving schools, the growing demand for driving licenses, and the emergence of a digital solution tailored for new generations, indicating a timely market opportunity.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 1,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": 1
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
                        "index_key": "lorenzo_lodigiani",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": true,
                                "reasoning": "The individual has experience in technology and operations, particularly in roles that involve tech advising, product management, and the development of educational platforms focused on No Code and Low Code technologies. Their role as Head of Tech & Operations at BRUM involved working with APIs and building internal tools, which aligns with software development skills. Additionally, they have co-founded a No Code and Low Code education platform, indicating a strong foundation in software development concepts.",
                                "source_id": "linkedin_profile",
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
                                "id": "full_time",
                                "extracted_successfully": true,
                                "value": true,
                                "reasoning": "The individual has multiple active roles as of November 2024, including: 1) Lecturer & Mentor at H-FARM (started October 2023), 2) Co-Founder at FounderSwap (started May 2023), 3) Head of Tech & Operations at BRUM (started August 2024), 4) Tech & Ops Consultant at Ciao Elsa (started May 2024), and 5) Entrepreneur in Residence at Boolean (started February 2024). Therefore, there are more than one active roles.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 1,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "linkedin_ex_claim",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The summary field does not contain any expression like 'ex-something'.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": -1,
                                    "ambition": -1,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "Tech & Operations",
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
                            },
                            {
                                "id": "sales_guy",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The profile primarily focuses on education, mentorship, and technology roles rather than direct sales experience. The individual has held positions such as Lecturer, Entrepreneur in Residence, and Co-Founder, which emphasize teaching, product development, and tech operations rather than sales.",
                                "source_id": "linkedin_profile",
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
                    },
                    {
                        "index_key": "luca_cozzarini",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The profile does not indicate any software development experience or skills. The individual is a Co-Founder at a company related to driving licenses and has held finance-related roles, which do not align with software development.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": -1,
                                    "commitment": 0,
                                    "ambition": -1,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "full_time",
                                "extracted_successfully": true,
                                "value": true,
                                "reasoning": "As of November 2024, the individual holds an active role as a Co-Founder at BRUM patenti, which started in January 2024. Additionally, they previously held a role as a Finance Operations Coordinator at WeRoad, which ended in December 2023. Therefore, they have one active role and one recently completed role, indicating more than one role in the experience section.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 1,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "linkedin_ex_claim",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The summary field does not contain any expression like 'ex-something'.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": -1,
                                    "ambition": -1,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "Co-Founder, Finance & Ops in WeRoad",
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
                            },
                            {
                                "id": "sales_guy",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The profile does not indicate a clear focus on sales roles. The individual is a Co-Founder at BRUM patenti, which may involve sales responsibilities, but the description does not explicitly mention sales activities. Previous roles are primarily in finance and operations, which are not directly related to sales.",
                                "source_id": "linkedin_profile",
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
                    },
                    {
                        "index_key": "nicolò_martino",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The profile does not indicate any experience or skills related to software development. The individual's roles are primarily in education and administration within the driving school sector, with no mention of programming or software-related tasks.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": -1,
                                    "commitment": 0,
                                    "ambition": -1,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "full_time",
                                "extracted_successfully": true,
                                "value": true,
                                "reasoning": "The individual has two active roles as of November 2024: 'Head of Autoscuola' at BRUM patenti (starting September 2024) and 'Consulente e Docente corsi Reg. 561/06' at Siak Solution (starting September 2023). Both roles overlap, indicating more than one active position.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": 1,
                                    "ambition": 0,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "linkedin_ex_claim",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The summary field does not contain any expression like 'ex-something'.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": -1,
                                    "ambition": -1,
                                    "execution": 0
                                }
                            },
                            {
                                "id": "role",
                                "extracted_successfully": true,
                                "value": "Responsabile didattico",
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
                            },
                            {
                                "id": "sales_guy",
                                "extracted_successfully": true,
                                "value": true,
                                "reasoning": "The individual has experience as a 'Consulente di vendita' (Sales Consultant) at Tecnocasa Franchising S.p.A., which directly indicates a sales role. Additionally, their summary mentions starting their career as an 'agente di vendita' (sales agent), further supporting the classification as a sales role.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 1,
                                    "commitment": 0,
                                    "ambition": 0,
                                    "execution": 1
                                }
                            }
                        ]
                    }
                ]
            }
        ],
        "operation_logs": [
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:15.654389+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "source_id": "pitch_deck"
                }
            },
            {
                "operation": "extract_index",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:22.240243+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "index_id": "team_members"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:27.958390+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:37.253062+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:41.566686+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:43.002323+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-financial_projections"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:44.573745+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-frankenstein_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:46.408598+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-mckynsey_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:48.280921+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-multiple_exit_scenarios"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:50.130829+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-onepercent_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:51.120946+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-pre_money_calculation"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:52.515392+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-required_funds"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:53.861208+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-trump_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:56.597677+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-vanity_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:57.773071+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "content-wrong_use_of_funds"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:42:59.110248+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "meta-n_slides"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:00.115389+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "slide-awards"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:01.428160+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "slide-competition"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:02.849862+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "slide-problem_opportunity"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:05.799970+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "slide-team"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:07.534727+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "slide-traction"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:09.585589+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "slide-why_now"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:10.365557+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:10.979784+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:11.597146+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:13.026532+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:14.209542+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:15.853052+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:16.999869+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:17.937813+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:20.914211+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:22.514704+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:24.003498+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:25.426199+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:26.284084+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:27.075628+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2025-01-03T10:43:27.869857+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "brum-batch-3-2",
                    "field_id": "linkedin_ex_claim"
                }
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
    // Update the top bar title with the reference label
    const topBarTitle = document.getElementById('top-bar-title');
    if (topBarTitle) {
        topBarTitle.textContent = mockData.reference_label;
    }

    if (datapointId === 'pitch_deck') {
        renderPitchDeckDetails();
    } else if (datapointId === 'team') {
        renderTeamDetails();
    }
});
