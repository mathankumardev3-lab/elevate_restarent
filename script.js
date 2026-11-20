const RESTAURANT_WHATSAPP_NUMBER = '919840011223';

const MENU_CATEGORIES = [
    'All',
    'Breakfast',
    'Starters',
    'Main Course',
    'Desserts',
    'Beverages'
];

const CATEGORY_CARDS = [
    {
        category: 'Breakfast',
        subtitle: 'Morning bakes, sourdough & eggs',
        countLabel: '3 items',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80',
        fallbackType: 'plate'
    },
    {
        category: 'Starters',
        subtitle: 'Small plates & warm breads',
        countLabel: '2 items',
        image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=700&q=80',
        fallbackType: 'plate'
    },
    {
        category: 'Main Course',
        subtitle: 'Hearth plates, bowls & flatbreads',
        countLabel: '3 items',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80',
        fallbackType: 'plate'
    },
    {
        category: 'Desserts',
        subtitle: 'Fruit tarts, bakes & sweet finishes',
        countLabel: '2 items',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=700&q=80',
        fallbackType: 'bakery'
    },
    {
        category: 'Beverages',
        subtitle: 'Single-origin coffee & botanicals',
        countLabel: '2 items',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80',
        fallbackType: 'coffee'
    }
];

const MENU_CATALOG = [
    {
        id: 'bk-1',
        name: 'Sourdough Tartine & Soft-Scrambled Eggs',
        category: 'Breakfast',
        price: '₹420',
        dietary: ['Vegetarian'],
        signature: true,
        pairing: 'Spiced Citrus Cold Brew',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Thick-cut country sourdough topped with creamy herb-folded eggs, blistered cherry tomatoes, and shaved aged cheese.'
    },
    {
        id: 'bk-2',
        name: 'Cardamom & Orange Blossom Morning Bun',
        category: 'Breakfast',
        price: '₹240',
        dietary: ['Vegetarian', 'Chef Signature'],
        signature: true,
        pairing: 'Single-Origin Oat Cortado',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'bakery',
        description: 'Warm spiral brioche dusted with crushed green cardamom, raw cane sugar, and fragrant citrus zest.'
    },
    {
        id: 'bk-3',
        name: 'Spiced Oats, Roasted Fig & Walnut Bowl',
        category: 'Breakfast',
        price: '₹360',
        dietary: ['Vegetarian', 'Vegan'],
        signature: false,
        pairing: 'Garden Thyme & Lemon Cooler',
        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Slow-simmered rolled oats with caramelized figs, toasted walnuts, cinnamon, and date-maple drizzle.'
    },
    {
        id: 'st-1',
        name: 'Charred Heirloom Squash & Whipped Ricotta',
        category: 'Starters',
        price: '₹490',
        dietary: ['Vegetarian', 'Chef Signature'],
        signature: true,
        pairing: 'Garden Thyme & Lemon Cooler',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Flame-roasted pumpkin and squash over lemon-whipped ricotta, toasted pumpkin seeds, and fresh garden thyme.'
    },
    {
        id: 'st-2',
        name: 'Wood-Fired Garlic Focaccia & Herb Dip',
        category: 'Starters',
        price: '₹330',
        dietary: ['Vegetarian', 'Vegan'],
        signature: false,
        pairing: 'Spiced Citrus Cold Brew',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'bakery',
        description: 'Olive-oil rich focaccia with confit garlic and rosemary, served with whipped white-bean and thyme dip.'
    },
    {
        id: 'mn-1',
        name: 'Thyme-Roasted Chicken & Farro Harvest Bowl',
        category: 'Main Course',
        price: '₹690',
        dietary: ['Chef Signature'],
        signature: true,
        pairing: 'Garden Thyme & Lemon Cooler',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Crisp-skinned herb-roasted chicken over chewy farro, charred greens, roasted shallot jus, and citrus gremolata.'
    },
    {
        id: 'mn-2',
        name: 'Smoked Tomato, Burrata & Basil Flatbread',
        category: 'Main Course',
        price: '₹580',
        dietary: ['Vegetarian'],
        signature: false,
        pairing: 'Spiced Citrus Cold Brew',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Hand-stretched flatbread blistered in the oven with slow-roasted tomato sauce, fresh burrata, and sweet basil.'
    },
    {
        id: 'mn-3',
        name: 'Wild Mushroom, Thyme & Truffle Risotto',
        category: 'Main Course',
        price: '₹640',
        dietary: ['Vegetarian', 'Vegan'],
        signature: false,
        pairing: 'Garden Thyme & Lemon Cooler',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Creamy arborio rice folded with roasted cremini and oyster mushrooms, vegetable stock, and crisp sage.'
    },
    {
        id: 'ds-1',
        name: 'Roasted Fig & Almond Frangipane Tart',
        category: 'Desserts',
        price: '₹350',
        dietary: ['Vegetarian', 'Chef Signature'],
        signature: true,
        pairing: 'Spiced Citrus Cold Brew',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'bakery',
        description: 'Crisp shortcrust pastry layered with toasted almond frangipane, honey-roasted figs, and lightly sweetened cream.'
    },
    {
        id: 'ds-2',
        name: 'Coconut & Passionfruit Chia Parfait',
        category: 'Desserts',
        price: '₹310',
        dietary: ['Vegetarian', 'Vegan'],
        signature: false,
        pairing: 'Garden Thyme & Lemon Cooler',
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'plate',
        description: 'Silky coconut cream and vanilla bean chia topped with bright passionfruit compote and toasted coconut flakes.'
    },
    {
        id: 'bv-1',
        name: 'Spiced Citrus Cold Brew & Oat Milk',
        category: 'Beverages',
        price: '₹250',
        dietary: ['Vegetarian', 'Vegan', 'Chef Signature'],
        signature: false,
        pairing: 'Cardamom & Orange Blossom Morning Bun',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'coffee',
        description: 'Slow-steeped estate cold brew infused with orange peel and cinnamon, poured over ice and creamy oat milk.'
    },
    {
        id: 'bv-2',
        name: 'Garden Thyme, Lemon & Honey Cooler',
        category: 'Beverages',
        price: '₹220',
        dietary: ['Vegetarian'],
        signature: false,
        pairing: 'Wood-Fired Garlic Focaccia & Herb Dip',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
        fallbackType: 'coffee',
        description: 'Crisp sparkling botanical tonic muddled with fresh lemon thyme, Meyer lemon juice, and wildflower honey.'
    }
];

