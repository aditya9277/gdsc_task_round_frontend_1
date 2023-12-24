// script.js
function socialSignUp(provider) {
    alert(`Signing up with ${provider}! (This is a demo, no actual sign-up functionality)`);
}

document.getElementById('userProfileForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // Process form data or show a success message
    alert('Profile created! (This is a demo, no actual form submission)');
});
