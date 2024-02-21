const header = document.getElementById('main-header');
const elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function (e) {
    e.preventDefault()
    duvida.classList.toggle("ativa")
  })
  window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
})

