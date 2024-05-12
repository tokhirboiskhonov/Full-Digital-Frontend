const inputName = document.getElementById("name");
const inputAge = document.getElementById("age");
const inputMarried = document.getElementById("married");
const elName = document.querySelector(".name");
const elAge = document.querySelector(".age");
const elMarried = document.querySelector(".married");
const submitBtn = document.querySelector(".btn-submit");
const cancelBtn = document.querySelector(".btn-cancel");
const resultBox = document.querySelector(".result__box");

inputName.addEventListener("keyup", (evt) => {
  elName.textContent = `💭 Name: ${evt.target.value}`;
});

inputAge.addEventListener("keyup", (evt) => {
  elAge.textContent = `🧐 Age: ${evt.target.value}`;
});

inputMarried.addEventListener("keyup", (evt) => {
  elMarried.textContent = `😘 Is married: ${evt.target.value}`;
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
