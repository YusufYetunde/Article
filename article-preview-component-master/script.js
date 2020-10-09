function show() {
    var btn = document.querySelector(".btn-share")
    var img = document.getElementById('sharebtn')
    var share = document.querySelector(".share")
    share.style.display = 'flex'
    btn.style.background = 'hsl(217, 19%, 35%)'
    img.src = "./images/icon-share.svg"
}
function display() {
    var btn = document.querySelector(".btn-share")
    var img = document.getElementById('sharebtn')
    var share = document.querySelector(".share")
    share.style.display= 'none'
    btn.style.background = 'hsla(211, 51%, 88%, 0.842)'
    img.src = "./images/icon-share.svg"
}