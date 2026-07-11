const PRODUCTS = [
  {
    id: 1,
    title: 'კედელზე საკიდი უნიტაზი — Rimless 234',
    category: 'სანტექნიკა',
    brand: 'Keralux Selection',
    code: 'KR-WC-234',
    price: 234,
    oldPrice: 269,
    image: 'assets/toilet-1.svg',
    stock: 'მარაგშია',
    material: 'სანიტარული ფაიფური',
    dimensions: '52 × 36 სმ',
    description: 'თანამედროვე კედელზე საკიდი მოდელი გლუვი ზედაპირითა და მარტივად მოსავლელი ფორმით.',
    keywords: 'უნიტაზი საკიდი rimless თეთრი აბაზანა ფაიფური'
  },
  {
    id: 2,
    title: 'კედელზე საკიდი უნიტაზი — Soft Line 249',
    category: 'სანტექნიკა',
    brand: 'Keralux Selection',
    code: 'KR-WC-249',
    price: 249,
    oldPrice: 289,
    image: 'assets/toilet-2.svg',
    stock: 'მარაგშია',
    material: 'სანიტარული ფაიფური',
    dimensions: '53 × 36 სმ',
    description: 'რბილი კონტურებით შექმნილი მოდელი თანამედროვე აბაზანისთვის.',
    keywords: 'უნიტაზი საკიდი თეთრი სანიტარული ფაიფური'
  },
  {
    id: 3,
    title: 'აბაზანის კომპლექტი Mira 60',
    category: 'აბაზანის ავეჯი',
    brand: 'Keralux Home',
    code: 'KR-BF-348',
    price: 348,
    oldPrice: 389,
    image: 'assets/cabinet-1.svg',
    stock: 'მარაგშია',
    material: 'PVC / კერამიკა',
    dimensions: '60 × 50 სმ',
    description: 'კომპაქტური კარადა, ნიჟარა და სარკის ზონა პრაქტიკული შენახვისთვის.',
    keywords: 'აბაზანის კარადა ავეჯი ნიჟარა სარკე pvc'
  },
  {
    id: 4,
    title: 'აბაზანის კომპლექტი Forma 60',
    category: 'აბაზანის ავეჯი',
    brand: 'Keralux Home',
    code: 'KR-BF-431',
    price: 431.7,
    oldPrice: 479,
    image: 'assets/cabinet-2.svg',
    stock: 'მარაგშია',
    material: 'PVC / კერამიკა',
    dimensions: '60 × 45 სმ',
    description: 'ღია ტონალობის აბაზანის ავეჯი ზედა ნიჟარითა და სარკის კომპლექტით.',
    keywords: 'აბაზანის ავეჯი კარადა ნიჟარა კომპლექტი'
  },
  {
    id: 5,
    title: 'აბაზანის ავეჯი Urban Wood 60',
    category: 'აბაზანის ავეჯი',
    brand: 'Keralux Home',
    code: 'KR-BF-450',
    price: 450,
    oldPrice: null,
    image: 'assets/cabinet-3.svg',
    stock: 'მცირე მარაგი',
    material: 'ტენგამძლე PVC',
    dimensions: '60 × 46 სმ',
    description: 'ხის ფაქტურის ფასადი და ზედა ნიჟარა თბილი, ბუნებრივი ინტერიერისთვის.',
    keywords: 'ხის ფაქტურა ავეჯი ნიჟარა pvc აბაზანა'
  },
  {
    id: 6,
    title: 'აბაზანის კომპლექტი Nord 80',
    category: 'აბაზანის ავეჯი',
    brand: 'Keralux Home',
    code: 'KR-BF-503',
    price: 503,
    oldPrice: 559,
    image: 'assets/cabinet-4.svg',
    stock: 'მარაგშია',
    material: 'ტენგამძლე PVC / კერამიკა',
    dimensions: '80 × 46 სმ',
    description: 'ფართო კარადა უჯრებით და ყოველდღიური ნივთების მოსახერხებელი განთავსებით.',
    keywords: 'აბაზანის ავეჯი 80 სმ უჯრა ნიჟარა'
  },
  {
    id: 7,
    title: 'ოვალური სარკე LED განათებით',
    category: 'სანტექნიკა',
    brand: 'Keralux Light',
    code: 'KR-MR-523',
    price: 523,
    oldPrice: null,
    image: 'assets/cabinet-5.svg',
    stock: 'მცირე მარაგი',
    material: 'მინა / ალუმინი',
    dimensions: '80 × 50 სმ',
    description: 'დეკორატიული სარკე ინტეგრირებული LED განათებით და დახვეწილი კონტურით.',
    keywords: 'სარკე led განათება აბაზანა ოვალური'
  },
  {
    id: 8,
    title: 'საწმენდი ჯაგრისისა და აქანდაზის კომპლექტი',
    category: 'საყოფაცხოვრებო',
    brand: 'Home Utility',
    code: 'KR-HM-007',
    price: 6.99,
    oldPrice: 9.99,
    image: 'assets/broom-set.svg',
    stock: 'მარაგშია',
    material: 'პლასტმასი / სინთეტიკური ბოჭკო',
    dimensions: 'სტანდარტული',
    description: 'კომპაქტური დასუფთავების კომპლექტი ყოველდღიური გამოყენებისთვის.',
    keywords: 'ჯაგრისი აქანდაზი ცოცხი დასუფთავება'
  },
  {
    id: 9,
    title: 'ორმაგი სათლის იატაკის საწმენდი კომპლექტი',
    category: 'საყოფაცხოვრებო',
    brand: 'Home Utility',
    code: 'KR-HM-017',
    price: 16.99,
    oldPrice: 21.99,
    image: 'assets/spin-mop.svg',
    stock: 'მარაგშია',
    material: 'უჟანგავი ფოლადი / პლასტმასი',
    dimensions: 'კომპლექტი',
    description: 'მოსახერხებელი ორმაგი სათლი და მბრუნავი საწმენდი თავი სწრაფი დასუფთავებისთვის.',
    keywords: 'მოპი სათლი საწმენდი იატაკი დასუფთავება'
  },
  {
    id: 10,
    title: 'ელექტრო ჩაიდანი 1.7 ლ',
    category: 'საყოფაცხოვრებო',
    brand: 'Skalett',
    code: 'KR-EL-010',
    price: 9.99,
    oldPrice: 14.99,
    image: 'assets/kettle.svg',
    stock: 'მარაგშია',
    material: 'უჟანგავი ფოლადი',
    dimensions: '1.7 ლ',
    description: 'სწრაფი ადუღება, ავტომატური გამორთვა და ყოველდღიური გამოყენებისთვის მარტივი დიზაინი.',
    keywords: 'ელექტრო ჩაიდანი ტექნიკა 1.7 ლიტრი'
  },
  {
    id: 11,
    title: 'კედლის თმის საშრობი',
    category: 'საყოფაცხოვრებო',
    brand: 'Hotel Care',
    code: 'KR-EL-037',
    price: 37,
    oldPrice: 44,
    image: 'assets/hairdryer.svg',
    stock: 'მცირე მარაგი',
    material: 'ABS პლასტმასი',
    dimensions: 'კედლის მოდელი',
    description: 'კომპაქტური კედლის მოდელი აბაზანისა და სასტუმროს ნომრისთვის.',
    keywords: 'თმის საშრობი ფენი კედლის სასტუმრო აბაზანა'
  },
  {
    id: 12,
    title: 'LED ნათურა — ენერგოეფექტური კომპლექტი',
    category: 'სარემონტო მასალები',
    brand: 'Eco Light',
    code: 'KR-LED-019',
    price: 18.99,
    oldPrice: 24.99,
    image: 'assets/led-bulb.svg',
    stock: 'მარაგშია',
    material: 'LED / პოლიკარბონატი',
    dimensions: 'E27',
    description: 'ენერგოეფექტური LED განათება სახლისა და კომერციული სივრცისთვის.',
    keywords: 'led ნათურა განათება ენერგოეფექტური e27'
  },
  {
    id: 13,
    title: 'დიდფორმატიანი კაფელი Perlino Blue',
    category: 'კაფელი',
    brand: 'Keralux Surface',
    code: 'KR-TL-120',
    price: 59,
    oldPrice: null,
    image: 'assets/hero.svg',
    stock: 'შეკვეთით',
    material: 'ფაიფურის ქვა',
    dimensions: '60 × 120 სმ',
    description: 'ქვის ეფექტის ზედაპირი მშვიდი ნაცრისფერი და ლურჯი ტონებით.',
    keywords: 'კაფელი ფილა perlino blue 60x120 კედელი იატაკი'
  },
  {
    id: 14,
    title: 'კაფელის სამონტაჟო აქსესუარების ნაკრები',
    category: 'სარემონტო მასალები',
    brand: 'Pro Fix',
    code: 'KR-TL-ACC',
    price: 24,
    oldPrice: null,
    image: 'assets/hero.svg',
    stock: 'მარაგშია',
    material: 'პოლიმერი / მეტალი',
    dimensions: 'ნაკრები',
    description: 'კაფელის სწორად გასწორებისა და მონტაჟისთვის საჭირო ძირითადი აქსესუარები.',
    keywords: 'კაფელის აქსესუარი გასწორება მონტაჟი ხელსაწყო'
  }
];

