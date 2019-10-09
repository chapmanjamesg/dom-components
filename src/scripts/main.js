document.querySelector(".article__header").textContent = "Welcome to the Tweak4President Blog"
//making a constant for the for loop that will allow me to change the header
const headerEl = document.querySelectorAll(".article__header");
for(let i = 0; i < headerEl.length; i++){
    //make sure to set it up as an array since it is a nodeList
    headerEl[i].classList.add("important");   
}