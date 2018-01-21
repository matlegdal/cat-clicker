
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
            document.getElementById(`likes-${this.id}`).textContent=`${this.likes.toString()} likes for this cat`;
        };
    }

    imgObjects.forEach(function (imgObject) {
        const cat = new Cat(imgObject);
        cat.addEventListener("click", function () {
            this.likes++;
            this.updateCounter();
        }, false);

        cats.push(cat);
    });

    return cats;
})();