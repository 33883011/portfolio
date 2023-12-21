// Select the elements
var hamburger_menu;
var big_wrapper;

function declare() {
    hamburger_menu = document.querySelector(".hamburger-menu");
    big_wrapper = document.querySelector(".big-wrapper");
}

const main = document.querySelector("main");

declare();

function toggleMenu() {
    big_wrapper.classList.toggle("active");
}

function events() {
    hamburger_menu.addEventListener("click", toggleMenu);
}

events();








// Selecting all required elements
const filterItems = document.querySelectorAll(".item"); // Use querySelectorAll to select all elements with class "item"
const filterImg = document.querySelectorAll(".image");
humbager_menu = document.querySelector(".humbager-menu"); // Fix the selector

// Loop through each filter item and add a click event listener
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Clear the 'active' class from all filter items
    filterItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Add the 'active' class to the clicked filter item
    item.classList.add("active");

    // Get the data-filter attribute value of the clicked filter item
    const filterValue = item.getAttribute("data-filter");

    // Loop through each image and check if it has the selected filter
    filterImg.forEach((img) => {
      const imgFilter = img.getAttribute("data-filter");

      // If the image has the selected filter or the filter is 'all', show the image; otherwise, hide it
      if (filterValue === "all" || filterValue === imgFilter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// ... (your existing code) ...

// Array to store the image sources
const imageSources = [
    'img/img2.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.png',
    'img/img5.png',
    'img/img6.png',
    'img/img7.jpg',
    'img/img8.jpg',
    'img/img9.png',
    'img/img3.jpg',
    'img/img2.jpg'
];

let currentIndex = 0;

function enlargeImage(imageSrc) {
    // Set the source of the enlarged image
    document.getElementById('enlarged-image').src = imageSrc;

    // Display the enlarged image container
    document.getElementById('enlarged-image-container').style.display = 'flex';

    // Find the index of the current image source
    currentIndex = imageSources.indexOf(imageSrc);
}

function changeImage(direction) {
    // Increment or decrement the currentIndex based on the direction
    currentIndex += direction;

    // Wrap around if going beyond the last or first image
    if (currentIndex >= imageSources.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = imageSources.length - 1;
    }

    // Set the source of the enlarged image to the new index
    document.getElementById('enlarged-image').src = imageSources[currentIndex];
}

// Hide the enlarged image container when clicking outside the image
document.getElementById('enlarged-image-container').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});
