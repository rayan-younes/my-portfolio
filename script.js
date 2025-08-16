

// Contact form validation
const contactForm = document.getElementById("contactForm");
if(contactForm) {
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if(!name || !email || !message) {
      formMsg.style.color="red";
      formMsg.textContent="Please fill all fields!";
      return;
    }

    if(!/\S+@\S+\.\S+/.test(email)) {
      formMsg.style.color="red";
      formMsg.textContent="Please enter a valid email!";
      return;
    }

    formMsg.style.color="green";
    formMsg.textContent="Message sent! ✅";
    contactForm.reset();
  });
}
