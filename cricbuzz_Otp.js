function otp_pay() {
  var otpNo = document.querySelector(".otp").value;
  if (otpNo === "1234") {
    window.location.href = "payment.html";
  } else if (otpNo === "") {
    alert("Enter OTP");
  } else {
    alert("Invalid OTP");
  }
}

document.getElementById("frontPage").addEventListener("click", backToHomePage);
document
  .getElementById("frontPageImg")
  .addEventListener("click", backToHomePage);

function backToHomePage() {
  window.location.href = "index.html";
}
