"use script";
const imgtxt = document.querySelector(".heading");
const fill = document.querySelector("#fill");
const imgqr = document.querySelector("#image");
const btn = document.querySelector(".last");
function generateQR() {
  if (fill.value.length > 0) {
    imgqr.style.display = "block";
    imgqr.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      fill.value;
  } else {
    imgqr.style.display = "none";
    setTimeout(() => {
      btn.textContent = "Please add text!";
    }, 500);
    setTimeout(() => {
      btn.textContent = "Generate QR";
    }, 2000);
  }
}
