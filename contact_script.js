function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var email = document.forms["contactForm"]["email"].value;
    var requirements = document.forms["contactForm"]["requirements"].value;

    if (name == "" || phone == "" || email == "" || requirements == "") {
      alert("All fields must be filled out");
      return false;
    }
  }