import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Database, Layers, Code, Server, ChevronRight, Linkedin, Mail, Phone, Download } from 'lucide-react';
import * as THREE from 'three';

// --- Data: Extracted from your LaTeX CV ---
const portfolioData = {
  personal: {
    name: "Ayoub BOUSNANE",
    title: "Machine Learning & HPC Engineer",
    email: "ayoubbousnane1@gmail.com",
    phone: "+33 7 48 40 32 40",
    linkedin: "linkedin.com/in/ayoub-bousnane",
    location: "Paris, France",
    status: "Immediately available for a permanent position",
    about: "High-Performance Computing and Machine Learning specialist focused on optimizing large-scale AI pipelines. Experienced in reducing operational costs by 90% through mixed-precision optimization and GPU acceleration."
  },
  experience: [
    {
      id: 1,
      role: "Machine Learning Engineer",
      company: "Decathlon Digital",
      location: "Paris",
      period: "March – September 2025",
      description: "Optimised demand-forecasting ML pipelines and reduced operational costs.",
      achievements: [
        "Migrated pipelines from Pandas/PySpark to Polars + RAPIDS.",
        "Cut operational costs by 90% and achieved a 20× speed-up on GPU/CPU HPC clusters.",
        "Developed a systematic benchmarking framework for resource evaluation (GPU, CPU, RAM).",
        "Improved training throughput by 2.2× via mixed-precision optimisation."
      ],
      tech: ["Polars", "RAPIDS", "HPC", "GPU"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "ESI Research Lab",
      location: "Algiers",
      period: "January – July 2024",
      description: "Designed a centralised platform for API discovery and integration.",
      achievements: [
        "Built a microservices architecture with automated testing and Docker containerisation.",
        "Implemented CI/CD pipelines and automated deployments."
      ],
      tech: ["Microservices", "Docker", "CI/CD", "API"]
    },
    {
      id: 3,
      role: "Full-Stack Developer",
      company: "Sonatrach",
      location: "Algiers",
      period: "August – October 2023",
      description: "Industrial management system development.",
      achievements: [
        "Designed a relational database architecture for an industrial management system.",
        "Developed a modern user interface with ReactJS and RESTful APIs."
      ],
      tech: ["ReactJS", "SQL", "REST API"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "MSc High-Performance Computing and Simulation",
      school: "Université Paris-Saclay",
      period: "2024 – 2025",
      details: "Joint programme with ENS Paris-Saclay, Télécom SudParis, and UVSQ."
    },
    {
      id: 2,
      degree: "Engineering Degree in Computer Science",
      school: "National Higher School of Computer Science (ESI), Algiers",
      period: "2019 – 2024",
      details: "Honours"
    }
  ],
  skills: [
    { category: "HPC & Parallel", items: ["CUDA", "OpenMP", "MPI", "Pthreads", "GPU Optimization"], icon: <Cpu size={20} /> },
    { category: "ML & AI", items: ["PyTorch", "TensorFlow", "Scikit-Learn", "MLOps", "Mixed-Precision"], icon: <Terminal size={20} /> },
    { category: "Big Data", items: ["Spark", "Hadoop", "Polars", "RAPIDS", "Cloud Arch"], icon: <Database size={20} /> },
    { category: "Development", items: ["Python", "C/C++", "Java", "SQL", "ReactJS", "FastAPI"], icon: <Code size={20} /> },
    { category: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "PostgreSQL"], icon: <Server size={20} /> }
  ]
};

// --- Styles Injection ---
const TailwindConfig = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Inter:wght@300;400;600&family=Orbitron:wght@400;700;900&display=swap');
    
    .font-orbitron { font-family: 'Orbitron', sans-serif; }
    .font-exo { font-family: 'Exo 2', sans-serif; }
    .font-inter { font-family: 'Inter', sans-serif; }
    
    .text-neon { color: #aaff00; }
    .bg-neon { background-color: #aaff00; }
    .border-neon { border-color: #aaff00; }
    .shadow-neon { box-shadow: 0 0 15px #aaff00; }
    .shadow-neon-sm { box-shadow: 0 0 8px rgba(170, 255, 0, 0.5); }
    
    .text-glow { text-shadow: 0 0 10px rgba(170, 255, 0, 0.5); }
    
    .bg-matte { background-color: #000000; }
    .bg-subtle { background-color: #0a0a0a; }
    
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #aaff00; }

    @keyframes scanLine {
      0% { top: 0; opacity: 1; }
      90% { opacity: 1; }
      100% { top: 100%; opacity: 0; }
    }
    .animate-scan { animation: scanLine 2s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
  `}</style>
);

// --- Components ---

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center overflow-hidden font-orbitron">
      <div className="w-full max-w-md px-6">
        <div className="flex justify-between text-neon text-xs mb-2 tracking-[0.2em]">
          <span>SYSTEM_INIT</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1 w-full bg-gray-900 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-neon shadow-neon transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm tracking-widest animate-pulse">
          LOADING_PORTFOLIO_ASSETS...
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
      }}></div>
      <div className="absolute left-0 right-0 h-[2px] bg-neon shadow-neon animate-scan z-40"></div>
    </div>
  );
};

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const currentContainer = containerRef.current;
    currentContainer.appendChild(renderer.domElement);

    // Geometry
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0xaaff00,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };
    document.addEventListener('mousemove', handleMouseMove);

    // Animation
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      torusKnot.rotation.x += 0.001;
      torusKnot.rotation.y += 0.002;

      torusKnot.rotation.x += (mouseY - torusKnot.rotation.x) * 0.05;
      torusKnot.rotation.y += (mouseX - torusKnot.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 p-6 backdrop-blur-md bg-black/50 border-b border-white/5">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#" className="group flex items-center gap-2">
        <div className="relative w-10 h-10 flex items-center justify-center bg-black border border-neon/50 rounded-lg overflow-hidden group-hover:border-neon transition-all duration-300 shadow-neon-sm group-hover:shadow-neon">
          <div className="absolute inset-0 bg-neon/10 group-hover:bg-neon/20 transition-colors"></div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-neon relative z-10">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="font-orbitron text-xl font-bold text-white tracking-tighter">
          AYOUB<span className="text-neon text-glow">.AI</span>
        </div>
      </a>
      <div className="hidden md:flex gap-8 font-exo text-sm uppercase tracking-wider text-gray-400">
        {['Experience', 'Skills', 'Education', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-neon transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon transition-all group-hover:w-full shadow-neon-sm"></span>
          </a>
        ))}
      </div>
      <a href={`mailto:${portfolioData.personal.email}`} className="hidden md:block px-5 py-2 border border-neon/50 text-neon font-orbitron text-xs rounded hover:bg-neon hover:text-black transition-all duration-300 shadow-neon-sm hover:shadow-neon">
        HIRE ME
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
    <div className="z-10 text-center max-w-4xl">
      <div className="inline-block mb-6 px-3 py-1 border border-neon/30 rounded bg-black/40 backdrop-blur-sm">
        <span className="font-exo text-neon text-xs tracking-[0.2em] uppercase animate-pulse">
          ● Available for Hire
        </span>
      </div>

      <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tighter mb-6">
        AYOUB <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600">
          BOUSNANE
        </span>
      </h1>

      <p className="font-exo text-xl md:text-2xl text-neon mb-8 tracking-wide text-glow">
        {portfolioData.personal.title}
      </p>

      <p className="font-inter text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
        {portfolioData.personal.about}
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href="#contact" className="group relative px-8 py-4 bg-neon text-black font-orbitron font-bold tracking-widest uppercase overflow-hidden transition-transform hover:scale-105 w-full md:w-auto text-center">
          <span className="relative z-10">Contact Me</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </a>

        <a href="#" className="px-8 py-4 border border-white/20 text-white font-orbitron tracking-widest uppercase hover:border-neon hover:text-neon transition-colors flex items-center justify-center gap-2 bg-black/50 backdrop-blur w-full md:w-auto">
          <Download size={18} />
          Download CV
        </a>
      </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black pointer-events-none z-0" />
  </section>
);

const ExperienceCard = ({ job }) => (
  <div className="group relative p-1 bg-gradient-to-br from-white/10 to-transparent hover:from-neon/50 transition-all duration-500 rounded-xl mb-8">
    <div className="bg-subtle p-8 rounded-xl h-full relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-neon/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="flex flex-col md:flex-row justify-between items-start mb-4 border-b border-white/5 pb-4">
        <div>
          <h3 className="font-orbitron text-xl text-white font-bold group-hover:text-neon transition-colors">
            {job.role}
          </h3>
          <div className="text-gray-400 font-exo text-sm mt-1 flex items-center gap-2">
            <span className="text-white">{job.company}</span>
            <span className="w-1 h-1 bg-neon rounded-full" />
            <span>{job.location}</span>
          </div>
        </div>
        <div className="mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded text-xs font-mono text-neon border border-neon/20">
          {job.period}
        </div>
      </div>

      <p className="text-gray-300 font-inter text-sm mb-4 italic">
        {job.description}
      </p>

      <ul className="space-y-2 mb-6">
        {job.achievements.map((item, i) => (
          <li key={i} className="flex items-start text-gray-400 text-sm font-inter leading-relaxed">
            <ChevronRight className="min-w-[16px] w-4 h-4 text-neon mt-1 mr-2" />
            {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {job.tech.map((t, i) => (
          <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-500 border border-gray-800 px-2 py-1 rounded hover:border-neon/50 hover:text-neon transition-colors">
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const SkillCard = ({ category, icon, items }) => (
  <div className="bg-[#0f0f0f] border border-white/5 p-6 rounded-lg hover:border-neon/30 transition-colors group">
    <div className="flex items-center gap-3 mb-4 text-white group-hover:text-neon transition-colors">
      <div className="p-2 bg-white/5 rounded-md group-hover:bg-neon/10 transition-colors">
        {icon}
      </div>
      <h3 className="font-orbitron font-bold tracking-wide">{category}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, i) => (
        <span key={i} className="text-xs font-exo text-gray-400 bg-black px-2 py-1 rounded border border-white/5 group-hover:border-neon/20 transition-colors">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const EducationItem = ({ edu }) => (
  <div className="relative pl-8 border-l border-white/10 pb-8 last:pb-0">
    <div className="absolute left-0 top-0 w-2 h-2 bg-neon -translate-x-[5px] rounded-full shadow-neon-sm" />
    <h3 className="text-white font-orbitron text-lg font-bold">{edu.degree}</h3>
    <p className="text-neon font-exo text-sm mb-2">{edu.school}</p>
    <div className="text-gray-500 text-xs mb-2 font-mono">{edu.period}</div>
    <p className="text-gray-400 text-sm font-inter">{edu.details}</p>
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="font-orbitron text-3xl md:text-4xl text-white font-bold">
      <span className="text-neon">/</span> {title}
    </h2>
    {subtitle && <p className="text-gray-500 mt-2 font-exo tracking-wide">{subtitle}</p>}
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <>
        <TailwindConfig />
        <Loader onComplete={() => setLoading(false)} />
      </>
    );
  }

  return (
    <div className="bg-matte min-h-screen text-white selection:bg-neon selection:text-black overflow-x-hidden">
      <TailwindConfig />
      <ThreeBackground />
      <Nav />

      <main className="relative z-10">
        <Hero />

        <div className="container mx-auto px-6 py-20 space-y-32">

          {/* Experience Section */}
          <section id="experience">
            <SectionTitle title="PROFESSIONAL_EXPERIENCE" subtitle="Career trajectory & key achievements" />
            <div className="max-w-4xl mx-auto">
              {portfolioData.experience.map((job) => (
                <ExperienceCard key={job.id} job={job} />
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SectionTitle title="TECHNICAL_ARSENAL" subtitle="Technologies & Frameworks" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.skills.map((skill, idx) => (
                <SkillCard key={idx} {...skill} />
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="EDUCATION" subtitle="Academic Background" />
              <div className="mt-8">
                {portfolioData.education.map((edu) => (
                  <EducationItem key={edu.id} edu={edu} />
                ))}
              </div>
            </div>

            {/* Quick Stats / Additional Info */}
            <div className="bg-subtle border border-white/5 rounded-2xl p-8 h-fit">
              <h3 className="font-orbitron text-xl text-white font-bold mb-6 flex items-center gap-2">
                <Layers className="text-neon" size={20} />
                ADDITIONAL INFO
              </h3>
              <ul className="space-y-4 text-gray-400 font-inter text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Languages</span>
                  <span className="text-white">French (C2), English (C2)</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Current Location</span>
                  <span className="text-white">Paris, France</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Mobility</span>
                  <span className="text-white">Europe-wide</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 border-t border-white/10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-orbitron text-4xl font-bold text-white mb-8">
                INITIATE <span className="text-neon text-glow">CONTACT</span>
              </h2>
              <p className="text-gray-400 mb-12 font-exo">
                Based in Paris. Immediately available for permanent positions in High-Performance Computing and Machine Learning Engineering.
              </p>

              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href={`mailto:${portfolioData.personal.email}`} className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111] border border-white/10 rounded hover:border-neon hover:text-neon transition-all group w-full md:w-auto">
                  <Mail size={20} />
                  <span>{portfolioData.personal.email}</span>
                </a>
                <a href={`tel:${portfolioData.personal.phone}`} className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111] border border-white/10 rounded hover:border-neon hover:text-neon transition-all group w-full md:w-auto">
                  <Phone size={20} />
                  <span>{portfolioData.personal.phone}</span>
                </a>
                <a href={`https://${portfolioData.personal.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-6 py-4 bg-[#111] border border-white/10 rounded hover:border-neon hover:text-neon transition-all group w-full md:w-auto">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>

        </div>

        <footer className="bg-black border-t border-white/10 py-8 text-center">
          <p className="text-gray-600 font-exo text-xs tracking-widest">
            © 2025 AYOUB BOUSNANE // SYSTEM ONLINE
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
