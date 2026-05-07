const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Publications", "publications"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Contact", "contact"]
];

function renderPortfolio() {
  const data = window.portfolioData;

  document.querySelector("[data-brand-mark]").textContent = data.initials;
  document.querySelector("[data-brand-name]").textContent = data.name;
  document.querySelector("[data-footer]").textContent = data.footer;
  document.querySelector("[data-nav]").innerHTML = navItems.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("");

  document.querySelector("[data-app]").innerHTML = [
    heroSection(data),
    aboutSection(data),
    experienceSection(data.experience),
    educationSection(data.education),
    projectsSection(data.projects),
    publicationsSection(data.publications),
    skillsSection(data.skills),
    certificationsSection(data.certifications),
    contactSection(data)
  ].join("");

  initExperienceInteractions();
}
