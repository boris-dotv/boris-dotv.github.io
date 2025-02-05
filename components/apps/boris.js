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
            "education": <Education />,
            "skills": <Skills />,
            "projects": <Projects />
            // "resume": <Resume />,
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
                <div id="education" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="boris' education" src="./themes/Yaru/status/education.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Researchs</span>
                </div>
                <div id="skills" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="boris' skills" src="./themes/Yaru/status/skills.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
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
            <div className="w-28 md:w-30 my-20 bg-black rounded-full">
                <img className="w-full" src="./images/logos/alexander-modified.png" alt="Boris Jobs Logo" />
            </div>
            <div className=" mt-2 md:mt-8 text-lg md:text-2xl text-center px-1">
                <div>My name is <span className="font-bold">Zhe CHEN (Boris)</span> ,</div>
                <div>HKU Music Society Social and Welfare Secretary (2024-2025)</div>
                <div className="font-normal ml-1"><span className="text-pink-600 font-bold">AI Developer from the Hubble Deep Field.</span></div>
            </div>
            <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
                <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
            </div>
            <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
                <li className=" list-time"> My Github Profile: <span className="text-pink-600 font-bold"><a href="https://github.com/boris-dotv/" target="_blank" rel="noreferrer"> https://github.com/boris-dotv/</a></span>.</li>
                <li className=" mt-3 list-building">Long Term Goal ✨ (1) Personalized 'J.A.R.V.I.S.' (called ".v"), (2) Multi-Agent Society. </li>
                <li className=" mt-3 list-star">I'm interested in 0. Safety Alignment of MLLMs/LLMs; 1. Multi-agent Systems.</li>
            </ul>
        </>
    )
}
function Education() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Researchs
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">

                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        EPE-P: Evidence-based Parameter-efficient Prompting for Multimodal Learning with Missing Modalities
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">IEEE International Conference on Acoustics, Speech, and Signal Processing 2025</div>
                    <div className=" text-sm md:text-base">Zhe Chen, Xun Lin, Yawen Cui, Zitong Yu</div>
                    <div className=" text-sm md:text-base"><span className="text-pink-600 font-bold">Research Area: Robustness of Multimodal LLMs</span></div>
                    <div className=" text-sm md:text-base">Description: We introduce Evidence-based Parameter-efficient Prompting (EPE-P), a novel approach to address the complexities of multimodal learning when modalities are missing. Traditional methods suffer from parameter redundancy and suboptimal performance due to the need for extensive prompt designs for each missing modality scenario. EPE-P tackles this by employing a single comprehensive prompt matrix alongside modality-specific weight matrices, reducing the number of parameters while enhancing model efficiency. Our method utilizes a new Block-wise Kronecker-like Multiplication (BK-M) for prompt generation and introduces an Evidence-based Loss function grounded in Evidential Deep Learning to manage uncertainty in missing modality scenarios. Evaluations on MM-IMDb and Hateful Memes datasets demonstrate that EPE-P not only achieves superior performance in terms of F1-Macro and AUROC metrics but also significantly reduces the parameter count compared to existing techniques. This work promises to advance multimodal learning by offering a more streamlined, effective, and uncertainty-aware approach to handling incomplete data.</div>
                </li>
                <li className="list-disc mt-5">
                    <div className=" text-lg md:text-xl text-left font-bold leading-tight">
                        PFSCT: A penalty function semi-continuous thresholding methods for constraints of hashing problems
                    </div>
                    <div className=" text-sm text-gray-400 mt-0.5">Journal of Visual Communication and Image Representation 2022</div>
                    <div className=" text-sm md:text-base">Qian Chen, Zhengwei Shen, Zhe Chen</div>
                    <div className=" text-sm md:text-base"><span className="text-pink-600 font-bold">Research Area: Representation Learning, Optimization Algorithms</span></div>
                    <div className=" text-sm md:text-base">Description: We introduce a novel approach to hash coding for large-scale image retrieval, addressing the challenges of discrete binary, uncorrelated, and balanced constraints. We propose the Penalty Function Semi-Continuous Thresholding (PFSCT) method, which combines a penalty function for handling orthogonality constraints with a semi-continuous thresholding technique to minimize quantization errors. The method is theoretically analyzed for equivalence to the original non-relaxed problem and demonstrated through extensive experiments on benchmark datasets like Cifar10, NUS-WIDE, and SUN397. Results show that PFSCT significantly improves retrieval accuracy and computational efficiency compared to existing methods, offering a robust solution for hash coding in high-dimensional data scenarios.</div>
                </li>
            </ul>
        </>
    )
}

