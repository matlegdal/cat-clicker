
var cats = [];
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
    },
    {
        src: 'images/cat3.jpg',
        id: 'cat-3',
        name: 'Loving cat'
    }
];

imgObjects.forEach(function (imgObject) {
    var image = new Image();
    image.src = imgObject.src;
    image.id = imgObject.id;
    image.classList.add("img-fluid");

    image.likes = 0;
    image.name = imgObject.name;
    image.addEventListener("click", function () {
        this.likes++;
        updateCounter(image);
    }, false);

    cats.push(image);
});

var updateCounter = function (cat) {
    document.getElementById("likes-"+cat.id).textContent=cat.likes.toString() + " likes for this cat";
};