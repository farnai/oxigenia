// Function to add or remove the sticky class
function toggleStickyHeader() {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Add event listener for scroll
window.addEventListener('scroll', toggleStickyHeader);

// Call the function immediately to check the initial scroll position
toggleStickyHeader();
