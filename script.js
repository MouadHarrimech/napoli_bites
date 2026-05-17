const menuItems = [
  { name: "Pizza Margherita", category: "pizza", price: 25, tag: "four", description: "Base tomate, fromage fondu et esprit italien simple." },
  { name: "P-Thon", category: "pizza", price: 32, tag: "four", description: "Pizza au thon pour une commande rapide et savoureuse." },
  { name: "P-Poulet", category: "pizza", price: 32, tag: "four", description: "Poulet, fromage et sauce maison." },
  { name: "P-Viande Hachee", category: "pizza", price: 35, tag: "four", description: "Viande hachee, fromage et garniture genereuse." },
  { name: "P-4 Saisons", category: "pizza", price: 40, tag: "four", description: "Une pizza complete pour les grandes envies." },
  { name: "P-Fromages", category: "pizza", price: 40, tag: "cheese", description: "Fromages fondants et texture chaude." },
  { name: "P-Fruits de mer", category: "pizza", price: 45, tag: "premium", description: "Option marine pour une pizza plus speciale." },
  { name: "P-Royal", category: "pizza", price: 47, tag: "premium", description: "La pizza premium de Napoli Bites." },
  { name: "Box Simple L", category: "box", price: 15, tag: "crousty", description: "Frites croustillantes avec sauce." },
  { name: "Box Simple XL", category: "box", price: 22, tag: "crousty", description: "Version XL pour plus de croustillant." },
  { name: "Box Poulet", category: "box", price: 30, tag: "cheesy", description: "Poulet, cheese et sauce Napoli." },
  { name: "Box Crunchy", category: "box", price: 35, tag: "crunch", description: "Une box croustillante avec une touche fromagere." },
  { name: "Box Viande Hachee", category: "box", price: 35, tag: "hot", description: "Viande hachee, sauce et frites gourmandes." },
  { name: "Box Mix", category: "box", price: 45, tag: "signature", description: "Melange gourmand pour les vrais fans de Napoli." },
  { name: "Box Nuggets", category: "box", price: 40, tag: "golden", description: "Nuggets dores, sauce et format partageable." },
  { name: "Suisse Chicken", category: "sandwich", price: 35, tag: "suisse", description: "Sandwich chaud au chicken avec sauce maison." },
  { name: "Suisse Napoli Bites", category: "sandwich", price: 40, tag: "signature", description: "Le sandwich maison avec une combinaison plus riche." },
  { name: "Suisse Poulet", category: "sandwich", price: 30, tag: "classic", description: "Poulet, fromage et pain suisse." },
  { name: "Suisse Viande Hachee", category: "sandwich", price: 35, tag: "classic", description: "Viande hachee, fromage et sauce." },
  { name: "Tacos Poulet", category: "tacos", price: 35, tag: "gratine", description: "Tacos gratine au poulet." },
  { name: "Tacos Viande Hachee", category: "tacos", price: 35, tag: "gratine", description: "Tacos gratine avec viande hachee." },
  { name: "Tacos Mix", category: "tacos", price: 30, tag: "mix", description: "Format mix pour une envie rapide." },
  { name: "Tacos Nuggets", category: "tacos", price: 35, tag: "crunch", description: "Tacos gratine avec nuggets croustillants." },
  { name: "Mexicano Fromager", category: "tacos", price: 40, tag: "recommande", description: "Le tacos recommande pour les amoureux du fromage." },
  { name: "Classic Burger", category: "burger", price: 35, tag: "burger", description: "Burger classique, fromage et sauce." },
  { name: "Double Burger", category: "burger", price: 55, tag: "burger", description: "Double portion pour grosse faim." },
  { name: "Chicken Burger", category: "burger", price: 30, tag: "burger", description: "Burger poulet simple et efficace." },
  { name: "Triple Burger", category: "burger", price: 65, tag: "nouveau", description: "Le burger le plus costaud de la carte." },
  { name: "Chicken Burger Double", category: "burger", price: 50, tag: "burger", description: "Double version chicken pour plus de gourmandise." },
  { name: "Pasticcio Poulet", category: "plat", price: 35, tag: "gratin", description: "Pasticcio chaud au poulet." },
  { name: "Pasticcio Viande Hachee", category: "plat", price: 35, tag: "gratin", description: "Pasticcio viande hachee et fromage." },
  { name: "Pasticcio Charcuterie", category: "plat", price: 30, tag: "gratin", description: "Pasticcio charcuterie gratine." },
  { name: "Pasticcio Mixte", category: "plat", price: 30, tag: "gratin", description: "Pasticcio mixte, fromage et sauce." },
  { name: "P-Emince Poulet", category: "plat", price: 45, tag: "plat", description: "Emince de poulet servi en plat chaud." },
  { name: "P-Brochette Poulet", category: "plat", price: 40, tag: "grill", description: "Brochette poulet avec garniture." },
  { name: "P-Brochette Mixte", category: "plat", price: 45, tag: "grill", description: "Brochettes mixtes pour une assiette plus riche." },
  { name: "P-Brochette Viande Hachee", category: "plat", price: 45, tag: "grill", description: "Brochette viande hachee, sauce et accompagnement." },
  { name: "P-Crispy", category: "plat", price: 40, tag: "crunch", description: "Plat croustillant et gourmand." },
  { name: "P-Cordon Bleu", category: "plat", price: 47, tag: "cheese", description: "Cordon bleu fondant avec accompagnement." },
  { name: "Plat Napoli Bits", category: "plat", price: 55, tag: "premium", description: "Plat signature de la maison." },
  { name: "Salade Vitamix", category: "fresh", price: 30, tag: "frais", description: "Salade fraiche avec poulet, viande hachee ou chicken." },
  { name: "Salade Bites", category: "fresh", price: 35, tag: "frais", description: "Crevettes, avocat et mix salade." },
  { name: "Jus d'orange", category: "fresh", price: 15, tag: "jus", description: "Jus frais orange." },
  { name: "Jus de citron", category: "fresh", price: 15, tag: "jus", description: "Jus de citron frais." },
  { name: "Jus d'avocat", category: "fresh", price: 20, tag: "jus", description: "Avocat frais et texture cremeuse." },
  { name: "Jus de pomme", category: "fresh", price: 16, tag: "jus", description: "Jus de pomme frais." },
  { name: "Jus de banane", category: "fresh", price: 16, tag: "jus", description: "Jus de banane doux et frais." },
  { name: "Jus d'ananas", category: "fresh", price: 20, tag: "jus", description: "Jus d'ananas tropical." },
  { name: "Jus de peche", category: "fresh", price: 20, tag: "jus", description: "Jus de peche frais." },
  { name: "Jus de fraise", category: "fresh", price: 20, tag: "jus", description: "Jus de fraise frais." },
  { name: "Jus panache", category: "fresh", price: 20, tag: "jus", description: "Melange de fruits frais." },
  { name: "Za3za3", category: "fresh", price: 30, tag: "sweet", description: "Boisson dessert genereuse." },
  { name: "Cocktail", category: "fresh", price: 30, tag: "sweet", description: "Cocktail maison." },
  { name: "Fruits Choco Cocktail", category: "fresh", price: 25, tag: "sweet", description: "Cocktail fruit choco, selon format." },
  { name: "Tropical Choco Mix", category: "fresh", price: 30, tag: "sweet", description: "Cocktail tropical avec chocolat." },
  { name: "Soda", category: "fresh", price: 6, tag: "drink", description: "Boisson gazeuse." },
  { name: "Eau minerale", category: "fresh", price: 6, tag: "drink", description: "Eau minerale 1/5 L." }
];

