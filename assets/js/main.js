/**
 * Quality Tax Service & Consultancy — Main JavaScript
 * Clean Vanilla JS (No External Frameworks)
 * Handles Navigation, Hero Carousel with Arrows, Services Filter, Deep-Dives, Fee Estimator & Branch Switcher
 */

// ==========================================================================
// 1. GLOBAL / SHARED UTILITIES & MOBILE DRAWER
// ==========================================================================
function toggleMobileDrawer() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.toggle('hidden');
    drawer.classList.toggle('open');
  }
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-nav-drawer');
  if (drawer) {
    drawer.classList.add('hidden');
    drawer.classList.remove('open');
  }
}

// Close mobile drawer on ESC key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMobileDrawer();
    if (typeof closeBookingDrawer === 'function') {
      closeBookingDrawer();
    }
  }
});

// ==========================================================================
// 2. HERO CAROUSEL (index.html) - FADE-OUT-THEN-FADE-IN & TOUCH SWIPE
// ==========================================================================
let currentHeroSlide = 0;
const totalHeroSlides = 4;
let heroAutoInterval = null;
let isHeroSlideTransitioning = false;

function switchHeroSlide(index) {
  if (isHeroSlideTransitioning) return;

  if (index < 0) {
    index = totalHeroSlides - 1;
  } else if (index >= totalHeroSlides) {
    index = 0;
  }

  const currentSlide = document.getElementById(`hero-slide-${currentHeroSlide}`);
  const nextSlide = document.getElementById(`hero-slide-${index}`);
  if (!nextSlide) return;

  // If already on target slide and it is active, ignore
  if (index === currentHeroSlide && currentSlide && currentSlide.classList.contains('active')) {
    return;
  }

  isHeroSlideTransitioning = true;

  // Update Dot Indicators immediately for responsive feel
  const dots = document.querySelectorAll('.hero-dot');
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Update Background Image Slides (h1, h2, h3, h4)
  const bgSlides = document.querySelectorAll('.hero-bg-slide');
  bgSlides.forEach((bg, idx) => {
    if (idx === index) {
      bg.classList.add('active');
    } else {
      bg.classList.remove('active');
    }
  });


  // Sequential Animation: Fade out present slide text first, then appear next slide text
  if (currentSlide && currentSlide !== nextSlide && currentSlide.style.display !== 'none') {
    currentSlide.classList.remove('active');
    currentSlide.classList.add('fade-out');

    // Wait for present text to fully fade out (240ms)
    setTimeout(() => {
      currentSlide.style.display = 'none';
      currentSlide.classList.remove('fade-out');

      // Next slide fades in
      currentHeroSlide = index;
      nextSlide.style.display = 'flex';
      nextSlide.classList.add('fade-in-prep');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          nextSlide.classList.remove('fade-in-prep');
          nextSlide.classList.add('active');
          isHeroSlideTransitioning = false;
        });
      });
    }, 240);
  } else {
    // Initial display or direct show
    for (let i = 0; i < totalHeroSlides; i++) {
      const slide = document.getElementById(`hero-slide-${i}`);
      if (slide) {
        if (i === index) {
          slide.style.display = 'flex';
          slide.classList.add('active');
        } else {
          slide.style.display = 'none';
          slide.classList.remove('active', 'fade-out', 'fade-in-prep');
        }
      }
    }
    currentHeroSlide = index;
    isHeroSlideTransitioning = false;
  }
}

function prevHeroSlide() {
  switchHeroSlide(currentHeroSlide - 1);
  resetHeroTimer();
}

function nextHeroSlide() {
  switchHeroSlide(currentHeroSlide + 1);
  resetHeroTimer();
}

function startHeroTimer() {
  if (document.getElementById('hero-slide-0')) {
    heroAutoInterval = setInterval(() => {
      switchHeroSlide(currentHeroSlide + 1);
    }, 5500);
  }
}

