document.addEventListener('DOMContentLoaded', () => {
    const mockData = {
        "id": "worky",
        "reference_label": "Worky",
        "flat_datapoints": [
            {
                "datapoint_id": "pitch_deck",
                "fields": [
                    {
                        "id": "content-financial_projections",
                        "extracted_successfully": true,
                        "value": false,
                        "reasoning": "The pitch does not provide any explicit long-term financial projections or forecasts of the company's financial performance over a period of more than 2 years.",
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
                        "id": "content-frankenstein_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck contains a statement that can be classified as a 'Frankenstein claim' in the section discussing the bundled HR + Payroll + Benefits product. It mentions that the company aims to monetize 10x more per user by integrating HR and Payroll, which suggests a combination of existing solutions in the market. Additionally, the mention of 'Worky+' as a single integral product with HR and Payroll also indicates a blending of functionalities from different companies.",
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
                        "reasoning": "The pitch deck provides a comprehensive overview of the startup's market, challenges, and solutions, relying on secondary data such as market size, employee churn statistics, and industry trends, without presenting primary data from interviews or surveys.",
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
                        "reasoning": "The pitch deck mentions a US$15Bn market size and states that Worky can cater to ~25M Mexicans and 1.3M SMEs, which implies a potential revenue projection based on a small percentage of the total market.",
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
                        "reasoning": "The pitch does not explicitly mention any pre-money valuation calculations or methodologies such as multiples, discounted cash flow (DCF), or competitor benchmarking.",
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
                        "value": false,
                        "reasoning": "The pitch does not mention any specific amount of money that the company wants to raise.",
                        "source_id": "pitch_deck",
                        "grounding_index": null,
                        "grounding_chunk": null,
                        "pc_metrics": {
                            "awareness": 0,
                            "commitment": 0,
                            "ambition": 0,
                            "execution": -1
                        }
                    },
                    {
                        "id": "content-trump_claim",
                        "extracted_successfully": true,
                        "value": true,
                        "reasoning": "The pitch deck contains several statements that declare the company's offerings as the best or greatest without providing supporting evidence or metrics. For example, phrases like 'We are building the blocks to become the employee go-to platform for benefit management' and 'Our monthly net value retention rate is +100%' are assertions that lack substantiation in the context provided.",
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
                        "reasoning": "The pitch deck contains a competitive analysis table on page 7 that highlights Worky's strengths in various dimensions compared to competitors. It claims to have a fast onboarding speed, good employee experience, and specialized focus in Mexico, which may suggest a selective comparison that portrays Worky as superior across all measured dimensions without acknowledging the strengths of competitors.",
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
                        "reasoning": "The pitch does not explicitly mention any allocation of funds towards marketing or sales activities or hiring. It focuses on product development, market needs, and customer engagement without detailing a plan that includes 'wrong use of funds' as defined.",
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
                        "value": 19,
                        "reasoning": "The pitch deck document contains 19 pages as indicated by the number of distinct page references in the markdown content.",
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
                        "reasoning": "The pitch deck includes a table on page 7 that compares Worky with its competitors in terms of various metrics such as customer headcount, onboarding speed, employee experience, and pricing. This indicates a focus on market competition.",
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
                        "reasoning": "The pitch deck includes multiple slides that highlight the problems associated with manual HR and payroll management in Mexican SMEs, detailing inefficiencies and the financial impact of these issues. Specifically, slides 2 and 3 address the problems directly, making it clear that there is a significant opportunity for improvement in this market.",
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
                        "reasoning": "The pitch deck includes a slide dedicated to the founding team members, detailing their backgrounds, prior experiences, and education.",
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
                        "reasoning": "The pitch deck includes multiple slides that discuss the company's traction, including metrics such as managing 20,000 employees, a monthly net value retention rate of +100%, and a 30% employee rotation reduction within the first 3 months of use. Additionally, it highlights strong customer engagement and retention metrics.",
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
                        "reasoning": "The pitch deck includes a slide on the HR Tech industry receiving strong tailwinds due to HR glorification and payroll regulation changes, indicating timely market trends that make the startup's solution relevant.",
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
                        "index_key": "ceo",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The individual is a Co-Founder and CEO of an HR software company, which indicates a leadership role rather than a software development role. There is no specific mention of software development skills or experience in the profile.",
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
                                "value": false,
                                "reasoning": "The experience section contains only one active role, which is 'Co-Founder and CEO' at Worky.mx, starting from June 2017. The other roles listed have end dates, indicating they are not active.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": -1,
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
                                "value": "CEO",
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
                                "reasoning": "The individual has held roles that involve business development and leadership in a company focused on HR and payroll solutions, which often includes sales responsibilities. Their experience as Head of C2C Core at eBay Classifieds and as LatAm Business Development Lead suggests a strong background in sales and customer engagement.",
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
                    },
                    {
                        "index_key": "coo",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The individual is a Co-Founder and CEO of an HR software company, which indicates a leadership role rather than a software development role. There is no specific mention of software development skills or experience in the provided profile.",
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
                                "value": false,
                                "reasoning": "The experience section contains only one active role, which is 'Co-Founder and CEO' at Worky.mx, starting from June 2017. The other roles listed have end dates, indicating they are not active.",
                                "source_id": "linkedin_profile",
                                "grounding_index": null,
                                "grounding_chunk": null,
                                "pc_metrics": {
                                    "awareness": 0,
                                    "commitment": -1,
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
                                "value": "COO",
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
                                "reasoning": "The individual has held roles that involve business development and leadership in a company focused on HR and Payroll solutions, which often includes sales responsibilities. Their experience as Head of C2C Core at eBay Classifieds and as LatAm Business Development Lead suggests a strong background in sales and customer engagement.",
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
                    },
                    {
                        "index_key": "cto",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": true,
                                "reasoning": "The individual has experience as a Full Stack Developer and has held various technical roles, including Chief Technology Officer and Head of Engineering, which typically require software development skills. Additionally, their education includes software development skills.",
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
                                "reasoning": "As of November 2024, the individual holds two active roles: Chief Technology Officer at Stealth Startup (starting July 2024) and Head of Engineering at Naya Homes (which is active until July 2024). Therefore, they are actively involved in two roles.",
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
                                "value": "CTO",
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
                                "reasoning": "The individual holds the position of Chief Technology Officer and has a background primarily in technology and engineering roles. There is no indication of direct sales responsibilities or roles in their experience.",
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
                        "index_key": "head_of_marketing",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The individual is a Chief Marketing Officer with extensive experience in marketing and product marketing roles. There is no indication of software development skills or experience in the provided profile.",
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
                                "reasoning": "The individual currently holds the role of Chief Marketing Officer at WorkBoard, which started in December 2023. Additionally, they held the position of Vice President & Head of Marketing at WorkBoard Inc. until December 2023, indicating that they had two active roles at the same time.",
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
                                "value": "HEAD OF MARKETING",
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
                                "reasoning": "The individual has extensive experience in sales roles, including as a Sales Engineer and Account Manager, where they achieved significant sales targets and provided sales enablement. Additionally, their current role as Chief Marketing Officer involves leading revenue operations, which is closely tied to sales functions.",
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
                    },
                    {
                        "index_key": "head_of_product",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The individual is primarily focused on product management and has held roles such as Head of Product, VP of Product, and Director of Product. There is no indication of software development experience or skills in the provided profile.",
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
                                "reasoning": "As of November 2024, the individual holds the position of 'Head of Product' at MHC, which started on January 1, 2024. Additionally, they were the 'VP of Product' at Ascend until January 31, 2024. Therefore, they are actively holding two roles during this time.",
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
                                "value": "HEAD OF PRODUCT",
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
                                "reasoning": "The profile primarily focuses on product management roles, including positions such as Head of Product, VP of Product, and Director of Product. While there are mentions of collaborating with marketing and analyzing go-to-market strategies, there is no direct indication of a sales role or responsibilities typically associated with sales positions.",
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
                        "index_key": "head_of_sales",
                        "fields": [
                            {
                                "id": "developer",
                                "extracted_successfully": true,
                                "value": false,
                                "reasoning": "The individual holds a position as President - GTM at Wisq and has extensive experience in sales, operations, and management roles, but there is no indication of software development skills or experience in their profile.",
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
                                "reasoning": "The individual currently holds the position of 'President - GTM' at Wisq, which started in September 2023. Additionally, they have an active role as 'Investor / Advisor / BOD member' at Various, which has been ongoing since October 2016. Therefore, there are two active roles as of November 2024.",
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
                                "reasoning": "The summary field does not contain an expression like 'ex-something'. It states 'GTM executive who loves developing people and teams.' which does not match the specified pattern.",
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
                                "value": "HEAD OF SALES",
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
                                "reasoning": "The individual has extensive experience in sales roles, including positions such as Chief Revenue Officer, EVP Worldwide Sales, and SVP of Worldwide Sales, all of which are directly related to sales management and strategy. Additionally, their current role as President - GTM (Go-To-Market) at Wisq suggests a focus on sales and market strategy.",
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
                "timestamp": "2024-12-18T15:28:28.972248+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "pitch_deck"
                }
            },
            {
                "operation": "extract_index",
                "error_message": null,
                "timestamp": "2024-12-18T15:28:32.888678+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "index_id": "team_members"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:28:37.710464+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:28:42.692038+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:28:48.030057+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:28:53.703308+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:28:59.963846+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:05.225793+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:09.520243+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-financial_projections"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:15.457362+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-frankenstein_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:16.713980+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-mckynsey_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:17.565541+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-multiple_exit_scenarios"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:19.659200+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-onepercent_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:20.742268+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-pre_money_calculation"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:21.641513+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-required_funds"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:23.093719+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-trump_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:24.571817+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-vanity_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:25.750348+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-wrong_use_of_funds"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:28.620677+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "meta-n_slides"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:29.764049+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-awards"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:30.855936+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-competition"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:33.253673+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-problem_opportunity"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:34.533005+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-team"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:36.304978+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-traction"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:38.312800+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-why_now"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:38.964011+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:39.559811+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:40.179289+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:40.752363+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:41.555263+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:42.172769+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:43.408212+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:44.539842+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:46.049964+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:47.748410+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:50.194644+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:51.545261+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:52.762983+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:54.000456+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:55.294033+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:56.460771+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:57.533326+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:58.590901+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:29:59.964398+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:01.455058+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:02.681650+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:04.500672+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:06.060518+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:07.660220+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:08.974185+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:09.790094+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:10.559154+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:11.498918+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:12.472465+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T15:30:13.434120+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "linkedin_ex_claim"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.301343+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "pitch_deck"
                }
            },
            {
                "operation": "extract_index",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.357549+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "index_id": "team_members"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.433530+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.460153+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.490046+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.515946+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.540379+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "transcribe_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.567528+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "source_id": "linkedin_profile"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.647452+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-financial_projections"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.682936+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-frankenstein_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.717108+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-mckynsey_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.750107+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-multiple_exit_scenarios"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.782984+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-onepercent_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.815853+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-pre_money_calculation"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.849446+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-required_funds"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.885933+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-trump_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.919478+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-vanity_claim"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.951458+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "content-wrong_use_of_funds"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:36.982750+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "meta-n_slides"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.016249+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-awards"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.054588+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-competition"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.096058+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-problem_opportunity"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.136096+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-team"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.174308+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-traction"
                }
            },
            {
                "operation": "extract_flat",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.214451+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "slide-why_now"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.273059+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "role"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.331318+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "full_time"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.370175+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "developer"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.410755+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
                    "field_id": "sales_guy"
                }
            },
            {
                "operation": "extract_iterable",
                "error_message": null,
                "timestamp": "2024-12-18T20:02:37.452160+00:00",
                "params": {
                    "base_path": "./data/InvestorBro",
                    "gate_id": "pc_pre-screening",
                    "batch_id": "pc_demo",
                    "candidate_id": "worky",
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
