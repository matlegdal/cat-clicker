
var listCats = function() {
    cats.forEach(function(cat){
        var li = document.createElement("li");
        li.textContent = cat.name.toString();
        li.classList.add("list-group-item", "cat-list-item");
        li.id = "selector-" + cat.id;

        li.addEventListener("click", function () {
            selectCat(this);
            displayCat(cat);
        }, false);

        document.getElementById("listCats").appendChild(li);
    });
    document.getElementById("selector-"+cats[0].id).classList.add("active")
};

var selectCat = function(li) {
    var items = document.getElementsByClassName("cat-list-item");
    for (var i = 0; i<items.length; i++) {
        items[i].classList.remove("active");
    }
    li.classList.add("active");
};

var displayCat = function(cat) {
    var div = document.getElementById("displayCat");
    div.innerHTML = '';

    var catName = document.createElement("H5");
    catName.textContent = cat.name;
    div.appendChild(catName);

    div.appendChild(cat);

    var catLikes = document.createElement("p");
    catLikes.textContent = cat.likes.toString() + " likes for this cat";
    catLikes.id = "likes-"+cat.id;
    div.appendChild(catLikes);
};

listCats();
displayCat(cats[0]);