const TELEGRAM_USERNAME = "Abu202ua";
const PHONE_NUMBER = "+998 50 756 00 00";
const PHONE_HREF = "tel:+998507560000";

let currentLang = "uz";

function t(key) {
  return (UI_STRINGS[currentLang] && UI_STRINGS[currentLang][key]) || key;
}

function pf(product, field) {
  if (currentLang === "ru" && product[field + "Ru"]) return product[field + "Ru"];
  return product[field];
}

function unitLabel(unit) {
  return currentLang === "ru" ? UNIT_LABELS_RU[unit] || unit : unit;
}

function availabilityLabel(product) {
  const map = currentLang === "ru" ? AVAILABILITY_LABELS_RU : AVAILABILITY_LABELS;
  return map[product.availability];
}

function minLabel(qty, unit) {
  return currentLang === "ru" ? `от ${qty} ${unitLabel(unit)}` : `min. ${qty} ${unitLabel(unit)} dan`;
}

function orderTypeLabel(token) {
  return token === "ulgurji" ? t("order_type_ulgurji") : t("order_type_kg");
}

function formatSom(amount) {
  const currency = currentLang === "ru" ? "сум" : "so'm";
  return new Intl.NumberFormat("uz-UZ").format(amount) + " " + currency;
}

function packagingLabel(product, p) {
  const label = currentLang === "ru" ? PACKAGING_LABELS_RU[p.label] || p.label : p.label;
  return `${label} — ${p.amount} ${unitLabel(product.unit)}`;
}

function buildTelegramOrderLink(product, extra) {
  const lines = [
    t("msg_order_greeting"),
    `${t("msg_product")}: ${pf(product, "name")} (${pf(product, "grade")})`,
    `${t("msg_packaging")}: ${extra && extra.packaging ? extra.packaging : packagingLabel(product, product.packagings[0])}`,
    `${t("msg_quantity")}: ${extra && extra.quantity ? extra.quantity : "1"}`,
    `${t("msg_order_type")}: ${orderTypeLabel(extra && extra.orderType ? extra.orderType : "kg")}`
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://t.me/${TELEGRAM_USERNAME}?text=${text}`;
}

function productCardHTML(product) {
  const badgeClass =
    product.availability === "mavjud"
      ? "bg-leaf-100 text-leaf-700 dark:bg-leaf-900/40 dark:text-leaf-300"
      : "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300";

  return `
    <article class="group flex flex-col bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm hover:shadow-lg transition-shadow overflow-hidden" data-category="${product.category}">
      <div class="relative h-40 bg-gradient-to-br from-amber-100 to-leaf-50 dark:from-stone-700 dark:to-stone-800 flex items-center justify-center text-6xl">
        ${product.icon}
        <span class="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass}">
          ${availabilityLabel(product)}
        </span>
      </div>
      <div class="flex flex-col flex-1 p-5 gap-3">
        <div>
          <h3 class="text-lg font-bold text-charcoal dark:text-stone-100">${pf(product, "name")}</h3>
          <p class="text-sm text-stone-500 dark:text-stone-400">${pf(product, "grade")}</p>
        </div>
        <p class="text-sm text-stone-600 dark:text-stone-300 leading-relaxed line-clamp-3">${pf(product, "description")}</p>

        <div class="flex flex-wrap gap-1.5">
          ${product.packagings
            .map(
              (p) =>
                `<span class="text-xs font-medium bg-stone-100 dark:bg-stone-700 text-stone-600 dark:text-stone-300 px-2 py-1 rounded-md">${packagingLabel(product, p)}</span>`
            )
            .join("")}
        </div>

        <div class="mt-1 grid grid-cols-2 gap-2 text-sm border-t border-stone-100 dark:border-stone-700 pt-3">
          <div>
            <p class="text-stone-500 dark:text-stone-400">${t("product_price_retail")}</p>
            <p class="font-bold text-charcoal dark:text-stone-100">${formatSom(product.retailPricePerKg)}<span class="font-normal text-stone-400 dark:text-stone-500">/${unitLabel(product.unit)}</span></p>
          </div>
          <div>
            <p class="text-stone-500 dark:text-stone-400">${t("product_price_wholesale")}</p>
            <p class="font-bold text-leaf-700 dark:text-leaf-400">${formatSom(product.wholesalePricePerKg)}<span class="font-normal text-stone-400 dark:text-stone-500">/${unitLabel(product.unit)}</span></p>
            <p class="text-xs text-stone-400 dark:text-stone-500">${minLabel(product.wholesaleMinKg, product.unit)}</p>
          </div>
        </div>

        <div class="mt-2 flex gap-2">
          <button
            class="add-cart-btn flex-1 bg-white dark:bg-stone-700 border border-amber-600 text-amber-700 dark:text-amber-400 font-semibold py-2.5 rounded-xl hover:bg-amber-50 dark:hover:bg-stone-600 transition-colors text-sm"
            data-product-id="${product.id}"
          >
            ${t("add_to_cart_btn")}
          </button>
          <button
            class="order-btn flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
            data-product-id="${product.id}"
          >
            ${t("order_btn")}
          </button>
        </div>
      </div>
    </article>
  `;
}

const CATALOG_PREVIEW_LIMIT = 6;
let currentFilter = "barchasi";
let currentSearch = "";
let showAllProducts = false;

function getFilteredProducts() {
  return PRODUCTS.filter((p) => {
    const matchesCategory = currentFilter === "barchasi" || p.category === currentFilter;
    const name = pf(p, "name").toLowerCase();
    const grade = pf(p, "grade").toLowerCase();
    const matchesSearch = !currentSearch || name.includes(currentSearch) || grade.includes(currentSearch);
    return matchesCategory && matchesSearch;
  });
}

function renderCatalog() {
  const grid = document.getElementById("catalog-grid");
  const empty = document.getElementById("catalog-empty");
  const showAllBtn = document.getElementById("catalog-show-all");
  const allItems = getFilteredProducts();
  const items = showAllProducts ? allItems : allItems.slice(0, CATALOG_PREVIEW_LIMIT);

  grid.innerHTML = items.map(productCardHTML).join("");
  empty.classList.toggle("hidden", allItems.length > 0);
  showAllBtn.classList.toggle("hidden", showAllProducts || allItems.length <= CATALOG_PREVIEW_LIMIT);

  grid.querySelectorAll(".order-btn").forEach((btn) => {
    btn.addEventListener("click", () => openOrderModal(btn.dataset.productId));
  });
  grid.querySelectorAll(".add-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.productId));
  });
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("bg-amber-600", "text-white");
        b.classList.add("bg-white", "dark:bg-stone-800", "text-charcoal", "dark:text-stone-100");
      });
      btn.classList.add("bg-amber-600", "text-white");
      btn.classList.remove("bg-white", "dark:bg-stone-800", "text-charcoal", "dark:text-stone-100");
      currentFilter = btn.dataset.filter;
      showAllProducts = false;
      renderCatalog();
    });
  });
}

