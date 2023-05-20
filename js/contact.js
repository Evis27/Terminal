$("#formValidation").validate({
  rules: {
    first_name: {
      minlength: 2
    }
  },
  messages: {
    name: {
      required: "Please enter your name!",
      minlength: "Name at least 3 characters!"
    }
  },
  submitHandler: function (form) {
    form.submit();
  }
});