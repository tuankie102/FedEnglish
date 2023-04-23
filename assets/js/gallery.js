const gallery = document.querySelector(".gallery");
const closeBtn = document.querySelector(".close");
const images = document.querySelectorAll(".image img");
const galleryImg = document.querySelector(".gallery-inner img");
const prev = document.querySelector(".control.prev");
const next = document.querySelector(".control.next");
var currentIndex = 0;

function hideGallery() {
  gallery.classList.remove("show");
}

function openGallery() {
  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");

  if (currentIndex == 0) {
    prev.classList.add("hide");
  } else {
    prev.classList.remove("hide");
  }

  if (currentIndex == images.length - 1) {
    next.classList.add("hide");
  } else {
    next.classList.remove("hide");
  }
}

images.forEach(callThisImage);
function callThisImage(item, index) {
  item.addEventListener("click", function () {
    currentIndex = index;
    openGallery();
  });
}

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 27) hideGallery();
});
closeBtn.addEventListener("click", hideGallery);

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    openGallery();
  }
});
next.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    openGallery();
  }
});