const menuList = document.querySelector("#menuList");
const filterButtons = document.querySelectorAll(".filter");
const ticketItems = document.querySelector("#ticketItems");
const ticketTotal = document.querySelector("#ticketTotal");
const whatsappLink = document.querySelector("#whatsappLink");
const cartCount = document.querySelector("#cartCount");
const mobileCartTotal = document.querySelector("#mobileCartTotal");
const mobileWhatsappLink = document.querySelector("#mobileWhatsappLink");
const mobileCartButton = document.querySelector("[data-scroll-ticket]");
const toast = document.querySelector("#toast");
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector("#primaryNav");
const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
const order = new Map();
let toastTimer;

function closeMobileNav() {
  document.body.classList.remove("nav-open");

  if (navToggle) {
    navToggle.setAttribute("aria-expanded", "false");
  }
}

function showToast(message) {
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 1500);
}

function updateHeaderState() {
  if (!siteHeader) {
    return;
  }

  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
updateHeaderState();

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileNav();
  }
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("nav-open")) {
    return;
  }

  if (!primaryNav?.contains(event.target) && !navToggle?.contains(event.target)) {
    closeMobileNav();
  }
});

if (mobileCartButton) {
  mobileCartButton.addEventListener("click", () => {
    document.querySelector(".ticket")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    closeMobileNav();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.location.protocol !== "file:") {
      history.pushState(null, "", link.getAttribute("href"));
    }
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, {
  rootMargin: "-35% 0px -55% 0px",
  threshold: 0
});

["top", "menu", "signature", "cartes", "contact"].forEach((id) => {
  const section = document.getElementById(id);

  if (section) {
    sectionObserver.observe(section);
  }
});

function renderMenu(filter = "all") {
  const visibleItems = filter === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === filter);

  menuList.innerHTML = visibleItems.map((item, index) => `
    <article class="menu-card reveal visible" style="--stagger: ${Math.min(index, 10)}">
      <header>
        <h3>${item.name}</h3>
        <span class="price">${item.price} DH</span>
      </header>
      <p>${item.description}</p>
      <div class="menu-meta">
        <span class="menu-tag">${item.tag}</span>
        <button type="button" data-index="${menuItems.indexOf(item)}">Ajouter</button>
      </div>
    </article>
  `).join("");

  menuList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => addToOrder(Number(button.dataset.index), button.closest(".menu-card")));
  });
}

