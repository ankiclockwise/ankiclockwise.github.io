function educationSection(education) {
  return `
    <section id="education" class="education-section" aria-labelledby="education-title">
      <div class="education-inner">
        <h2 id="education-title">Education</h2>
        <div class="education-list">
          ${education.map((item) => `
            <article class="education-item">
              <div class="education-logo">
                <img src="${item.logo}" alt="${item.logoAlt}">
              </div>
              <div class="education-content">
                <h3>${item.institution}</h3>
                <p class="education-degree">${item.degree}</p>
                <p class="education-dates">${item.dates}</p>
                <p class="education-description">${item.description}</p>
                <ul>
                  ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
                </ul>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}
