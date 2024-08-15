let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// Config param
let countItem = items.length;
let itemActive = 0;

// Event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();
}

// Event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;
    }
    showSlider();
}

// Auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showSlider() {
    // Remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    // Active new item
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    // Scroll thumbnail into view
    const activeThumbnail = thumbnails[itemActive];
    const container = document.querySelector('.thumbnail');
    
    // Center thumbnail
    const containerWidth = container.clientWidth;
    const thumbnailWidth = activeThumbnail.clientWidth;
    const thumbnailOffsetLeft = activeThumbnail.offsetLeft;
    
    container.scrollLeft = thumbnailOffsetLeft - (containerWidth / 2) + (thumbnailWidth / 2);

    // Clear auto time run slider
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

// Click thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
})

// Handle resize event
window.addEventListener('resize', () => {
    // document.body.style.overflowY = 'hidden';// Ensure no vertical overflow
    showSlider(); // Reapply the active class to the correct thumbnail and slider item
});