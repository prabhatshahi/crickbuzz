document.getElementById("plansUser").addEventListener("click", signup);
function signup() {
  window.location.href = "cricbuzz_login.html";
}
document.getElementById("plans_left").addEventListener("click", homePage);
function homePage() {
  window.location.href = "index.html";
}
var emailData = [];
var emailObj = {
<<<<<<< HEAD
  email: "ranjanprabhat5@gmail.com",
  gmail: "vivek@gamil.com",
  tmail: "s@gmail.com",
  cmail: "sh@gmail.com",
=======
  email: "ranjanprabhat@gmail.com",
  gmail: "vivek@gamil.com",
  tmail: "prabhat@gmail.com",
  cmail: "shahi@gmail.com",
>>>>>>> 031c48493fb674c0d4c1b837c1f69b5df6e357f6
};
emailData.push(emailObj);
localStorage.setItem("cricbuzzEmail", JSON.stringify(emailData));

document.getElementById("continue").addEventListener("click", canProceedOrNot);

var count = 0;
var k = 0 + count;
document.getElementById("myCheckBox").addEventListener("click", newval);

function newval() {
  count++;
  if (count % 2 == 0) {
    k = 0;
  }
  if (count % 2 == 1) {
    k = 1;
  }
}

function canProceedOrNot() {
  if (k == 1) {
    window.location.href = "cricbuzz_login.html";
  }
  if (k == 0) {
    alert("Please agree to the terms and conditions");
  }
}
