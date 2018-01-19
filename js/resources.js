
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
    var cat = new Image();
    cat.src = imgObject.src;
    cat.id = imgObject.id;
    cat.classList.add("img-fluid", "rounded");

    cat.likes = 0;
    cat.name = imgObject.name;
    cat.addEventListener("click", function () {
        this.likes++;
        updateCounter(cat);
    }, false);

    cats.push(cat);
});

var updateCounter = function (cat) {
    document.getElementById("likes-"+cat.id).textContent=cat.likes.toString() + " likes for this cat";
};