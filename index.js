function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert("Sign In Successful!");
        // Here you can add further logic for sign-in, like redirecting to a dashboard
    }
}

document.getElementById('loginForm').addEventListener('submit', handleSignIn);
document.querySelector('#sign_up a').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'index.html';
});
