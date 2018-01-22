
// Creates an array of the images of cats available
const cats = (function catLoader () {
    const cats = [];
    const imgObjects = [
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

    class Cat extends Image{
        constructor(imgObject){
            super();
            this.src = imgObject.src;
            this.id = imgObject.id;
            this.classList.add("img-fluid", "rounded");
            this.likes = 0;
            this.name = imgObject.name;
        }

        updateCounter() {
            this.likes++;
            document.getElementById(`likes-${this.id}`).textContent=`${this.likes.toString()} likes for this cat`;
        }

        selectCat (li) {
            const items = document.querySelectorAll('.cat-list-item');
            items.forEach(item => item.classList.remove("active"));

            li.classList.add("active");
            this.displayCat();
        }

        displayCat() {
            const div = document.getElementById("displayCat");
            div.innerHTML = '';

            const catName = document.createElement("H5");
            catName.textContent = this.name;
            div.appendChild(catName);

            div.appendChild(this);

            const catLikes = document.createElement("p");
            catLikes.textContent = `${this.likes.toString()} likes for this cat`;
            catLikes.id = `likes-${this.id}`;
            div.appendChild(catLikes);
        }
    }

    imgObjects.forEach(function (imgObject) {
        const cat = new Cat(imgObject);
        cats.push(cat);
    });

    return cats;
})();

// Generates the list of cats on the left
(function listCats() {
    const ul = document.createElement('ul');
    ul.classList.add("list-group");

    cats.forEach(function(cat){
        const li = document.createElement("li");
        li.textContent = cat.name.toString();
        li.classList.add("list-group-item", "cat-list-item");
        li.id = `selector-${cat.id}`;

        li.addEventListener("click", () => cat.selectCat(li), false);
        ul.appendChild(li);
    });
    
    document.getElementById("listCats").appendChild(ul);
    document.getElementById(`selector-${cats[0].id}`).classList.add("active")
})();

// Initialise the displayed cat to the first cat
cats[0].displayCat();

// Add the event listener to the cat image.
document.getElementById('displayCat').addEventListener('click', function(event) {
    if (event.target.nodeName === "IMG") {
        event.target.updateCounter();
    }
});