const GALLERY_ITEMS = [
    {
        id: 'gal-1',
        category: 'Plates',
        title: 'Seasonal Harvest Platter',
        caption: 'Roasted autumn vegetables, whipped ricotta, and fresh garden thyme plated for sharing.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85',
        fallbackType: 'plate'
    },
    {
        id: 'gal-2',
        category: 'Bakery',
        title: 'Morning Sourdough & Hearth Loaves',
        caption: 'Naturally leavened loaves and golden pastry bakes cooling beside our open counter.',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=85',
        fallbackType: 'bakery'
    },
    {
        id: 'gal-3',
        category: 'Dining Room',
        title: 'Warm Timber & Slow Evenings',
        caption: 'Intimate wooden tables, soft lighting, and natural greenery designed for unhurried meals.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
        fallbackType: 'dining'
    },
    {
        id: 'gal-4',
        category: 'Plates',
        title: 'Artisan Brunch & Morning Table',
        caption: 'Crisp sourdough toast, farm eggs, and bright seasonal garnishes served all morning.',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=85',
        fallbackType: 'plate'
    },
    {
        id: 'gal-5',
        category: 'Bakery',
        title: 'Cardamom Buns & Laminated Bakes',
        caption: 'Flaky, aromatic morning pastries glazed lightly and served warm.',
        image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85',
        fallbackType: 'bakery'
    },
    {
        id: 'gal-6',
        category: 'Dining Room',
        title: 'Espresso Bar & Quiet Corners',
        caption: 'Small-batch coffee pours and calm corner tables for slow conversations.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
        fallbackType: 'coffee'
    }
];

const GALLERY_FILTERS = ['All', 'Plates', 'Bakery', 'Dining Room'];

let activeMenuCategory = 'All';
let activeGalleryFilter = 'All';
let currentLightboxList = GALLERY_ITEMS;
let currentLightboxIndex = 0;

// =====================================================================
// INITIALIZATION
// =====================================================================
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }

    const yearSpan = document.getElementById('footer-copyright-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const dateInput = document.getElementById('res-date');
    if (dateInput) {
        const today = getTodayISO();
        dateInput.min = today;
        dateInput.value = today;
    }

    renderSignatureDishes();
    renderVisualCategoryCards();
    renderMenuCategoryTabs();
    renderFullMenu();
    renderGalleryFilterButtons();
    renderFoodGallery();
    syncReservationPreview();
    initNavHighlight();
    initKeyboardEvents();
});

