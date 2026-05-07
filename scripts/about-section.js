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
