document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const fullName = document.getElementById("fullName").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }
            
            localStorage.setItem("user", JSON.stringify({ fullName, email, password }));
            alert("Sign-up successful! Redirecting to login.");
            window.location.href = "login.html";
        });
    }

    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const user = JSON.parse(localStorage.getItem("user"));
            
            if (user && user.email === email && user.password === password) {
                alert("Login successful!");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid login credentials!");
            }
        });
    }
});

function uploadResume() {
    document.getElementById("resume-status").textContent = "Uploaded";
    alert("Resume uploaded successfully!");
}
