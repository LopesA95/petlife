const elementosDuvida = document.querySelectorAll(".duvida")

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function (e) {
    e.preventDefault()
    duvida.classList.toggle("ativa")
  })
})