const state = {
  category: 'all',
  sort: 'recommended',
  search: '',
  cart: JSON.parse(localStorage.getItem('keralux-cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('keralux-wishlist') || '[]')
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const money = value => `${Number(value).toLocaleString('ka-GE', { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 })} ₾`;
const discount = p => p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;

function saveState() {
  localStorage.setItem('keralux-cart', JSON.stringify(state.cart));
  localStorage.setItem('keralux-wishlist', JSON.stringify(state.wishlist));
}

function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (state.category !== 'all') list = list.filter(p => p.category === state.category);
  if (state.search) {
    const q = state.search.toLocaleLowerCase('ka-GE').trim();
    list = list.filter(p => [p.title, p.category, p.brand, p.code, p.material, p.keywords].join(' ').toLocaleLowerCase('ka-GE').includes(q));
  }
  if (state.sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (state.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (state.sort === 'discount') list.sort((a,b) => discount(b) - discount(a));
  return list;
}

function renderProducts() {
  const grid = $('#productGrid');
  const products = getFilteredProducts();
  grid.innerHTML = products.map(productCardTemplate).join('');
  $('#emptyState').hidden = products.length > 0;
  grid.hidden = products.length === 0;
  $('#activeSearch').hidden = !state.search;
  $('#activeSearchTerm').textContent = state.search;
}

function productCardTemplate(p) {
  const isFavorite = state.wishlist.includes(p.id);
  const sale = discount(p);
  return `
    <article class="product-card">
      <div class="product-card__media">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        ${sale ? `<span class="product-card__badge">-${sale}%</span>` : ''}
        <button class="product-card__favorite ${isFavorite ? 'is-active' : ''}" data-favorite="${p.id}" aria-label="${isFavorite ? 'რჩეულებიდან ამოღება' : 'რჩეულებში დამატება'}">
          <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <button class="product-card__quick" data-view="${p.id}">სწრაფი ნახვა</button>
      </div>
      <div class="product-card__body">
        <div class="product-card__meta"><span>${p.brand}</span><span class="stock ${p.stock === 'მცირე მარაგი' ? 'stock--low' : ''}">${p.stock}</span></div>
        <h3>${p.title}</h3>
        <div class="product-card__price"><strong>${money(p.price)}</strong>${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ''}</div>
        <button class="product-card__add" data-add="${p.id}">კალათაში დამატება</button>
      </div>
    </article>`;
}

function updateCounters() {
  $('#cartCount').textContent = state.cart.reduce((sum, item) => sum + item.qty, 0);
  $('#wishlistCount').textContent = state.wishlist.length;
}

function addToCart(id, qty = 1) {
  const item = state.cart.find(i => i.id === id);
  if (item) item.qty += qty;
  else state.cart.push({ id, qty });
  saveState();
  updateCounters();
  renderCart();
  toast('პროდუქტი დაემატა კალათაში');
}

function toggleFavorite(id) {
  state.wishlist = state.wishlist.includes(id) ? state.wishlist.filter(x => x !== id) : [...state.wishlist, id];
  saveState();
  updateCounters();
  renderProducts();
  renderWishlist();
  toast(state.wishlist.includes(id) ? 'პროდუქტი დაემატა რჩეულებში' : 'პროდუქტი ამოიღე რჩეულებიდან');
}

function renderCart() {
  const root = $('#cartItems');
  if (!state.cart.length) {
    root.innerHTML = '<div class="drawer-empty"><strong>კალათა ცარიელია</strong><p>დაამატე სასურველი პროდუქტი და შეკვეთა აქ გამოჩნდება.</p></div>';
    $('#cartTotal').textContent = money(0);
    $('#checkoutButton').disabled = true;
    return;
  }
  root.innerHTML = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return `<div class="cart-item">
      <img src="${p.image}" alt="${p.title}">
      <div><small>${p.code}</small><h3>${p.title}</h3><span class="cart-item__price">${money(p.price * item.qty)}</span>
        <div class="quantity"><button data-qty="minus" data-id="${p.id}" aria-label="რაოდენობის შემცირება">−</button><span>${item.qty}</span><button data-qty="plus" data-id="${p.id}" aria-label="რაოდენობის გაზრდა">+</button></div>
      </div>
      <button class="cart-item__remove" data-remove="${p.id}" aria-label="კალათიდან ამოღება">×</button>
    </div>`;
  }).join('');
  const total = state.cart.reduce((sum, item) => sum + PRODUCTS.find(p => p.id === item.id).price * item.qty, 0);
  $('#cartTotal').textContent = money(total);
  $('#checkoutButton').disabled = false;
}

function renderWishlist() {
  const root = $('#wishlistItems');
  if (!state.wishlist.length) {
    root.innerHTML = '<div class="drawer-empty"><strong>რჩეულები ცარიელია</strong><p>გულზე დაჭერით შეინახე პროდუქტი მოგვიანებით სანახავად.</p></div>';
    return;
  }
  root.innerHTML = state.wishlist.map(id => {
    const p = PRODUCTS.find(x => x.id === id);
    return `<div class="wishlist-item"><img src="${p.image}" alt="${p.title}"><div><h3>${p.title}</h3><strong>${money(p.price)}</strong></div><button data-wishlist-add="${p.id}">კალათაში</button></div>`;
  }).join('');
}

function changeQuantity(id, direction) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += direction === 'plus' ? 1 : -1;
  if (item.qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
  saveState(); updateCounters(); renderCart();
}

function openDrawer(type) {
  closeDrawers();
  const drawer = type === 'cart' ? $('#cartDrawer') : $('#wishlistPanel');
  drawer.classList.add('is-open');
  drawer.setAttribute('aria-hidden', 'false');
  $('#overlay').hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => $('.close-button', drawer)?.focus(), 50);
}

function closeDrawers() {
  $$('.drawer').forEach(d => { d.classList.remove('is-open'); d.setAttribute('aria-hidden', 'true'); });
  $('#overlay').hidden = true;
  document.body.style.overflow = '';
}

function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  const favorite = state.wishlist.includes(p.id);
  $('#productModalContent').innerHTML = `<div class="product-modal__grid">
    <div class="product-modal__media"><img src="${p.image}" alt="${p.title}"></div>
    <div class="product-modal__details">
      <small>${p.category} · ${p.code}</small><h2>${p.title}</h2><p>${p.description}</p>
      <div class="product-modal__price"><strong>${money(p.price)}</strong>${p.oldPrice ? `<del>${money(p.oldPrice)}</del>` : ''}</div>
      <dl class="spec-list"><div><dt>ბრენდი</dt><dd>${p.brand}</dd></div><div><dt>მასალა</dt><dd>${p.material}</dd></div><div><dt>ზომა</dt><dd>${p.dimensions}</dd></div><div><dt>ხელმისაწვდომობა</dt><dd>${p.stock}</dd></div></dl>
      <div class="product-modal__actions"><button class="button button--primary" data-modal-add="${p.id}">კალათაში დამატება</button><button class="icon-button ${favorite ? 'is-active' : ''}" data-modal-favorite="${p.id}" aria-label="რჩეულებში დამატება"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg></button></div>
    </div>
  </div>`;
  const modal = $('#productModal');
  if (!modal.open) modal.showModal();
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function toast(message) {
  const el = $('#toast');
  el.textContent = message;
  el.classList.add('is-visible');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('is-visible'), 2600);
}

