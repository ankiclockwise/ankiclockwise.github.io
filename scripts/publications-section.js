function publicationsSection(publications) {
  return `
    <section id="publications" aria-labelledby="publications-title">
      ${sectionHeading("Research", "Publications.")}
      <div class="publication-list">
        ${publications.map((publication) => `
          <a class="publication-item" href="${publication.url}" ${publication.url === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'} aria-label="Open ${publication.venue} publication">
            <span class="publication-external" aria-hidden="true">${window.portfolioIcons.externalLink}</span>
            <span class="publication-image">
              <img src="${publication.image}" alt="${publication.imageAlt}">
            </span>
            <div class="publication-content">
              <p class="card-meta">${publication.venue} · ${publication.year}</p>
              <h3>${publication.title}</h3>
            </div>
          </a>
        `).join("")}
      </div>
    </section>
  `;
}
