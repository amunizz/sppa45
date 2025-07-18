const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('navigation');
const obra = document.getElementById('obra');


let menuOpen = false;


menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.toggle('show');
    // obra.classList.toggle('hidden');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.toggle('show');
    // obra.classList.toggle('hidden');
    menuOpen = false;
  }
});

document.addEventListener('click', e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
  let currentDropdown
  if(isDropdownButton){
      currentDropdown = e.target.closest('[data-dropdown]')
      currentDropdown.classList.toggle('active')
  }
  document.querySelectorAll("[drop-down].active").forEach(dropdown => {
    if(dropdown === currentDropdown) return
    dropdown.classList.remove('active')
  })
})