function buildOrderMessage(formData) {
  const items = state.cart.map(item => {
    const p = PRODUCTS.find(x => x.id === item.id);
    return `• ${p.title} (${p.code}) — ${item.qty} ც. × ${money(p.price)}`;
  }).join('\n');
  const total = state.cart.reduce((sum, item) => sum + PRODUCTS.find(p => p.id === item.id).price * item.qty, 0);
  return `გამარჯობა, მსურს შეკვეთის გაკეთება Keralux-ში.\n\n${items}\n\nჯამი: ${money(total)}\n\nსახელი: ${formData.get('name')}\nტელეფონი: ${formData.get('phone')}\nშენიშვნა: ${formData.get('note') || '—'}\n\nგთხოვთ დამიდასტუროთ მარაგი და შეკვეთის დეტალები.`;
}

const GUIDES = {
  toilet: { title: 'როგორ შევარჩიოთ უნიტაზის სწორი ზომა?', body: '<p>შეძენამდე გაზომე ხელმისაწვდომი სიგანე და სიღრმე, გადაამოწმე კანალიზაციის გამოსასვლელის ტიპი და კედლის გამძლეობა. კედელზე საკიდი მოდელისთვის მნიშვნელოვანია ჩასაშენებელი სისტემის ადგილი.</p><ul><li>გაზომე კედლიდან კარის ან ავეჯის ზღვრამდე მანძილი.</li><li>გაითვალისწინე მინიმუმ 20–25 სმ თავისუფალი სივრცე გვერდებზე.</li><li>გადაამოწმე წყლისა და კანალიზაციის წერტილები.</li></ul>' },
  tile: { title: 'ფორმატი, ფაქტურა და ფერი ერთ სივრცეში', body: '<p>დიდი ფორმატის კაფელი ნაკლებ ნაკერს ქმნის და სივრცეს უფრო მშვიდ იერს აძლევს. სრიალა ზედაპირი კედლისთვის შეიძლება კარგი იყოს, ხოლო სველ იატაკზე უპირატესობა მიანიჭე ნაკლებად სრიალა ფაქტურას.</p><ul><li>პატარა სივრცეში გამოიყენე ერთი ძირითადი ტონი.</li><li>შეუკვეთე დაახლოებით 10% დამატებითი რაოდენობა ჭრისა და მარაგისთვის.</li><li>ყურადღება მიაქციე პარტიის ნომერსა და ტონალობას.</li></ul>' },
  measure: { title: 'რა უნდა გაზომო მაღაზიაში მოსვლამდე?', body: '<p>მოამზადე კედლების სიგრძე და სიმაღლე, კარისა და ფანჯრის ზომები, ასევე წყლის, კანალიზაციისა და ელექტრო წერტილების მდებარეობა.</p><ul><li>გადაიღე სივრცე რამდენიმე კუთხიდან.</li><li>ჩაინიშნე მილებისა და როზეტების სიმაღლე.</li><li>თუ შესაძლებელია, იქონიე ოთახის მარტივი ნახაზი.</li></ul>' }
};