function initSearch() {
  const input = document.getElementById("catalog-search");
  input.addEventListener("input", () => {
    currentSearch = input.value.trim().toLowerCase();
    showAllProducts = false;
    renderCatalog();
  });
}

function initShowAll() {
  const btn = document.getElementById("catalog-show-all");
  btn.addEventListener("click", () => {
    showAllProducts = true;
    renderCatalog();
  });
}

function initThemeToggle() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const iconMoon = document.getElementById("theme-icon-moon");
  const iconSun = document.getElementById("theme-icon-sun");

  function reflectIcons() {
    const isDark = root.classList.contains("dark");
    iconMoon.classList.toggle("hidden", isDark);
    iconSun.classList.toggle("hidden", !isDark);
  }

  reflectIcons();

  toggle.addEventListener("click", () => {
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    reflectIcons();
    try {
      localStorage.setItem("barokat-theme", next);
    } catch (e) {}
  });
}

let cart = [];

function loadCart() {
  try {
    const raw = localStorage.getItem("barokat-cart");
    cart = raw ? JSON.parse(raw) : [];
  } catch (e) {
    cart = [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("barokat-cart", JSON.stringify(cart));
  } catch (e) {}
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  const existing = cart.find((item) => item.productId === productId && item.packagingIndex === 0);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ productId, packagingIndex: 0, quantity: 1 });
  }
  saveCart();
  renderCartBadge();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCartBadge();
  renderCartModal();
}

function renderCartBadge() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll(".cart-badge").forEach((badge) => {
    badge.textContent = count;
    badge.classList.toggle("hidden", count === 0);
  });
}

