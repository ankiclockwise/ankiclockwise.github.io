function experienceSection(experience) {
  return `
    <section id="experience" class="experience-section" aria-labelledby="experience-title">
      <div class="experience-inner">
        <h2 id="experience-title">Software Engineering Experiences</h2>
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