// =====================================================================
// MOBILE NAVIGATION & SCROLL HIGHLIGHT
// =====================================================================
function toggleMobileNav() {
    const drawer = document.getElementById('mobile-nav-drawer');
    const btn = document.getElementById('mobile-nav-btn');
    const openIcon = document.getElementById('nav-icon-menu');
    const closeIcon = document.getElementById('nav-icon-close');
    const willOpen = drawer.classList.contains('hidden');

    drawer.classList.toggle('hidden', !willOpen);
    openIcon.classList.toggle('hidden', willOpen);
    closeIcon.classList.toggle('hidden', !willOpen);
    if (btn) btn.setAttribute('aria-expanded', String(willOpen));
}

function closeMobileNav() {
    const drawer = document.getElementById('mobile-nav-drawer');
    const btn = document.getElementById('mobile-nav-btn');
    const openIcon = document.getElementById('nav-icon-menu');
    const closeIcon = document.getElementById('nav-icon-close');

    drawer.classList.add('hidden');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    if (btn) btn.setAttribute('aria-expanded', 'false');
}

function initNavHighlight() {
    const trackedIds = ['intro', 'philosophy', 'menu', 'chef', 'gallery', 'reviews', 'location', 'contact'];
    const links = document.querySelectorAll('#main-nav .nav-link');

    window.addEventListener('scroll', () => {
        let activeId = '';
        trackedIds.forEach(id => {
            const el = document.getElementById(id);
            if (el && window.scrollY >= el.offsetTop - 160) {
                activeId = id;
            }
        });

        links.forEach(link => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${activeId}`);
        });
    }, { passive: true });
}

// =====================================================================
// 6. SIGNATURE DISHES & 7. MENU CATEGORIES
// =====================================================================
function renderSignatureDishes() {
    const grid = document.getElementById('signature-dishes-grid');
    const signatures = MENU_CATALOG.filter(item => item.signature).slice(0, 3);

    grid.innerHTML = signatures.map(dish => `
        <article class="editorial-card bg-cream-card rounded-3xl border border-cream-line overflow-hidden shadow-editorial flex flex-col justify-between group">
            <div>
                <div class="aspect-[16/10] w-full overflow-hidden photo-zoom-frame bg-cream-warm relative">
                    <img
                        src="${escapeAttr(dish.image)}"
                        alt="${escapeAttr(dish.name)}"
                        loading="lazy"
                        onerror="handleMediaFallback(this, '${escapeAttr(dish.fallbackType)}', 'w-14 h-14 text-forest')"
                        class="w-full h-full object-cover"
                    >
                    <span class="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-bold bg-cream-card/95 text-forest border border-cream-line shadow-2xs">
                        ${escapeHtml(dish.category)}
                    </span>
                </div>
                <div class="p-6">
                    <div class="flex items-baseline justify-between gap-3">
                        <h3 class="font-editorial text-2xl font-bold text-forest leading-snug">${escapeHtml(dish.name)}</h3>
                        <span class="font-bold text-base text-ember shrink-0">${escapeHtml(dish.price)}</span>
                    </div>
                    <p class="text-sm text-ink-muted mt-2 leading-relaxed">${escapeHtml(dish.description)}</p>
                </div>
            </div>
            <div class="px-6 py-4 bg-cream border-t border-cream-line flex items-center justify-between">
                <button type="button" onclick="jumpToMenuCategory('${escapeAttr(dish.category)}')" class="text-xs font-bold text-forest hover:text-ember transition-colors">
                    See in ${escapeHtml(dish.category)} →
                </button>
                <a href="#reserve" class="text-xs font-bold text-ember hover:text-ember-hover">
                    Book a Table
                </a>
            </div>
        </article>
    `).join('');
}

function renderVisualCategoryCards() {
    const container = document.getElementById('visual-category-cards');
    container.innerHTML = CATEGORY_CARDS.map(card => `
        <button type="button" onclick="jumpToMenuCategory('${escapeAttr(card.category)}')" class="editorial-card text-left rounded-2xl bg-cream border border-cream-line hover:border-ember overflow-hidden shadow-editorial group flex flex-col justify-between">
            <div class="aspect-[4/3] w-full overflow-hidden photo-zoom-frame bg-cream-warm">
                <img
                    src="${escapeAttr(card.image)}"
                    alt="${escapeAttr(card.category)}"
                    loading="lazy"
                    onerror="handleMediaFallback(this, '${escapeAttr(card.fallbackType)}', 'w-12 h-12 text-forest')"
                    class="w-full h-full object-cover"
                >
            </div>
            <div class="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <div class="flex items-center justify-between gap-2">
                        <h3 class="font-editorial text-xl font-bold text-forest group-hover:text-ember transition-colors">${escapeHtml(card.category)}</h3>
                        <span class="text-[11px] font-semibold text-ink-soft">${escapeHtml(card.countLabel)}</span>
                    </div>
                    <p class="text-xs text-ink-muted mt-1 leading-relaxed">${escapeHtml(card.subtitle)}</p>
                </div>
                <span class="inline-flex items-center gap-1 text-xs font-bold text-ember mt-3">
                    <span>View Dishes</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </span>
            </div>
        </button>
    `).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function jumpToMenuCategory(category) {
    activeMenuCategory = MENU_CATEGORIES.includes(category) ? category : 'All';
    renderMenuCategoryTabs();
    renderFullMenu();
    const menuSec = document.getElementById('menu');
    if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =====================================================================
// 8. FULL MENU TABS & FILTERING
// =====================================================================
function selectMenuCategory(category) {
    activeMenuCategory = category;
    renderMenuCategoryTabs();
    renderFullMenu();
}

function resetMenuFilters() {
    activeMenuCategory = 'All';
    const searchEl = document.getElementById('menu-search-input');
    const dietEl = document.getElementById('menu-dietary-filter');
    if (searchEl) searchEl.value = '';
    if (dietEl) dietEl.value = 'All';
    renderMenuCategoryTabs();
    renderFullMenu();
}

function renderMenuCategoryTabs() {
    const tabsEl = document.getElementById('full-menu-tabs');
    tabsEl.innerHTML = MENU_CATEGORIES.map(cat => {
        const isSelected = cat === activeMenuCategory;
        return `
            <button
                type="button"
                role="tab"
                aria-selected="${isSelected}"
                onclick="selectMenuCategory('${escapeAttr(cat)}')"
                class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    isSelected
                        ? 'bg-forest text-cream border-forest shadow-editorial'
                        : 'bg-cream-card text-forest hover:border-ember border-cream-line'
                }"
            >
                ${escapeHtml(cat)}
            </button>
        `;
    }).join('');
}

function renderFullMenu() {
    const grid = document.getElementById('full-menu-grid');
    const emptyState = document.getElementById('menu-empty-state');
    const query = (document.getElementById('menu-search-input')?.value || '').trim().toLowerCase();
    const dietary = document.getElementById('menu-dietary-filter')?.value || 'All';

    const filtered = MENU_CATALOG.filter(item => {
        const matchesCat = activeMenuCategory === 'All' || item.category === activeMenuCategory;
        const matchesDiet = dietary === 'All' ||
            (dietary === 'Chef Signature' ? item.signature : item.dietary.includes(dietary));
        const matchesSearch = !query ||
            item.name.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query);
        return matchesCat && matchesDiet && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(item => {
        const tagsHtml = item.dietary.slice(0, 2).map(tag => `
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-forest-soft text-forest border border-forest/15">
                ${escapeHtml(tag)}
            </span>
        `).join('');

        return `
            <article class="editorial-card bg-cream-card rounded-2xl border border-cream-line hover:border-ember/70 p-4 sm:p-5 shadow-editorial flex gap-4 items-start">
                <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 photo-zoom-frame bg-cream-warm border border-cream-line">
                    <img
                        src="${escapeAttr(item.image)}"
                        alt="${escapeAttr(item.name)}"
                        loading="lazy"
                        onerror="handleMediaFallback(this, '${escapeAttr(item.fallbackType)}', 'w-10 h-10 text-forest')"
                        class="w-full h-full object-cover"
                    >
                </div>

                <div class="min-w-0 flex-1 space-y-1.5">
                    <div class="flex items-start justify-between gap-2">
                        <h3 class="font-editorial text-xl font-bold text-forest leading-snug">
                            ${escapeHtml(item.name)}
                        </h3>
                        <span class="font-bold text-sm sm:text-base text-ember shrink-0">
                            ${escapeHtml(item.price)}
                        </span>
                    </div>

                    <p class="text-xs sm:text-sm text-ink-muted leading-relaxed">
                        ${escapeHtml(item.description)}
                    </p>

                    <div class="pt-1.5 flex flex-wrap items-center justify-between gap-2">
                        <div class="flex flex-wrap gap-1.5">${tagsHtml}</div>
                        <span class="text-[11px] font-medium text-ink-soft">${escapeHtml(item.category)}</span>
                    </div>

                    ${item.pairing ? `
                        <p class="pt-1 text-[11px] text-forest-light font-medium flex items-center gap-1">
                            <span class="text-ember font-bold">Pairs with:</span>
                            <span>${escapeHtml(item.pairing)}</span>
                        </p>
                    ` : ''}
                </div>
            </article>
        `;
    }).join('');
}

// =====================================================================
// 10. FOOD GALLERY & LIGHTBOX MODAL
// =====================================================================
function selectGalleryFilter(filter) {
    activeGalleryFilter = filter;
    renderGalleryFilterButtons();
    renderFoodGallery();
}

function renderGalleryFilterButtons() {
    const container = document.getElementById('gallery-filter-buttons');
    container.innerHTML = GALLERY_FILTERS.map(filter => {
        const active = filter === activeGalleryFilter;
        return `
            <button
                type="button"
                onclick="selectGalleryFilter('${escapeAttr(filter)}')"
                class="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                    active
                        ? 'bg-ember text-white border-ember shadow-ember'
                        : 'bg-cream-card text-forest hover:border-forest border-cream-line'
                }"
            >
                ${escapeHtml(filter)}
            </button>
        `;
    }).join('');
}

function renderFoodGallery() {
    const grid = document.getElementById('food-gallery-grid');
    const items = activeGalleryFilter === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter(g => g.category === activeGalleryFilter);

    currentLightboxList = items;

    grid.innerHTML = items.map((photo, idx) => `
        <button
            type="button"
            onclick="openGalleryLightbox(${idx})"
            class="editorial-card text-left rounded-2xl bg-cream-card border border-cream-line hover:border-ember overflow-hidden shadow-editorial group focus:outline-none focus:ring-2 focus:ring-ember"
        >
            <div class="aspect-[4/3] w-full overflow-hidden photo-zoom-frame bg-cream-warm relative">
                <img
                    src="${escapeAttr(photo.image)}"
                    alt="${escapeAttr(photo.title)}"
                    loading="lazy"
                    onerror="handleMediaFallback(this, '${escapeAttr(photo.fallbackType)}', 'w-14 h-14 text-forest')"
                    class="w-full h-full object-cover"
                >
                <span class="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-cream-card/95 text-forest border border-cream-line shadow-2xs">
                    ${escapeHtml(photo.category)}
                </span>
            </div>
            <div class="p-4 flex items-center justify-between gap-2">
                <div>
                    <h3 class="font-editorial text-xl font-bold text-forest group-hover:text-ember transition-colors">${escapeHtml(photo.title)}</h3>
                    <p class="text-xs text-ink-muted line-clamp-1 mt-0.5">${escapeHtml(photo.caption)}</p>
                </div>
                <i data-lucide="maximize-2" class="w-4 h-4 text-ink-soft group-hover:text-ember shrink-0 transition-colors"></i>
            </div>
        </button>
    `).join('');

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function openGalleryLightbox(index) {
    if (!currentLightboxList.length) return;
    currentLightboxIndex = (index + currentLightboxList.length) % currentLightboxList.length;
    const photo = currentLightboxList[currentLightboxIndex];

    document.getElementById('lightbox-photo-category').textContent = `${photo.category} · ${currentLightboxIndex + 1} / ${currentLightboxList.length}`;
    document.getElementById('lightbox-photo-title').textContent = photo.title;
    document.getElementById('lightbox-photo-caption').textContent = photo.caption;

    const imgEl = document.getElementById('lightbox-photo-img');
    imgEl.dataset.fallbackApplied = '';
    imgEl.src = photo.image;
    imgEl.alt = photo.title;

    const modal = document.getElementById('gallery-lightbox');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function stepLightbox(delta) {
    openGalleryLightbox(currentLightboxIndex + delta);
}

function closeGalleryLightbox() {
    const modal = document.getElementById('gallery-lightbox');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function initKeyboardEvents() {
    document.addEventListener('keydown', e => {
        const modal = document.getElementById('gallery-lightbox');
        if (!modal || modal.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeGalleryLightbox();
        if (e.key === 'ArrowRight') stepLightbox(1);
        if (e.key === 'ArrowLeft') stepLightbox(-1);
    });
}

// =====================================================================
// 12. TABLE RESERVATION VALIDATION, PREVIEW, SUCCESS & WHATSAPP
// =====================================================================
function syncReservationPreview() {
    const name = document.getElementById('res-guest-name')?.value.trim() || '';
    const dateVal = document.getElementById('res-date')?.value || getTodayISO();
    const timeVal = document.getElementById('res-time')?.value || '07:30 PM';
    const guestsVal = document.getElementById('res-guests')?.value || '2 Guests';
    const seatingVal = document.getElementById('res-seating')?.value || 'Main Dining Room';

    document.getElementById('preview-guests').textContent = guestsVal;
    document.getElementById('preview-datetime').textContent = `${formatDisplayDate(dateVal)} · ${timeVal}`;
    document.getElementById('preview-seating').textContent = seatingVal;
    document.getElementById('preview-guest').textContent = name || 'Walk-in / Pending Name';
}

function handleReservationSubmit(event) {
    event.preventDefault();

    const nameEl = document.getElementById('res-guest-name');
    const contactEl = document.getElementById('res-guest-contact');
    const dateEl = document.getElementById('res-date');
    const timeVal = document.getElementById('res-time').value;
    const guestsVal = document.getElementById('res-guests').value;
    const seatingVal = document.getElementById('res-seating').value;
    const notesVal = document.getElementById('res-notes').value.trim();

    const errName = document.getElementById('res-error-name');
    const errContact = document.getElementById('res-error-contact');
    const errDate = document.getElementById('res-error-date');

    const name = nameEl.value.trim();
    const contact = contactEl.value.trim();
    const dateVal = dateEl.value;
    const today = getTodayISO();

    const nameOk = name.length >= 2;
    const contactOk = contact.length >= 5 && (/[\d]{6,}/.test(contact) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact));
    const dateOk = Boolean(dateVal) && dateVal >= today;

    errName.classList.toggle('hidden', nameOk);
    errContact.classList.toggle('hidden', contactOk);
    errDate.classList.toggle('hidden', dateOk);

    if (!nameOk || !contactOk || !dateOk) return;

    const refCode = 'TT-' + Math.floor(1000 + Math.random() * 9000);
    document.getElementById('res-badge').textContent = 'Confirmed';
    document.getElementById('res-badge').className = 'inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500 text-forest-dark';
    document.getElementById('res-heading').textContent = 'Table Reserved';
    document.getElementById('res-ref-code').textContent = refCode;

    const banner = document.getElementById('res-success-banner');
    const bannerText = document.getElementById('res-success-text');
    bannerText.textContent = `Thank you, ${name}. Your table for ${guestsVal} in the ${seatingVal} is booked for ${formatDisplayDate(dateVal)} at ${timeVal} (Ref: ${refCode}). Confirmation sent to ${contact}${notesVal ? ` · Note: "${notesVal}"` : ''}.`;
    banner.classList.remove('hidden');

    syncReservationPreview();
    document.getElementById('reservation-status-box').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function reserveViaWhatsAppFromForm() {
    const name = document.getElementById('res-guest-name')?.value.trim() || 'Guest';
    const contact = document.getElementById('res-guest-contact')?.value.trim() || 'Not provided';
    const dateVal = document.getElementById('res-date')?.value || getTodayISO();
    const timeVal = document.getElementById('res-time')?.value || '07:30 PM';
    const guestsVal = document.getElementById('res-guests')?.value || '2 Guests';
    const seatingVal = document.getElementById('res-seating')?.value || 'Main Dining Room';
    const notesVal = document.getElementById('res-notes')?.value.trim();

    const lines = [
        'Hello TASTE & THYME, I would like to reserve a table:',
        `• Name: ${name}`,
        `• Contact: ${contact}`,
        `• Date: ${formatDisplayDate(dateVal)}`,
        `• Time: ${timeVal}`,
        `• Guests: ${guestsVal}`,
        `• Seating: ${seatingVal}`
    ];
    if (notesVal) lines.push(`• Notes: ${notesVal}`);

    openRawWhatsAppText(lines.join('\n'));
}

function openWhatsAppReservation(topic) {
    const msg = `Hello TASTE & THYME ("Good Food. Slow Moments. Great Memories."), I would like assistance with: ${topic}.`;
    openRawWhatsAppText(msg);
}

function openRawWhatsAppText(text) {
    const url = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
}

// =====================================================================
// 14. LOCATION DIRECTIONS & 15. CONTACT INQUIRY FORM
// =====================================================================
function toggleLocationDirections() {
    const drawer = document.getElementById('location-directions-drawer');
    const label = document.getElementById('directions-btn-label');
    const willShow = drawer.classList.contains('hidden');
    drawer.classList.toggle('hidden', !willShow);
    if (label) label.textContent = willShow ? 'Hide Directions' : 'Show Directions';
}

function handleContactInquiry(event) {
    event.preventDefault();

    const name = document.getElementById('inq-name').value.trim();
    const email = document.getElementById('inq-email').value.trim();
    const message = document.getElementById('inq-message').value.trim();

    const errName = document.getElementById('inq-err-name');
    const errEmail = document.getElementById('inq-err-email');
    const errMessage = document.getElementById('inq-err-message');

    const nameOk = name.length >= 2;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const msgOk = message.length >= 6;

    errName.classList.toggle('hidden', nameOk);
    errEmail.classList.toggle('hidden', emailOk);
    errMessage.classList.toggle('hidden', msgOk);

    if (!nameOk || !emailOk || !msgOk) return;

    const banner = document.getElementById('contact-feedback-banner');
    const textEl = document.getElementById('contact-feedback-text');
    textEl.textContent = `Thank you, ${name}! Your note has been received and we will follow up at ${email}.`;
    banner.classList.remove('hidden');
    event.target.reset();
}

// =====================================================================
// IMAGE FALLBACK & FORMATTING HELPERS
// =====================================================================
function handleMediaFallback(imgEl, kind = 'plate', iconClass = 'w-12 h-12 text-forest') {
    if (!imgEl || imgEl.dataset.fallbackDone) return;
    imgEl.dataset.fallbackDone = 'true';

    const wrapper = document.createElement('div');
    wrapper.className = 'w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-cream-warm via-cream to-forest-soft p-3 text-center';
    wrapper.innerHTML = `${getFallbackSvg(kind, iconClass)}<span class="text-[10px] font-semibold uppercase tracking-wider text-forest/70 mt-1.5">Taste &amp; Thyme</span>`;

    if (imgEl.parentElement) {
        imgEl.parentElement.replaceChild(wrapper, imgEl);
    }
}

function getFallbackSvg(kind, sizeClass) {
    if (kind === 'bakery') {
        return `<svg class="${sizeClass}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 38c0-10 9-18 20-18s20 8 20 18H12z" fill="currentColor" fill-opacity="0.14"/><path d="M16 38v6a4 4 0 004 4h24a4 4 0 004-4v-6"/><path d="M27 25l4 7M37 24l3 8" stroke-linecap="round"/></svg>`;
    }
    if (kind === 'coffee') {
        return `<svg class="${sizeClass}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4"><rect x="14" y="24" width="28" height="22" rx="6" fill="currentColor" fill-opacity="0.14"/><path d="M42 29h5a5 5 0 010 10h-5"/><path d="M23 16c0-3 3-4 3-7M33 16c0-3 3-4 3-7" stroke-linecap="round"/></svg>`;
    }
    if (kind === 'dining') {
        return `<svg class="${sizeClass}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M12 36h40M20 36v14M44 36v14M32 36V20M24 20h16" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }
    return `<svg class="${sizeClass}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="32" cy="34" r="18" fill="currentColor" fill-opacity="0.14"/><circle cx="32" cy="34" r="9"/><path d="M32 10c4 0 7 3 7 6-4 0-7-2-7-6z"/></svg>`;
}

function getTodayISO() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60000;
    return new Date(now.getTime() - offsetMs).toISOString().split('T')[0];
}

function formatDisplayDate(isoDate) {
    if (!isoDate) return 'Today';
    const parts = isoDate.split('-');
    if (parts.length !== 3) return isoDate;
    const d = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    return d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
    return String(str)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'")
        .replace(/"/g, '&quot;');
}
