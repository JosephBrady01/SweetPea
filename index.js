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