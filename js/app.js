
var catImg = document.getElementById("myCat");
var catCounter = 0;

var updateCounter = function () {
    document.getElementById("myCounter").textContent=catCounter.toString();
};

catImg.addEventListener("click", function () {
    catCounter++;
    updateCounter();
}, false);