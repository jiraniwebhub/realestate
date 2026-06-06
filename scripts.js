// Premium Real Estate Website - Enhanced Interactions
document.addEventListener('DOMContentLoaded', function() {

  // Mobile Navigation Toggle
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('open');
    });

    // Close menu when a link is clicked
    const navLinks = mainNav.querySelectorAll('a');

    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        mainNav.classList.remove('open');
      });
    });
  }

  // Set active nav link
  const currentLocation = location.pathname;
  const navLinks = document.querySelectorAll('.main-nav a');

  navLinks.forEach(link => {

    link.classList.remove('active');

    if (
      link.getAttribute('href') === currentLocation ||
      (currentLocation === '/' && link.getAttribute('href') === 'index.html')
    ) {
      link.classList.add('active');
    }

  });

  // Property Card Save/Like functionality
  document.body.addEventListener('click', function(e) {

    if (e.target.matches('.save-btn') || e.target.closest('.save-btn')) {

      const btn = e.target.closest('.save-btn');

      btn.classList.toggle('saved');

      btn.textContent = btn.classList.contains('saved')
        ? '❤️ Saved'
        : '🤍 Save';

    }

  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function(e) {

      const href = this.getAttribute('href');

      if (href !== '#' && href !== '#login' && href !== '#signup') {

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }

      }

    });

  });

  // Header scroll effect
  const header = document.querySelector('.site-header');

  if (header) {

    window.addEventListener('scroll', function() {

      if (window.scrollY > 10) {
        header.style.boxShadow = 'var(--shadow-md)';
      } else {
        header.style.boxShadow = 'var(--shadow-sm)';
      }

    });

  }

  // Form input focus effects
  const inputs = document.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {

    input.addEventListener('focus', function() {
      this.style.borderColor = 'var(--accent)';
    });

    input.addEventListener('blur', function() {
      this.style.borderColor = 'var(--border-color)';
    });

  });

  // Add animation to property cards on load
  const propertyCards = document.querySelectorAll('.property-card');

  propertyCards.forEach((card, index) => {

    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';

    setTimeout(() => {

      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';

    }, index * 50);

  });

});

// Utility function for formatting currency
function formatCurrency(value) {

  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0
  }).format(value);

}

