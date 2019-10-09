//I messed up originally because I didn't see the fact there was two _
document.querySelector(".article__header").textContent = "Welcome to the Tweak4President Blog"
//making a constant for the for loop that will allow me to change the header
const headerEl = document.querySelectorAll(".article__header");
for(let i = 0; i < headerEl.length; i++){
    //make sure to set it up as an array since it is a nodeList
    headerEl[i].classList.add("important");   
}
// How you found where the dashed class was
// const dash = document.querySelector(".dashed");
// console.log("this is the dashed location", dash);

//this removed the dashed class form the article
const dash = document.querySelector(".dashed");
dash.classList.remove("dashed");

//adding a class to article__footer

const footerEl = document.querySelector(".article__footer");
footerEl.classList.add("goldenrod");