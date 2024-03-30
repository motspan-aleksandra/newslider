/*
let texts = ['text1', 'text2', 'text3'];
/*
let i = 0;

setInterval(() => {
    slider.textContent = texts[i];
    i++;
    console.log(i)
}, 1000)
*/

/*
const url1 = '<img class="image" src="http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg">';
const url2 = '<img class="image" src="http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg">';
const url3 = '<img class="image" src="http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg">';
*/









/*
const url1 = 'img/cat1.jpg';
const url2 = 'img/cat2.jpg';
const url3 = 'img/cat3.jpg';
const slider = document.querySelector('.slider');

const img = document.createElement('img');
img.style.display = "none";
img.height = 200;
img.src = url1;
img.classList.add('image');
document.slider.append(img);

const img2 = document.createElement('img');
img2.style.display = "none";
img2.height = 200;
img2.src = url2;
img2.classList.add('image');
document.slider.append(img2);

const img3 = document.createElement('img');
img3.style.display = "none";
img3.height = 200;
img3.src = url3;
img3.classList.add('image');
document.slider.append(img3);



let images = [img, img2, img3];

let i = 2;

setInterval(() => {
    i++;
    console.log(i);
    for (let image of images) {
        image.style.display = "none";
    }
    if ((i + 3) % 3 == 0) {
        img.style.display = "block";
        console.log('first picture');
    } else if ((i + 3) % 3 == 1) {
        img2.style.display = "block";
        console.log('second picture');
    } else if ((i + 3) % 3 == 2) {
        img3.style.display = "block";
        console.log('third picture');
    }
}, 2000)




*/






//let texts = ['text1', 'text2', 'text3'];


const slider = document.querySelector('#slider');

const url1 = 'img/cat1.jpg';
const url2 = 'img/cat2.jpg';
const url3 = 'img/cat3.jpg';

const img = document.createElement('img');
img.style.display = "none";
img.height = 200;
img.src = url1;
img.classList.add('image');
slider.append(img);

const img2 = document.createElement('img');
img2.style.display = "none";
img2.height = 200;
img2.src = url2;
img2.classList.add('image');
slider.append(img2);

const img3 = document.createElement('img');
img3.style.display = "none";
img3.height = 200;
img3.src = url3;
img3.classList.add('image');
slider.append(img3);



let images = [img, img2, img3];

const leftControl = document.querySelector('#left');
const rightControl = document.querySelector('#right');



let n = 0;
images[n].style.display = "block";


let i = 2;

setInterval(() => {
    i++;
    console.log(i);
    for (let image of images) {
        image.style.display = "none";
    }
    if ((i + 3) % 3 == 0) {
        img.style.display = "block";
        console.log('first picture');
    } else if ((i + 3) % 3 == 1) {
        img2.style.display = "block";
        console.log('second picture');
    } else if ((i + 3) % 3 == 2) {
        img3.style.display = "block";
        console.log('third picture');
    }
}, 2000)




rightControl.addEventListener('click', (e) => {
    e.preventDefault();
    for (let image of images) {
        image.style.display = "none";
    }
    n += 1;

    if (n == images.length) {
        n = 0;
    }

    console.log(n);
    images[n].style.display = "block";
})

leftControl.addEventListener('click', (e) => {
    e.preventDefault();
    for (let image of images) {
        image.style.display = "none";
    }
    n -= 1;

    if (n == -1) {
        n = images.length - 1;
    }

    console.log(n);
    images[n].style.display = "block";
})




/*
rightControl.addEventListener('click', (e) => {
    e.preventDefault();
    for (let image of images) {
        image.style.display = "none";
    }
    n += 1;
    if (images.includes(images[n]) == false) {
        if (n == images.length) {
            n = 0
        }
    }
    console.log(n);
    images[n].style.display = "block";
})

leftControl.addEventListener('click', (e) => {
    e.preventDefault();
    for (let image of images) {
        image.style.display = "none";
    }
    n -= 1;
    if (images.includes(images[n]) == false) {
        if (n == -1) {
            n = images.length - 1
        }
    }
    console.log(n);
    images[n].style.display = "block";
})*/


/*

rightControl.addEventListener('click', (e) => {
    e.preventDefault();
    n += 1;
    if (n == 3) {
        n = 0
    }
    if (n == -1) {
        n = 2
    }
    console.log(n);
    slider.textContent = texts[n];
})

leftControl.addEventListener('click', (e) => {
    e.preventDefault();
    n -= 1;
    if (n == -1) {
        n = 2
    }
    if (n == 3) {
        n = 0
    }
    console.log(n);
    slider.textContent = texts[n];
})
*/