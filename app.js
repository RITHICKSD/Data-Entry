/* ==========================================================================
   Data Entry & Virtual Assistant Service - Application JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderServices();
  renderPricing();
  renderCaseStudies();
  renderFAQs();
  renderUserDashboard();
  renderAdminDashboard();
  highlightActiveNav();
  updateCalculator();
  initContactMap();
}

/* --------------------------------------------------------------------------
   1. NAVIGATION & ACTIVE HIGHLIGHTING
   -------------------------------------------------------------------------- */
function navigateTo(pageId) {
  // Direct file navigation mapping
  const pageMap = {
    'home1': 'index.html',
    'home2': 'home2.html',
    'about': 'about.html',
    'services': 'services.html',
    'pricing': 'pricing.html',
    'how-it-works': 'how-it-works.html',
    'case-studies': 'case-studies.html',
    'faq': 'faq.html',
    'contact': 'contact.html',
    'login': 'login.html',
    'register': 'register.html',
    'user-dashboard': 'user-dashboard.html',
    'admin-dashboard': 'admin-dashboard.html'
  };

  if (pageMap[pageId]) {
    window.location.href = pageMap[pageId];
  } else if (document.getElementById(`view-${pageId}`)) {
    const targetView = document.getElementById(`view-${pageId}`);
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    targetView.classList.add('active');
  }
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === currentPath) {
      link.classList.add('active');
      const parentDropdown = link.closest('.dropdown');
      if (parentDropdown) {
        const toggleBtn = parentDropdown.querySelector('.nav-link');
        if (toggleBtn) toggleBtn.classList.add('active');
      }
    }
  });
}

function toggleMobileMenu() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.toggle('open');
}

/* --------------------------------------------------------------------------
   2. THEME & RTL CONTROLS
   -------------------------------------------------------------------------- */
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', newTheme);

  const themeIcons = document.querySelectorAll('.theme-icon-elem, #theme-icon');
  themeIcons.forEach(icon => {
    icon.className = newTheme === 'dark' ? 'fa-solid fa-sun theme-icon-elem' : 'fa-solid fa-moon theme-icon-elem';
  });
}

function toggleRTL() {
  const html = document.documentElement;
  const currentDir = html.getAttribute('dir');
  const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
  html.setAttribute('dir', newDir);

  const rtlTexts = document.querySelectorAll('.rtl-text-elem, #rtl-text');
  rtlTexts.forEach(txt => {
    txt.innerText = newDir.toUpperCase();
  });
}

/* --------------------------------------------------------------------------
   3. DYNAMIC CONTENT RENDERING
   -------------------------------------------------------------------------- */
