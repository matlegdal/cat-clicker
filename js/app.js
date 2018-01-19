
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
