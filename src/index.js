const quantityInput = document.querySelector(".quantity");
const minusInput = document.querySelector(".minus");
const plusInput = document.querySelector(".plus");

function renderConversionHtml() {
  document.querySelector(".length-conversion-p").textContent = `
    ${quantityInput.value} meters = ${(quantityInput.value * 3.281).toFixed(
    3
  )} feet | ${quantityInput.value} feet = ${(
    quantityInput.value / 3.281
  ).toFixed(3)} meters`;

  document.querySelector(".volume-conversion-p").textContent = `
    ${quantityInput.value} liters = ${(quantityInput.value / 3.785).toFixed(
    3
  )} gallons | ${quantityInput.value} gallons = ${(
    quantityInput.value * 3.785
  ).toFixed(3)} liters`;

  document.querySelector(".mass-conversion-p").textContent = `
    ${quantityInput.value} kilos = ${(quantityInput.value * 2.205).toFixed(
    3
  )} pounds | ${quantityInput.value} pounds = ${(
    quantityInput.value / 2.205
  ).toFixed(3)} kilos`;
}

renderConversionHtml();

quantityInput.addEventListener("input", renderConversionHtml);
plusInput.addEventListener("click", renderConversionHtml);
minusInput.addEventListener("click", renderConversionHtml);
