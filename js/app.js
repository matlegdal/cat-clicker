
(function listCats() {
    cats.forEach(function(cat){
        const li = document.createElement("li");
        li.textContent = cat.name.toString();
        li.classList.add("list-group-item", "cat-list-item");
        li.id = `selector-${cat.id}`;

        li.addEventListener("click", function () {
            const items = document.getElementsByClassName("cat-list-item");
            for (let i = 0; i<items.length; i++) {
                items[i].classList.remove("active");
            }
            li.classList.add("active");
            displayCat(cat);
        }, false);

        document.getElementById("listCats").appendChild(li);
    });
    document.getElementById(`selector-${cats[0].id}`).classList.add("active")
})();

function displayCat(cat) {
    const div = document.getElementById("displayCat");
    div.innerHTML = '';

    const catName = document.createElement("H5");
    catName.textContent = cat.name;
    div.appendChild(catName);

    div.appendChild(cat);

    const catLikes = document.createElement("p");
    catLikes.textContent = `${cat.likes.toString()} likes for this cat`;
    catLikes.id = `likes-${cat.id}`;
    div.appendChild(catLikes);
}

displayCat(cats[0]);