// ===== CATEGORY PROPERTY SYSTEM =====
(function () {

  const propertyData = {

    "Commercial": [
      {
        title: "Westlands Business Plaza",
        location: "Westlands, Nairobi",
        price: "Ksh 45M",
        image: "images/westland business plaza.jpeg"
      },
      {
        title: "Upperhill Corporate Offices",
        location: "Upperhill",
        price: "Ksh 62M",
        image: "images/upperhill corperate offices.jpeg"
      },
      {
        title: "Karen Shopping Complex",
        location: "Karen",
        price: "Ksh 38M",
        image: "images/karen shopping complex.jpeg"
      },
      {
        title: "Industrial Godown",
        location: "Embakasi",
        price: "Ksh 29M",
        image: "images/industrial godown nairobi.jpeg"
      },
      {
        title: "CBD Commercial Building",
        location: "Nairobi CBD",
        price: "Ksh 95M",
        image: "images/commercial building cbd.jpeg"
      },
      {
        title: "Retail Space",
        location: "Kilimani",
        price: "Ksh 18M",
        image: "images/retail space.jpeg"
      },
      {
        title: "Business Mall Space",
        location: "Ruiru",
        price: "Ksh 15M",
        image: "images/business mall space.jpeg"
      },
      {
        title: "Modern Office Block",
        location: "Westlands",
        price: "Ksh 55M",
        image: "images/modern office block.jpeg"
      },
      {
        title: "Trading Center Space",
        location: "Nairobi",
        price: "Ksh 22M",
        image: "images/trading center space.jpeg"
      },
      {
        title: "Enterprise Hub",
        location: "Kiambu",
        price: "Ksh 35M",
        image: "images/enterprise space.jpeg"
      }
    ],

    "Properties": [
      {
        title: "Prime Residential Plot",
        location: "Juja",
        price: "Ksh 1.2M",
        image: "images/prime resdential plot.jpeg"
      },
      {
        title: "Luxury Family Home",
        location: "Karen",
        price: "Ksh 28M",
        image: "images/luxury family home.jpeg"
      },
      {
        title: "Modern Maisonette",
        location: "Syokimau",
        price: "Ksh 16M",
        image: "images/modern mansionatte.jpeg"
      },
      {
        title: "Exclusive Villa",
        location: "Runda",
        price: "Ksh 48M",
        image: "images/exclusive villa.jpeg"
      },
      {
        title: "Beachfront Property",
        location: "Diani",
        price: "Ksh 32M",
        image: "images/beachfront property.jpeg"
      },
      {
        title: "Rental Apartments Block",
        location: "Ruaka",
        price: "Ksh 70M",
        image: "images/spacious bungalow ruaka.jpeg"
      },
      {
        title: "Modern Townhouse",
        location: "Lavington",
        price: "Ksh 26M",
        image: "images/modern townhouse.jpeg"
      },
      {
        title: "Investment Property",
        location: "Kitengela",
        price: "Ksh 9M",
        image: "images/investment property.jpeg"
      },
      {
        title: "Gated Estate Home",
        location: "Ngong",
        price: "Ksh 35M",
        image: "images/gated estate home.jpeg"
      },
      {
        title: "Premium Land Plot",
        location: "Kikuyu",
        price: "Ksh 12M",
        image: "images/prime estate bungalow kikuyu.jpeg"
      }
    ],

    "Apartments": [
      {
        title: "Luxury Skyline Apartment",
        location: "Kilimani",
        price: "Ksh 14.5M",
        image: "images/luxury skyline apartment.jpeg"
      },
      {
        title: "2BR Modern Apartment",
        location: "Nairobi West",
        price: "Ksh 8.2M",
        image: "images/2 bedroom apartment.jpeg"
      },
      {
        title: "Executive Apartment",
        location: "Westlands",
        price: "Ksh 18M",
        image: "images/executive apartments.jpeg"
      },
      {
        title: "Furnished Apartment",
        location: "Kileleshwa",
        price: "Ksh 11M",
        image: "images/furnished apartments.jpeg"
      },
      {
        title: "City View Apartment",
        location: "Upperhill",
        price: "Ksh 16M",
        image: "images/city view apartments.jpeg"
      },
      {
        title: "Smart Apartment",
        location: "Syokimau",
        price: "Ksh 7.5M",
        image: "images/smart apartments.jpeg"
      },
      {
        title: "Luxury Duplex Apartment",
        location: "Lavington",
        price: "Ksh 25M",
        image: "images/luxury duplex apartment.jpeg"
      },
      {
        title: "Premium Family Apartment",
        location: "Karen",
        price: "Ksh 20M",
        image: "images/premium family apartments.jpeg"
      },
      {
        title: "Beachfront Apartment",
        location: "Diani",
        price: "Ksh 21M",
        image: "images/beachfront apartment.jpeg"
      },
      {
        title: "Contemporary Apartment",
        location: "Kilimani",
        price: "Ksh 19M",
        image: "images/contemporary apartment.jpeg"
      }
    ],

    "Bungalows": [
      {
        title: "Modern Family Bungalow",
        location: "Kitengela",
        price: "Ksh 6.5M",
        image: "images/modernfamilybungalowkitengela.jpeg"
      },
      {
        title: "Elegant Countryside Bungalow",
        location: "Ngong",
        price: "Ksh 9M",
        image: "images/country side bungalow ngong.jpeg"
      },
      {
        title: "3BR Stylish Bungalow",
        location: "Juja",
        price: "Ksh 5.8M",
        image: "images/3bedroombungalowjuja.jpeg"
      },
      {
        title: "Luxury Garden Bungalow",
        location: "Karen",
        price: "Ksh 19M",
        image: "images/luxurygardenbungalowkaren.jpeg"
      },
      {
        title: "Spacious Bungalow",
        location: "Ruaka",
        price: "Ksh 11M",
        image: "images/spacious bungalow ruaka.jpeg"
      },
      {
        title: "Classic Residential Bungalow",
        location: "Ruiru",
        price: "Ksh 7M",
        image: "images/residential bungalow ruiru.jpeg"
      },
      {
        title: "Executive Bungalow",
        location: "Syokimau",
        price: "Ksh 13M",
        image: "images/residential bungalow syokimau.jpeg"
      },
      {
        title: "Premium Estate Bungalow",
        location: "Kikuyu",
        price: "Ksh 10.5M",
        image: "images/prime estate bungalow kikuyu.jpeg"
      },
      {
        title: "Gated Community Bungalow",
        location: "Langata",
        price: "Ksh 15M",
        image: "images/gated community bungalow langata.jpeg"
      },
      {
        title: "Victorian Style Bungalow",
        location: "Westlands",
        price: "Ksh 22M",
        image: "images/victorian style bungalow.jpeg"
      }
    ],

    "Mansions": [
      {
        title: "Ultra Luxury Mansion",
        location: "Karen",
        price: "Ksh 120M",
        image: "images/ultra luxury mansion karen kenya.jpeg"
      },
      {
        title: "Royal Family Mansion",
        location: "Runda",
        price: "Ksh 95M",
        image: "images/royal farming mansion runda kenya.jpeg"
      },
      {
        title: "Modern Class Mansion",
        location: "Muthaiga",
        price: "Ksh 150M",
        image: "images/modern class mansion.jpeg"
      },
      {
        title: "Exclusive Hillside Mansion",
        location: "Kitisuru",
        price: "Ksh 110M",
        image: "images/exclusive hillside mansions kitususru.jpeg"
      },
      {
        title: "Smart Mansion Villa",
        location: "Lavington",
        price: "Ksh 85M",
        image: "images/smart mansion villa.jpeg"
      },
      {
        title: "Private Luxury Mansion",
        location: "Rosslyn",
        price: "Ksh 130M",
        image: "images/private luxury mansion rosslyn.jpeg"
      },
      {
        title: "Executive Mansion Home",
        location: "Karen",
        price: "Ksh 140M",
        image: "images/executive mansion karen.jpeg"
      },
      {
        title: "Contemporary Mansion",
        location: "Runda",
        price: "Ksh 99M",
        image: "images/contemporarymansionrunda.jpeg"
      },
      {
        title: "Heritage Grand Mansion",
        location: "Westlands",
        price: "Ksh 165M",
        image: "images/heritage grand mansion westlands.jpeg"
      },
      {
        title: "Penthouse Mansion Suite",
        location: "Upperhill",
        price: "Ksh 125M",
        image: "images/penthousemansionsuiteupperhill.jpeg"
      }
    ],


    "Flats": [
      {
        title: "Elegant Studio Flat",
        location: "Kilimani",
        price: "Ksh 4.5M",
        image: "images/studio flats kilimani.jpeg"
      },
      {
        title: "Spacious 2BR Flat",
        location: "Nairobi West",
        price: "Ksh 7M",
        image: "images/spacious 2 bedroom flat nairobi west.jpeg"
      },
      {
        title: "Modern 3BR Flat",
        location: "Westlands",
        price: "Ksh 12M",
        image: "images/modern 3 bedroom flat.jpeg"
      },
      {
        title: "Luxury Penthouse Flat",
        location: "Upperhill",
        price: "Ksh 18M",
        image: "images/luxury penthouse flat upperhill.jpeg"
      },
      {
        title: "Cozy Bedsit Flat",
        location: "Kileleshwa",
        price: "Ksh 3.2M",
        image: "images/cozy bedsit flat kileleshwa.jpeg"
      },
      {
        title: "Contemporary Open Plan Flat",
        location: "Karen",
        price: "Ksh 15M",
        image: "images/contemporary open plan flat karen.jpeg"
      },
      {
        title: "Furnished Holiday Flat",
        location: "Diani",
        price: "Ksh 9M",
        image: "images/furnished holiday flat.jpeg"
      },
      {
        title: "Executive Garden Flat",
        location: "Lavington",
        price: "Ksh 14M",
        image: "images/executive garden flat.jpeg"
      },
      {
        title: "Affordable City Flat",
        location: "Ruaka",
        price: "Ksh 5.8M",
        image: "images/affordable city flat.jpeg"
      },
      {
        title: "Premium Investment Flat",
        location: "Syokimau",
        price: "Ksh 8.5M",
        image: "images/premium investment flat.jpeg"
      }
    ],

    "Container Shops": [
      {
        title: "Modern Container Shop",
        location: "Industrial Area",
        price: "Ksh 3.5M",
        image: "images/modern container shops industrial area.jpeg"
      },
      {
        title: "Converted Container Retail Space",
        location: "Kilimani",
        price: "Ksh 4.8M",
        image: "images/converted container retail space kilimani.jpeg"
      },
      {
        title: "Premium Container Shop Unit",
        location: "Kiambu",
        price: "Ksh 5.2M",
        image: "images/premium container shop unit.jpeg"
      },
      {
        title: "Double Container Shop",
        location: "Embakasi",
        price: "Ksh 6.5M",
        image: "images/doublecontainershop.jpeg"
      },
      {
        title: "Eco-Friendly Container Shop",
        location: "Karen",
        price: "Ksh 7M",
        image: "images/eco-friendly container shop design.jpeg"
      },
      {
        title: "Customized Container Kiosk",
        location: "Westlands",
        price: "Ksh 3.8M",
        image: "images/customized container kioskwestlands.jpeg"
      },
      {
        title: "Industrial Container Stall",
        location: "Juja",
        price: "Ksh 2.9M",
        image: "images/industrial container stall juja.jpeg"
      },
      {
        title: "High-Tech Container Retail",
        location: "Nairobi CBD",
        price: "Ksh 8M",
        image: "images/hightech container retail nairobi cbd.jpeg"
      },
      {
        title: "Dual Purpose Container Space",
        location: "Ruaka",
        price: "Ksh 4.2M",
        image: "images/dual purpose container shop ruaka.jpeg"
      },
      {
        title: "Container Market Booth",
        location: "Gikomba",
        price: "Ksh 2.5M",
        image: "images/container market booth gikomba.jpeg"
      }
    ],

    "Office Spaces": [
      {
        title: "Executive Office Suite",
        location: "Westlands",
        price: "Ksh 18M",
        image: "images/exclusive office space westlands.jpeg"
      },
      {
        title: "Modern Startup Office",
        location: "Kilimani",
        price: "Ksh 12M",
        image: "images/modern startupoffice kilimani.jpeg"
      },
      {
        title: "Corporate Office Space",
        location: "Upperhill",
        price: "Ksh 25M",
        image: "images/corperate office space upperhill.jpeg"
      },
      {
        title: "Shared Office Hub",
        location: "Karen",
        price: "Ksh 8.5M",
        image: "images/sharedofficehubkaren.jpeg"
      },
      {
        title: "Premium Office Tower",
        location: "Nairobi CBD",
        price: "Ksh 35M",
        image: "images/premium office towers nairobi cbd.jpeg"
      },
      {
        title: "Serviced Office Space",
        location: "Kileleshwa",
        price: "Ksh 15M",
        image: "images/office space kileleshwa.jpeg"
      },
      {
        title: "Virtual Office Solution",
        location: "Nairobi West",
        price: "Ksh 6M",
        image: "images/virtual office solution nairobi west.jpeg"
      },
      {
        title: "Eco Office Complex",
        location: "Lavington",
        price: "Ksh 22M",
        image: "images/eco officespace kileleshwa.jpeg"
      },
      {
        title: "High-Rise Office Unit",
        location: "Westlands",
        price: "Ksh 28M",
        image: "images/highrise office.jpeg"
      },
      {
        title: "Business Center Office",
        location: "Runda",
        price: "Ksh 16M",
        image: "images/business center office runda.jpeg"
      }
    ]

  };

  const tabsContainer = document.querySelector(".category-tabs");
  const categoryGrid = document.getElementById("category-grid");
  const categoryMessage = document.getElementById("category-message");
  const searchCount = document.getElementById("search-count");

  // CREATE CATEGORY TABS
  Object.keys(propertyData).forEach(category => {

    const button = document.createElement("button");
    button.textContent = category;

    tabsContainer.appendChild(button);

    button.addEventListener("click", () => {
      document.querySelectorAll(".category-tabs button")
        .forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");
      renderCategory(category);
    });

  });

  function renderCategory(category) {
    if (!categoryGrid) return;

    const items = propertyData[category] || [];
    categoryGrid.innerHTML = items.map((property, i) => `
      <article class="property-card">
        <a href="#" class="property-link" data-cat="${category}" data-index="${i}">
          <img src="${property.image}" alt="${property.title}" loading="lazy">
          <div class="property-meta">
            <span class="tag">${category}</span>
            <h3>${property.title}</h3>
            <p class="muted">${property.location}</p>
            <p class="price">${property.price}</p>
          </div>
        </a>
      </article>
    `).join("");

    if (categoryMessage) {
      categoryMessage.textContent = `${category} Properties`;
    }

    if (searchCount) {
      searchCount.textContent = `Showing ${items.length} premium properties`;
    }
  }

  // Initialize placeholder text but do not load content until the user clicks
  document.addEventListener('DOMContentLoaded', function() {
    if (categoryGrid) {
      categoryGrid.innerHTML = '';
    }
  });

})();