function Skills() {
    return (
        <>
            <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Technical Skills
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <div>Here are my frequently used tools (To be updated).</div>
                </li>
            </ul>
            <div className="w-full md:w-10/12 flex mt-4">
                {/* <div className=" text-sm text-center md:text-base w-1/2 font-bold">Languages & Tools</div>
                <div className=" text-sm text-center md:text-base w-1/2 font-bold">Frameworks & Libraries</div> */}
                <div className=" text-sm text-center md:text-base w-full font-bold">Frameworks & Languages</div>
            </div>
            <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
                {/* <div className="px-2 w-1/2"> */}
                <div className="flex flex-wrap justify-center items-start w-full mt-2">
                    <img className="m-1" src="http://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff" alt="boris python" />
                    <img src="https://img.shields.io/badge/pytorch-%23EE4C2C?style=flat&logo=pytorch&logoColor=white" alt="boris pytorch" className="m-1"/>
                    <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat&logo=git&logoColor=%23ffffff" alt="boris git" className="m-1" />
                    <img src="https://img.shields.io/badge/mysql-%234479A1?style=flat&logo=mysql&logoColor=%234479A1&labelColor=white" alt="boris mysql" className="m-1" />
                    <img className="m-1" src="https://img.shields.io/badge/ubuntu-%23E95420?style=flat&logo=ubuntu&logoColor=white" alt="boris ubuntu" />
                    <img className="m-1" src="https://img.shields.io/badge/javascript-%23F7DF1E?style=flat&logo=javascript&logoColor=%23F7DF1E&labelColor=white" alt="boris javascript" />
                    <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=flat&logo=c%2B%2B&logoColor=white" alt="boris c++" />
                    <a href="https://www.google.com/search?q=is+html+a+language%3F" target="_blank" rel="noreferrer"><img title="yes it's a language!" className="m-1" src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat&logo=html5&logoColor=ffffff" alt="boris HTML" /></a>

                    <img className="m-1" src="https://img.shields.io/badge/c-%23A8B9CC?style=flat&logo=c&logoColor=white" alt="boris c" />

                    <img className=" m-1" src="https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=ffffff" alt="boris react" />
                    <img className=" m-1" src="https://img.shields.io/badge/jetbrains-%23000000?style=flat&logo=jetbrains&logoColor=white" alt="boris jetbrains" />
                    <img className=" m-1" src="https://img.shields.io/badge/numpy-%23013243?style=flat&logo=numpy&logoColor=white" alt="boris numpy" />


                    

                </div>
                {/* </div> */}
            </div>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> And of course,</span> <img className=" inline ml-1" src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff" alt="boris linux" /> <span>!</span>
                </li>
            </ul>
            <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
                <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
                    <span> Also I am skilled in,</span> <img className=" inline m-1" src="https://img.shields.io/badge/adobepremierepro-%239999FF?style=flat&logo=adobepremierepro&logoColor=white" alt="boris adobepremierepro" /> <span>!</span>
                </li>
            </ul>
        </>
    )
}

function Projects() {
    const project_list = [
        {
            name: "Pendulum-Period-Discussion",
            date: "2023",
            link: "https://github.com/Boris-Jobs/Pendulum-Period-Discussion",
            description: [
                "It was a question that I had wanted to study since high school, and it was only after graduation from university that I had time to complete the research on this topic of Pendulum Period.",
            ],
            domains: ["Elliptic Integration", "Physics"]
        },
        {
            name: "EPE-P_MLLMs-Robustness",
            date: "2024",
            link: "https://github.com/Boris-Jobs/EPE-P_MLLMs-Robustness",
            description: [
                "Source code of EPE-P.",
            ],
            domains: ["Pytorch", "transformers"]
        }
    ];

    const tag_colors = {
        "javascript": "yellow-300",
        "firebase": "red-600",
        "firestore": "red-500",
        "firebase auth": "red-400",
        "chrome-extension": "yellow-400",
        "flutter": "blue-400",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "sass": "pink-400",
        "tensorflow": "yellow-600",
        "django": "green-600",
        "python": "green-200",
        "codeforces-api": "gray-300",
        "tailwindcss": "blue-300",
        "next.js": "purple-600"
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
                                        <iframe src={`https://ghbtns.com/github-btn.html?user=Boris-Jobs&repo=${projectName}&type=star&count=true`} frameBorder="0" scrolling="0" width="150" height="20" title={project.name.toLowerCase()+"-star"}></iframe>
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