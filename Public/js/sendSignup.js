document.getElementById("signup-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none"; // Hide previous errors

    try {
        const response = await fetch("http://localhost:8000/api/auth/signup", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });

        const data = await response.json();

        if (!data.success) {
            errorMessage.innerText = data.message;
            errorMessage.style.display = "block";
            return;
        }

        alert("Account created successfully!");
        window.location.href = "/login";
    } catch (error) {
        errorMessage.innerText = "Something went wrong. Please try again.";
        errorMessage.style.display = "block";
    }
});
