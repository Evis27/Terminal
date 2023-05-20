$(document).ready(function () {
  let firstnameError;
  // Validate Firstname
  $("#firstnamecheck").hide();
  let usernameError = true;
  $("#first_names").keyup(function () {
    validateFirstname();
  });

  function validateFirstname() {
    let firstnameValue = $("#first_names").val();
    let name_regex = /^[A-Za-z\s]+$/;
    if (firstnameValue.length == "") {
      $("#firstnamecheck").show();
      firstnameError = false;
      return false;
    } else if (!name_regex.test(firstnameValue)) {
      $("#firstnamecheck").show();
      $("#firstnamecheck").html("Emri nuk duhet te permbaje numra");
      firstnameError = false;
      return false;
    } else {
      $("#firstnamecheck").hide();
    }
  }

  $("#lastnamecheck").hide();
  let lastnameError = true;
  $("#last_names").keyup(function () {
    validatelastname();
  });
  function validatelastname() {
    let lastnameValue = $("#last_names").val();
    let lastname_regex = /^[A-Za-z\s]+$/;
    if (lastnameValue.length == "") {
      $("#lastnamecheck").show();
      lastnameError = false;
      return false;
    } else if (!lastname_regex.test(lastnameValue)) {
      $("#lastnamecheck").show();
      $("#lastnamecheck").html("Mbiemri nuk duhet te permbaje numra");
      lastnameError = false;
      return false;
    } else {
      $("#lastnamecheck").hide();
    }
  }

  // Validate Email
  $("#emailcheck").hide();
  let emailError = true;
  $("#email").keyup(function () {
    validateemail();
  });
  function validateemail() {
    let emailValue = $("#email").val();
    let email_regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    if (emailValue.length == "") {
      $("#emailcheck").show();
      emailError = false;
      return false;
    } else if (!email_regex.test(emailValue)) {
      $("#emailcheck").show();
      $("#emailcheck").html("Email not valid");
      emailError = false;
      return false;
    } else {
      $("#emailcheck").hide();
    }
  }

  $("#messagecheck").hide();
  let messageError = true;
  $("#message").keyup(function () {
    validateMessage();
  });

  function validateMessage() {
    let messageValue = $("#message").val();

    if (messageValue.length == "") {
      $("#messagecheck").show();
      messageError = false;
      return false;
    } else {
      $("#messagecheck").hide();
    }
  }


  function openModal() {

    $('#exampleModal').modal("toggle");
  }

  $("#submitbtn").click(function () {
    validateFirstname();
    validatelastname();
    validateemail();
    validateMessage();
    if (
      firstnameError == true && lastnameError == true && emailError == true && messageError == true
    ) {
      return true;
    } else {
      openModal();
    }
  });
});
