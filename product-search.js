const copy = {
  en: {
    operations: "OPERATIONS",
    planning: "PLANNING",
    dashboard: "Dashboard",
    alerts: "Alerts",
    inventory: "Inventory",
    products: "Products",
    forecast: "AI forecast",
    orders: "Purchase orders",
    suppliers: "Suppliers",
    reports: "Reports",
    mainNavigation: "Main navigation",
    language: "Language",
    accountName: "Warehouse Manager",
    initials: "WM",
    manager: "Manager",
    popupRole: "Admin",
    usersTitle: "Active users",
    usersSubtitle: "Signed in to the website",
    connected: "online",
    employee: "Employee",
    trader: "Merchant",
    active: "Active now",
    logout: "Log out",
    back: "Back",
    title: "Search products",
    searchBy: "SEARCH BY",
    allFields: "All fields",
    productName: "Product name",
    sku: "SKU",
    company: "Company name",
    orderNumber: "Order number",
    category: "Category",
    footer: "© 2027 Smart Warehouse. All rights reserved.",
    searchPlaceholder: "Search products, SKUs...",
    seedByField: {
      allFields: "Product",
      productName: "Product",
      sku: "SKU",
      company: "Product",
      orderNumber: "Product",
      category: "Product",
    },
    results: (q, f, n) =>
      `Showing results for “<strong>${esc(q || "…")}</strong>” in <strong>${f}</strong> · <strong>${n}</strong> results`,
    empty: "No products found",
    view: "View",
  },
  ar: {
    operations: "العمليات",
    planning: "التخطيط",
    dashboard: "لوحة التحكم",
    alerts: "التنبيهات",
    inventory: "المخزون",
    products: "المنتجات",
    forecast: "توقعات الذكاء الاصطناعي",
    orders: "أوامر الشراء",
    suppliers: "الموردون",
    reports: "التقارير",
    mainNavigation: "التنقل الرئيسي",
    language: "اللغة",
    accountName: "مدير المخزن",
    initials: "م أ",
    manager: "مدير",
    popupRole: "مدير",
    usersTitle: "المستخدمون النشطون",
    usersSubtitle: "سجلوا الدخول إلى الموقع",
    connected: "متصلون",
    employee: "موظف",
    trader: "تاجر",
    active: "نشط الآن",
    logout: "تسجيل الخروج",
    back: "رجوع",
    title: "البحث عن المنتجات",
    searchBy: "البحث حسب",
    allFields: "كل الحقول",
    productName: "اسم المنتج",
    sku: "SKU",
    company: "اسم الشركة",
    orderNumber: "رقم الطلب",
    category: "الفئة",
    footer: "© ٢٠٢٧ Smart Warehouse. جميع الحقوق محفوظة.",
    searchPlaceholder: "ابحث عن المنتجات ورموز SKU...",
    seedByField: {
      allFields: "منتج",
      productName: "منتج",
      sku: "SKU",
      company: "منتج",
      orderNumber: "منتج",
      category: "منتج",
    },
    results: (q, f, n) =>
      `عرض نتائج «<strong>${esc(q || "…")}</strong>» في <strong>${f}</strong> · <strong>${n}</strong> نتائج`,
    empty: "لا توجد منتجات",
    view: "عرض",
  },
};
const products = [
  {
    name: "product 1",
    arName: "المنتج 1",
    sku: "SKU-2210",
    zone: "Zone A-12",
    arZone: "منطقة A-12",
    price: "EGP 12.50",
    arPrice: "EGP 12.50",
  },
  {
    name: "product 2",
    arName: "المنتج 2",
    sku: "SKU-3087",
    zone: "Zone A-14",
    arZone: "منطقة A-14",
    price: "EGP 9.75",
    arPrice: "EGP 9.75",
  },
  {
    name: "product 3",
    arName: "المنتج 3",
    sku: "SKU-1042",
    zone: "Zone B-02",
    arZone: "منطقة B-02",
    price: "EGP 38.00",
    arPrice: "EGP 38.00",
  },
  {
    name: "product 4",
    arName: "المنتج 4",
    sku: "SKU-2301",
    zone: "Zone D-07",
    arZone: "منطقة D-07",
    price: "EGP 21.00",
    arPrice: "EGP 21.00",
  },
];
const users = [
  {
    en: "Ahmed Hassan",
    ar: "أحمد حسن",
    email: "ahmed@smartwh.com",
    enInitials: "AH",
    arInitials: "أح",
    role: "employee",
  },
  {
    en: "Sara Mostafa",
    ar: "سارة مصطفى",
    email: "sara@smartwh.com",
    enInitials: "SM",
    arInitials: "س م",
    role: "employee",
  },
  {
    en: "Karim Adel",
    ar: "كريم عادل",
    email: "karim@supplier.com",
    enInitials: "KA",
    arInitials: "ك ع",
    role: "trader",
  },
  {
    en: "Nour Youssef",
    ar: "نور يوسف",
    email: "nour@smartwh.com",
    enInitials: "NY",
    arInitials: "ن ي",
    role: "employee",
  },
  {
    en: "Mona Tarek",
    ar: "منى طارق",
    email: "mona@smartwh.com",
    enInitials: "MT",
    arInitials: "م ط",
    role: "trader",
  },
];
const $ = (selector) => document.querySelector(selector);
let field = "company";
let quickMode = false;
function esc(value) {
  return String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
}
function mark(value, term) {
  const index = value.toLocaleLowerCase().indexOf(term.toLocaleLowerCase());
  if (!term || index < 0) return esc(value);
  return (
    esc(value.slice(0, index)) +
    '<mark class="match">' +
    esc(value.slice(index, index + term.length)) +
    "</mark>" +
    esc(value.slice(index + term.length))
  );
}
function seedFor(d) {
  return d.seedByField[field] || d.seedByField.allFields;
}
function getValue(product, key, lang) {
  const name = lang === "ar" ? product.arName : product.name,
    zone = lang === "ar" ? product.arZone : product.zone;
  if (key === "productName" || key === "company") return name;
  if (key === "sku") return product.sku;
  return [name, product.sku, zone, product.price].join(" ");
}
function renderUsers() {
  const lang = document.documentElement.lang,
    d = copy[lang];
  $("#usersList").innerHTML = users
    .map(
      (user, index) =>
        `<li class="user-row"><span class="user-avatar user-tone-${index + 1}">${lang === "ar" ? user.arInitials : user.enInitials}<i class="presence is-online" role="img" aria-label="${d.active}" title="${d.active}"></i></span><span class="user-details"><strong>${lang === "ar" ? user.ar : user.en}</strong><span class="user-detail"><bdi dir="ltr">${user.email}</bdi></span></span><span class="user-role ${user.role}">${d[user.role]}</span></li>`,
    )
    .join("");
  $("#usersList").setAttribute(
    "aria-label",
    lang === "ar" ? "المستخدمون" : "Users",
  );
  $(".online-count").textContent = String(users.length);
}
function render() {
  const lang = document.documentElement.lang,
    d = copy[lang],
    query = $("#query").value.trim(),
    seed = seedFor(d),
    isSeed = query.toLocaleLowerCase() === seed.toLocaleLowerCase(),
    needle = isSeed ? "" : query.toLocaleLowerCase(),
    key = quickMode ? "allFields" : field;
  const items = products.filter(
    (product) =>
      !needle ||
      getValue(product, key, lang).toLocaleLowerCase().includes(needle),
  );
  const summaryField = field === "company" ? d.productName : d[field];
  $(".summary").innerHTML = d.results(
    query,
    quickMode ? d.allFields : summaryField,
    items.length,
  );
  $(".results").innerHTML = items.length
    ? items
        .map((product) => {
          const name = lang === "ar" ? product.arName : product.name,
            zone = lang === "ar" ? product.arZone : product.zone,
            price = lang === "ar" ? product.arPrice : product.price;
          const term =
            key === "allFields" || key === "productName" || key === "company"
              ? needle
              : "";
          return `<li class="result"><span class="product-icon" aria-hidden="true"><svg viewBox="0 0 20 20"><path d="M4 3v14M7 3v14M9 3v14M12 3v14M15 3v14M17 3v14M3 2h14v16H3z"/></svg></span><div class="result-copy"><strong>${mark(name, term)}</strong><p><bdi dir="ltr">${product.sku}</bdi> · <bdi dir="ltr">${zone}</bdi> · <bdi dir="ltr">${price}</bdi></p></div><a class="view" href="#">${d.view}</a></li>`;
        })
        .join("")
    : `<li class="result empty">${d.empty}</li>`;
}
function setLanguage(lang) {
  const d = copy[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title =
    lang === "ar"
      ? "البحث عن المنتجات | المستودع الذكي"
      : "Search products | Smart Warehouse";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (typeof d[element.dataset.i18n] === "string")
      element.textContent = d[element.dataset.i18n];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document
    .querySelectorAll(".menu [data-field]")
    .forEach((option) =>
      option.setAttribute(
        "aria-selected",
        String(option.dataset.field === field),
      ),
    );
  $(".selected-field").textContent = d[field];
  $("#query").value = seedFor(d);
  $("#query").placeholder = seedFor(d);
  $("#query").setAttribute(
    "aria-label",
    lang === "ar" ? "البحث عن المنتجات" : "Search products",
  );
  $("#quickSearch").value = "";
  $("#quickSearch").placeholder = d.searchPlaceholder;
  $("#quickSearch").setAttribute("aria-label", d.searchPlaceholder);
  $(".back").setAttribute("aria-label", d.back);
  $(".bell").setAttribute(
    "aria-label",
    lang === "ar" ? "التنبيهات" : "Notifications",
  );
  $("nav").setAttribute("aria-label", d.mainNavigation);
  $(".language").setAttribute("aria-label", d.language);
  $(".users").setAttribute(
    "aria-label",
    lang === "ar" ? "5 مستخدمين" : "5 users",
  );
  $(".logout").setAttribute("aria-label", d.logout);
  $(".logout").title = d.logout;
  renderUsers();
  localStorage.setItem("supplier-search-lang", lang);
  render();
}
$(".back").addEventListener("click", () => history.back());
document
  .querySelectorAll("[data-lang]")
  .forEach((button) =>
    button.addEventListener("click", () => setLanguage(button.dataset.lang)),
  );
$("#query").addEventListener("input", () => {
  quickMode = false;
  $("#quickSearch").value = "";
  render();
});
$("#quickSearch").addEventListener("input", () => {
  const term = $("#quickSearch").value;
  quickMode = Boolean(term.trim());
  if (quickMode) {
    field = "allFields";
    $("#query").value = term;
  } else {
    $("#query").value = seedFor(copy[document.documentElement.lang]);
  }
  const d = copy[document.documentElement.lang];
  $(".selected-field").textContent = d[field];
  document
    .querySelectorAll(".menu [data-field]")
    .forEach((option) =>
      option.setAttribute(
        "aria-selected",
        String(option.dataset.field === field),
      ),
    );
  render();
});
$(".search-by").addEventListener("click", () => {
  const menu = $(".menu"),
    open = menu.hidden;
  menu.hidden = !open;
  $(".search-by").setAttribute("aria-expanded", String(open));
  document
    .querySelectorAll(".menu [data-field]")
    .forEach((option) =>
      option.setAttribute(
        "aria-selected",
        String(option.dataset.field === field),
      ),
    );
});
$(".menu").addEventListener("click", (event) => {
  const option = event.target.closest("[data-field]");
  if (!option) return;
  field = option.dataset.field;
  quickMode = false;
  $("#quickSearch").value = "";
  document
    .querySelectorAll(".menu [data-field]")
    .forEach((item) =>
      item.setAttribute("aria-selected", String(item === option)),
    );
  const d = copy[document.documentElement.lang];
  $(".selected-field").textContent = d[field];
  $("#query").value = seedFor(d);
  $("#query").placeholder = seedFor(d);
  $(".menu").hidden = true;
  $(".search-by").setAttribute("aria-expanded", "false");
  render();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".select-wrap")) {
    $(".menu").hidden = true;
    $(".search-by").setAttribute("aria-expanded", "false");
  }
});
const usersToggle = $("#usersToggle"),
  usersPanel = $("#usersPanel");
function closeUsersPanel(returnFocus = false) {
  usersPanel.hidden = true;
  usersToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) usersToggle.focus();
}
usersToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = usersPanel.hidden;
  usersPanel.hidden = !open;
  usersToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (event) => {
  if (
    !usersPanel.hidden &&
    !event.target.closest("#usersPanel") &&
    !event.target.closest("#usersToggle")
  )
    closeUsersPanel();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!usersPanel.hidden) {
    closeUsersPanel(true);
    return;
  }
  if (!$(".menu").hidden) {
    $(".menu").hidden = true;
    $(".search-by").setAttribute("aria-expanded", "false");
    $(".search-by").focus();
  }
});
let saved = "en";
try {
  saved = localStorage.getItem("supplier-search-lang") === "ar" ? "ar" : "en";
} catch {}
setLanguage(saved);
