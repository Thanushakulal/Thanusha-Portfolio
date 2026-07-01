/* About Section Component */

export function renderAbout() {
  return `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">A Look Inside</span>
        <h2 class="section-title">About Me</h2>
      </div>
      
      <div class="about-grid">
        <!-- Interactive Dashboard Metrics -->
        <div class="about-dashboard reveal-left">
          <div class="card about-dash-card">
            <span class="about-dash-val">3rd</span>
            <span class="about-dash-lbl">Year B.E. Student</span>
          </div>
          
          <div class="card about-dash-card">
            <span class="about-dash-val">IoT</span>
            <span class="about-dash-lbl">& Cybersecurity Focus</span>
          </div>
          
          <div class="card about-dash-card">
            <span class="about-dash-val">4+</span>
            <span class="about-dash-lbl">Key Projects Built</span>
          </div>
          
          <div class="card about-dash-card">
            <span class="about-dash-val">4+</span>
            <span class="about-dash-lbl">Certs Earned</span>
          </div>
        </div>
        
        <!-- Bio Content -->
        <div class="about-text reveal-right">
          <p class="about-para">
            I am a passionate <strong>Frontend Developer</strong> and technology student currently pursuing my Bachelor of Engineering (B.E.) in <strong>Internet of Things (IoT) & Cybersecurity including Blockchain Technology</strong>.
          </p>
          <p class="about-para">
            My journey bridges the gap between hardware sensors and human-centric software. I discovered a deep affinity for frontend development because of its visual nature and immediate impact. I enjoy designing clean, premium, and interactive user interfaces using modern systems like React and Vanilla CSS.
          </p>
          <p class="about-para">
            I believe technology is at its best when it solves real-world issues. Whether building an automation trigger script for environmental tracking, designing secure donation tools, or configuring microcontrollers, I focus on delivering polished, responsive, and performance-optimized products.
          </p>
          
          <div class="about-highlights">
            <div class="about-highlight-item">
              <span class="about-highlight-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Creative UI/UX Design
            </div>
            
            <div class="about-highlight-item">
              <span class="about-highlight-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Modern CSS Grid/Flexbox
            </div>
            
            <div class="about-highlight-item">
              <span class="about-highlight-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Responsive Web Apps
            </div>
            
            <div class="about-highlight-item">
              <span class="about-highlight-icon">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              Embedded Systems Integration
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
