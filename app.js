// -----------
// Partie SVG
// -----------

let path = document.querySelector(".path")
// console.log(path.getAttribute('d'))

// l'interpolation linéaire
function lerp(start, end, t) {
  return start * (1 - t) + end * t
}

let toggle = false

// Start SVG en bas de l'écran
let y = 100
let c = 100

function animate() {
  if (toggle) {
    y = lerp(y, 0, 0.055)
    c = lerp(c, 0, 0.075)
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`
    )
  } else {
    y = lerp(y, 100, 0.055)
    c = lerp(c, 100, 0.075)
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, ${50} ${c}, 0 ${y}`
    )
  }

  requestAnimationFrame(animate)
}
animate()

// ------------
// Partie Menu
// ------------

let menuToggle = document.querySelector(".menu-tog")
let ul = document.querySelector("ul")

menuToggle.addEventListener("click", () => {
  //   un délai avant de changer true / falase
  setTimeout(() => {
    toggle = !toggle
  }, 300)

  // toggle = true (donc si le menu est OUVERT)
  //    => se déclenchera AVANT le toggle "setTimeouté"
  //        => on voudra donc retirer la class avant le toggle
  //            => donc faire disparaitre la class instantannement
  if (toggle) {
    ul.classList.remove("active")
  } else {
    // Dans le cas où le toggle passera sur true
    //      il y aura un comportement normal
    //  toggle false > passe en true après .3s > puis Add après 1s
    setTimeout(() => {
      ul.classList.add("active")
    }, 1000)
  }

  menuToggle.classList.toggle("active")
})
