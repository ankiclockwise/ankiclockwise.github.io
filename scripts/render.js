const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Certifications", "certifications"],
  ["Contact", "contact"]
];

function renderPortfolio() {
  const data = window.portfolioData;

  document.querySelector("[data-brand-mark]").textContent = data.initials;
  document.querySelector("[data-brand-name]").textContent = data.name;
  document.querySelector("[data-footer]").textContent = `Copyright 2026 ${data.name}. Built as a fast, one-page portfolio.`;
  document.querySelector("[data-nav]").innerHTML = navItems.map(([label, id]) => `<a href="#${id}">${label}</a>`).join("");

  document.querySelector("[data-app]").innerHTML = [
    heroSection(data),
    aboutSection(data),
    timelineSection("experience", "Experience", "Roles and impact.", "Company logo placeholders are styled consistently here. Send the company names and I can replace these with official local assets.", data.experience, "Company logo placeholder"),
    educationSection(data.education),
    projectsSection(data.projects),
    skillsSection(data.skills),
    certificationsSection(data.certifications),
    contactSection(data)
  ].join("");
}
