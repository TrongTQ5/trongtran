const $ = (element) => {
  return document.getElementById(element);
};
const getByName = (element) => {
  return document.getElementsByName(element);
};

const docWrite = (element) => {
  return document.write(element);
}

// Send button
const sendBtn = $("sendBtn");

// Button click
sendBtn.addEventListener("click", () => {
  // Full name validate
  let fullName = $("fullName");
  let nameValue = fullName.value;
  let success = '<span class="text-success">Good job!</span>';
  let fieldRequired = "<span class ='text-danger'>This field is required.</span>";
  let regExpName = /^[a-z]+(?:\s[a-z]+)+$/;
  let textName = $("textName");
  if (nameValue === "") {
    textName.innerHTML =fieldRequired;
  } else if (!regExpName.test(nameValue)) {
    textName.innerHTML =
      "<span class ='text-danger'>Your full name is invalid.</span>";
  } else {
    textName.innerHTML = success;
  }

  // Email validate
  let email = $("email");
  let emailValue = email.value;
  let regExpEmail = /^[a-zA-Z]+@edu\.com\.vn$/;
  let wrongEmail = emailValue.indexOf("@");
  let textEmail = $("textEmail");
  if (emailValue === "") {
    $("textEmail").innerHTML =fieldRequired;
  } else if (
    wrongEmail === -1 || wrongEmail === 0 ||
    wrongEmail === emailValue[length - 1]) {
      textEmail.innerHTML =
      "<span class ='text-danger'>Your email is invalid. Please correct your email.</span>";
    } else if (!regExpEmail.test(emailValue)) {
      textEmail.innerHTML =
      "<span class ='text-danger'>We only accept educational emails.</span>";
  } else {
    textEmail.innerHTML = success;
  }

  // Age validate

  // Favorite sports
  let sportsCheckbox = getByName("favorite");
  let checkedArr = [];
  let textSport = $("textSport");
  sportsCheckbox.forEach((sport) => {
    checkedArr.push(sport.checked);
    if (checkedArr.indexOf(true) === -1) {
      textSport.innerHTML = `<span class ='text-danger'>You should select at least one option.</span>`;
    } else {
      textSport.innerHTML = "";
    }
  });

  // Tell us your wish
  let textWish = $("textWish");
  if ($("yourWish").value === "") {
    textWish.innerHTML = fieldRequired;
  } else {
    textWish.innerHTML = "";
  }

  // Validate all
  if (
    textName.innerHTML == success &&
    textEmail.innerHTML == success &&
    textSport.innerHTML === "" &&
    textWish.innerHTML === ""
  ) {
    alert("Sent data! We will contact you as soon as possible.");
  }
});

// Reset button
const resetBtn = $("resetBtn");
resetBtn.addEventListener("click", () => {
  $("formvalidation").reset();
  $("textName").innerHTML = "";
  $("textEmail").innerHTML = "";
  $("textSchool").innerHTML = "";
  $("textSport").innerHTML = "";
  $("textWish").innerHTML = "";
});