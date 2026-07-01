/* Education Section Component */

export function renderEducation() {
  return `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Academic Milestones</span>
        <h2 class="section-title">Education</h2>
      </div>
      
      <div class="timeline">
        <!-- B.E. 3rd Year -->
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2023 – Present</span>
            <h3 class="timeline-title">Bachelor of Engineering (B.E.)</h3>
            <div class="timeline-subtitle">IoT & Cybersecurity including Blockchain Technology (3rd Year)</div>
            
            <p class="about-para" style="font-size: 0.92rem; margin-bottom: 1rem;">
              Actively pursuing a specialized engineering program. The coursework integrates foundational computing sciences with hands-on systems architectures, cryptography, cloud networking, and hardware automation.
            </p>
            
            <div class="education-meta">
              <span class="tech-tag">IoT Architectures</span>
              <span class="tech-tag">Network Security</span>
              <span class="tech-tag">Blockchain Cryptography</span>
              <span class="tech-tag">Embedded C/C++</span>
              <span class="tech-tag">SQL & Web Data Systems</span>
            </div>
          </div>
        </div>
        
        <!-- my PUC -->
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2021 – 2023</span>
            <h3 class="timeline-title">Pre-University Course (Science – PCMB)</h3>
            <div class="timeline-subtitle">Core Academic Foundation</div>
            
            <p class="about-para" style="font-size: 0.92rem; margin-bottom: 1rem;">
              Developed a strong foundation in mathematics, physics, chemistry, and biology while strengthening analytical thinking, problem-solving abilities, scientific reasoning, and quantitative skills.
            </p>
            
            <div class="education-meta">
              <span class="tech-tag">Physics</span>
              <span class="tech-tag">Chemistry</span>
              <span class="tech-tag">Mathematics</span>
              <span class="tech-tag">Biology</span>
            </div>
          </div>
        </div>

        <!-- my SSLC -->
        <div class="timeline-item reveal">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-date">2019 – 2021</span>
            <h3 class="timeline-title">Secondary School Leaving Certificate (SSLC)</h3>
            <div class="timeline-subtitle">General Academic Foundation</div>
            
            <p class="about-para" style="font-size: 0.92rem; margin-bottom: 1rem;">
              Built a strong foundation across core academic subjects while developing communication, numerical aptitude, logical reasoning, critical thinking, and disciplined learning habits.
            </p>
            
            <div class="education-meta">
              <span class="tech-tag">Mathematics</span>
              <span class="tech-tag">Science</span>
              <span class="tech-tag">English</span>
              <span class="tech-tag">Social Science</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
