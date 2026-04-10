let menu = document.querySelector('#menu-icon');
let topmenu = document.querySelector('.topmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    topmenu.classList.toggle('open')
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2400,
    reset: true
});

sr.reveal('.home-txt span', {delay:400});
sr.reveal('.school-img img', {delay:500, origin: 'top'});
sr.reveal('.home-txt h5', {delay:600, origin: 'bottom'});
sr.reveal('.home-txt h1', {delay:700, origin: 'bottom'});
sr.reveal('.home-txt p', {delay:800, origin: 'top'});
sr.reveal('.playvir-btn', {delay:900, origin: 'top'});

//Sending Message on the Form
function sendMessage() {
    document.getElementById("contactForm").style.filter = "blur(5px)";
    
    document.getElementById("successMessage").style.display = "block";
}

// Replace the progress update in your existing script
createUnityInstance(canvas, config, (progress) => {
    // Update both the default and custom progress bars
    progressBarFull.style.width = 100 * progress + "%";
    document.getElementById("custom-progress-bar").style.width = 100 * progress + "%";
    
    // Hide custom loading screen when complete
    if (progress === 1) {
        setTimeout(() => {
            document.getElementById("custom-loading-screen").style.display = "none";
        }, 500);
    }
}).then((unityInstance) => {
    loadingBar.style.display = "none";
    // ...
});