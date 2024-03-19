const checkInInput = document.getElementById("checkIn");
const checkOutInput = document.getElementById("checkOut");
const numAdultsSelect = document.getElementById("numAdults");
const displayDaysInput = document.getElementById("displayDays");
const displayCostInput = document.getElementById("displayCost");
const resetButton = document.getElementById("resetButton");
const form = document.querySelector("form");


function updateDaysAndCost() {
  const checkInDate = moment(checkInInput.value);
  const checkOutDate = moment(checkOutInput.value);
  const numAdults = parseInt(numAdultsSelect.value, 10);

  const days = checkOutDate.diff(checkInDate, "days");
  const cost = 150 * numAdults * days;

  if (checkInDate.isValid() && checkOutDate.isValid() && numAdults > 0) {
    displayDaysInput.value = days;
    displayCostInput.value = cost;
  } 
}

checkInInput.addEventListener("input", updateDaysAndCost);
checkOutInput.addEventListener("input", updateDaysAndCost);
numAdultsSelect.addEventListener("change", updateDaysAndCost);


$(document).ready(function() {
  // For the "Reset" button
  $("#resetButton").click(function() {
    $("form").each(function() {
      this.reset();
    });
    toastr["info"]("Fields were successfully cleared");
  });



// For the submit button
  $("#submitButton").on("click", function() {
    // Reset the previous error highlighting
    $("#username_box").removeClass("has-error");
    $("#firstname_box").removeClass("has-error");
    $("#lastname_box").removeClass("has-error");
    $("#phone_box").removeClass("has-error");
    $("#fax_box").removeClass("has-error");
    $("#email_box").removeClass("has-error");
    

    var isValid = true;
    // Username validation
    var usernameInput = $("#username_inp");
    if (usernameInput.val().trim() === "") {
      $("#username_box").addClass("has-error");
      isValid = false;
      toastr["error"]("Username is missing");
    }

    // First Name validation
    var firstNameInput = $("#firstname_inp");
    if (firstNameInput.val().trim() === "") {
      $("#firstname_box").addClass("has-error");
      isValid = false;
      toastr["error"]("First Name is missing");
    }

    // Last Name validation
    var lastNameInput = $("#lastname_inp");
    if (lastNameInput.val().trim() === "") {
      $("#lastname_box").addClass("has-error");
      isValid = false;
      toastr["error"]("Last Name is missing");
    }

    // Phone validation
    var phoneInput = $("#phone_inp");
    if (phoneInput.val().trim() === "") {
      $("#phone_box").addClass("has-error");
      isValid = false;
      toastr["error"]("Phone is missing");
    }

    // Fax validation
    var faxInput = $("#fax_inp");
    if (faxInput.val().trim() === "") {
      $("#fax_box").addClass("has-error");
      isValid = false;
      toastr["error"]("Fax is missing");
    }

    // Email validation
    var emailInput = $("#email_inp");
    if (emailInput.val().trim() === "") {
      $("#email_box").addClass("has-error");
      isValid = false;
      toastr["error"]("Email is missing");
    }

    // Cost validation
    var costInput = $("#displayCost");
    if (costInput.val() === "Displays cost...") {
      isValid = false;
      toastr["error"]("No cost was calculated");
    } 
    else if (costInput.val() <= 0) {
      isValid = false;
      toastr["error"]("Cost is negative");
    }
  

    // Check if the form is valid and submit if it is
    if (isValid) {
      // Form is valid, you can submit it or perform further actions
      toastr["success"]("Successfully submitted");
    }
  });
});




