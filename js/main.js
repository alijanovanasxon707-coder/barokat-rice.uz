const TELEGRAM_USERNAME = "barokat_rice";
const PHONE_NUMBER = "+998 50 756 00 00";
const PHONE_HREF = "tel:+998507560000";

function formatSom(amount) {
  return new Intl.NumberFormat("uz-UZ").format(amount) + " so'm";
}

function packagingLabel(p) {
  return `${p.label} — ${p.weightKg} kg`;
}

function buildTelegramOrderLink(product, extra) {
  const lines = [
    `Assalomu alaykum! Buyurtma bermoqchiman:`,
    `Mahsulot: ${product.name} (${product.grade})`,
    `Qadoqlash: ${extra && extra.packaging ? extra.packaging : packagingLabel(product.packagings[0])}`,
    `Miqdori: ${extra && extra.quantity ? extra.quantity : "1"}`,
    `Buyurtma turi: ${extra && extra.orderType ? extra.orderType : "Dona-dona"}`
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://t.me/${TELEGRAM_USERNAME}?text=${text}`;
}

function productCardHTML(product) {
  const isAvailable = product.availability === "mavjud";
  const badgeClass = isAvailable
    ? "bg-leaf-100 text-leaf-700"
    : "bg-amber-100 text-amber-700";

  return `
    <article class="group flex flex-col bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-lg transition-shadow overflow-hidden" data-category="${product.category}">
      <div class="relative h-40 bg-gradient-to-br from-amber-100 to-leaf-50 flex items-center justify-center text-6xl">
        ${product.icon}
        <span class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass}">
          ${AVAILABILITY_LABELS[product.availability]}
        </span>
      </div>
      <div class="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 class="text-lg font-bold text-charcoal">${product.name}</h3>
          <p class="text-sm text-stone-500">${product.grade}</p>
        </div>
        <p class="text-sm text-stone-600 leading-relaxed line-clamp-3">${product.description}</p>

        <div class="flex flex-wrap gap-1.5">
          ${product.packagings
            .map(
              (p) =>
                `<span class="text-xs font-medium bg-stone-100 text-stone-600 px-2 py-1 rounded-md">${packagingLabel(p)}</span>`
            )
            .join("")}
        </div>

        <div class="mt-1 grid grid-cols-2 gap-2 text-sm border-t border-stone-100 pt-3">
          <div>
            <p class="text-stone-500">Dona-dona narx</p>
            <p class="font-bold text-charcoal">${formatSom(product.retailPricePerKg)}<span class="font-normal text-stone-400">/kg</span></p>
          </div>
          <div>
            <p class="text-stone-500">Ulgurji narx</p>
            <p class="font-bold text-leaf-700">${formatSom(product.wholesalePricePerKg)}<span class="font-normal text-stone-400">/kg</span></p>
            <p class="text-xs text-stone-400">min. ${product.wholesaleMinKg} kg dan</p>
          </div>
        </div>

        <button
          class="order-btn mt-2 w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-xl transition-colors"
          data-product-id="${product.id}"
        >
          Buyurtma berish
        </button>
      </div>
    </article>
  `;
}

function renderCatalog(filter) {
  const grid = document.getElementById("catalog-grid");
  const empty = document.getElementById("catalog-empty");
  const items =
    filter === "barchasi" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  grid.innerHTML = items.map(productCardHTML).join("");
  empty.classList.toggle("hidden", items.length > 0);

  grid.querySelectorAll(".order-btn").forEach((btn) => {
    btn.addEventListener("click", () => openOrderModal(btn.dataset.productId));
  });
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("bg-amber-600", "text-white");
        b.classList.add("bg-white", "text-charcoal");
      });
      btn.classList.add("bg-amber-600", "text-white");
      btn.classList.remove("bg-white", "text-charcoal");
      renderCatalog(btn.dataset.filter);
    });
  });
}

let activeProduct = null;

function openOrderModal(productId) {
  activeProduct = PRODUCTS.find((p) => p.id === productId);
  if (!activeProduct) return;

  const modal = document.getElementById("order-modal");
  document.getElementById("modal-product-name").textContent = activeProduct.name;
  document.getElementById("modal-product-grade").textContent = activeProduct.grade;

  const packagingSelect = document.getElementById("modal-packaging");
  packagingSelect.innerHTML = activeProduct.packagings
    .map((p) => `<option value="${packagingLabel(p)}">${packagingLabel(p)}</option>`)
    .join("");

  document.getElementById("modal-quantity").value = 1;
  document.getElementById("order-type-chakana").checked = true;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeOrderModal() {
  document.getElementById("order-modal").classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  activeProduct = null;
}

function initModal() {
  document.getElementById("modal-close").addEventListener("click", closeOrderModal);
  document.getElementById("order-modal").addEventListener("click", (e) => {
    if (e.target.id === "order-modal") closeOrderModal();
  });

  document.getElementById("modal-telegram-btn").addEventListener("click", () => {
    if (!activeProduct) return;
    const packaging = document.getElementById("modal-packaging").value;
    const quantity = document.getElementById("modal-quantity").value;
    const orderType = document.querySelector('input[name="order-type"]:checked').value;
    const link = buildTelegramOrderLink(activeProduct, { packaging, quantity, orderType });
    window.open(link, "_blank", "noopener");
  });
}

function initMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("mobile-menu");
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
  menu.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => menu.classList.add("hidden"))
  );
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const productSelect = document.getElementById("contact-product");
  productSelect.innerHTML =
    `<option value="">Mahsulotni tanlang</option>` +
    PRODUCTS.map((p) => `<option value="${p.name}">${p.name}</option>`).join("");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const product = productSelect.value;
    const quantity = document.getElementById("contact-quantity").value.trim();
    const orderType = document.querySelector('input[name="contact-order-type"]:checked').value;

    const lines = [
      "Assalomu alaykum! Yangi so'rov:",
      `Ism: ${name}`,
      `Telefon: ${phone}`,
      product ? `Mahsulot: ${product}` : null,
      quantity ? `Miqdori: ${quantity}` : null,
      `Buyurtma turi: ${orderType}`
    ].filter(Boolean);

    const link = `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(link, "_blank", "noopener");

    const feedback = document.getElementById("contact-feedback");
    feedback.classList.remove("hidden");
    form.reset();
    setTimeout(() => feedback.classList.add("hidden"), 6000);
  });
}

function initFooterYear() {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

function initTelegramLinks() {
  document.querySelectorAll("[data-telegram-link]").forEach((el) => {
    el.href = `https://t.me/${TELEGRAM_USERNAME}`;
  });
  document.querySelectorAll("[data-phone-link]").forEach((el) => {
    el.href = PHONE_HREF;
    if (el.dataset.phoneText === "true") el.textContent = PHONE_NUMBER;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCatalog("barchasi");
  initFilters();
  initModal();
  initMobileNav();
  initContactForm();
  initFooterYear();
  initTelegramLinks();
});
