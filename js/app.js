let contactForm = document.querySelector(".contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let send = document.getElementById("send-btn");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formInfo =  JSON.stringify({
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
     
    })
  
    send.value = "Sending Message..."
   
    
    fetch('https://email-form-backend.herokuapp.com/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          
        },
        body:formInfo
      })
        .then(response => response.json())
        .then(data => send.value = data)
});