// MODAL: open property details image inline without leaving page
(function(){
  let modal = null;

  function ensureModal(){
    if(modal) return modal;
    modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true">
        <button class="close-btn" aria-label="Close">×</button>
        <div class="modal-media"><img src="" alt=""></div>
        <div class="modal-body">
          <h3 class="modal-title"></h3>
          <p class="meta"></p>
          <p class="modal-desc"></p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e)=>{
      if(e.target === modal || e.target.classList.contains('close-btn')) closeModal();
    });
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeModal(); });
    return modal;
  }

  function openModal(cat, idx){
    const data = window.propertyDataGlobal || null;
    // try to access local propertyData if available
    const props = (typeof propertyData !== 'undefined') ? propertyData : data;
    if(!props || !props[cat] || !props[cat][idx]) return;
    const p = props[cat][idx];
    const m = ensureModal();
    m.querySelector('.modal-media img').src = p.image;
    m.querySelector('.modal-media img').alt = p.title;
    m.querySelector('.modal-title').textContent = p.title;
    m.querySelector('.meta').textContent = `${p.location} • ${p.price}`;
    m.querySelector('.modal-desc').textContent = p.price ? '' : '';
    m.classList.add('open');
  }

  function closeModal(){
    if(modal) modal.classList.remove('open');
  }

  // Delegate clicks on property links
  document.addEventListener('click', function(e){
    const a = e.target.closest('.property-link');
    if(!a) return;
    const cat = a.dataset.cat;
    const idx = a.dataset.index ? parseInt(a.dataset.index,10) : null;
    if(cat && idx !== null){
      e.preventDefault();
      openModal(cat, idx);
    }
  });

  // expose for debugging
  try{ window.propertyDataGlobal = propertyData; }catch(e){}

})();

const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("main-nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});