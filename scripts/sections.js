function heroSection(data) {
  const icons = window.portfolioIcons;
  const title = data.title.replace(data.highlightedTitle, `<span>${data.highlightedTitle}</span>`);

  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Developer Portfolio</p>
        <h1 id="hero-title">${title}</h1>
        <p class="lead">${data.intro}</p>
        <div class="hero-socials" aria-label="Social links">
          <a href="${data.github.url}" target="_blank" rel="noreferrer" aria-label="GitHub">${icons.github}</a>
          <a href="${data.linkedin.url}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icons.linkedin}</a>
          <a href="${data.contactForm.url}" target="_blank" rel="noreferrer" aria-label="${data.contactForm.label}">${icons.mail}</a>
        </div>
        <div class="hero-actions" aria-label="Primary actions">
          <a class="button" href="${data.contactForm.url}" target="_blank" rel="noreferrer">${data.contactForm.label}</a>
          <a class="button secondary" href="#projects">${icons.arrow} See my work</a>
        </div>
      </div>
      <aside class="hero-visual" aria-label="Portfolio portrait">
        <div class="hero-image-card">
          <img src="${data.heroImage}" alt="${data.name}">
        </div>
        <div class="hero-status-card">
          <span><span class="status-dot"></span>${data.status}</span>
          ${data.location ? `<strong>${data.location}</strong>` : ""}
        </div>
      </aside>
    </section>
  `;
}

function aboutSection(data) {
  return `
    <section id="about" aria-labelledby="about-title">
      ${sectionHeading("About", data.about.title)}
      <div class="about-grid">
        <div class="text-panel">${data.about.paragraphs.map((text) => `<p>${text}</p>`).join("")}</div>
        <aside class="side-panel" aria-label="Quick facts">
          ${data.about.facts.map(([label, value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </aside>
      </div>
    </section>
  `;
}

function timelineSection(id, kicker, title, entries, label) {
  return `
    <section id="${id}" aria-labelledby="${id}-title">
      ${sectionHeading(kicker, title)}
      <div class="timeline">${entries.map((item) => timelineItem(item, label)).join("")}</div>
    </section>
  `;
}

function experienceSection(experience) {
  return `
    <section id="experience" class="experience-section" aria-labelledby="experience-title">
      <div class="experience-inner">
        <h2 id="experience-title">Experiences</h2>
        <div class="experience-card-grid">
          ${experience.map((item, index) => `
            <article class="experience-card" style="--company-color: ${item.theme}" data-experience-card>
              <div class="experience-card-top">
                <h3>${item.company}</h3>
              </div>
              <div class="experience-logo">
                <img src="${item.logo}" alt="${item.logoAlt}">
              </div>
              <div class="experience-card-body">
                <h4>${item.role}</h4>
                <p class="experience-dates">${item.dates}</p>
                <p class="experience-description">${item.description}</p>
                <button class="experience-toggle" type="button" data-experience-toggle aria-expanded="false" aria-label="Show impact" aria-controls="experience-details-${index}">
                  <span class="experience-arrow" aria-hidden="true"></span>
                </button>
                <ul id="experience-details-${index}" hidden>
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

function initExperienceInteractions() {
  document.querySelectorAll("[data-experience-card]").forEach((card) => {
    const toggle = card.querySelector("[data-experience-toggle]");
    const details = card.querySelector("ul");

    function toggleDetails() {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.setAttribute("aria-label", expanded ? "Show impact" : "Hide impact");
      details.hidden = expanded;
      card.classList.toggle("expanded", !expanded);
    }

    card.addEventListener("click", toggleDetails);
  });
}

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

function projectsSection(projects) {
  return `
    <section id="projects" aria-labelledby="projects-title">
      ${sectionHeading("Projects", "Selected work.")}
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

function publicationsSection(publications) {
  return `
    <section id="publications" aria-labelledby="publications-title">
      ${sectionHeading("Research", "Publications.")}
      <div class="publication-list">
        ${publications.map((publication) => `
          <article class="publication-item">
            <div class="publication-badge">${publication.venue}</div>
            <div>
              <p class="card-meta">${publication.year}</p>
              <h3>${publication.title}</h3>
            </div>
            <div class="card-links"><a href="${publication.url}" ${publication.url === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>Read paper</a></div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function skillsSection(skills) {
  return `
    <section id="skills" aria-labelledby="skills-title">
      ${sectionHeading("Skills", "Tooling and strengths.")}
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
      ${sectionHeading("Certifications", "Certifications.")}
      <div class="cert-grid">
        ${certifications.map((cert) => `
          <article class="cert-card">
            <a class="cert-image" href="${cert.url}" target="_blank" rel="noreferrer" aria-label="Open ${cert.title} credential">
              <img src="${cert.image}" alt="${cert.imageAlt}">
            </a>
            <div class="cert-card-content">
              <h3>${cert.title}</h3>
              <a class="cert-issuer-link" href="${cert.url}" target="_blank" rel="noreferrer">${cert.meta}</a>
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
      ${sectionHeading("Contact", "Let's connect.")}
      <div class="contact-grid">
        <div class="contact-panel primary">
          <h3>Got an opportunity, a project, or a collaboration that needs another brain in the mix? three words. Hit. Me. Up.</h3>
          <h4><i>And if you’ve made it this far, you probably know a fair bit about me already. Now, let’s make it mutual?</i></h4>
        </div>
        <aside class="contact-panel">
          <h3>Profiles</h3>
          <div class="contact-list">
            <a class="contact-link" href="${data.contactForm.url}" target="_blank" rel="noreferrer" aria-label="${data.contactForm.label}"><strong class="contact-main">${profileIcon("mail", "Contact")}</strong><span class="contact-value">${data.contactForm.label}</span></a>
            <a class="contact-link" href="${data.github.url}" target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><strong class="contact-main">${profileIcon("github", "GitHub")}</strong><span class="contact-value">${data.github.label}</span></a>
            <a class="contact-link" href="${data.linkedin.url}" target="_blank" rel="noreferrer" aria-label="Open LinkedIn profile"><strong class="contact-main">${profileIcon("linkedin", "LinkedIn")}</strong><span class="contact-value">${data.linkedin.label}</span></a>
          </div>
        </aside>
      </div>
    </section>
  `;
}
