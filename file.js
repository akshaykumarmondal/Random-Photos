const imageContainerEl = document.querySelector('.image-container');

const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', () => {

    //on clicking load button 10 images are generated
    addNewImages();
});

function addNewImages() {

    let imageNumber=10;
    for (let i = 0; i < imageNumber; i++) {
        const newImageEl = document.createElement('img');
        newImageEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 10000)}`;

        imageContainerEl.appendChild(newImageEl);

    }
}