
var imgObjects = [
    {
        src: 'images/cat.jpg',
        id: 'cat-1',
        name: 'Baby cat'
    },
    {
        src: 'images/cat2.jpg',
        id: 'cat-2',
        name: 'Hiding cat'
    }
];

var cats = [];

imgObjects.forEach(function (imgObject) {
    var image = new Image();
    image.src = imgObject.src;
    image.id = imgObject.id;
    image.classList.add("img-fluid");
    cats.push(image);
});



var catImg = document.getElementById("cat-1");
var catCounter = 0;

var updateCounter = function () {
    document.getElementById("myCounter").textContent=catCounter.toString();
};

catImg.addEventListener("click", function () {
    catCounter++;
    updateCounter();
}, false);