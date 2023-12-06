// This will animate the links to load after the page is loaded

document.addEventListener('DOMContentLoaded', function () {
    const resumeLink = document.getElementById('resume-link');

    // Adding a delay using setTimeout to let the transition take effect
    setTimeout(function () {
        resumeLink.style.opacity = '1';
    }, 100); // Adjust the delay (in milliseconds) as needed
});

document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.getElementById('about-link');

    // Adding a delay using setTimeout to let the transition take effect
    setTimeout(function () {
        aboutLink.style.opacity = '1';
    }, 100); // Adjust the delay (in milliseconds) as needed
});

document.addEventListener('DOMContentLoaded', function () {
    const portLink = document.getElementById('port-link');

    // Adding a delay using setTimeout to let the transition take effect
    setTimeout(function () {
        portLink.style.opacity = '1';
    }, 100); // Adjust the delay (in milliseconds) as needed
});

