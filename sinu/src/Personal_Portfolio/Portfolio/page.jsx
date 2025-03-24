import React from "react";
import style from "./style.module.css"
import Lottie from "lottie-react";
import Developer from '../../assets/Developer.json'
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
import imge from "../../assets/22P31A0504.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import { LuPhone } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GiAchievement } from "react-icons/gi";
import { Data } from "./projectsdata";
import { Certificate } from "./certificates";

import resume from "../MyResume/Ankit_Roy_Chowdhury (3).pdf"
const Portfolio = () => {

    return(
        <>
            <header>
                <nav>
                    <div className={style.left}>Ankit's PortFolio</div>
                    <div className={style.right}>
                        <ul>
                            <Link to="Home" duration={500} smooth={true} offset={-200}><li>Home</li></Link>
                            <Link to="About" duration={500} smooth={true} offset={-80}><li>About</li></Link>
                            <Link to="Skills" offset={-100} duration={500} smooth={true}><li>Skills</li></Link>
                            <Link to="Certificates" offset={-100} duration={500} smooth={true}><li>Certificates</li></Link>
                            <Link to="Projects" offset={-100} duration={500} smooth={true}><li>Projects</li></Link>
                            <Link to="Contact Me" offset={-100} duration={500} smooth={true}><li>Contact Me</li></Link>
                        </ul>
                    </div>
                </nav>
            </header>

            <main id="Home">
                <section className={style.firstsection}>
                    <div className={style.leftsection}>
                        Hi, My name is <span className={style.purple}> Ankit</span>
                        <div>and I am a passionate</div>
                        <div>
                            <ReactTyped
                                strings={[
                                    "Full Stack Developer",
                                    "React Developer",
                                    "MERN Stack Developer",
                                ]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                                style={{ color: "aqua" }}
                            />
                        </div>

                    </div>
                    <div className={style.rightsection}>
                        <Lottie animationData={Developer} className={style.lottie} />
                    </div>
                </section>
                <hr style={{ borderColor: 'aqua' }} />
                <section id="About" style={{ width: '100%', height: '120svh', position: 'relative' }}>
                    <div className={style.about}>
                        <h1>About</h1>
                    </div>
                    <div style={{ width: '50px', height: '5px', backgroundColor: 'aqua', position: 'absolute', left: '48.5%', top: '10%', borderRadius: '50px' }}></div>
                    <div className={style.container}>
                        <div className={style.left}>
                            <div className={style.image}>
                                <img src={imge} alt="not_found" />
                            </div>
                            <div className={style.name}>
                                <p>Ankit Roy Chowdhury</p>
                            </div>
                            <div className={style.role}>
                                <p>Full Stack Developer</p>
                            </div>
                            <div className={style.description}>
                                <p>
                                    I'm a passionate Full Stack Developer experienced in building web applications. I specialize in React, Node.js, and modern web technologies. I love creating elegant solutions to complex problems and am constantly learning new technologies to stay &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at the forefront of web development.
                                </p>
                            </div>
                            <div className={style.social}>
                                <a href="https://www.linkedin.com/in/ankit-roy-chowdhury/" target="_blank" rel="noreferrer">
                                    <FaLinkedinIn />
                                </a>
                                <a href="https://github.com/ANKITROYCHOWDHURY54" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>
                                <a href="mailto:ankitroychowdhury885@gmail.com" target="_blank" rel="noreferrer">
                                    <IoMdMail />
                                </a>
                            </div>
                            <div className={style.resume}>
                                <a href={resume} download="Resume">
                                    <button>Download my CV <GoDownload /></button>
                                </a>
                            </div>
                        </div>
                        <div className={style.right}>
                            <div className={style.heading}>
                                <p>My Expertise</p>
                            </div>
                            <div style={{ width: '30%', height: '2px', backgroundColor: 'white' }}></div>
                            <div className={style.description}>
                                <p>
                                    I specialize in building scalable web applications using modern technologies. My expertise includes front-end development with React, back-end development with Node.js, and database management with MongoDB.
                                </p>
                            </div>
                            <div className={style.skill}>
                                <p>What I Offer</p>
                            </div>
                            <div style={{ width: '30%', height: '2px', backgroundColor: 'white' }}></div>
                            <div className={style.skillset}>
                                <ul>
                                    <li>Full Stack Web Development</li>
                                    <li>Responsive Design</li>
                                    <li>API Development</li>
                                    <li>Database Design</li>
                                    <li>Performance Optimization</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <hr style={{ borderColor: 'aqua', borderWidth: '2px' }} />
                <section id="Skills" style={{ width: '100%', height: '100svh', backgroundColor: 'white', position: 'relative' }}>
                    <div className={style.Skills}>
                        <h1>Skills</h1>
                    </div>
                    <div style={{ width: '50px', height: '5px', backgroundColor: 'aqua', position: 'absolute', left: '48.5%', top: '12%', borderRadius: '50px' }}></div>
                    <div className={style.skillsection}>
                        <div className={style.skill1}>
                            <div className={style.skillname}>
                                <p>React</p>
                                <p>90%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '90%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                        <div className={style.skill2}>
                            <div className={style.skillname}>
                                <p>NodeJs</p>
                                <p>85%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '85%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                        <div className={style.skill3}>
                            <div className={style.skillname}>
                                <p>JavaScript</p>
                                <p>80%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '80%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                        <div className={style.skill4}>
                            <div className={style.skillname}>
                                <p>Python</p>
                                <p>75%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '75%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                        <div className={style.skill5}>
                            <div className={style.skillname}>
                                <p>Git</p>
                                <p>75%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '75%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                        <div className={style.skill6}>
                            <div className={style.skillname}>
                                <p>C++</p>
                                <p>70%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '70%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                        <div className={style.skill7}>
                            <div className={style.skillname}>
                                <p>SQL</p>
                                <p>70%</p>
                            </div>
                            <div style={{ width: '80%', height: '3svh', backgroundColor: 'white', borderRadius: '10px', marginLeft: '120px', marginTop: '10px' }}>
                                <div style={{ width: '70%', height: '3svh', backgroundColor: 'blue', borderRadius: '10px' }}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="Certificates" style={{ width: '100%', height: '120svh', position: 'relative' }}>
                    <div className={style.certificates}>
                        <h1>Certificates</h1>
                    </div>
                    <div style={{ width: '90px', height: '5px', backgroundColor: 'aqua', position: 'absolute', left: '47%', top: '10%', borderRadius: '50px' }}></div>
                    <div className={style.certificatecontainer}>
                        {
                            Certificate.map((item) => {
                                return (
                                    <div className={style.certified}>
                                        <div className={style.badge}>
                                            <GiAchievement style={{ fontSize: '50px', color: 'blue' }} />
                                        </div>
                                        <div className={style.certificatedetails}>
                                            <div className={style.certificatename}>
                                                <p>{item.name}</p>
                                            </div>
                                            <div className={style.companyname}>
                                                <p>{item.platform}</p>
                                            </div>
                                            <div className={style.dateandview}>
                                                <div style={{ marginLeft: 10, marginTop: 20, fontSize: '14px' }}>Issued: {item.date}</div>
                                                                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </section>
                <hr style={{ borderColor: 'aqua', borderWidth: '2px' }} />
                <section className={style.projectsection} id="Projects">
                    <div className={style.project}>
                        <h1>Projects</h1>
                    </div>
                    <div style={{ width: '78px', height: '5px', backgroundColor: 'aqua', position: 'absolute', left: '47%', top: '16%', borderRadius: '50px' }}></div>
                    <div className={style.projectcontainer}>
                        {
                            Data.map((item) => {
                                return (
                                    <>
                                        <div className={style.projects}>
                                            <div className={style.images}>
                                                <Lottie animationData={item.image} style={{ width: '100%', height: '100%' }} />

                                            </div>
                                            <div className={style.names}>{item.name}</div>
                                            <div className={style.descriptions}>{item.description}</div>
                                            <div className={style.links}>
                                                <div className={style.github}>
                                                    <a href={item.link} target="_blanck">View Project Code</a>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </section>
                <section id="Contact Me" style={{ width: '100%', height: '100svh', backgroundColor: 'white', position: 'relative' }}>
                    <div className={style.contact}>
                        <h1>Contact Me</h1>
                    </div>
                    <div style={{ width: '78px', height: '5px', backgroundColor: 'aqua', position: 'absolute', left: '47%', top: '14%', borderRadius: '50px' }}></div>
                    <div className={style.contactcontainer}>
                        <div className={style.left}>
                            <div className={style.name}>
                                <h3>Get In Touch</h3>
                            </div>
                            <div className={style.form}>
                                <div className={style.email}>
                                    <div style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <IoMdMail style={{ fontSize: '30px', color: 'aqua' }} />
                                    </div>
                                    <div style={{ width: '80%', height: '100%' }} id={style.emailname}>
                                        <p>ankitroychowdhury885@gmail.com</p>
                                    </div>
                                </div>
                                <div className={style.email}>
                                    <div style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <LuPhone style={{ fontSize: '30px', color: 'aqua' }} />
                                    </div>
                                    <div style={{ width: '80%', height: '100%' }} id={style.emailname}>
                                        <p>+91 829-303-9710</p>
                                    </div>
                                </div>
                                <div className={style.email}>
                                    <div style={{ width: '20%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <CiLocationOn style={{ fontSize: '30px', color: 'aqua' }} />
                                    </div>
                                    <div style={{ width: '80%', height: '100%' }} id={style.emailname}>
                                        <p>West Bengal, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={style.right}>
                            <form style={{ paddingTop: '60px' }}>
                                <label style={{ fontSize: '16px', marginLeft: '85px' }}>Name</label>
                                <br />
                                <input type="text" style={{ marginLeft: '80px', width: '60%', height: '6svh', borderRadius: '10px', marginTop: '10px' }} />
                                <br />
                                <br />
                                <label style={{ fontSize: '16px', marginLeft: '85px' }}>Email</label>
                                <br />
                                <input type="text" style={{ marginLeft: '80px', width: '60%', height: '6svh', borderRadius: '10px', marginTop: '10px' }} />
                                <br />
                                <br />
                                <label style={{ fontSize: '16px', marginLeft: '85px' }}>Message</label>
                                <br />
                                <textarea style={{ marginLeft: '85px', width: '60%', height: '25svh', borderRadius: '10px', marginTop: '10px' }}></textarea>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: '40%', backgroundColor: "blue", height: '5svh', marginTop: '10px', marginLeft: '150px', borderRadius: '10px' }}>
                                    <p>Send Message</p>
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Portfolio;