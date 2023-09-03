function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // pegar a tag img
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo, usando oculos e camisa preta, barba e fundo amarelo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "foto de mayk brito sorrindo, usando oculos escuro e jaqueta escura, sem barba e fundo degrade rosa e azul"
    )
  }
}
