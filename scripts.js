document.addEventListener('DOMContentLoaded', () => {
    const nameTag = document.getElementById('name-tag');
    const bow = document.getElementById('bow');
    const card = document.querySelector('.card');
    
    nameTag.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });

    bow.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });

  });
  