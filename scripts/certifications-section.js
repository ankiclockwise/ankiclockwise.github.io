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
