document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  const emailInput = loginForm.querySelector('input[type="text"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  const forgotPasswordLink = document.getElementById("forgotPassword");
  const signUpLink = document.getElementById("signUp");
  const passwordField = document.getElementById("passwordField");
  const togglePasswordBtn = document.getElementById("togglePassword");


  function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "") {
      alert("Please enter your email address");
      return false;
    }

    if (password === "") {
      alert("Please enter your password");
      return false;
    }

    return true;
  }

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
      const emailValue = emailInput.value;
      const passwordValue = passwordInput.value;

      console.log("Email:", emailValue);
      console.log("Password:", passwordValue);

      setTimeout(() => {
        const random = Math.random();
        if (random < 0.7) {
          alert("Login successful!");
        } else {
          alert("Login failed. Please try again.");
        }
      }, 1000);

      loginForm.reset();
    }
  });

  togglePasswordBtn.addEventListener("click", function() {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    if (type === "password") {
      togglePasswordBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"> <path d="M8 4a4 4 0 0 0-3.995 3.8A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.995-3.301A4 4 0 0 0 8 4zm0 6a1.5 1.5 0 0 1-1.493-1.356l.07-.214A3.5 3.5 0 0 1 8 6.5a3.5 3.5 0 0 1 1.423 6.743l-.071.214A1.5 1.5 0 0 1 8 10z"/> <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708z"/> </svg>`;
    } else {
      togglePasswordBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16"> <path d="M8 4a4 4 0 0 0-3.995 3.8A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.995-3.301A4 4 0 0 0 8 4zm0 6a1.5 1.5 0 0 1-1.493-1.356l.07-.214A3.5 3.5 0 0 1 8 6.5a3.5 3.5 0 0 1 1.423 6.743l-.071.214A1.5 1.5 0 0 1 8 10z"/> <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708z"/> </svg>`;
    }
  });


  forgotPasswordLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Forgot password link clicked. Implement functionality here.");
  });


  signUpLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Sign Up link clicked. Implement functionality here.");
  });
});
