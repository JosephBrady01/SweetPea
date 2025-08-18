  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".dropdown-nav");


toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  nav.classList.toggle("open");
});

// Close nav when clicking outside
document.addEventListener("click", (e) => {
  if (nav.classList.contains("open") && !nav.contains(e.target)) {
    nav.classList.remove("open");
  }
});

// Optional: close on menu link click
document.querySelectorAll(".nav-list a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
    
    document.querySelectorAll('.open-modal').forEach(button => {
      button.addEventListener('click', () => {
        const modal = document.getElementById(button.dataset.modalId);
        modal.style.display = 'flex';
      });
    });

    document.querySelectorAll('.close-modal').forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
      });
    });

    window.addEventListener('click', e => {
      document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) modal.style.display = 'none';
      });
    });

    // Helper: send a GA4 event if gtag is ready
const gaEvent = (name, params = {}) => window.gtag && gtag('event', name, params);

// A) “Get in Touch” button clicks
document.querySelectorAll('.form-button').forEach(btn => {
  btn.addEventListener('click', () => gaEvent('get_in_touch_click', { location: 'card_section' }));
});

// B) Service modal opens
document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', () => {
    gaEvent('modal_open', { modal_id: button.dataset.modalId || 'unknown' });
  });
});

// C) Enquiry form submit attempt (Web3Forms)
const form = document.querySelector('form[action="https://api.web3forms.com/submit"]');
if (form) {
  form.addEventListener('submit', () => gaEvent('form_submit_attempt'));
}

// A) Turn on debug for the whole session
gtag('config', 'G-3TVNTPGJME', { debug_mode: true });

// B) Or send a single debug event
gtag('event', 'debug_ping', { debug_mode: true, source: 'console' });

