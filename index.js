function handleSignIn(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert("Sign In Successful!");
        // Harish this is logic for sign-in, like redirecting to a dashboard
    }
}
document.getElementById("signbtn").addEventListener("click", function(){
    window.location.href = "dashboard.html";
});

function handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const userRole = document.getElementById('user').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (name === "" || age === "" || email === "" || password === "" || userRole === "" || !gender) {
        alert("Please fill in all fields.");
    } else {
        alert("Sign Up Successful!");
    }
}

document.getElementById('loginForm').addEventListener('submit', handleSignIn);
document.querySelector('#sign_up a').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = 'index.html';
});


const signUpForm = document.getElementById('signUpForm');
if (signUpForm) {
    signUpForm.addEventListener('submit', handleSignUp);
}

document.getElementById("signupBtn").addEventListener("click", function(){
    window.location.href = "dashboard.html";
});
