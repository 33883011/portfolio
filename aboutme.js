document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const links = document.querySelector('.links');
    const overlay = document.querySelector('.overlay');
    const bigWrapper = document.querySelector('.big-wrapper');

    hamburgerMenu.addEventListener('click', () => {
        bigWrapper.classList.toggle('active');
    });

    overlay.addEventListener('click', function () {
        bigWrapper.classList.remove('active');
    });
});


//--------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    // Add a short delay to make sure the animation is applied after the content is fully loaded
    setTimeout(function() {
        document.querySelector('big-wrapper').style.opacity = '1';
    }, 300);
});