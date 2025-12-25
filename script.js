// Selecting the Toggle Button
const themeBtn = document.getElementById('theme-toggle');

// Adding Click Event
themeBtn.addEventListener('click', () => {
    // Toggle the dark-theme class on body
    document.body.classList.toggle('dark-theme');

    // Change button text based on current theme
    if (document.body.classList.contains('dark-theme')) {
        themeBtn.innerText = "Light Mode";
        themeBtn.style.background = "#ffffff";
    } else {
        themeBtn.innerText = "Dark Mode";
        themeBtn.style.background = "#00d2ff";
    }
});