function renderCartModal() {
  const list = document.getElementById("cart-items");
  const emptyMsg = document.getElementById("cart-empty");
  const footer = document.getElementById("cart-footer");

  if (cart.length === 0) {
    list.innerHTML = "";
    emptyMsg.classList.remove("hidden");
    footer.classList.add("hidden");
    return;
  }

  emptyMsg.classList.add("hidden");
  footer.classList.remove("hidden");

  list.innerHTML = cart
    .map((item, index) => {
      const product = PRODUCTS.find((p) => p.id === item.productId);
      if (!product) return "";
      const packagingOptions = product.packagings
        .map((p, i) => {
          const selected = i === (item.packagingIndex || 0) ? "selected" : "";
          return `<option value="${i}" ${selected}>${packagingLabel(product, p)}</option>`;
        })
        .join("");
      return `
        <div class="flex items-start gap-3 py-3 border-b border-stone-100 dark:border-stone-700 last:border-0">
          <div class="flex-1">
            <p class="font-semibold text-charcoal dark:text-stone-100 text-sm">${pf(product, "name")}</p>
            <div class="mt-2 flex flex-wrap items-center gap-2">
              <select class="cart-packaging text-xs rounded-lg border border-stone-300 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 px-2 py-1.5" data-index="${index}">
                ${packagingOptions}
              </select>
              <input type="number" min="1" value="${item.quantity}" class="cart-quantity w-16 text-xs rounded-lg border border-stone-300 dark:border-stone-600 dark:bg-stone-900 dark:text-stone-100 px-2 py-1.5" data-index="${index}" />
            </div>
          </div>
          <button class="cart-remove text-stone-400 dark:text-stone-500 hover:text-red-600 dark:hover:text-red-400" data-index="${index}" aria-label="${t("aria_cart_remove")}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      `;
    })
    .join("");

  list.querySelectorAll(".cart-packaging").forEach((select) => {
    select.addEventListener("change", () => {
      cart[Number(select.dataset.index)].packagingIndex = Number(select.value);
      saveCart();
    });
  });
  list.querySelectorAll(".cart-quantity").forEach((input) => {
    input.addEventListener("change", () => {
      const qty = Math.max(1, parseInt(input.value, 10) || 1);
      cart[Number(input.dataset.index)].quantity = qty;
      saveCart();
      renderCartBadge();
    });
  });
  list.querySelectorAll(".cart-remove").forEach((btn) => {
    btn.addEventListener("click", () => removeFromCart(Number(btn.dataset.index)));
  });
}

