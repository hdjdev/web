const items = document.querySelectorAll('.service-item');

items.forEach(item => {
  const header = item.querySelector('.service-header');
  const content = item.querySelector('.service-content');

  header.addEventListener('click', () => {
    items.forEach(i => {
      const c = i.querySelector('.service-content');
      if (i !== item) {
        i.classList.remove('active');
        c.style.maxHeight = null;
      }
    });

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = null;
    }
  });
});
