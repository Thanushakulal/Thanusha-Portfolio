/* Skills Section Component */
import { skillsData } from '../data/skills.js';

export function renderSkills() {
  let categoriesHtml = '';

  skillsData.forEach(cat => {
    let cardsHtml = '';
    
    cat.skills.forEach(skill => {
      cardsHtml += `
        <div class="card skill-card reveal">
          <div class="skill-icon-wrapper">
            ${skill.svg}
          </div>
          <div class="skill-details">
            <h4 class="skill-title">${skill.name}</h4>
            <p class="skill-desc">${skill.description}</p>
          </div>
        </div>
      `;
    });

    categoriesHtml += `
      <div class="skills-category">
        <h3 class="skills-category-title reveal-left">${cat.category}</h3>
        <div class="grid-3">
          ${cardsHtml}
        </div>
      </div>
    `;
  });

  return `
    <div class="container">
      <div class="section-header reveal">
        <span class="section-subtitle">What I Work With</span>
        <h2 class="section-title">My Tech Stack</h2>
      </div>
      
      <div class="skills-wrapper">
        ${categoriesHtml}
      </div>
    </div>
  `;
}
