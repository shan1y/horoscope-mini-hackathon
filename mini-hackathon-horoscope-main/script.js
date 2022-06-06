function myFunction() {
  let selectedSign = document.getElementById("selectedSign").value;
  sign = selectedSign;

  const birthdayInput = document.querySelector(".birthday-input");
  birthdayInput.classList.remove("birthday-input--error");
  birthdayInput.value = "";

  let displayedSign = document.querySelector(".app__sign");
  displayedSign.textContent = selectedSign;

  fetch("https://aztro.sameerkumar.website?sign=" + sign + "&day=today", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      const dateRange = data.date_range;
      const description = data.description;
      const currentDate = data.current_date;
      const color = data.color;

      let currentDateEl = document.querySelector(".app__current-date");
      currentDateEl.textContent = currentDate;
      let dateRangeEl = document.querySelector(".app__date-range");
      dateRangeEl.textContent = dateRange;
      let descriptionEl = document.querySelector(".app__description");
      descriptionEl.textContent = description;
    });
}
const birthdayInput = document.querySelector(".birthday-input");
birthdayInput.addEventListener("input", (e) => {
  let userBirthdayInput = e.target.value;
  if (userBirthdayInput.length == 5 && userBirthdayInput[2] == "/") {
    birthdayInput.classList.remove("birthday-input--error");
    let day = userBirthdayInput.slice(3);
    let month = userBirthdayInput.slice(0, -3);
    let currentDateEl = document.querySelector(".app__current-date");
    let dateRangeEl = document.querySelector(".app__date-range");
    let descriptionEl = document.querySelector(".app__description");
    if (day < 1 || day > 31) {
      let displayedSign = document.querySelector(".app__sign");
      displayedSign.textContent = "Please enter a valid day";
      // currentDateEl.textContent = "";
      dateRangeEl.textContent = "";
      descriptionEl.textContent = "";
      birthdayInput.classList.add("birthday-input--error");
    } else if (month < 1 || month > 12) {
      let displayedSign = document.querySelector(".app__sign");
      displayedSign.textContent = "Please enter a valid month";
      // currentDateEl.textContent = "";
      dateRangeEl.textContent = "";
      descriptionEl.textContent = "";
      birthdayInput.classList.add("birthday-input--error");
    } else {
      testFunc(month, day);
      function byDate() {
        let displayedSign = document.querySelector(".app__sign");
        displayedSign.textContent = sign;
        fetch("https://aztro.sameerkumar.website?sign=" + sign + "&day=today", {
          method: "POST",
        })
          .then((response) => response.json())
          .then((data) => {
            const dateRange = data.date_range;
            const description = data.description;
            // const currentDate = data.current_date;
            const color = data.color;
            // console.log(currentDate);
            let currentDateEl = document.querySelector(".app__current-date");
            // currentDateEl.textContent = currentDate;
            let dateRangeEl = document.querySelector(".app__date-range");
            dateRangeEl.textContent = dateRange;
            let descriptionEl = document.querySelector(".app__description");
            descriptionEl.textContent = description;
          });
      }
      byDate();
    }
  } else {
    birthdayInput.classList.add("birthday-input--error");
  }
});
function testFunc(month, day) {
  let astro_sign = "";
  if (month == "12") {
    if (day < 22) astro_sign = "Sagittarius";
    else astro_sign = "Capricorn";
  } else if (month == "01") {
    if (day < 20) astro_sign = "Capricorn";
    else astro_sign = "Aquarius";
  } else if (month == "02") {
    if (day < 19) astro_sign = "Aquarius";
    else astro_sign = "Pisces";
  } else if (month == "03") {
    if (day < 21) astro_sign = "Pisces";
    else astro_sign = "Aries";
  } else if (month == "04") {
    if (day < 20) astro_sign = "Aries";
    else astro_sign = "Taurus";
  } else if (month == "05") {
    if (day < 21) astro_sign = "Taurus";
    else astro_sign = "Gemini";
  } else if (month == "06") {
    if (day < 21) astro_sign = "Gemini";
    else astro_sign = "Cancer";
  } else if (month == "07") {
    if (day < 23) astro_sign = "Cancer";
    else astro_sign = "Leo";
  } else if (month == "08") {
    if (day < 23) astro_sign = "Leo";
    else astro_sign = "Virgo";
  } else if (month == "09") {
    if (day < 23) astro_sign = "Virgo";
    else astro_sign = "Libra";
  } else if (month == "10") {
    if (day < 23) astro_sign = "Libra";
    else astro_sign = "Scorpio";
  } else if (month == "11") {
    if (day < 22) astro_sign = "Scorpio";
    else astro_sign = "Sagittarius";
  } else {
  }
  sign = astro_sign;
}
let sign = "aries";

function onPageLoad() {
  let selectedSign = document.getElementById("selectedSign").value;
  sign = selectedSign;
  const birthdayInput = document.querySelector(".birthday-input");
  birthdayInput.classList.remove("birthday-input--error");
  birthdayInput.value = "";
  let displayedSign = document.querySelector(".app__sign");
  displayedSign.textContent = selectedSign;
  fetch("https://aztro.sameerkumar.website?sign=" + sign + "&day=today", {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => {
      const dateRange = data.date_range;
      const description = data.description;
      const currentDate = data.current_date;
      const color = data.color;

      let currentDateEl = document.querySelector(".app__current-date");
      currentDateEl.textContent = currentDate;
      let dateRangeEl = document.querySelector(".app__date-range");
      dateRangeEl.textContent = dateRange;
      let descriptionEl = document.querySelector(".app__description");
      descriptionEl.textContent = description;
    });
}

onPageLoad();
