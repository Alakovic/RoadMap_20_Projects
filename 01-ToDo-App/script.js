function init() {
    initThemeToggle();
    toogleFilter();
}

function toggleTheme() {
  const sun = document.querySelector('.sun');
  const moon = document.querySelector('.moon');
  sun.classList.toggle('hide');
  moon.classList.toggle('hide');
}

function initThemeToggle() {
  const toggleButton = document.querySelector('.toogleButton');
  const body = document.body;
  toggleButton.addEventListener('click', () => {
    toggleTheme();
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
  });
}

function toogleFilter(){
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
        });
    });
}