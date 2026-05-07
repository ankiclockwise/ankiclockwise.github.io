function projectsSection(projects) {
  const hasMoreProjects = projects.length > 3;

  return `
    <section id="projects" aria-labelledby="projects-title">
      ${sectionHeading("Projects", "Selected work.")}
      <div class="project-grid">
        ${projects.map((project, index) => `
          <article class="project-card" ${index >= 3 ? 'hidden data-project-extra' : ""}>
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
      ${hasMoreProjects ? `
        <div class="project-more-wrap">
          <button class="project-more-button" type="button" data-project-toggle aria-expanded="false">
            <span class="project-more-arrow" aria-hidden="true"></span>
            <span data-project-toggle-label>See more</span>
          </button>
        </div>
      ` : ""}
    </section>
  `;
}

function initProjectInteractions() {
  const button = document.querySelector("[data-project-toggle]");

  if (!button) {
    return;
  }

  const label = button.querySelector("[data-project-toggle-label]");
  const extraProjects = Array.from(document.querySelectorAll("[data-project-extra]"));

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";

    extraProjects.forEach((project) => {
      project.hidden = expanded;
    });

    button.setAttribute("aria-expanded", String(!expanded));
    label.textContent = expanded ? "See more" : "See less";
  });
}
