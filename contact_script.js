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


  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyHuAKnTxHDc11AkCj3DLdsIhJwYQ-GQRRLjXlvnS9daJeuXSX6W7-xmDa1BgzgbsaH/exec'
  const form = document.forms['Contact Us']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
