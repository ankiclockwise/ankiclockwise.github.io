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
