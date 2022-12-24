let bill = document.querySelector("#bill");
let checks = document.querySelectorAll("input[type='radio'].tip");
let form = document.querySelector(".home__appcontainer--inputpanel");
let custom = document.querySelector(".custom");
let resetBtn = document.querySelector(".reset");
let noOfPeople = 1;
let tips = document.querySelector(".inputpanel__tipsection");
let tip = 0;
let tipamount = document.querySelector(".tipamount--no");
let totalamount = document.querySelector(".totalamount--no");
let amt = 0;
let people = document.querySelector("#noOfPeople");

bill.addEventListener("keyup", (e) => {
  amt = parseFloat(e.target.value);
  if (e.target.value == "") {
    amt = 0;
  }
  setValue();
});
checks.forEach((check) => {
  check.addEventListener("click", () => {
    tip = parseFloat(check.value);
    custom.value = "";
    setValue();
  });
});
custom.addEventListener("keyup", (e) => {
  checks.forEach((check) => {
    if (check.checked) {
      check.checked = false;
    }
  });

  tip = parseFloat(e.target.value);
  if (e.target.value == "") {
    tip = 0;
  }
  setValue();
});
people.addEventListener("keyup", (e) => {
  noOfPeople = parseFloat(e.target.value);
  if (e.target.value == "") {
    noOfPeople = 1;
  }
  setValue();
});
resetBtn.addEventListener("click", () => {
  form.reset();
  tipamount.innerHTML = "0.00";
  totalamount.innerHTML = "0.00";
});
function setValue() {
  tipamount.innerHTML = ((amt * tip) / 100 / noOfPeople).toFixed(2);
  totalamount.innerHTML = ((amt + (amt * tip) / 100) / noOfPeople).toFixed(2);
}
