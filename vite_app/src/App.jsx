import React, { useState, useEffect } from 'react';
import {
  Download, Code2, Palette, Zap, ExternalLink, Github,
  Award, Send, Linkedin, Mail, Phone, Menu, X, Sparkles,
  Rocket, Brain, Target
} from 'lucide-react';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xblgpbjj', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });

      if (response.ok) {
  setSubmitted(true);
  form.reset(); // Clears the input fields

  // Hide the popup after 3 seconds (no reload!)
  setTimeout(() => {
    setSubmitted(false);
  }, 3000);
} else {
        alert('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('❌ An unexpected error occurred.');
    }
  }; // ✅ properly closed this

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => sectionObserver.observe(section));

    return () => {
      observer.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const skillsData = {
    'Creative Coding': [
      { name: 'React Magic', level: 90, icon: '⚛' },
       { name: 'JS Sorcery', level: 80, icon: '✨' },
      { name: 'CSS Wizardry', level: 92, icon: '🎨' },
      { name: 'HTML Sculpting', level: 90, icon: '🟧' }
    ],
    'Backend Alchemy': [
      { name: 'Node.js', level: 87, icon: '🟢' },
      { name: 'Express.js', level: 83, icon: '🐍' },
      { name: 'Database Magic', level: 80, icon: '🗄' },
      { name: 'API Crafting', level: 80, icon: '🔗' }
    ],
    'Digital Tools': [
      { name: 'Git Mastery', level: 90, icon: '🌿' },
      { name: 'Cloud Powers', level: 75, icon: '☁' },
      { name: 'Design Tools', level: 82, icon: '🎭' },
      { name: 'Postman', level: 70, icon: '⚙' }
    ]
  };

  const projectsData = [
  {
    title: 'Tattoos_website',
    description: 'Designed and developed a user-friendly platform where tattoo lovers can discover styles, find artists, and learn about tattoo care. Integrated a virtual preview feature to enhance decision-making.',
    tech: ['React', 'Node.js','Express.js', 'MongoDB', ],
    color: 'from-purple-500 to-pink-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753956973/AJfQ9KSbCpbzuSp3I8YDScIp8fR0euLCk4HS7zDa8uQ_smSCOiFiVl8gwSBIYXe1fyppHwrySPZRtBQ8tcAL9mhN80OOclQQ6UKo04cDru0Z0lEXaDTRNopJBEtpt3sBkQ0qaypuJ2erxGa1PgvGd2TRJMOyuV_XIwDn92--z81jmBY8BkmyJQ_lkez0h.png',
    launchLink: 'https://tattoos-dreamers-studio.onrender.com/',
    codeLink: 'https://github.com/kiranchaudhary18/tattoos_website'
  },
  {
    title: 'React API',
    description: 'A React app to search meals, Harry Potter characters, cocktails, and bank info using multiple public APIs — fast and dynamic UI.',
    tech: ['React','Express.js','Rest API' ],
    color: 'from-blue-500 to-cyan-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954845/AJfQ9KR4NI61mWhshnNJXFzO3caqqk2adqqAS92yby4OdTXLFhCxSAQuheOlv4NqOD2wztsWxtDtgTDfa_6Tpal95bCXZakF3A_cBoe8SiZmkYc4gu_lKUhkdUs2T8b9UkpAgQv3yC0GAEddvb87nSwSIqsAw7MwqBYEUjVnZsfL7znTuVUY_1_txupui_moedzc.png',
    launchLink: 'https://react-api-1.onrender.com/',
    codeLink: 'https://github.com/kiranchaudhary18/React-API'
  },
  {
    title: 'Youtube ',
    description: 'A YouTube clone in React with real-time video search and playback using the YouTube API — clean and responsive UI.',
    tech: ['React', 'Express.js', 'REST API'],
    color: 'from-green-500 to-teal-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753941530/Y19wYWQsd18yMDAsaF8zMDA_2_a1bkss.png',
    launchLink: 'https://youtube-com-1.onrender.com/',
    codeLink: 'https://github.com/kiranchaudhary18/youtube.com'
  },
  {
    title: 'Countdown Timer',
    description: 'A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    color: 'from-orange-500 to-red-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753941914/countdown_wap8uk_1_zbyn7w.png',
    launchLink: 'https://cosmic-blog.vercel.app',
    codeLink: 'https://github.com/yourusername/cosmic-blog'
  },
  { title: "Cartoon Network",
    description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
    tech:['HTML','CSS'],
    color: 'from-orange-500 to-red-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954396/cartton_evgbvg_1_i43ioq.png',
    launchLink: 'https://cartoon-website-1.netlify.app/',
    codeLink: 'https://github.com/kiranchaudhary18/cartoon-network'    
    },
    {
      
    title: "Digigold",
    description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
    tech: ['HTML','CSS'],
    color: 'from-orange-500 to-red-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954556/digigold_tijeho_1_um7bq0.png',
    launchLink: 'https://digigold-1.netlify.app/',
    codeLink: 'https://github.com/kiranchaudhary18/digigold'     
       
      },
  {
    title: 'Gmail Clone',
    description: 'A replica of the Gmail interface built using only HTML and CSS, closely matching the original layout and design.',
    tech: ['HTML', 'CSS', 'UI/UX'],
    color: 'from-orange-500 to-red-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753954739/gmail_cijjqo.png',
    launchLink: 'https://magenta-capybara-7afa3a.netlify.app/',
    codeLink: 'https://github.com/kiranchaudhary18/Gmail-Clone'
  },
  {
    title: 'Discord Clone',
    description: 'Discords UI redesigned with HTML and CSS, replicating its look and feel using clean, responsive code.',
    tech: ['HTML', 'CSS', 'UI/UX'],
    color: 'from-orange-500 to-red-500',
    image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753942351/discord_kka5l9_2_vykzpf.png',
    launchLink: 'https://gilded-sfogliatella-7649cf.netlify.app/',
    codeLink: 'https://github.com/kiranchaudhary18/Discord-Clone'
  },
  {
  title: "Codinggita",
  description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
  tech: ["Figma"],
  color: 'from-orange-500 to-red-500',
  image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753956418/codinggita-logo_urbgxt_ocbtxz.png',
  launchLink: 'https://www.figma.com/proto/E6bEiKGItd1H4CJyOPvKkQ/Food?page-id=0%3A1&node-id=37-360&starting-point-node-id=37%3A360&t=UH6IWR19sFSCTdtW-1',      
        
  },
   {
       
  title: "Instagram",
  description: "A sleek and responsive countdown timer that helps users track time for events, deadlines, or special occasions. Designed with precision and a user-friendly interface for an enhanced experience.",
  tech: ["Figma"],
  color: 'from-orange-500 to-red-500',
  image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1753955145/images_q_tbn_ANd9GcS3owPyFPazFIA7KN1uQSOgUZSQz_hnh8fazejWGF9JR41yCICXxr5prkrwdTGB_ytfrwv.png',
  launchLink: 'https://www.figma.com/proto/CsXrFCbuFJ80bmxZaP97ZQ/Untitled?page-id=&node-id=29-160&viewport=296%2C387%2C0.15&t=rczgVxaKEKCzOPAk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A136',          
        
  },
];


   const certificatesData = [
    { 
      title: 'Azura certificate', 
     
      icon: '☁',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224746/certificate_azura_mfkobw.png',
      description: 'Introduced to core Azure services, cloud concepts, and deployment models.',
      link: 'https://simpli-web.app.link/e/PPpepSKuWUb'
    },
    { 
      title: 'GitHub Copilot Fundamental', 
   
      icon: '🧠',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224760/certificate_of_GitHub_Copilot_pjxglv.png',
      description: 'Leveraged GitHub Copilot to auto-generate code snippets, enhance productivity, and understand AI-assisted development.',
      link: 'https://simpli-web.app.link/e/PPpepSKuWUb'
    },
    { 
      title: 'REST API(intermediate)', 
     
      icon: '🔗',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224907/rest_i_gryttf.png',
      description: 'Designed and consumed RESTful APIs with proper routing, status codes, and authentication using tools like Postman and Express.',
      link: 'https://www.hackerrank.com/certificates/336e9e30d1bc'
    },
    { 
      title: 'Javascript(intermediate)', 
      
      icon: '🟨',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752324572/js_min860.png',
      description: 'Built interactive web features using ES6+, asynchronous programming, and modular JavaScript patterns.',
      link: 'https://www.hackerrank.com/certificates/1100a182ae95'
    },
    { 
      title: 'SQL(Advanced)', 
     
      icon: '🗃',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224944/sql_a_cih5pj.png',
      description: 'Optimized database performance, crafted advanced queries, and implemented procedures and triggers for large-scale data systems.',
      link: 'https://www.hackerrank.com/certificates/15a8ed10bbba?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate'
    },
    { 
      title: 'Frontend Developer React', 
      
      icon: '⚛',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224906/react1_s6l27g.png',
      description: 'Developed responsive, dynamic web applications using React, hooks, state management, and modern UI practices.',
      link: 'https://www.hackerrank.com/certificates/6a08e4739a24'
    },
  
    { 
      title: 'SQL(intermediate)', 
     
      icon: '🗄',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224945/sql_i_yb8fht.png',
      description: 'Developed complex queries, joins, subqueries, and performed data analysis using relational databases.',
      link: 'https://www.hackerrank.com/certificates/77bed77fbb66'
    },
    { 
      title: 'React(Basic)', 
     
      icon: '⚛',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224907/react2_ncsqmu.png',
      description: 'Built foundational user interfaces using components, props, and state management in React.',
      link: 'https://www.hackerrank.com/certificates/697233c4b42a'
    },
    { 
      title: 'Problem Solving(intermediate)', 
      icon: '🧠',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224853/problem_xt51ff.png',
      description: 'Developed logical thinking and algorithmic strategies to tackle real-world coding challenges.',
      link: 'https://www.hackerrank.com/certificates/52db091725a0'
    },
    { 
      title: 'Problem Solving(Basic)', 
     
      icon: '🧩',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224853/problem_b_weqdla.png',
      description: 'Built foundational skills in logical reasoning and simple algorithmic thinking.',
      link: 'https://www.hackerrank.com/certificates/51f4bebf1509'
    },
    { 
      title: 'Node.js(intermediate)', 
      
      icon: '🟢',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224826/node_i_xdltyx.png',
      description: 'Developed server-side applications and APIs using Node.js and Express.js.',
      link: 'https://www.hackerrank.com/certificates/bc8256b8aaf8'
    },
    { 
      title: 'Node(Basic)', 
      icon: '📦',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224826/node_anifoa.png',
      description: 'Understood basic Node.js concepts and built simple backend scripts.',
      link: 'https://www.hackerrank.com/certificates/ada33d38c532?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate'
    },
     { 
      title: 'Javascript(Basic)', 
      icon: '💛',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224786/Hacker_rank_js_certificate_trv4k9.png',
      description: 'Learned core JavaScript fundamentals like variables, loops, and functions.',
      link: 'https://www.hackerrank.com/certificates/7983e0532271'
    },
     { 
      title: 'CSS(Basic)', 
      icon: '🎨',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224788/Hacker_renk_css_certificate_ivyhoj.png',
      description: 'Gained foundational knowledge of styling web pages using CSS.',
      link: 'https://www.hackerrank.com/certificates/398aceec5054'
    },
     { 
      title: 'SQL(Basic)', 
      icon: '🧮',
      image: 'https://res.cloudinary.com/dnbayngfx/image/upload/v1752224945/sql_d42njl.png',
       description: 'Learned basic SQL queries including SELECT, WHERE, and JOIN.',
      link: 'https://www.hackerrank.com/certificates/0a798ead0bb5'
    }
  ];

  const displayedCertificates = showAllCertificates 
    ? certificatesData 
    : certificatesData.slice(0, 6);

  return (
    <div className="app">
      <div className="cursor-glow" style={{ left: mousePosition.x - 10, top: mousePosition.y - 10 }} />

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Sparkles className="logo-icon" />
            <span>Kiran_Portfolio</span>
          </div>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
         
{/* <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Universe</a></li>
<li><a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Journey</a></li>
<li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Powers</a></li>
<li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Creations</a></li>
<li><a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Achievements</a></li>
<li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Portal</a></li> */}

<li><a href="#home" onClick={() => setIsMenuOpen(false)}>Universe</a></li>
<li><a href="#education" onClick={() => setIsMenuOpen(false)}>Journey</a></li>
<li><a href="#Projects" onClick={() => setIsMenuOpen(false)}>Powers</a></li>
<li><a href="#certificates" onClick={() => setIsMenuOpen(false)}>Creations</a></li>
<li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Portal</a></li>







          </ul>
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </nav>

      <div>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
         <div className="hero-content">
          <div className="hero-text animate-on-scroll">
            <h1 className="hero-title">
              <span className="title-line">Computer Science</span>
              <span className="title-line highlight">Engineer</span>
              <span className="title-line">& Problem Solver</span>
            </h1>
            <p className="hero-subtitle">
              Passionate CSE student specializing in software development, algorithms, and system design. 
              I transform complex problems into elegant solutions using cutting-edge technologies and innovative thinking.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <a
  href="https://drive.google.com/file/d/1oZFZuJ7JbDbj1FpVR64q4jncmA9UYbjT/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="cta-button">
    <Download />
    <span>Download Resume</span>
    <div className="button-glow"></div>
  </button>
</a>

          </div>
        
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            <Brain className="title-icon" />
            The Learning Odyssey
          </h2>
          <div className="education-timeline">
            <div className="timeline-item animate-on-scroll" style={{ '--delay': '0.1s' }}>
              <div className="timeline-marker">🎓</div>
              <div className="timeline-content">
                <div className="timeline-date">2020 - 2022</div>
                <h3>10th Board (SSC) – PR: 84.17</h3>
                <p className="institution">Shri T.D.Shah Vidhyalay, Palanpur</p>
                <p className="description">
                Achieved a strong academic foundation with a Percentile Rank of 84.17, reflecting consistent
                 performance and dedication throughout the academic year.
                </p>
              </div>
            </div>
            <div className="timeline-item animate-on-scroll" style={{ '--delay': '0.2s' }}>
              <div className="timeline-marker">⚡</div>
              <div className="timeline-content">
                <div className="timeline-date">2022 - 2024</div>
                <h3>12th Board (HSC) – PR: 69.17</h3>
                <p className="institution">Shri Swastik Higher Secondary School</p>
                <p className="description">
                  Secured a Percentile Rank of 69.17, demonstrating solid academic performance and a 
                  focused approach during the higher secondary education.
                </p>
              </div>
            </div>
            <div className="timeline-item animate-on-scroll" style={{ '--delay': '0.3s' }}>
              <div className="timeline-marker">☁️</div>
              <div className="timeline-content">
                <div className="timeline-date">2024-ongoing</div>
                <h3>B.Tech CSE– 2nd Semester | CGPA: 9.30</h3>
                <p className="institution">CodingGita × Rai University, Ahmedabad </p>
                <p className="description">
                  Pursuing B.Tech with a CGPA of 9.30, building a solid foundation in core technologies while actively working 
                  on hands-on projects to apply and enhance technical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            <Zap className="title-icon" />
            Supernatural Abilities
          </h2>
          <div className="skills-grid">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <div key={category} className="skill-category animate-on-scroll" style={{ '--delay': `${index * 0.1}s` }}>
                <h3 className="category-title">{category}</h3>
                <div className="skills-list">
                  {skills.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ '--width': `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
     <section id="projects" className="projects-section">
  <div className="container">
    <h2 className="section-title animate-on-scroll">
      <Rocket className="title-icon" />
      Digital Masterpieces
    </h2>
    <div className="projects-grid">
      {projectsData.map((project, index) => (
        <div
          key={index}
          className="project-card animate-on-scroll"
          style={{ '--delay': `${index * 0.1}s` }}
        >
          <div className={`project-header bg-gradient-to-br ${project.color}`}>
  {project.image && (
    <div className="project-icon">
      <img src={project.image} alt={project.title + ' icon'} className="imageapi " />
    </div>
  )}
  <div className="project-glow"></div>
</div>
          <div className="project-body">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <a
                href={project.launchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn primary"
              >
                <ExternalLink size={16} />
                Launch
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn secondary"
              >
                <Github size={16} />
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Certificates Section */}
     <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">
          <Award className="title-icon" />
          Hall of Achievements
        </h2>

        <div className="certificates-grid">
          {displayedCertificates.map((cert, index) => (
            <div
              key={index}
              className="certificate-card animate-on-scroll"
              style={{ '--delay': `${index * 0.05}s` }}
              onClick={() => window.open(cert.link, '_blank')}
            >
              <div className="cert-image-container">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                />
                <div className="cert-overlay">
                  <div className="cert-icon">{cert.icon}</div>
                  <ExternalLink className="cert-link-icon" />
                </div>
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-platform">{cert.platform}</p>
                <span className="cert-date">{cert.date}</span>
                <p className="cert-description">{cert.description}</p>
              </div>
              <div className="cert-glow"></div>
            </div>
          ))}
        </div>

        <div className="view-all-container animate-on-scroll">
          <button
            className="view-all-btn"
            onClick={() => setShowAllCertificates(!showAllCertificates)}
          >
            <span>{showAllCertificates ? 'Show Less' : 'View All Certificates'}</span>
            <div className="btn-icon">{showAllCertificates ? '▲' : '▼'}</div>
          </button>
          <p className="certificates-count">
            {showAllCertificates
              ? `Showing all ${certificatesData.length} certificates`
              : `Showing 6 of ${certificatesData.length} certificates`}
          </p>
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title animate-on-scroll">
            <Target className="title-icon" />
            Open Communication Portal
          </h2>
          <div className="contact-content animate-on-scroll">
            <div className="contact-info">
              <h3>Let's Create Something Extraordinary</h3>
              <p>
                Ready to embark on a digital adventure? Whether you have a wild idea that needs 
                taming or a complex problem that needs solving, I'm here to turn your vision 
                into reality with code, creativity, and a touch of magic.
              </p>
             <div className="social-links">
  <a 
    href="https://www.linkedin.com/in/chaudharykiran16/" 
    className="social-link linkedin" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Linkedin /><span>LinkedIn</span>
  </a>

  <a 
    href="https://github.com/kiranchaudhary18" 
    className="social-link github" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Github /><span>GitHub</span>
  </a>

  <a 
    href="kiran.chaudhary.cg@gmail.com" 
    className="social-link email" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Mail /><span>Email:- kiran.chaudhary.cg@gmailcom</span>
  </a>

  <a 
   
    className="social-link phone" 
  
  >
    <Phone /><span>Call:- 9106003382</span>
  </a>
</div>
 </div>
            
       <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" placeholder="What should I call you?" name="name" required />
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" placeholder="your@email.com" name="email" required />
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea placeholder="Tell me about your amazing project idea..." name="message" required></textarea>
        </div>
        <button type="submit" className="submit-button">
          <Send />
          <span>Launch Message</span>
          <div className="button-particles"></div>
        </button>
        {submitted && (
          <div className="popup-message">
            <p>🚀 Message launched! I’ll get back to you soon.</p>
          </div>
        )}
      </form>
      

          </div>  
        
         
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 Kiran Dekaliya - Crafted with ❤️ and lots of ☕</p>
        </div>
      </footer>
    </div>

    </div>
  );
}

export default App;
