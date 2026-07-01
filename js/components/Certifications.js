/* Certifications Section Component */
import { certificationsData } from '../data/certifications.js';

export function renderCertifications() {
  let certCardsHtml = '';

  certificationsData.forEach(cert => {
    certCardsHtml += `
      <div class="card cert-card reveal">
        <div class="cert-header">
          <div class="cert-icon-box">
            ${cert.svg}
          </div>
          <span class="badge" style="background: rgba(139, 92, 246, 0.05); color: var(--primary); border: 1px solid rgba(139, 92, 246, 0.15);">Verified</span>
        </div>
        <h3 class="cert-title">${cert.title}</h3>
        <span class="cert-issuer">${cert.issuer}</span>
        <p class="cert-desc" style="margin-top: 1rem;">${cert.description}</p>
      </div>
    `;
  });

  return `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">Extracurricular Achievements</span>
        <h2 class="section-title">Certifications</h2>
      </div>
      
      <div class="grid-2">
        ${certCardsHtml}
      </div>
    </div>
  `;
}
