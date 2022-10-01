let ul = document.querySelector("ul")
let li = document.querySelector("li")
let btn = document.querySelector('button')

ul.onclick = (e) => {
    e.target.classList.toggle('primary')
}