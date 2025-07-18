const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('navigation');
const navSmall = document.getElementById('navigation--small')
const obra = document.getElementById('obra');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    nav.classList.toggle('show');
    navSmall.classList.toggle('show');
    // obra.classList.toggle('hidden');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    nav.classList.toggle('show');
    navSmall.classList.toggle('show');
    // obra.classList.toggle('hidden');
    menuOpen = false;
  }
});



document.addEventListener("DOMContentLoaded", function() {            
  document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
}, false);

document.addEventListener("DOMContentLoaded", function() {
  var url = encodeURIComponent(window.location.href);
  var titulo = encodeURIComponent(document.title);
  //var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
  //altera a URL do botão
  document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo;
   
  //se for usar o atributo via, utilize a seguinte url
  //document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo+"&via="+via;
}, false);

document.addEventListener("DOMContentLoaded", function() {
  //conteúdo que será compartilhado: Título da página + URL
  var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  //altera a URL do botão
  document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);


document.addEventListener("DOMContentLoaded", function() {            
  document.getElementById("facebook-share-btt-s").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
}, false);

document.addEventListener("DOMContentLoaded", function() {
  var url = encodeURIComponent(window.location.href);
  var titulo = encodeURIComponent(document.title);
  //var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
  //altera a URL do botão
  document.getElementById("twitter-share-btt-s").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo;
   
  //se for usar o atributo via, utilize a seguinte url
  //document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo+"&via="+via;
}, false);

document.addEventListener("DOMContentLoaded", function() {
  //conteúdo que será compartilhado: Título da página + URL
  var conteudo = encodeURIComponent(document.title + " " + window.location.href);
  //altera a URL do botão
  document.getElementById("whatsapp-share-btt-s").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);


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