function addToOrder(index, card) {
  const item = menuItems[index];
  const current = order.get(item.name) || { ...item, quantity: 0 };
  current.quantity += 1;
  order.set(item.name, current);

  if (card) {
    card.classList.remove("just-added");
    requestAnimationFrame(() => card.classList.add("just-added"));
  }

  renderTicket();
  showToast(`${item.name} ajoute au ticket`);
}

function changeOrderItem(name, delta) {
  const current = order.get(name);

  if (!current) {
    return;
  }

  current.quantity += delta;

  if (current.quantity <= 0) {
    order.delete(name);
  } else {
    order.set(name, current);
  }

  renderTicket();
}

function removeOrderItem(name) {
  order.delete(name);
  renderTicket();
}

console.log("240 test done")

function renderTicket() {
  const lines = Array.from(order.values());
  const total = lines.reduce((sum, item) => sum + item.price * item.quantity, 0);

  ticketItems.innerHTML = lines.length
    ? lines.map((item) => `
      <div class="ticket-line">
        <div>
          <strong>${item.name}</strong>
          <span>${item.quantity} x ${item.price} DH</span>
        </div>
        <div class="ticket-controls" aria-label="Modifier ${item.name}">
          <button class="ticket-control" type="button" data-ticket-action="decrease" data-name="${item.name}" aria-label="Retirer un ${item.name}">-</button>
          <strong>${item.quantity * item.price} DH</strong>
          <button class="ticket-control" type="button" data-ticket-action="increase" data-name="${item.name}" aria-label="Ajouter un ${item.name}">+</button>
          <button class="ticket-control" type="button" data-ticket-action="remove" data-name="${item.name}" aria-label="Supprimer ${item.name}">x</button>
        </div>
      </div>
    `).join("")
    : '<p class="ticket-empty">Ajoute des produits depuis le menu.</p>';

  ticketTotal.textContent = `${total} DH`;

  if (cartCount) {
    cartCount.textContent = lines.reduce((sum, item) => sum + item.quantity, 0);
  }

  const message = lines.length
    ? `Salam Napoli Bites, je veux commander:\n${lines.map((item) => `- ${item.quantity} x ${item.name} = ${item.quantity * item.price} DH`).join("\n")}\nTotal estime: ${total} DH`
    : "Salam Napoli Bites, je veux commander.";

  whatsappLink.href = `https://wa.me/212614099933?text=${encodeURIComponent(message)}`;
  whatsappLink.classList.toggle("disabled", !lines.length);

  if (mobileCartTotal) {
    mobileCartTotal.textContent = `${total} DH`;
  }

  if (mobileWhatsappLink) {
    mobileWhatsappLink.href = whatsappLink.href;
    mobileWhatsappLink.classList.toggle("disabled", !lines.length);
  }

  ticketItems.querySelectorAll("[data-ticket-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const { name, ticketAction } = button.dataset;

      if (ticketAction === "increase") {
        changeOrderItem(name, 1);
      } else if (ticketAction === "decrease") {
        changeOrderItem(name, -1);
      } else {
        removeOrderItem(name);
      }
    });
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-selected", "true");
    renderMenu(button.dataset.filter);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

renderMenu();
renderTicket();
