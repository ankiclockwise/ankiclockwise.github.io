function heroSection(data) {
  const icons = window.portfolioIcons;
  const title = data.title.replace(data.highlightedTitle, `<span>${data.highlightedTitle}</span>`);

  return `
    <section class="hero" aria-labelledby="hero-title">
      <div>
        <p class="eyebrow">Portfolio</p>
        <h1 id="hero-title">${title}</h1>
        <p class="lead">${data.intro}</p>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button" href="#projects">${icons.arrow} View work</a>
          <a class="button secondary" href="mailto:${data.email}" aria-label="Email me on Gmail">${icons.gmail} Gmail</a>
        </div>
      </div>
      <aside class="hero-card" aria-label="Portfolio snapshot">
        <div class="portrait-panel">
          <div class="portrait-top">
            <span class="status-pill"><span class="status-dot"></span>${data.status}</span>
            <span class="status-pill">${data.location}</span>
          </div>
          <div class="monogram" aria-hidden="true">${data.initials}</div>
        </div>
        <div class="snapshot">
          <div><strong>01</strong><span>Page portfolio</span></div>
          <div><strong>06</strong><span>Core sections</span></div>
          <div><strong>8+</strong><span>Room to grow</span></div>
        </div>
      </aside>
    </section>
  `;
}

function aboutSection(data) {
  return `
    <section id="about" aria-labelledby="about-title">
      ${sectionHeading("About", data.about.title, data.about.intro)}
      <div class="about-grid">
        <div class="text-panel">${data.about.paragraphs.map((text) => `<p>${text}</p>`).join("")}</div>
        <aside class="side-panel" aria-label="Quick facts">
          ${data.about.facts.map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </aside>
      </div>
    </section>
  `;
}

function timelineSection(id, kicker, title, intro, entries, label) {
  return `
    <section id="${id}" aria-labelledby="${id}-title">
      ${sectionHeading(kicker, title, intro)}
      <div class="timeline">${entries.map((item) => timelineItem(item, label)).join("")}</div>
    </section>
  `;
}

function educationSection(education) {
  return `
    <section id="education" aria-labelledby="education-title">
      ${sectionHeading("Education", "Education.", "Click a university tile to see courses, GPA, and campus work.")}
      <div class="education-grid">
        ${education.map((item) => `
          <details class="education-card">
            <summary>
              <span class="education-logo-tile">
                <img src="${item.logo}" alt="${item.logoAlt}">
              </span>
              <span class="education-card-title">
                <span>${item.degree}</span>
                <strong>${item.institution}</strong>
              </span>
            </summary>
            <div class="education-details">
              ${item.details.map(([label, value]) => `
                <div>
                  <span>${label}</span>
                  <p>${value}</p>
                </div>
              `).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `;
}

function projectsSection(projects) {
  return `
    <section id="projects" aria-labelledby="projects-title">
      ${sectionHeading("Projects", "Selected work.", "These compact cards keep project details on the main page while still giving visitors external demo or code links when available.")}
      <div class="project-grid">
        ${projects.map((project) => `
          <article class="project-card">
            <div>
              <p class="card-meta">${project.meta}</p>
              <h3>${project.title}</h3>
              <p>${project.description}</p>
            </div>
            <div>
              <div class="tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
              <div class="card-links">${project.links.map(([label, url]) => `<a href="${url}" ${url === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>${label}</a>`).join("")}</div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function skillsSection(skills) {
  return `
    <section id="skills" aria-labelledby="skills-title">
      ${sectionHeading("Skills", "Tooling and strengths.", "Grouped skills are easier to scan than a long comma-separated wall.")}
      <div class="skills-grid">
        ${skills.map(([group, items]) => `
          <article class="skill-group">
            <h3>${group}</h3>
            <div class="skill-list">${items.map((skill) => `<span>${skill}</span>`).join("")}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function certificationsSection(certifications) {
  return `
    <section id="certifications" aria-labelledby="certifications-title">
      ${sectionHeading("Certifications", "Credentials.", "Certification issuer marks are ready to be replaced with official icons once the credential list is known.")}
      <div class="cert-grid">
        ${certifications.map((cert) => `
          <article class="cert-card">
            ${logoMark(cert.icon, "Certification logo placeholder")}
            <div>
              <p class="card-meta">${cert.meta}</p>
              <h3>${cert.title}</h3>
              <div class="card-links"><a href="${cert.url}" ${cert.url === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>Credential</a></div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function contactSection(data) {
  const icons = window.portfolioIcons;

  return `
    <section id="contact" aria-labelledby="contact-title">
      ${sectionHeading("Contact", "Let's connect.", "External profile links open out, but the portfolio itself stays concentrated on one page.")}
      <div class="contact-grid">
        <div class="contact-panel primary">
          <h3>Have a role, project, or collaboration in mind?</h3>
          <p>Swap in your real email and profile URLs below. This panel is designed as a direct closing section, not a second landing page.</p>
          <div class="contact-actions">
            <a class="button" href="mailto:${data.email}" aria-label="Email me on Gmail">${icons.gmail} Gmail</a>
            <a class="button secondary" href="${data.linkedin.url}" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile">${icons.linkedin} LinkedIn</a>
          </div>
        </div>
        <aside class="contact-panel">
          <h3>Profiles</h3>
          <div class="contact-list">
            <a class="contact-link" href="mailto:${data.email}" aria-label="Email me on Gmail"><strong class="contact-main">${profileIcon("gmail", "Gmail")}</strong><span class="contact-value">${data.email}</span></a>
            <a class="contact-link" href="${data.github.url}" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><strong class="contact-main">${profileIcon("github", "GitHub")}</strong><span class="contact-value">${data.github.label}</span></a>
            <a class="contact-link" href="${data.linkedin.url}" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile"><strong class="contact-main">${profileIcon("linkedin", "LinkedIn")}</strong><span class="contact-value">${data.linkedin.label}</span></a>
          </div>
        </aside>
      </div>
    </section>
  `;
}