function showInfo(title, body) {
  $('#infoModalContent').innerHTML = `<small class="eyebrow eyebrow--dark">Keralux-ის რჩევა</small><h2>${title}</h2>${body}`;
  $('#infoModal').showModal();
}

$('#productGrid').addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  const fav = e.target.closest('[data-favorite]');
  const view = e.target.closest('[data-view]');
  if (add) addToCart(Number(add.dataset.add));
  if (fav) toggleFavorite(Number(fav.dataset.favorite));
  if (view) openProduct(Number(view.dataset.view));
});

$('#cartItems').addEventListener('click', e => {
  const qty = e.target.closest('[data-qty]');
  const remove = e.target.closest('[data-remove]');
  if (qty) changeQuantity(Number(qty.dataset.id), qty.dataset.qty);
  if (remove) { state.cart = state.cart.filter(i => i.id !== Number(remove.dataset.remove)); saveState(); updateCounters(); renderCart(); }
});

$('#wishlistItems').addEventListener('click', e => {
  const add = e.target.closest('[data-wishlist-add]');
  if (add) addToCart(Number(add.dataset.wishlistAdd));
});

$('#productModal').addEventListener('click', e => {
  const add = e.target.closest('[data-modal-add]');
  const fav = e.target.closest('[data-modal-favorite]');
  if (add) addToCart(Number(add.dataset.modalAdd));
  if (fav) { toggleFavorite(Number(fav.dataset.modalFavorite)); openProduct(Number(fav.dataset.modalFavorite)); }
});

