/* Contact Section Component */

function renderFormFields() {
  return `
    <form id="contact-form" novalidate>
      <div class="form-group">
        <label for="form-name" class="form-label">Full Name</label>
        <input type="text" id="form-name" class="form-input" placeholder="Your Name" required>
        <span class="form-error-msg" id="error-name">Please write your name.</span>
      </div>
      
      <div class="form-group">
        <label for="form-email" class="form-label">Email Address</label>
        <input type="email" id="form-email" class="form-input" placeholder="name@domain.com" required>
        <span class="form-error-msg" id="error-email">Please write a valid email (e.g. name@domain.com).</span>
      </div>
      
      <div class="form-group">
        <label for="form-subject" class="form-label">Subject</label>
        <input type="text" id="form-subject" class="form-input" placeholder="Internship / Collaboration / Hello" required>
        <span class="form-error-msg" id="error-subject">Please enter a subject.</span>
      </div>
      
      <div class="form-group">
        <label for="form-message" class="form-label">Message</label>
        <textarea id="form-message" class="form-input" rows="5" placeholder="How can I help you?" style="resize: none;" required></textarea>
        <span class="form-error-msg" id="error-message">Message must be at least 10 characters long.</span>
      </div>
      
      <button type="submit" class="btn btn-primary" style="width: 100%; border: none;" id="form-submit-btn">
        Send Message
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
      </button>
    </form>
  `;
}

export function renderContact() {
  return `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Let's Connect</span>
        <h2 class="section-title">Contact Me</h2>
      </div>
      
      <div class="contact-grid">
        <!-- Contact details & links -->
        <div class="contact-info-panel reveal-left">
          <div class="contact-info-header">
            <h3>Get in Touch</h3>
            <p>I am open to internship opportunities, frontend developer roles, and collaborations. Feel free to shoot me an email or connect on social networks.</p>
          </div>
          
          <div class="contact-details-list">
            <div class="contact-detail-item">
              <div class="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div class="contact-detail-content">
                <span class="contact-detail-lbl">Email</span>
                <a href="mailto:thanushakulal07@gmail.com" class="contact-detail-val">thanushakulal07@gmail.com</a>
              </div>
            </div>
            
            <div class="contact-detail-item">
              <div class="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </div>
              <div class="contact-detail-content">
                <span class="contact-detail-lbl">GitHub</span>
                <a href="https://github.com/Thanushakulal" target="_blank" class="contact-detail-val">github.com/Thanushakulal</a>
              </div>
            </div>
            
            <div class="contact-detail-item">
              <div class="contact-detail-icon">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
              <div class="contact-detail-content">
                <span class="contact-detail-lbl">LinkedIn</span>
                <a href="https://www.linkedin.com/in/thanusha07" target="_blank" class="contact-detail-val">linkedin.com/in/thanusha07</a>
              </div>
            </div>
          </div>
          
          <div class="contact-social-widgets">
            <a href="https://github.com/Thanushakulal" target="_blank" class="social-widget-btn" aria-label="GitHub Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/thanusha07" target="_blank" class="social-widget-btn" aria-label="LinkedIn Profile">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        
        <!-- Interactive Validation Form -->
        <div class="card reveal-right" id="contact-form-container" style="padding: 2.5rem;">
          ${renderFormFields()}
        </div>
      </div>
    </div>
  `;
}

export function initContactEvents() {
  const container = document.getElementById('contact-form-container');
  if (!container) return;

  bindFormLogic(container);
}

function bindFormLogic(container) {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const fields = {
    name: document.getElementById('form-name'),
    email: document.getElementById('form-email'),
    subject: document.getElementById('form-subject'),
    message: document.getElementById('form-message')
  };

  const submitBtn = document.getElementById('form-submit-btn');

  // Input listeners to clear errors on type
  Object.keys(fields).forEach(key => {
    fields[key].addEventListener('input', () => {
      fields[key].classList.remove('error');
    });
  });

  // Client-side validations
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;

    // Validate Name
    if (!fields.name.value.trim()) {
      fields.name.classList.add('error');
      isValid = false;
    } else {
      fields.name.classList.remove('error');
      fields.name.classList.add('success');
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fields.email.value.trim())) {
      fields.email.classList.add('error');
      isValid = false;
    } else {
      fields.email.classList.remove('error');
      fields.email.classList.add('success');
    }

    // Validate Subject
    if (!fields.subject.value.trim()) {
      fields.subject.classList.add('error');
      isValid = false;
    } else {
      fields.subject.classList.remove('error');
      fields.subject.classList.add('success');
    }

    // Validate Message
    if (fields.message.value.trim().length < 10) {
      fields.message.classList.add('error');
      isValid = false;
    } else {
      fields.message.classList.remove('error');
      fields.message.classList.add('success');
    }

    if (isValid) {
      handleFormSubmission();
    }
  });

  function handleFormSubmission() {
    // Show spinner inside button
    submitBtn.disabled = true;
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = `
      Sending...
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin-blob 1.2s linear infinite;"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
    `;

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      _subject: `Portfolio Contact: ${fields.subject.value.trim()}`,
      message: fields.message.value.trim()
    };

    fetch("https://formsubmit.co/ajax/thanushakulal07@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) throw new Error("Failed to send email");
      return response.json();
    })
    .then(data => {
      renderSuccessState(fields.name.value.trim());
    })
    .catch(error => {
      console.error("FormSubmit Error: ", error);
      alert("Oops! There was an issue sending your message. Please try emailing thanushakulal07@gmail.com directly.");
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    });
  }

  function renderSuccessState(userName) {
    container.innerHTML = `
      <div class="contact-success-state scale-in active">
        <div class="success-icon-wrapper flex-center">
          <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 class="timeline-title" style="margin-bottom: 0.5rem;">Thank You, ${userName}!</h3>
        <p class="about-para" style="font-size: 0.95rem; margin-bottom: 2rem;">
          Your message was sent successfully. Thanusha will respond to your inquiry at the provided email shortly.
        </p>
        <button id="contact-reset-btn" class="btn btn-secondary btn-sm" style="border: 1px solid var(--border-color);">
          Send Another Message
        </button>
      </div>
    `;

    // Bind event for restore button
    document.getElementById('contact-reset-btn').addEventListener('click', () => {
      // Re-render empty form fields
      container.innerHTML = renderFormFields();
      // Re-bind contact form listeners
      bindFormLogic(container);
    });
  }
}
