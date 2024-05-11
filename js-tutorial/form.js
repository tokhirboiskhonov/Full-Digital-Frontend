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
  resultBox.innerHTML = "Successful send! ✅";
  resultBox.classList.add("active"); // Add the active class
  setTimeout(() => {
    resultBox.classList.remove("active"); // Remove the active class after a delay
  }, 2000);
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputName.value = "";
  inputAge.value = "";
  inputMarried.value = "";
  elName.textContent = "";
  elAge.textContent = "";
  elMarried.textContent = "";
  resultBox.classList.remove("active");
  resultBox.innerHTML = "";
});
