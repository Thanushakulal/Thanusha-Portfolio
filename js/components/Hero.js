/* Hero Section Component */

export function renderHero() {
  return `
    <div class="container hero-container">
      <div class="hero-content reveal-left">
        <span class="hero-greetings">Hi, my name is</span>
        <h1 class="hero-name">Thanusha</h1>
        <h2 class="hero-title">Frontend Developer</h2>
        
        <div class="hero-tagline-container">
          <p class="hero-tagline" id="hero-typewriter-text"></p>
        </div>
        
        <p class="hero-brief-desc">
          Specializing in crafting premium, highly interactive, and responsive web user interfaces. I bridge the gap between frontend aesthetics and hardware/security systems as an IoT student.
        </p>
        
        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">
            View Projects
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <a href="#contact" class="btn btn-secondary">
            Contact Me
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>

        <div class="hero-resume-group">
          <a href="./assets/resume.pdf" target="_blank" class="resume-link">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            View Resume
          </a>
          <span class="resume-divider">|</span>
          <a href="./assets/resume.pdf" target="_blank" class="resume-link" download="Thanusha_Resume.pdf">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download Resume
          </a>
        </div>
      </div>
      
      <!-- Interactive Mock Terminal Section -->
      <div class="hero-visual reveal-right">
        <div class="terminal-mock">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="terminal-title-text">terminal - thanusha@dev ~ 80×24</div>
          </div>
          <div class="terminal-body" id="terminal-body-content">
            <div class="terminal-line"><span class="term-prompt">thanusha@dev:~$</span> cat info.json</div>
            <div class="terminal-output">{
  "name": "<span class="term-highlight">Thanusha</span>",
  "role": "<span class="term-accent">Frontend Developer</span>",
  "education": "B.E. IoT & Cybersecurity",
  "skills": ["React", "JS", "Firebase", "Git"],
  "status": "Open to Internships"
}</div>
            <div class="terminal-line" id="terminal-active-line"><span class="term-prompt">thanusha@dev:~$</span> <span class="typing-cursor"></span></div>
          </div>
          <div class="terminal-footer">
            <span class="terminal-footer-label">Quick Run:</span>
            <button class="terminal-action-btn" id="term-btn-build">build.sh</button>
            <button class="terminal-action-btn" id="term-btn-sys">sys_check</button>
            <button class="terminal-action-btn" id="term-btn-clear">clear</button>
          </div>
          <div class="scanline"></div>
        </div>
      </div>
    </div>
  `;
}

export function initHeroEvents() {
  const termBody = document.getElementById('terminal-body-content');
  const btnBuild = document.getElementById('term-btn-build');
  const btnSys = document.getElementById('term-btn-sys');
  const btnClear = document.getElementById('term-btn-clear');

  function appendTerminalLine(input, outputHtml) {
    // Remove active line
    const activeLine = document.getElementById('terminal-active-line');
    if (activeLine) activeLine.remove();

    // Create command line
    const cmdLine = document.createElement('div');
    cmdLine.className = 'terminal-line';
    cmdLine.innerHTML = `<span class="term-prompt">thanusha@dev:~$</span> ${input}`;
    termBody.appendChild(cmdLine);

    // Create output block
    const outputLine = document.createElement('div');
    outputLine.className = 'terminal-output';
    outputLine.innerHTML = outputHtml;
    termBody.appendChild(outputLine);

    // Create new active line and append
    const newActiveLine = document.createElement('div');
    newActiveLine.id = 'terminal-active-line';
    newActiveLine.className = 'terminal-line';
    newActiveLine.innerHTML = `<span class="term-prompt">thanusha@dev:~$</span> <span class="typing-cursor"></span>`;
    termBody.appendChild(newActiveLine);

    // Scroll to bottom of terminal
    termBody.scrollTop = termBody.scrollHeight;
  }

  btnBuild.addEventListener('click', () => {
    appendTerminalLine('sh build.sh', `
<span class="term-success">●</span> Bundling portfolio bundles...
<span class="term-success">●</span> Optimizing CSS variable layouts
<span class="term-success">●</span> Parsing JSON static models...
<span class="term-success">✓</span> <span class="term-success">Success!</span> Bundle size: <span class="term-highlight">42.8 KB</span>
    `);
  });

  btnSys.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    appendTerminalLine('sh sys_check', `
<span class="term-highlight">Platform:</span> Browser DOM client
<span class="term-highlight">Theme Mode:</span> ${isLight ? 'Light (Ice Blue)' : 'Dark (Obsidian)'}
<span class="term-highlight">Major:</span> IoT & Cybersecurity including Blockchain (3rd Year)
<span class="term-highlight">Location:</span> India
    `);
  });

  btnClear.addEventListener('click', () => {
    termBody.innerHTML = `
      <div class="terminal-line"><span class="term-prompt">thanusha@dev:~$</span> clear</div>
      <div class="terminal-line" id="terminal-active-line"><span class="term-prompt">thanusha@dev:~$</span> <span class="typing-cursor"></span></div>
    `;
  });
}
