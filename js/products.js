/* Featured product catalog — lightweight, not a full inventory */
(function () {
  const PRODUCTS = [
    {
      id: "mindray-bs480",
      name: "Mindray BS-480",
      category: "diagnostics",
      brand: "Mindray",
      blurb: "High-throughput clinical chemistry analyzer for hospital laboratories.",
      icon: "flask-conical",
    },
    {
      id: "randox-rx",
      name: "Randox RX Series",
      category: "diagnostics",
      brand: "Randox",
      blurb: "Reliable clinical chemistry platforms trusted across diagnostic networks.",
      icon: "test-tubes",
    },
    {
      id: "snibe-maglumi",
      name: "Snibe MAGLUMI",
      category: "diagnostics",
      brand: "Snibe",
      blurb: "Chemiluminescence immunoassay systems for advanced lab testing.",
      icon: "microscope",
    },
    {
      id: "boditech-ichroma",
      name: "Boditech iChroma",
      category: "diagnostics",
      brand: "Boditech",
      blurb: "Point-of-care immunoassay analyzers for rapid clinical decisions.",
      icon: "activity",
    },
    {
      id: "ultrasound",
      name: "Diagnostic Ultrasound",
      category: "imaging",
      brand: "Multi-brand",
      blurb: "Cart-based and portable ultrasound systems for radiology and OB/GYN.",
      icon: "scan",
    },
    {
      id: "xray",
      name: "Digital Radiography",
      category: "imaging",
      brand: "Multi-brand",
      blurb: "DR and imaging accessories for modern radiology departments.",
      icon: "radiation",
    },
    {
      id: "dialife",
      name: "Dialife Dialysis Systems",
      category: "dialysis",
      brand: "Dialife",
      blurb: "Hemodialysis machines and consumables for renal care programs.",
      icon: "droplets",
    },
    {
      id: "ventilator",
      name: "Critical Care Ventilators",
      category: "life-support",
      brand: "Multi-brand",
      blurb: "ICU ventilators and respiratory support for emergency & critical care.",
      icon: "heart-pulse",
    },
    {
      id: "monitor",
      name: "Patient Monitors",
      category: "life-support",
      brand: "Mindray",
      blurb: "Bedside and transport monitors for continuous patient surveillance.",
      icon: "monitor",
    },
  ];

  function render(list) {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;
    grid.innerHTML = list
      .map(
        (item) => `
      <article class="catalog-card reveal" data-category="${item.category}">
        <div class="icon-wrap"><i data-lucide="${item.icon}"></i></div>
        <div>
          <span class="tag" style="display:inline-block;margin-bottom:.55rem;padding:.2rem .65rem;border-radius:999px;background:var(--cyan-soft);color:var(--cyan-ink);font-size:.75rem;font-weight:650;font-family:var(--font-display)">${item.brand} · ${label(item.category)}</span>
          <h3>${item.name}</h3>
          <p>${item.blurb}</p>
        </div>
      </article>`
      )
      .join("");
    if (window.lucide) window.lucide.createIcons();
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  }

  function label(cat) {
    return (
      {
        diagnostics: "Diagnostics",
        imaging: "Imaging",
        dialysis: "Dialysis",
        "life-support": "Life Support",
      }[cat] || cat
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    const bar = document.getElementById("filter-bar");
    if (!bar) return;

    render(PRODUCTS);

    bar.addEventListener("click", (event) => {
      const btn = event.target.closest(".filter-btn");
      if (!btn) return;
      bar.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const filter = btn.dataset.filter;
      const next = filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);
      render(next);
    });
  });
})();
