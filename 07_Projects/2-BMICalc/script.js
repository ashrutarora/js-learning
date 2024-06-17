const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let height = parseInt(document.querySelector("#height").value);
  height = height / 100;
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#result");

  if (
    height === "" ||
    height < 0 ||
    isNaN(height) ||
    weight === "" ||
    weight < 0 ||
    isNaN(weight)
  ) {
    result.innerHTML = "Please give a valid height and weight.";
  } else {
    const bmi = (weight / (height * height)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `<span>Your BMI is ${bmi}<br>You are Under Weight</span>`;
    }
    if (bmi >= 18.6 && bmi <= 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi}<br>You are Normal</span>`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `<span>Your BMI is ${bmi}<br>You are Over Weight</span>`;
    }
  }
});
