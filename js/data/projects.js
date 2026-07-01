/* Projects Data Model */
export const projectsData = [
  {
    id: "ai-calculator",
    title: "AI Calculator Web Application",
    category: "Web App",
    featured: true,
    description: "An intelligent mathematical solver that interprets user queries, handwritten formulas, and multi-step computational steps using modern frontend architectures and advanced math parsers.",
    keyFeatures: [
      "Dynamic math parsing with support for matrices and functions",
      "Interactive drawing canvas for simulated handwriting math recognition",
      "Recruiter-friendly terminal helper summarizing the calculation histories",
      "Custom themes with glassmorphic animations and charts representation"
    ],
    tech: ["React", "CSS3", "JavaScript", "MathJS"],
    demoUrl: "https://calculator-nu-six-87.vercel.app/",
    codeUrl: "https://github.com/Thanushakulal/Calculator",
    illustration: `<svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="20" y="10" width="160" height="100" rx="10" ry="10" fill="currentColor" fill-opacity="0.03" stroke-width="1.5"></rect>
      <!-- Screen -->
      <rect x="35" y="20" width="130" height="30" rx="4" fill="currentColor" fill-opacity="0.08" stroke="none"></rect>
      <text x="45" y="40" font-family="var(--font-heading)" font-weight="bold" font-size="12" fill="currentColor" stroke="none">f(x) = ∫(3x² + 2x) dx</text>
      <text x="145" y="40" font-family="var(--font-heading)" font-weight="bold" font-size="10" fill="var(--primary)" stroke="none" text-anchor="end">x³ + x² + c</text>
      <!-- Buttons grid -->
      <rect x="35" y="60" width="25" height="15" rx="3" fill="currentColor" fill-opacity="0.05" stroke-width="1"></rect>
      <rect x="68" y="60" width="25" height="15" rx="3" fill="currentColor" fill-opacity="0.05" stroke-width="1"></rect>
      <rect x="101" y="60" width="25" height="15" rx="3" fill="currentColor" fill-opacity="0.05" stroke-width="1"></rect>
      <rect x="134" y="60" width="31" height="15" rx="3" fill="var(--primary)" fill-opacity="0.2" stroke="var(--primary)"></rect>
      
      <rect x="35" y="82" width="25" height="15" rx="3" fill="currentColor" fill-opacity="0.05" stroke-width="1"></rect>
      <rect x="68" y="82" width="25" height="15" rx="3" fill="currentColor" fill-opacity="0.05" stroke-width="1"></rect>
      <rect x="101" y="82" width="25" height="15" rx="3" fill="currentColor" fill-opacity="0.05" stroke-width="1"></rect>
      <rect x="134" y="82" width="31" height="15" rx="3" fill="var(--accent)" fill-opacity="0.2" stroke="var(--accent)"></rect>
    </svg>`
  },
  {
    id: "lifelink",
    title: "LifeLink – Blood & Organ Donation",
    category: "Web App",
    featured: true,
    description: "A secure and fast-responding coordinator system connecting potential organ and blood donors with patients in urgent need. Built around dynamic database indexes and simplified forms.",
    keyFeatures: [
      "Real-time geolocation matching for critical donor lookups",
      "Dynamic dashboard visualizing state-wise supply and matching graphs",
      "Robust registration forms with step-by-step validations",
      "Secure communication channels maintaining complete user confidentiality"
    ],
    tech: ["React", "Firebase", "CSS3", "JavaScript"],
    demoUrl: "https://lifelink-sand-psi.vercel.app/",
    codeUrl: "https://github.com/Thanushakulal/Lifelink",
    illustration: `<svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="20" y="10" width="160" height="100" rx="10" ry="10" fill="currentColor" fill-opacity="0.03" stroke-width="1.5"></rect>
      <!-- Heart and Pulse line -->
      <path d="M100 85c-15-18-25-27-25-39 0-8 6-14 14-14 6 0 9 3 11 6 2-3 5-6 11-6 8 0 14 6 14 14 0 12-10 21-25 39Z" fill="var(--error)" fill-opacity="0.2" stroke="var(--error)" stroke-width="2.5"></path>
      <!-- ECG Line overlaying -->
      <path d="M35 70h40l8-15 8 30 8-25 6 10h40" stroke="var(--accent)" stroke-width="2" style="opacity: 0.8;"></path>
      <circle cx="145" cy="70" r="4" fill="var(--accent)"></circle>
    </svg>`
  },
 
  {
    id: "rain-sensor",
    title: "Rain Sensor Automation System",
    category: "IoT / Hardware",
    featured: false,
    description: "An automated response assembly linking water-detection sensor hardware with real-time web databases to deploy responsive motorized shelters and issue instant notification alerts.",
    keyFeatures: [
      "Microcontroller software tracking humidity/precipitation levels",
      "Real-time data synchronization with Firebase database feeds",
      "Web interface controller displaying automated sensor response stats",
      "Manual toggle overriding automation via dashboard controls"
    ],
    tech: ["JavaScript", "Firebase", "IoT Hardware", "Node.js"],
    // demoUrl: "#",
    // codeUrl: "https://github.com/Thanushakulal/rain-automation-iot",
    illustration: `<svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="20" y="10" width="160" height="100" rx="10" ry="10" fill="currentColor" fill-opacity="0.03" stroke-width="1.5"></rect>
      <!-- Cloud -->
      <path d="M60 70 A15 15 0 0 1 80 50 A20 20 0 0 1 120 50 A15 15 0 0 1 140 70 Z" fill="currentColor" fill-opacity="0.05" stroke-width="1.5"></path>
      <!-- Rain drops -->
      <line x1="80" y1="80" x2="75" y2="95" stroke="var(--accent)" stroke-width="2"></line>
      <line x1="100" y1="83" x2="95" y2="98" stroke="var(--primary)" stroke-width="2"></line>
      <line x1="120" y1="80" x2="115" y2="95" stroke="var(--accent)" stroke-width="2"></line>
      
      <!-- Sensor Shield representation -->
      <path d="M50 40h10v10H50z" fill="var(--primary)" stroke="none" style="opacity: 0.4;"></path>
      <path d="M140 40h10v10h-10z" fill="var(--accent)" stroke="none" style="opacity: 0.4;"></path>
    </svg>`
  },
  {
    id: "rfid-toll",
    title: "RFID Toll Collection System",
    category: "IoT / Hardware",
    featured: false,
    description: "An security-focused automated scanner system that validates vehicle-embedded tags, manages balance logs, controls gates, and records transaction logs automatically.",
    keyFeatures: [
      "Hardware scanner drivers optimizing tag detection ranges",
      "Dynamic database schemas logs tracking toll fares and timestamps",
      "Gate barrier motor controller triggers via web-sockets logs",
      "Low balance automatic alert notifications and log summaries"
    ],
    tech: ["Java", "SQL", "IoT Hardware"],
    illustration: `<svg viewBox="0 0 200 120" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="20" y="10" width="160" height="100" rx="10" ry="10" fill="currentColor" fill-opacity="0.03" stroke-width="1.5"></rect>
      <!-- RFID Card -->
      <rect x="40" y="45" width="60" height="40" rx="5" fill="var(--primary)" fill-opacity="0.1" stroke="var(--primary)" stroke-width="1.5"></rect>
      <!-- Chip -->
      <rect x="50" y="58" width="12" height="12" rx="2" fill="currentColor" fill-opacity="0.15"></rect>
      <!-- Signals -->
      <path d="M125 45a40 40 0 0 1 0 50" stroke="var(--accent)" stroke-width="2"></path>
      <path d="M135 53a25 25 0 0 1 0 34" stroke="var(--accent)" stroke-width="2.5" style="opacity: 0.7;"></path>
      <path d="M145 61a10 10 0 0 1 0 18" stroke="var(--accent)" stroke-width="3" style="opacity: 0.4;"></path>
    </svg>`
  }
];
