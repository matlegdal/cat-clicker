
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

cats.forEach(function (cat) {
    var div = document.createElement("DIV");
    div.classList.add("col-"+(12/cats.length));
    document.getElementById("imgRow").appendChild(div);

    var catName = document.createElement("H5");
    catName.textContent = cat.name;
    div.appendChild(catName);

    div.appendChild(cat);

    var catLikes = document.createElement("p");
    catLikes.textContent = cat.likes.toString() + " likes for this cat";
    catLikes.id = "likes-"+cat.id;
    div.appendChild(catLikes);
});

var updateCounter = function (cat) {
    document.getElementById("likes-"+cat.id).textContent=cat.likes.toString() + " likes for this cat";
};