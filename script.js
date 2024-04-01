const message = document.querySelector('#message');
const buttons = document.querySelector('#buttons');
const noBtn = document.querySelector('.no');
const yesBtn = document.querySelector('.yes');
const image = document.querySelector('#imagen');

// Lista de url de imagenes
const imagenes = ["./public/img1.jpg", "./public/img2.jpeg", "./public/img3.jpg", "./public/img4.jpg"];

// Variable para controlar el cambio de imagen
let currentImage = 0;

const randomPosition = (element, container) => {
    const randomX = Math.floor(Math.random() * (container.offsetWidth - element.offsetWidth));
    const randomY = Math.floor(Math.random() * (container.offsetHeight - element.offsetHeight));
    const widthContainer = window.innerWidth - container.offsetWidth;
    const heightContainer = window.innerHeight - container.offsetHeight;
    const newPosX = randomX + widthContainer;
    const newPosY = randomY + heightContainer;
    noBtn.style.position = 'absolute';
    element.style.left = `${newPosX}px`;
    element.style.top =`${newPosY}px`;
};

const changeImage = () => {
    let randomImage = Math.floor(Math.random() * imagenes.length);

    while (randomImage === currentImage) {
        randomImage = Math.floor(Math.random() * imagenes.length);
    }
    image.setAttribute('src', imagenes[randomImage]);
    currentImage = randomImage;
}

noBtn.addEventListener('click', () => {
    randomPosition(noBtn, buttons);
    changeImage();
    //RANDOM POSITIONIN OF THE noBTn
    //HINT # 1: window has properties of the width and height of the screen
    //HINT # 2: offsetWidth and offsetHeight are properties of html elements
    //HINT # 3: This button has position 'absolute', which means that its position in the html document could
    //be given by the style properties left and top (in px values)
});

yesBtn.addEventListener('click', () => {
    message.innerHTML = 'TE AMO MIBIDA';
    buttons.style.display = 'none';
    image.setAttribute('src', './public/img0.jpg');
});