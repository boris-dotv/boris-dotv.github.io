import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class AboutBoris extends Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => { },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "projects": <Projects />
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.send({ hitType: "pageview", page: `/${screen}`, title: "Custom Title" });


        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    }

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about boris" src="./themes/Yaru/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="boris' projects" src="./themes/Yaru/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                {/* <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="boris's resume" src="./themes/Yaru/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div> */}
                {/* <div className='my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex' >
                    <iframe src="https://github.com/sponsors/boris-jobs/button" title="Sponsor boris" width={"100%"} height={"100%"} ></iframe>
                </div> */}
            </>
        );
    }

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div onClick={this.showNavBar} className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1">
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className=" w-3.5 border-t border-white" style={{ marginTop: "2pt", marginBottom: "2pt" }}></div>
                    <div className=" w-3.5 border-t border-white"></div>
                    <div className={(this.state.navbar ? " visible animateShow z-30 " : " invisible ") + " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"}>
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutBoris;

export const displayAboutBoris = () => {
    return <AboutBoris />;
}


function About() {
    return (
        <>
            {/* <div className="w-30 md:w-40 my-6 mt-30 bg-white border-4 border-white rounded-full overflow-hidden mb-8 md:mb-12">
                <img className="w-full h-full object-cover" src="./images/logos/alexander.jpg" alt="Boris Jobs Logo" />
            </div> */}
            <div className="w-36 md:w-44 my-16 bg-black rounded-full overflow-hidden shadow-lg ring-2 ring-gray-600 ring-opacity-50">
                <img className="w-full" src="./images/logos/alexander-modified.png" alt="Boris Jobs Logo" />
            </div>
            <div className=" mt-2 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Boris .v</span></div>
                <div className="font-normal ml-1"><span className="text-pink-600 font-bold">AI Developer from the Hubble Deep Field.</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-time"> My Github Profile: <span className="text-pink-600 font-bold"><a href="https://github.com/boris-dotv/" target="_blank" rel="noreferrer"> https://github.com/boris-dotv/</a></span>.</li>
                <li className=" mt-3 list-building">Long Term Goal ✨ Personalized 'J.A.R.V.I.S.' (called ".v")</li>
                <li className=" mt-3 list-star">I'm interested in 0. Alignment of LLMs; 1. Multi-agent Systems.</li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "llm.v",
            date: "2026",
            link: "https://github.com/boris-dotv/llm.v",
            description: [
                "Training a ~4B SALA hybrid model (Sparse + Linear Attention) for math and code reasoning, based on Karpathy's nanochat. Targets 128K context on 8xH100 with two-stage code CPT pipeline.",
            ],
            domains: ["LLM Training", "SALA", "PyTorch"]
        },
        {
            name: "fintalk.v",
            date: "2025-2026",
            link: "https://github.com/boris-dotv/fintalk.v",
            description: [
                "Agent-ready financial data analysis system. NL2SQL with GRPO-trained models, dual-agent orchestration, MCP Server — 999 companies, one command. Adopted by PolyU research center.",
            ],
            domains: ["Multi-Agent", "NL2SQL", "MCP"]
        },
        {
            name: "hku.rag.v",
            date: "2025",
            link: "https://github.com/boris-dotv/hku.rag.v",
            description: [
                "Agentic RAG with ReAct Loop, query rewriting, query decomposition, and multi-stage reasoning. Hybrid retrieval (BM25 + Dense + Reranker) with submodular diversity optimization.",
            ],
            domains: ["RAG", "ReAct Agent", "NLP"]
        },
        {
            name: "soar",
            date: "2026",
            link: "https://github.com/oldMoneyy/soar",
            description: [
                "Interactive HTML visualizations for SALA architecture, single-layer transformer forward pass, FlashInfer kernels, and KV cache computation analysis.",
            ],
            domains: ["Visualization", "Transformer"]
        },
        {
            name: "Pendulum_Period_Analysis.v",
            date: "2023",
            link: "https://github.com/boris-dotv/Pendulum_Period_Analysis.v",
            description: [
                "A rigorous analysis of simple pendulum period using elliptic integrals — a question I wanted to study since high school.",
            ],
            domains: ["Elliptic Integrals", "Physics"]
        },
    ];

    const tag_colors = {
        "LLM Training": "yellow-300",
        "SALA": "red-400",
        "PyTorch": "orange-500",
        "Multi-Agent": "purple-500",
        "NL2SQL": "green-400",
        "MCP": "blue-400",
        "RAG": "blue-300",
        "ReAct Agent": "pink-500",
        "NLP": "green-200",
        "Visualization": "yellow-400",
        "Transformer": "red-500",
        "Elliptic Integrals": "gray-300",
        "Physics": "blue-500",
    }

    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    const projectNameFromLink = project.link.split('/')
                    const projectName = projectNameFromLink[projectNameFromLink.length - 1]
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className='flex justify-center items-center'>
                                        <div className=" text-base md:text-lg mr-2">{project.name.toLowerCase()}</div>
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=boris-dotv&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
                                    </div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                const borderColorClass = `border-${tag_colors[domain]}`
                                                const textColorClass = `text-${tag_colors[domain]}`

                                                return <span key={index} className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
// function Resume() {
//     return (
//         <iframe className="h-full w-full" src="./files/Zhe_CHEN.pdf" title="boris jobs resume" frameBorder="0"></iframe>
//     )
// }