function renderServices() {
  const homeGrid = document.getElementById('home1-services-grid');
  const mainCatalogGrid = document.getElementById('services-main-catalog');

  if (homeGrid) {
    homeGrid.innerHTML = APP_DATA.services.slice(0, 3).map(service => `
      <div class="feature-card">
        <div class="feature-icon"><i class="fa-solid ${service.icon}"></i></div>
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <ul style="list-style: none; margin-top: 1rem; font-size: 0.875rem; color: var(--text-secondary);">
          ${service.features.map(f => `<li style="margin-bottom: 0.3rem;"><i class="fa-solid fa-check" style="color: var(--success); margin-inline-end: 0.4rem;"></i>${f}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  if (mainCatalogGrid) {
    mainCatalogGrid.innerHTML = APP_DATA.services.map(service => `
      <div class="feature-card">
        <div class="flex justify-between items-center" style="margin-bottom: 1rem;">
          <div class="feature-icon" style="margin-bottom: 0;"><i class="fa-solid ${service.icon}"></i></div>
          <span class="badge">${service.category}</span>
        </div>
        <h3>${service.title}</h3>
        <p style="margin-bottom: 1rem;">${service.description}</p>
        <ul style="list-style: none; margin-bottom: 1.5rem; font-size: 0.875rem; color: var(--text-secondary);">
          ${service.features.map(f => `<li style="margin-bottom: 0.3rem;"><i class="fa-solid fa-check" style="color: var(--success); margin-inline-end: 0.4rem;"></i>${f}</li>`).join('')}
        </ul>
        <button class="btn btn-sm btn-outline" style="width: 100%;" onclick="navigateTo('pricing')">Select Plan for ${service.title}</button>
      </div>
    `).join('');
  }
}

function renderPricing() {
  const pricingGrid = document.getElementById('pricing-plans-grid');
  if (!pricingGrid) return;

  pricingGrid.innerHTML = APP_DATA.pricingPlans.map(plan => `
    <div class="pricing-card ${plan.popular ? 'popular' : ''}">
      ${plan.popular ? '<div class="pricing-badge">MOST POPULAR</div>' : ''}
      <h3>${plan.name}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted);">${plan.hours}</p>
      <div class="price-tag">${plan.price} <span>${plan.period}</span></div>
      <p style="color: var(--text-secondary); font-size: 0.9rem;">${plan.description}</p>
      <ul class="pricing-features">
        ${plan.features.map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('')}
      </ul>
      <button class="btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}" style="margin-top: auto;" onclick="navigateTo('register')">Get Started</button>
    </div>
  `).join('');
}

function renderCaseStudies() {
  const home2Preview = document.getElementById('home2-case-preview');
  const fullGrid = document.getElementById('case-studies-full-grid');

  if (home2Preview) {
    home2Preview.innerHTML = APP_DATA.caseStudies.slice(0, 3).map(cs => `
      <div class="feature-card">
        <img src="${cs.image}" style="width: 100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1rem;" alt="${cs.client}">
        <span class="badge badge-accent">${cs.metric}</span>
        <h3 style="margin: 0.75rem 0 0.5rem 0;">${cs.client}</h3>
        <p style="font-size: 0.9rem; color: var(--text-secondary);">${cs.description}</p>
      </div>
    `).join('');
  }

  if (fullGrid) {
    fullGrid.innerHTML = APP_DATA.caseStudies.map(cs => `
      <div class="feature-card" style="display: flex; gap: 1.5rem; flex-direction: column;">
        <img src="${cs.image}" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-md);" alt="${cs.client}">
        <div>
          <div class="flex justify-between items-center" style="margin-bottom: 0.5rem;">
            <span class="badge">${cs.industry}</span>
            <span class="badge badge-accent" style="font-weight: 800;">${cs.metric}</span>
          </div>
          <h3>${cs.client}</h3>
          <p style="color: var(--text-secondary); margin: 0.75rem 0 1.25rem 0;">${cs.description}</p>
          <button class="btn btn-sm btn-outline" onclick="alert('Full Case Study PDF generated & downloading...')">Read Case Study PDF</button>
        </div>
      </div>
    `).join('');
  }
}

function renderFAQs() {
  const faqContainer = document.getElementById('faq-accordion-container');
  if (!faqContainer) return;

  faqContainer.innerHTML = APP_DATA.faqs.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'open' : ''}" id="faq-item-${index}">
      <div class="faq-header" onclick="toggleFAQ(${index})">
        <span>${faq.q}</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <div class="faq-body">
        <p>${faq.a}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById(`faq-item-${index}`);
  if (item) {
    item.classList.toggle('open');
  }
}

function filterFAQs() {
  const query = document.getElementById('faq-search-input').value.toLowerCase();
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const text = item.innerText.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

/* --------------------------------------------------------------------------
   4. CALCULATOR & INTERACTIVE SIMULATOR
   -------------------------------------------------------------------------- */
function updateCalculator() {
  const hoursInput = document.getElementById('calc-hours');
  const rateInput = document.getElementById('calc-rate');
  const hoursVal = document.getElementById('calc-hours-val');
  const savingsResult = document.getElementById('calc-savings-result');
  const hoursSaved = document.getElementById('calc-hours-saved');

  if (!hoursInput || !rateInput) return;

  const hours = parseInt(hoursInput.value);
  const rate = parseInt(rateInput.value) || 0;

  const monthlyHours = hours * 4;
  const inHouseCost = monthlyHours * rate;
  const vaCost = 699; // Growth plan benchmark
  const savings = Math.max(0, inHouseCost - vaCost);

  if (hoursVal) hoursVal.innerText = `${hours} hrs/wk`;
  if (savingsResult) savingsResult.innerText = `$${savings.toLocaleString()}`;
  if (hoursSaved) hoursSaved.innerText = monthlyHours;
}

function runTaskSimulator() {
  const promptText = document.getElementById('sim-prompt').value;
  const category = document.getElementById('sim-category').value;
  const resultCard = document.getElementById('sim-result-card');

  if (!promptText.trim()) {
    alert('Please enter a short task prompt (e.g. Clean 200 CRM contacts)');
    return;
  }

  if (resultCard) {
    resultCard.style.display = 'block';
    resultCard.scrollIntoView({ behavior: 'smooth' });
  }
}

/* --------------------------------------------------------------------------
   5. DASHBOARD FUNCTIONS (USER & ADMIN)
   -------------------------------------------------------------------------- */
function renderUserDashboard() {
  const tbody = document.getElementById('user-tasks-tbody');
  const msgList = document.getElementById('user-messages-list');

  if (tbody) {
    tbody.innerHTML = APP_DATA.userDashboard.recentTasks.map(t => {
      let statusClass = 'in-progress';
      if (t.status === 'Completed') statusClass = 'completed';
      if (t.status === 'Under Review') statusClass = 'under-review';

      return `
        <tr>
          <td><strong>${t.id}</strong></td>
          <td>${t.title}</td>
          <td><span class="badge" style="font-size: 0.75rem;">${t.category}</span></td>
          <td><span class="status-tag ${statusClass}">${t.status}</span></td>
          <td>${t.va}</td>
        </tr>
      `;
    }).join('');
  }

  if (msgList) {
    msgList.innerHTML = APP_DATA.userDashboard.messages.map(m => `
      <div style="background: var(--bg-tertiary); padding: 0.85rem; border-radius: var(--radius-md); font-size: 0.875rem;">
        <div class="flex justify-between" style="margin-bottom: 0.4rem;">
          <strong style="color: var(--primary);">${m.sender}</strong>
          <span style="color: var(--text-muted); font-size: 0.75rem;">${m.time}</span>
        </div>
        <p style="color: var(--text-secondary);">${m.text}</p>
      </div>
    `).join('');
  }
}

function renderAdminDashboard() {
  const tbody = document.getElementById('admin-client-tbody');
  const vaList = document.getElementById('admin-va-list');

  if (tbody) {
    tbody.innerHTML = APP_DATA.adminDashboard.clientRoster.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td><span class="badge">${c.plan}</span></td>
        <td>${c.activeTasks} Tasks</td>
        <td>${c.hoursUsed}</td>
        <td>${c.vaAssigned}</td>
      </tr>
    `).join('');
  }

  if (vaList) {
    vaList.innerHTML = APP_DATA.adminDashboard.vaTeam.map(va => `
      <div style="background: var(--bg-tertiary); padding: 0.85rem; border-radius: var(--radius-md); font-size: 0.875rem;" class="flex justify-between items-center">
        <div>
          <strong>${va.name}</strong>
          <p style="color: var(--text-muted); font-size: 0.75rem;">${va.role} &bull; Rating: ${va.rating}</p>
        </div>
        <span class="badge ${va.status === 'Available' ? 'badge-accent' : ''}">${va.status}</span>
      </div>
    `).join('');
  }
}

function switchUserTab(tabName, element) {
  const sidebarItems = document.querySelectorAll('#view-user-dashboard .sidebar-item');
  sidebarItems.forEach(item => item.classList.remove('active'));
  if (element) element.classList.add('active');

  const titleEl = document.getElementById('user-tab-title');
  if (titleEl) {
    titleEl.innerText = `Client Dashboard • ${tabName.toUpperCase().replace('-', ' ')}`;
  }
}

function switchAdminTab(tabName, element) {
  const sidebarItems = document.querySelectorAll('#view-admin-dashboard .sidebar-item');
  sidebarItems.forEach(item => item.classList.remove('active'));
  if (element) element.classList.add('active');

  const titleEl = document.getElementById('admin-tab-title');
  if (titleEl) {
    titleEl.innerText = `Admin Operations • ${tabName.toUpperCase().replace('-', ' ')}`;
  }
}

/* --------------------------------------------------------------------------
   6. MODAL & AUTH HANDLERS
   -------------------------------------------------------------------------- */
function openLoginModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.add('active');
}

function closeLoginModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) modal.classList.remove('active');
}

function switchAuthView(viewName) {
  const loginView = document.getElementById('auth-view-login');
  const registerView = document.getElementById('auth-view-register');
  if (viewName === 'register') {
    if (loginView) loginView.style.display = 'none';
    if (registerView) registerView.style.display = 'block';
  } else {
    if (registerView) registerView.style.display = 'none';
    if (loginView) loginView.style.display = 'block';
  }
}

function handleModalRegister(e) {
  e.preventDefault();
  alert('Account created successfully! Logging you into client dashboard.');
  navigateTo('user-dashboard');
}

function handleSocialAuth(provider) {
  alert(`Connecting to ${provider} authentication...`);
  navigateTo('user-dashboard');
}

function handleModalLogin(e) {
  e.preventDefault();
  const pageRoleEl = document.getElementById('page-role-select');
  const modalRoleEl = document.getElementById('modal-role-select');
  const role = (pageRoleEl ? pageRoleEl.value : (modalRoleEl ? modalRoleEl.value : 'user'));

  if (role === 'admin') {
    navigateTo('admin-dashboard');
  } else {
    navigateTo('user-dashboard');
  }
}

function handleLogout() {
  alert('You have logged out safely.');
  navigateTo('home1');
}

function handleContactSubmit(e) {
  e.preventDefault();
  alert('Thank you for your message! Our team will contact you within 15 minutes.');
}

/* --------------------------------------------------------------------------
   7. LEAFLET INTERACTIVE OPERATIONS MAP
   -------------------------------------------------------------------------- */
let contactMapInstance = null;

function initContactMap() {
  const mapContainer = document.getElementById('contact-map');
  if (!mapContainer || typeof L === 'undefined') return;

  if (contactMapInstance) {
    setTimeout(() => {
      contactMapInstance.invalidateSize();
    }, 200);
    return;
  }

  contactMapInstance = L.map('contact-map', {
    scrollWheelZoom: false
  }).setView([25.0, 10.0], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(contactMapInstance);

  const offices = [
    {
      name: 'Global Headquarters (San Francisco)',
      address: '500 Tech Plaza, Suite 400, San Francisco, CA 94105',
      coords: [37.7749, -122.4194],
      type: 'Americas Operations Hub'
    },
    {
      name: 'London, UK Office',
      address: '100 Bishopsgate, London EC2N 4AG, UK',
      coords: [51.5074, -0.1278],
      type: 'EMEA Client Support'
    },
    {
      name: 'Sydney, Australia Office',
      address: '100 Barangaroo Ave, Sydney NSW 2000',
      coords: [-33.8688, 151.2093],
      type: 'APAC Support Unit'
    }
  ];

  offices.forEach(office => {
    const marker = L.marker(office.coords).addTo(contactMapInstance);
    marker.bindPopup(`
      <div style="font-family: 'Poppins', sans-serif; padding: 4px;">
        <strong style="color: #2563eb; font-size: 0.95rem;">${office.name}</strong><br>
        <span style="font-size: 0.8rem; color: #0d9488; font-weight: 600;">${office.type}</span><br>
        <small style="color: #64748b;">${office.address}</small>
      </div>
    `);
  });

  setTimeout(() => {
    contactMapInstance.invalidateSize();
  }, 300);
}