function buildCartTelegramLink(orderType) {
  const lines = [t("msg_cart_greeting")];
  cart.forEach((item, i) => {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    if (!product) return;
    const packaging = packagingLabel(product, product.packagings[item.packagingIndex || 0]);
    lines.push(`${i + 1}) ${pf(product, "name")} — ${packaging} — ${item.quantity} ${t("msg_cart_unit")}`);
  });
  lines.push(`${t("msg_order_type")}: ${orderTypeLabel(orderType)}`);
  return `https://t.me/${TELEGRAM_USERNAME}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function initCart() {
  loadCart();
  renderCartBadge();

  const cartModal = document.getElementById("cart-modal");
  const cartClose = document.getElementById("cart-modal-close");
  const cartClear = document.getElementById("cart-clear");
  const cartSend = document.getElementById("cart-send");

  document.querySelectorAll(".cart-open-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderCartModal();
      cartModal.classList.remove("hidden");
      document.body.classList.add("overflow-hidden");
    });
  });

  function closeCartModal() {
    cartModal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  cartClose.addEventListener("click", closeCartModal);
  cartModal.addEventListener("click", (e) => {
    if (e.target.id === "cart-modal") closeCartModal();
  });

  cartClear.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCartBadge();
    renderCartModal();
  });

  cartSend.addEventListener("click", () => {
    if (cart.length === 0) return;
    const orderType = document.querySelector('input[name="cart-order-type"]:checked').value;
    const link = buildCartTelegramLink(orderType);
    window.open(link, "_blank", "noopener");
    cart = [];
    saveCart();
    renderCartBadge();
    closeCartModal();
  });
}

let activeProduct = null;

function openOrderModal(productId) {
  activeProduct = PRODUCTS.find((p) => p.id === productId);
  if (!activeProduct) return;

  const modal = document.getElementById("order-modal");
  document.getElementById("modal-product-name").textContent = pf(activeProduct, "name");
  document.getElementById("modal-product-grade").textContent = pf(activeProduct, "grade");

  const packagingSelect = document.getElementById("modal-packaging");
  packagingSelect.innerHTML = activeProduct.packagings
    .map((p) => `<option value="${packagingLabel(activeProduct, p)}">${packagingLabel(activeProduct, p)}</option>`)
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

function populateContactProductSelect() {
  const productSelect = document.getElementById("contact-product");
  const previousValue = productSelect.value;
  productSelect.innerHTML =
    `<option value="">${t("form_product_placeholder")}</option>` +
    PRODUCTS.map((p) => `<option value="${p.id}">${pf(p, "name")}</option>`).join("");
  if (previousValue && PRODUCTS.some((p) => p.id === previousValue)) {
    productSelect.value = previousValue;
  }
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const productSelect = document.getElementById("contact-product");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const phone = document.getElementById("contact-phone").value.trim();
    const product = PRODUCTS.find((p) => p.id === productSelect.value);
    const quantity = document.getElementById("contact-quantity").value.trim();
    const orderType = document.querySelector('input[name="contact-order-type"]:checked').value;

    const lines = [
      t("msg_contact_greeting"),
      `${t("msg_contact_name")}: ${name}`,
      `${t("msg_contact_phone")}: ${phone}`,
      product ? `${t("msg_product")}: ${pf(product, "name")}` : null,
      quantity ? `${t("msg_quantity")}: ${quantity}` : null,
      `${t("msg_order_type")}: ${orderTypeLabel(orderType)}`
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

function applyLanguage(lang) {
  currentLang = lang === "ru" ? "ru" : "uz";
  document.documentElement.lang = currentLang;

  try {
    localStorage.setItem("barokat-lang", currentLang);
  } catch (e) {}

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (UI_STRINGS[currentLang][key] !== undefined) el.textContent = UI_STRINGS[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (UI_STRINGS[currentLang][key] !== undefined) el.placeholder = UI_STRINGS[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (UI_STRINGS[currentLang][key] !== undefined) el.setAttribute("aria-label", UI_STRINGS[currentLang][key]);
  });

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    const key = btn.dataset.filter;
    const map = currentLang === "ru" ? CATEGORY_LABELS_RU : CATEGORY_LABELS;
    if (map[key]) btn.textContent = map[key];
  });

  document.querySelectorAll(".lang-toggle-label").forEach((el) => {
    el.textContent = currentLang === "ru" ? "UZ" : "RU";
  });

  renderCatalog();
  populateContactProductSelect();

  if (activeProduct) {
    document.getElementById("modal-product-name").textContent = pf(activeProduct, "name");
    document.getElementById("modal-product-grade").textContent = pf(activeProduct, "grade");
    const packagingSelect = document.getElementById("modal-packaging");
    packagingSelect.innerHTML = activeProduct.packagings
      .map((p) => `<option value="${packagingLabel(activeProduct, p)}">${packagingLabel(activeProduct, p)}</option>`)
      .join("");
  }

  if (!document.getElementById("cart-modal").classList.contains("hidden")) {
    renderCartModal();
  }
}

function initLangToggle() {
  let stored = null;
  try {
    stored = localStorage.getItem("barokat-lang");
  } catch (e) {}
  applyLanguage(stored === "ru" ? "ru" : "uz");

  document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(currentLang === "ru" ? "uz" : "ru");
    });
  });
}

function initSettingsMenu() {
  const toggle = document.getElementById("settings-toggle");
  const menu = document.getElementById("settings-menu");

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  });

  menu.querySelectorAll(".settings-menu-link").forEach((link) =>
    link.addEventListener("click", () => menu.classList.add("hidden"))
  );

  document.addEventListener("click", (e) => {
    if (!menu.classList.contains("hidden") && !menu.contains(e.target) && e.target !== toggle) {
      menu.classList.add("hidden");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initFilters();
  initSearch();
  initShowAll();
  initModal();
  initContactForm();
  initFooterYear();
  initTelegramLinks();
  initThemeToggle();
  initCart();
  initLangToggle();
  initSettingsMenu();
});
