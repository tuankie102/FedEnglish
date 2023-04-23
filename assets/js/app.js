//Sign In
const signInModal = document.querySelector(".signin-modal");
const signInBtn = document.querySelector(".js-signin");
const signInContainer = document.querySelector(".signin-container");
const signInClose = document.querySelector(".signin-close");
const submitBtns = document.querySelectorAll(".btn-submit");
//Sign Up
const signUpModal = document.querySelector(".signup-modal");
const signUpBtn = document.querySelector(".js-signup");
const signUpContainer = document.querySelector(".signup-container");
const signUpClose = document.querySelector(".signup-close");
const signUpLink = document.querySelector(".signup_link a");

//Sign In
function openmodalIn() {
  signInModal.classList.add("open");
}
function hidemodalIn() {
  signInModal.classList.remove("open");
}

//Sign Up
function openmodalUp() {
  signUpModal.classList.add("open");
}
function hidemodalUp() {
  signUpModal.classList.remove("open");
}

//Sign In
signInBtn.addEventListener("click", openmodalIn);
signInClose.addEventListener("click", hidemodalIn);
signInModal.addEventListener("click", hidemodalIn);
signUpLink.addEventListener("click", function () {
  hidemodalIn();
  openmodalUp();
});
signInContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

for (submitBtn of submitBtns) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
  });
}

//Sign Up
signUpBtn.addEventListener("click", openmodalUp);
signUpClose.addEventListener("click", hidemodalUp);
signUpModal.addEventListener("click", hidemodalUp);
signUpContainer.addEventListener("click", function (event) {
  event.stopPropagation();
});

//Jquery
$(".btn-signin").on("click", function () {
  Swal.fire("Good Job!", "Đăng nhập thành công!", "success");
});

$(".btn-signup").on("click", function () {
  Swal.fire("Good Job!", "Đăng ký thành công!", "success");
});

//Back to top btn
const backToTopBtn = document.querySelector(".back-to-top");

window.onscroll = function () {
  hideBackToTop();
};

function hideBackToTop() {
  if (document.documentElement.scrollTop > 550) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
