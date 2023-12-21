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

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // Image filtering
  function filterSelection(filter) {
    let images = document.querySelectorAll('.image');
    images.forEach(image => {
        if (filter === 'all' || image.dataset.filter === filter) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Image preview
function enlargeImage(src) {
    document.getElementById('myModal').style.display = 'block';
    document.getElementById('modalImage').src = src;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('image');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    document.getElementById('modalImage').src = slides[slideIndex - 1].querySelector('img').src;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    } else if (event.key === 'ArrowLeft') {
        plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
        plusSlides(1);
    }
});

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Add a short delay to make sure the animation is applied after the content is fully loaded
    setTimeout(function() {
        document.querySelector('big-wrapper').style.opacity = '1';
    }, 300);
});