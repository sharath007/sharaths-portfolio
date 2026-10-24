import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { title: "Languages", items: ["C / C++", "Python", "SQL", "JavaScript"] },
  { title: "AI & ML", items: ["TensorFlow", "Keras", "scikit-learn", "CNN", "ELM"] },
  { title: "Web & Frameworks", items: ["HTML", "CSS", "React.js", "Node.js", "Flask", "Django"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Jupyter", "Google Colab"] },
  { title: "Growing Skills", items: ["AWS Cloud", "Linux", "ETL", "Data Warehousing", "DevOps"] },
];

const projects = [
  {
    number: "01",
    category: "MACHINE LEARNING",
    title: "Soil Classification Using ML",
    subtitle: "Micronutrient classification with ELM",
    description:
      "A machine-learning approach to soil analysis and micronutrient classification, exploring soil indicators such as N, P, K, zinc, iron, pH and organic carbon.",
    stack: ["Python", "ELM", "scikit-learn", "Data Analysis"],
    icon: <Layers3 size={22} />,
    result: "Soil classification",
    note: "Use your project report to verify metrics before publishing.",
  },
  {
    number: "02",
    category: "DEEP LEARNING",
    title: "Alzheimer’s Disease Detection",
    subtitle: "CNN-based image classification",
    description:
      "A deep-learning project exploring convolutional neural networks to classify brain images for an Alzheimer’s disease prediction workflow.",
    stack: ["Python", "TensorFlow", "Keras", "CNN"],
    icon: <BrainCircuit size={22} />,
    result: "Focus: image classification",
    note: "Research prototype only — not a clinical diagnostic tool.",
  },
  {
    number: "03",
    category: "MACHINE LEARNING",
    title: "FraudShield",
    subtitle: "Machine-learning fraud detection",
    description:
      "A fraud detection project using multiple classification approaches to explore patterns in transaction data and support risk identification.",
    stack: ["Python", "Logistic Regression", "SVM", "K-Means"],
    icon: <Code2 size={22} />,
    result: "Focus: comparing ML approaches",
    note: "Add your dataset, evaluation metrics and repository link.",
  },
];

const certifications = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    category: "PROGRAMMING",
    description: "Python programming fundamentals and core concepts.",
    link: "/certificates/python-essentials-1.pdf",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    category: "PROGRAMMING",
    description: "Intermediate Python programming concepts.",
    link: "/certificates/python-essentials-2.pdf",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Certifications", "#certifications"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">S</span>
          <span>
            SHARATH<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {navLinks.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> CODE. INNOVATE. AUTOMATE. REPEAT.
            </div>
            <p className="hero-pretitle">Hello, I’m</p>
            <h1>
              K Sharath
              <br />
              <span className="gradient-text">Naik.</span>
            </h1>
            <h2>
              Building with code. <span>Thinking in systems.</span>
            </h2>
            <p className="hero-description">
              AI &amp; ML graduate selected as a Programmer Analyst at Cognizant,
              with hands-on project experience in Python, machine learning, and
              deep learning, and a growing focus on cloud and data engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={14} /> Hyderabad, India
              </span>
              <span className="meta-separator" />
              <span>Programmer Analyst — Cognizant</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="portrait-frame">
              <div className="portrait-placeholder">
                <img
                  src="/Profile_pic.jpeg"
                  alt="Sharath Naik"
                  className="profile-photo"
                />
              </div>
              <div className="portrait-tag">
                <Sparkles size={14} /> Curious by design
              </div>
            </div>
            <div className="floating-card float-code">
              <Terminal size={17} />
              <div>
                <strong>Code</strong>
                <span>Build · Test · Improve</span>
              </div>
            </div>
            <div className="floating-card float-cloud">
              <Cloud size={18} />
              <div>
                <strong>Next horizon</strong>
                <span>Cloud &amp; DevOps</span>
              </div>
            </div>
            <div className="hero-index">
              01 <span>/ 06</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">
            <span>01</span> / A LITTLE ABOUT ME
          </div>
          <div className="about-grid">
            <div>
              <h2 className="section-heading">
                Intelligence meets innovations.
                <br />
                <span className="muted-heading">Ideas become solutions.</span>
              </h2>
            </div>
            <div className="about-copy">
              <p>
                I’m an Artificial Intelligence and Machine Learning graduate at{" "}
                <strong>CMR College of Engineering and Technology, Hyderabad</strong>,
                interested in building useful software and understanding how
                systems work end to end.
              </p>
              <p>
                My projects have given me hands-on experience with machine
                learning, deep learning, and Python. I’m also preparing for my
                professional journey as a <strong>Programmer Analyst at Cognizant</strong>,
                while growing my skills in SQL, data engineering, AWS, Linux,
                and DevOps.
              </p>
              <p>
                I enjoy learning by doing: breaking a problem down, testing an
                idea, and turning what works into something useful.
              </p>
              <a className="text-link" href="#contact">
                Let’s connect <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="stats-row">
            <div className="stat">
              <strong>03</strong>
              <span>Featured projects</span>
            </div>
            <div className="stat">
              <strong>AI +</strong>
              <span>Software mindset</span>
            </div>
            <div className="stat">
              <strong>∞</strong>
              <span>Things to learn</span>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-kicker">
            <span>02</span> / MY TOOLKIT
          </div>
          <div className="section-title-row">
            <h2 className="section-heading">
              Tools I use.
              <br />
              <span className="muted-heading">Skills I’m growing.</span>
            </h2>
            <p className="section-intro">
              A practical toolkit shaped by coursework, projects, and a steady
              learning habit.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((group, i) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top">
                  <span className="skill-number">0{i + 1}</span>
                  {i === 0 ? (
                    <Code2 />
                  ) : i === 1 ? (
                    <BrainCircuit />
                  ) : i === 2 ? (
                    <Layers3 />
                  ) : i === 3 ? (
                    <Terminal />
                  ) : (
                    <Cloud />
                  )}
                </div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="small-note">
            Skill levels vary by technology; “Growing Skills” are active
            learning areas, not claims of professional mastery.
          </p>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-kicker">
            <span>03</span> / SELECTED WORK
          </div>
          <div className="section-title-row">
            <h2 className="section-heading">
              Ideas turned
              <br />
              <span className="muted-heading">into projects.</span>
            </h2>
            <p className="section-intro">
              A few projects where I explored data, models, and practical
              problem-solving.
            </p>
          </div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">{project.category}</span>
                  <span className="project-icon">{project.icon}</span>
                </div>
                <div className="project-content">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="project-bottom">
                  <div className="project-stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-result">{project.result}</div>
                </div>
                <p className="project-note">{project.note}</p>
              </article>
            ))}
          </div>
          <div className="project-footnote">
            <span className="tiny-star">✳</span> Want to see the code? Add your
            public GitHub repository links to each project before publishing.
          </div>
        </section>

        <section
          className="section-wrap certifications-section"
          id="certifications"
        >
          <div className="section-kicker">
            <span>04</span> / CERTIFICATIONS
          </div>
          <div className="section-title-row">
            <h2 className="section-heading">
              Knowledge earned.
              <br />
              <span className="muted-heading">Skills validated.</span>
            </h2>
            <p className="section-intro">
              Certifications and learning milestones that reflect my commitment
              to continuous learning and development.
            </p>
          </div>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <article className="certification-card" key={cert.title}>
                <div className="certification-top">
                  <span className="certification-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="certification-category">
                    {cert.category}
                  </span>
                </div>
                <h3>{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-description">
                  {cert.description}
                </p>
                <a
                  className="text-link"
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <ArrowUpRight size={16} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap journey-section" id="journey">
          <div className="section-kicker">
            <span>05</span> / THE JOURNEY
          </div>
          <h2 className="section-heading">
            Learning today.
            <br />
            <span className="muted-heading">Building for tomorrow.</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot active" />
              <div className="timeline-date">ACADEMICS</div>
              <div>
                <h3>B.Tech — Artificial Intelligence &amp; Machine Learning</h3>
                <p>CMR College of Engineering and Technology · Hyderabad</p>
                <h3>Intermediate — MPC</h3>
                <p>Sri Chaitanya Panineeya M V Junior College · Hyderabad</p>
                <h3>SSC</h3>
                <p>Brilliant Grammar High School · Hyderabad</p>
              </div>
              <span className="timeline-status">FOUNDATION</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot active" />
              <div className="timeline-date">CAREER</div>
              <div>
                <h3>Selected for Cognizant GenC Next</h3>
                <p>Programmer Analyst — Python track.</p>
              </div>
              <span className="timeline-status">NEXT CHAPTER</span>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div className="timeline-date">IN PROGRESS</div>
              <div>
                <h3>Expanding into cloud &amp; data engineering</h3>
                <p>
                  Building foundations in AWS, Linux, ETL, data warehousing,
                  and DevOps practices.
                </p>
              </div>
              <span className="timeline-status">LEARNING</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div className="section-kicker">
              <span>06</span> / YOUR TURN
            </div>
            <p className="contact-overline">Have a project, idea, or opportunity?</p>
            <h2>
              Let’s make
              <br />
              <span className="gradient-text">something matter.</span>
            </h2>
            <p className="contact-description">
              I’m always happy to connect with people who build, share
              knowledge, and enjoy solving problems.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:ksharathnayak123@gmail.com">
                <Mail size={17} /> Email me <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-outline"
                href="https://github.com/sharath007"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
              <a
                className="button button-outline"
                href="https://www.linkedin.com/in/kethavath-sharath-naik-8047b2321/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
            <div className="contact-hint" />
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">S</span>
          <span>
            SHARATH<span className="brand-dot">.</span>
          </span>
        </a>
        <span>Designed with intent. Built with React.</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
