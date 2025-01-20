const thumbnailContainer = document.getElementById("thumbnailContainer")// Gets the thumbnail container div to append to later
const displayElem = document.getElementById("display") // Correctly targets the main display container
let currentImageIndex = 0 // Keeps track of the currently displayed image index.

// Creates an array of the images, with their src and alt tag
let images = [
    {
        src: 'assets/Frozen_River.webp',
        alt: 'A frozen river in minecraft',
    },
    {
        src: 'assets/Desert.webp',
        alt: 'A desert in Minecraft',
    },
    {
        src: 'assets/Snowy_Plains.webp',
        alt: 'Snowy plains in Minecraft',
    },
    {
        src: 'assets/Mushroom_Fields.webp',
        alt: 'A mushroom field in minecraft',
    },
    {
        src: 'assets/Eroded_Badlands (1).webp',
        alt: 'Eroded badlands in minecraft',
    },
    {
        src: 'assets/Gravelly_Mountains.webp',
        alt: 'Gravelly mountains in minecraft',
    },
    {
        src: 'assets/Pale_Garden.webp',
        alt: 'A pale garden in minecraft',
    },
    {
        src: 'assets/Nether.webp',
        alt: 'The nether in minecraft',
    },

];

function createThumbnails() {
    images.forEach(function(image, index) { // For each image in the array, do a function.
        let thumbImg = document.createElement('img'); // JS variable thumbImg represents the HTML element img in the thumbnail
        thumbImg.setAttribute('src', image.src) 
        thumbImg.setAttribute('alt', image.alt) // Sets src attribute and alt tag for each img element
        thumbImg.setAttribute('tabindex', '0') // Makes thumbnail focusable for keyboard navigation
        thumbImg.classList.add('thumb-image') // Adds class for styling later
        thumbnailContainer.appendChild(thumbImg) // Appends the image element to the div tag/container

        // Adds a click event listener to each thumbnail
        thumbImg.addEventListener('click', function () {
            currentImageIndex = index // Updates the current image index to the clicked thumbnail's index
            updateDisplayImage(image) // Updates the main display to show the clicked image
        })
    })
}

// Function to update the display image, takes the current image as a parameter
function updateDisplayImage(image) {
    let newDisplayImage = document.createElement('img') // Creates a new <img> element for the main display
    newDisplayImage.setAttribute('src', image.src) // Sets the source to the current image's URL
    newDisplayImage.setAttribute('alt', image.alt) // Sets the alt text for accessibility
    newDisplayImage.classList.add('fade-in') // Adds a CSS class to apply a fade-in animation

    // Ensures only one image is displayed at the same time
    let currentDisplayImage = displayElem.firstChild // Gets the first child of the display container, which is the current display image.
    if (currentDisplayImage) { // If there is already an image in the display element
        displayElem.removeChild(currentDisplayImage) // Removes the existing image
    }
    displayElem.appendChild(newDisplayImage) // Appends the new image to the display area
}

// Navigate to the next or previous image. Takes index as a parameter (1 for next, -1 for previous).
function selectNextImage(index) {
    currentImageIndex += index // Update the current image index by adding the given value, basically currentimageindex = currentimageindex + the index.

    // Handle wrapping around at the ends of the array
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0 // Go back to the first image if at the end
    }
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1 // Go to the last image if at the beginning
    }
    updateDisplayImage(images[currentImageIndex]) // Update the main display with the new image
}

// Initialize the gallery
function init() {
    updateDisplayImage(images[currentImageIndex]) // Displays the first image in the main display area
    createThumbnails() // Generate and displays thumbnails for all images
}


// Button controls
document.getElementById('next').addEventListener('click', function () {
    selectNextImage(1)
});
document.getElementById('prev').addEventListener('click', function () {
    selectNextImage(-1)
});

init()

