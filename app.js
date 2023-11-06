const path = document.querySelector(".path")
const menuToggle = document.querySelector(".menu-tog")
const ul = document.querySelector("ul")
// console.log(path.getAttribute("d"))

function lerp(start, end, t) {
    return start * (1 - t) + end * t
}

let toggle = false

// Start SVG at bottom of screen (menu is not active)
let y = 100
let c = 100

function animate() {
  if (toggle) {
    y = lerp(y, 0, 0.065).toFixed(2)
    c = lerp(y, 0, 0.065).toFixed(2)
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c} 50 ${c}, 0 ${y}`
    )
  } else {
    y = lerp(y, 100, 0.065).toFixed(2)
    c = lerp(y, 100, 0.065).toFixed(2)
    path.setAttribute(
      "d",
      `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c} 50 ${c}, 0 ${y}`
    )
  }
  requestAnimationFrame(animate)
}

menuToggle.addEventListener("click", () => {
  setTimeout(() => {
    toggle = !toggle
    console.log(toggle)
  }, 300)

  if (toggle) {
    setTimeout(() => {
      ul.classList.add("active")
    }, 1000)
  }
  menuToggle.classList.toggle("active")
})

animate()
