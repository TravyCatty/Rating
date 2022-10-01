let li = document.querySelector("LI")
let btn = document.querySelector('button')
li.onclick = () => {
    li.classList.toggle('active')
    console.log(li);
}