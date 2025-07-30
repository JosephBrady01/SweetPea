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