function resetHeroTimer() {
  if (heroAutoInterval) {
    clearInterval(heroAutoInterval);
    startHeroTimer();
  }
}

// Touch swipe gestures & hover handlers for hero carousel
function initHeroCarouselTouch() {
  const heroElem = document.querySelector('.hero-section');
  if (!heroElem) return;

  let touchStartX = 0;
  let touchStartY = 0;

  heroElem.addEventListener('touchstart', (e) => {
    if (e.touches && e.touches.length === 1) {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      if (heroAutoInterval) clearInterval(heroAutoInterval);
    }
  }, { passive: true });

  heroElem.addEventListener('touchend', (e) => {
    if (e.changedTouches && e.changedTouches.length === 1) {
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Swipe detected if horizontal swipe >= 40px and dominant over vertical scrolling
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          // Swiped left -> Next slide
          nextHeroSlide();
        } else {
          // Swiped right -> Previous slide
          prevHeroSlide();
        }
      } else {
        resetHeroTimer();
      }
    }
  }, { passive: true });

  heroElem.addEventListener('mouseenter', () => {
    if (heroAutoInterval) clearInterval(heroAutoInterval);
  });
  heroElem.addEventListener('mouseleave', () => {
    resetHeroTimer();
  });
}

// ==========================================================================
// 3. SERVICE CATEGORY FILTERING (index.html) - DEFAULT: TAX & GST
// ==========================================================================
function filterServices(category, clickedBtn) {
  const cards = document.querySelectorAll('.service-card');
  const buttons = document.querySelectorAll('.tab-btn, .filter-tab-btn');

  // Update active state on buttons
  buttons.forEach(btn => {
    const btnCat = btn.getAttribute('data-category');
    if (btnCat === category) {
      btn.classList.add('active');
      btn.classList.remove('text-on-surface-variant');
    } else {
      btn.classList.remove('active');
      btn.classList.add('text-on-surface-variant');
    }
  });

  // Filter Cards
  cards.forEach(card => {
    const itemCat = card.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      card.classList.remove('hidden');
      card.style.display = 'flex';
    } else {
      card.classList.add('hidden');
      card.style.display = 'none';
    }
  });
}

