// ===============================
// FILTER BUTTONS
// ===============================

const filterButtons = document.querySelectorAll(".filter-btn");
const gallery = document.querySelector(".gallery");


// ===============================
// LIGHTBOX ELEMENTS
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let visibleImages = [];
let currentIndex = 0;


// ===============================
// FILTER IMAGES
// ===============================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.getAttribute("data-category");

        document.querySelectorAll(".gallery-item").forEach(item => {

            const itemCategory = item.getAttribute("data-category");

            if (category === "all" || category === itemCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});


// ===============================
// OPEN LIGHTBOX
// ===============================

gallery.addEventListener("click", event => {

    if (event.target.tagName !== "IMG") {
        return;
    }

    const clickedImage = event.target;

    visibleImages = Array.from(document.querySelectorAll(".gallery-item"))
        .filter(item => item.style.display !== "none")
        .map(item => item.querySelector("img"));

    currentIndex = visibleImages.indexOf(clickedImage);

    lightboxImage.src = clickedImage.src;

    lightbox.style.display = "flex";

});


// ===============================
// NEXT IMAGE
// ===============================

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= visibleImages.length) {
        currentIndex = 0;
    }

    lightboxImage.src = visibleImages[currentIndex].src;

});


// ===============================
// PREVIOUS IMAGE
// ===============================

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = visibleImages.length - 1;
    }

    lightboxImage.src = visibleImages[currentIndex].src;

});


// ===============================
// CLOSE LIGHTBOX
// ===============================

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});


// ===============================
// ADD IMAGE FEATURE
// ===============================

const addImageBtn = document.getElementById("addImageBtn");
const addImageBox = document.getElementById("addImageBox");

const imageInput = document.getElementById("imageInput");
const imageCategory = document.getElementById("imageCategory");

const saveImageBtn = document.getElementById("saveImageBtn");
const cancelImageBtn = document.getElementById("cancelImageBtn");


// ===============================
// OPEN ADD IMAGE BOX
// ===============================

addImageBtn.addEventListener("click", () => {

    addImageBox.style.display = "block";

});


// ===============================
// CANCEL ADD IMAGE
// ===============================

cancelImageBtn.addEventListener("click", () => {

    addImageBox.style.display = "none";

    imageInput.value = "";

});