$$('.modal__close').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
$$('dialog').forEach(dialog => dialog.addEventListener('click', e => { if (e.target === dialog) closeDialog(dialog); }));

$('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  state.search = $('#siteSearch').value.trim();
  renderProducts();
  $('#featured').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#categoryFilter').addEventListener('change', e => { state.category = e.target.value; renderProducts(); });
$('#sortProducts').addEventListener('change', e => { state.sort = e.target.value; renderProducts(); });
$('#clearSearch').addEventListener('click', () => { state.search = ''; $('#siteSearch').value = ''; renderProducts(); });
$('#resetFilters').addEventListener('click', () => { state.category = 'all'; state.search = ''; $('#categoryFilter').value = 'all'; $('#siteSearch').value = ''; renderProducts(); });

$$('[data-category]').forEach(button => button.addEventListener('click', () => {
  state.category = button.dataset.category;
  $('#categoryFilter').value = state.category;
  renderProducts();
  $('#featured').scrollIntoView({ behavior: 'smooth' });
}));
$$('[data-footer-category]').forEach(link => link.addEventListener('click', () => {
  state.category = link.dataset.footerCategory;
  $('#categoryFilter').value = state.category;
  renderProducts();
}));

$('#cartButton').addEventListener('click', () => openDrawer('cart'));
$('#wishlistButton').addEventListener('click', () => openDrawer('wishlist'));
$('#overlay').addEventListener('click', closeDrawers);
$$('[data-close]').forEach(b => b.addEventListener('click', closeDrawers));

$('#checkoutButton').addEventListener('click', () => {
  if (!state.cart.length) return;
  closeDrawers();
  $('#checkoutModal').showModal();
});

$('#checkoutForm').addEventListener('submit', e => {
  e.preventDefault();
  const message = buildOrderMessage(new FormData(e.currentTarget));
  window.open(`https://wa.me/995558042042?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  closeDialog($('#checkoutModal'));
  toast('შეკვეთის ტექსტი გაიხსნა WhatsApp-ში');
});

$('#projectButton').addEventListener('click', () => {
  const message = 'გამარჯობა, მსურს Keralux-ის კონსულტაცია სარემონტო პროექტისთვის. გთხოვთ მომწეროთ რა ინფორმაცია გამოგიგზავნოთ.';
  window.open(`https://wa.me/995558042042?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

$$('[data-guide]').forEach(button => button.addEventListener('click', () => {
  const guide = GUIDES[button.dataset.guide]; showInfo(guide.title, guide.body);
}));

$('#newsletterForm').addEventListener('submit', e => {
  e.preventDefault();
  toast('მადლობა — გამოწერა მიღებულია');
  e.currentTarget.reset();
});

$('#menuButton').addEventListener('click', () => {
  const menu = $('#mobileMenu');
  const open = $('#menuButton').getAttribute('aria-expanded') === 'true';
  $('#menuButton').setAttribute('aria-expanded', String(!open));
  menu.hidden = open;
});
$$('#mobileMenu a').forEach(a => a.addEventListener('click', () => { $('#mobileMenu').hidden = true; $('#menuButton').setAttribute('aria-expanded','false'); }));

window.addEventListener('scroll', () => $('#siteHeader').classList.toggle('is-scrolled', window.scrollY > 20));
$('#currentYear').textContent = new Date().getFullYear();

renderProducts();
renderCart();
renderWishlist();
updateCounters();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('service-worker.js').catch(() => {}));
}