// ==========================================================================
// 4. SERVICES CATALOG SEARCH & CATEGORY FILTERING (services.html)
// ==========================================================================
function handleSearch(query) {
  const term = query.toLowerCase().trim();
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    if (term.length > 0) {
      clearBtn.classList.remove('hidden');
      clearBtn.style.display = 'flex';
    } else {
      clearBtn.classList.add('hidden');
      clearBtn.style.display = 'none';
    }
  }

  const items = document.querySelectorAll('.service-item');
  let visibleCount = 0;

  items.forEach(item => {
    const keywords = (item.getAttribute('data-keywords') || '').toLowerCase();
    const title = item.querySelector('h3') ? item.querySelector('h3').innerText.toLowerCase() : '';
    const desc = item.querySelector('p') ? item.querySelector('p').innerText.toLowerCase() : '';
    const matches = title.includes(term) || keywords.includes(term) || desc.includes(term);

    if (matches) {
      item.style.display = 'flex';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  updateCounters(visibleCount);
}

function clearSearch() {
  const input = document.getElementById('serviceSearchInput');
  if (input) {
    input.value = '';
    handleSearch('');
    input.focus();
  }
}

function filterCategory(category, element) {
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(p => {
    p.classList.remove('active', 'active-pill');
  });
  if (element) {
    element.classList.add('active', 'active-pill');
  }

  const items = document.querySelectorAll('.service-item');
  let visibleCount = 0;

  items.forEach(item => {
    const itemCat = item.getAttribute('data-category');
    if (category === 'all' || itemCat === category) {
      item.style.display = 'flex';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  updateCounters(visibleCount);
}

function updateCounters(count) {
  const badge = document.getElementById('serviceCountBadge');
  const noResults = document.getElementById('noResultsState');
  if (badge) {
    badge.innerText = count + (count === 1 ? ' Service' : ' Services');
  }

  if (noResults) {
    if (count === 0) {
      noResults.classList.remove('hidden');
      noResults.style.display = 'block';
    } else {
      noResults.classList.add('hidden');
      noResults.style.display = 'none';
    }
  }
}

// Deep-Dive Switcher (Pvt Ltd vs GST)
function switchDeepDive(service) {
  const pvtLtdArticle = document.getElementById('deepDivePvtLtd');
  const gstArticle = document.getElementById('deepDiveGst');
  const btnPvtLtd = document.getElementById('btnPvtLtdView');
  const btnGst = document.getElementById('btnGstView');

  if (!pvtLtdArticle || !gstArticle) return;

  if (service === 'pvtltd') {
    pvtLtdArticle.classList.remove('hidden');
    pvtLtdArticle.style.display = 'block';
    gstArticle.classList.add('hidden');
    gstArticle.style.display = 'none';

    if (btnPvtLtd) {
      btnPvtLtd.classList.add('active');
    }
    if (btnGst) {
      btnGst.classList.remove('active');
    }
  } else {
    pvtLtdArticle.classList.add('hidden');
    pvtLtdArticle.style.display = 'none';
    gstArticle.classList.remove('hidden');
    gstArticle.style.display = 'block';

    if (btnGst) {
      btnGst.classList.add('active');
    }
    if (btnPvtLtd) {
      btnPvtLtd.classList.remove('active');
    }
  }

  const anchor = document.getElementById('deepDiveAnchor');
  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Interactive Fee Calculator
function recalculateTotal() {
  const selectElem = document.getElementById('calcServiceSelect');
  if (!selectElem) return;

  const baseServiceVal = parseInt(selectElem.value, 10) || 0;
  const gstElem = document.getElementById('addonGst');
  const msmeElem = document.getElementById('addonMsme');

  const gstAddon = (gstElem && gstElem.checked) ? parseInt(gstElem.value, 10) : 0;
  const msmeAddon = (msmeElem && msmeElem.checked) ? parseInt(msmeElem.value, 10) : 0;

  const grandTotal = baseServiceVal + gstAddon + msmeAddon;
  const displayElem = document.getElementById('calcTotalDisplay');
  if (displayElem) {
    displayElem.innerText = '₹' + grandTotal.toLocaleString('en-IN');
  }
}

function bookCalculatedQuote() {
  const selectElem = document.getElementById('calcServiceSelect');
  if (!selectElem) return;
  const selectedText = selectElem.options[selectElem.selectedIndex].getAttribute('data-name') || selectElem.options[selectElem.selectedIndex].text;
  const totalDisplay = document.getElementById('calcTotalDisplay');
  const totalRaw = totalDisplay ? totalDisplay.innerText.replace('₹', '').replace(/,/g, '') : '6999';
  openBookingDrawer(selectedText + ' (Custom Bundle)', parseInt(totalRaw, 10) || 6999);
}

// Slide-Up Modal Drawer
function openBookingDrawer(serviceTitle, price) {
  const modal = document.getElementById('bookingDrawerModal');
  const nameInput = document.getElementById('drawerServiceName');
  const priceDisplay = document.getElementById('drawerPriceDisplay');
  const form = document.getElementById('consultationForm');
  const successNotice = document.getElementById('bookingSuccessNotice');

  if (nameInput) nameInput.value = serviceTitle;
  if (priceDisplay) priceDisplay.innerText = '₹' + Number(price).toLocaleString('en-IN');
  if (form) form.classList.remove('hidden');
  if (successNotice) successNotice.classList.add('hidden');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('open');
  }
}

function closeBookingDrawer() {
  const modal = document.getElementById('bookingDrawerModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('open');
  }
}

function submitBooking(event) {
  if (event) event.preventDefault();
  const form = document.getElementById('consultationForm');
  const successNotice = document.getElementById('bookingSuccessNotice');
  if (form) form.classList.add('hidden');
  if (successNotice) successNotice.classList.remove('hidden');
}

// Close drawer if backdrop clicked
const modalElem = document.getElementById('bookingDrawerModal');
if (modalElem) {
  modalElem.addEventListener('click', function (e) {
    if (e.target === this) {
      closeBookingDrawer();
    }
  });
}

// ==========================================================================
// 5. BRANCH LOCATOR & CONTACT PAGE (contact.html)
// ==========================================================================
const branchesData = {
  chennai: {
    title: "Chennai Central Headquarters",
    hubType: "State Headquarters",
    address: "No. 42, G.N. Chetty Road, Opp. Vani Mahal, T. Nagar, Chennai - 600017",
    callNumber: "+914428156789",
    callLabel: "Call: 044-2815 6789",
    gmapsQuery: "https://maps.google.com/?q=42+GN+Chetty+Road+T+Nagar+Chennai+600017",
    locationTag: "T. Nagar, Chennai, Tamil Nadu, India",
    headName: "CA K. Ramanathan, FCA",
    headRole: "Senior Partner • Direct Tax, Appellate & Corporate Mergers",
    hours: "Mon - Sat: 9:30 AM - 7:30 PM",
    landmark: "Opposite Vani Mahal Auditorium",
    parking: "Valet & Basement Reserved",
    avatarAlt: "Professional Indian male chartered accountant partner in navy business suit smiling confidently, office environment background"
  },
  madurai: {
    title: "Madurai Southern Regional Branch",
    hubType: "South Zone Chamber",
    address: "14B, East Veli Street, Near Anna Bus Stand, Madurai - 625020",
    callNumber: "+914522345678",
    callLabel: "Call: 0452-234 5678",
    gmapsQuery: "https://maps.google.com/?q=East+Veli+Street+Madurai+625020",
    locationTag: "East Veli Street, Madurai, Tamil Nadu, India",
    headName: "CA P. Karthikeyan, ACA",
    headRole: "Branch Head • GST Scrutiny & Textile Industry Audits",
    hours: "Mon - Sat: 9:30 AM - 7:00 PM",
    landmark: "Near Anna Bus Stand Complex",
    parking: "Dedicated Ground Lot Available",
    avatarAlt: "South Indian senior Chartered Accountant with glasses in executive formal attire, warm professional studio lighting"
  },
  ambur: {
    title: "Ambur Export & Industrial Branch",
    hubType: "Tannery & MSME Desk",
    address: "78, M.C. Road, Near Leather Complex, Ambur - 635802",
    callNumber: "+914174245890",
    callLabel: "Call: 04174-245 890",
    gmapsQuery: "https://maps.google.com/?q=MC+Road+Leather+Complex+Ambur+635802",
    locationTag: "MC Road, Ambur, Tamil Nadu, India",
    headName: "S. Imran Basha, Tax Advocate",
    headRole: "Principal Counsel • Export Incentive Duty, DGFT & Customs",
    hours: "Mon - Sat: 10:00 AM - 7:30 PM",
    landmark: "Near Ambur Leather Complex",
    parking: "Frontage Reserved Parking",
    avatarAlt: "Accomplished male legal advocate in formal legal attire holding leather document folio, warm lighting"
  },
  coimbatore: {
    title: "Coimbatore Industrial City Branch",
    hubType: "Engineering & Startup Desk",
    address: "205, D.B. Road, Near Post Office, R.S. Puram, Coimbatore - 641002",
    callNumber: "+914222547890",
    callLabel: "Call: 0422-254 7890",
    gmapsQuery: "https://maps.google.com/?q=DB+Road+RS+Puram+Coimbatore+641002",
    locationTag: "DB Road, RS Puram, Coimbatore, Tamil Nadu, India",
    headName: "CA R. Venkatesh, FCA",
    headRole: "Resident Partner • Manufacturing Audit & Startup Angel Valuations",
    hours: "Mon - Sat: 9:30 AM - 7:00 PM",
    landmark: "Opposite RS Puram Post Office",
    parking: "Multi-level Parking Adjacent",
    avatarAlt: "Distinguished Indian corporate finance advisor and chartered auditor with friendly demeanor, formal tie and blazer"
  }
};

function switchBranch(branchKey) {
  const data = branchesData[branchKey];
  if (!data) return;

  // Update Tab Button Styles
  ['chennai', 'madurai', 'ambur', 'coimbatore'].forEach(key => {
    const tab = document.getElementById('tab-' + key);
    if (tab) {
      if (key === branchKey) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    }
  });

  // Update Text Content
  const titleElem = document.getElementById('branch-title');
  const hubTypeElem = document.getElementById('badge-hub-type');
  const addrElem = document.getElementById('branch-address');
  const headNameElem = document.getElementById('branch-head-name');
  const headRoleElem = document.getElementById('branch-head-role');
  const hoursElem = document.getElementById('branch-hours');
  const landmarkElem = document.getElementById('branch-landmark');
  const parkingElem = document.getElementById('badge-parking');

  if (titleElem) titleElem.textContent = data.title;
  if (hubTypeElem) hubTypeElem.textContent = data.hubType;
  if (addrElem) addrElem.textContent = data.address;
  if (headNameElem) headNameElem.textContent = data.headName;
  if (headRoleElem) headRoleElem.textContent = data.headRole;
  if (hoursElem) hoursElem.textContent = data.hours;
  if (landmarkElem) landmarkElem.textContent = data.landmark;
  if (parkingElem) parkingElem.textContent = data.parking;

  // Update Action Buttons
  const callLink = document.getElementById('branch-call-link');
  const callLabel = document.getElementById('branch-call-label');
  if (callLink) callLink.href = 'tel:' + data.callNumber;
  if (callLabel) callLabel.textContent = data.callLabel;

  const gmapsLink = document.getElementById('branch-gmaps-link');
  if (gmapsLink) gmapsLink.href = data.gmapsQuery;

  // Update Map and Avatar attributes
  const mapContainer = document.getElementById('branch-map');
  if (mapContainer) {
    mapContainer.setAttribute('data-location', data.locationTag);
  }

  const avatar = document.getElementById('head-avatar');
  if (avatar) {
    avatar.setAttribute('data-alt', data.avatarAlt);
  }

  // Sync Preferred Branch form field if on contact form
  const prefSelect = document.getElementById('pref-branch');
  if (prefSelect) {
    prefSelect.value = branchKey;
  }
}

function handleFileSelected(input) {
  if (input && input.files && input.files[0]) {
    const label = document.getElementById('file-label');
    if (label) {
      label.textContent = "Attached: " + input.files[0].name;
      label.style.color = "var(--secondary)";
    }
  }
}

function handleFormSubmit(e) {
  if (e) e.preventDefault();
  const successBox = document.getElementById('submission-success');
  if (successBox) {
    successBox.classList.remove('hidden');
    successBox.style.display = 'flex';
    successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  const form = document.getElementById('consultation-form');
  if (form) form.reset();

  const fileLabel = document.getElementById('file-label');
  if (fileLabel) {
    fileLabel.textContent = "Tap to attach PDF or scanned notice";
    fileLabel.style.color = "";
  }
}

// ==========================================================================
// 6. DOM READY INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', function () {
  // Start Hero timer & touch gestures if hero exists
  if (document.getElementById('hero-slide-0')) {
    switchHeroSlide(0);
    startHeroTimer();
    initHeroCarouselTouch();
  }

  // Default Service Filter on index.html: Tax & GST (as requested by user!)
  const serviceContainer = document.getElementById('services-container');
  if (serviceContainer) {
    filterServices('tax');
  }

  // Initialize Calculator on services.html
  if (document.getElementById('calcServiceSelect')) {
    recalculateTotal();
  }
});
