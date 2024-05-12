const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const inputMarried = document.getElementById("married");
const elName = document.querySelector(".name");
const elAge = document.querySelector(".age");
const elMarried = document.querySelector(".married");
const submitBtn = document.querySelector(".btn-submit");
const cancelBtn = document.querySelector(".btn-cancel");
const resultBox = document.querySelector(".result__box");

inputName.addEventListener("keyup", () => {
  let val = inputName.value;
  elName.textContent = `💭 Name: ${val}`;
});

inputAge.addEventListener("keyup", () => {
  let val = inputAge.value;
  elAge.textContent = `🧐 Age: ${val}`;
});

inputMarried.addEventListener("keyup", () => {
  let val = inputMarried.value;
  elMarried.textContent = `😘 Is married: ${val}`;
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputName.value != "" && inputAge.value != "" && inputMarried.value != "")
    resultBox.innerHTML = "Successful send! ✅";
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputName.value = "";
  inputAge.value = "";
  inputMarried.value = "";
  resultBox.innerHTML = "Unsuccessful, try again!😢";
});
