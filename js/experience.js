/* Work / installation experience search */
(function () {
  const WORK = [
    {
      year: "2023–Present",
      title: "Bangladesh Police Hospital",
      detail: "Strategic hospital partner — diagnostics, imaging support, and ongoing field-service coverage for a flagship government healthcare facility.",
      category: "Government Hospital",
      featured: true,
    },
    {
      year: "2019–2024",
      title: "National Diagnostic Network Rollouts",
      detail: "Multi-site chemistry and immunoassay analyzer installations with engineer training and preventive maintenance contracts.",
      category: "Diagnostics",
      featured: false,
    },
    {
      year: "2018–2023",
      title: "Public Tender Programs",
      detail: "Successful participation in government and institutional tenders for laboratory and critical-care equipment packages.",
      category: "Tenders",
      featured: false,
    },
    {
      year: "2017–Present",
      title: "Nationwide Service Coverage",
      detail: "60+ field engineers delivering installation, calibration, and after-sales support across Bangladesh.",
      category: "Service",
      featured: false,
    },
    {
      year: "2016–2022",
      title: "Dialysis Center Equipping",
      detail: "Supply and commissioning of hemodialysis systems and consumable pipelines for renal care units.",
      category: "Dialysis",
      featured: false,
    },
    {
      year: "2015–Present",
      title: "Private Hospital Partnerships",
      detail: "Long-term distribution relationships for imaging, monitoring, and lab platforms with private healthcare groups.",
      category: "Hospitals",
      featured: false,
    },
  ];

  function render(list) {
    const grid = document.getElementById("work-grid");
    if (!grid) return;

    if (!list.length) {
      grid.innerHTML = `<p class="lead">No matching projects. Try another keyword.</p>`;
      return;
    }

    grid.innerHTML = list
      .map(
        (item) => `
      <article class="work-item reveal ${item.featured ? "is-featured" : ""}">
        <div class="year">${item.year}</div>
        <div>
          <h3>${item.title}</h3>
          <p>${item.detail}</p>
        </div>
        <span class="badge">${item.category}</span>
      </article>`
      )
      .join("");

    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("work-search");
    if (!input) return;

    render(WORK);

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) {
        render(WORK);
        return;
      }
      render(
        WORK.filter(
          (item) =>
            item.title.toLowerCase().includes(q) ||
            item.detail.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
        )
      );
    });
  });
})();
