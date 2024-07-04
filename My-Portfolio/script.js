document.addEventListener("DOMContentLoaded", function() {
    new Typed('#typed-text', {
        strings: ["Web Developer.", "Python Programmer."],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true,
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const skills = [
        { selector: ".radial-bar:nth-child(1) .path", offset: 75 },
        { selector: ".radial-bar:nth-child(2) .path", offset: 80 },
        { selector: ".radial-bar:nth-child(3) .path", offset: 90.60},
        { selector: ".radial-bar:nth-child(4) .path", offset: 90 },
    ];

    skills.forEach(skill => {
        document.querySelector(skill.selector).style.strokeDashoffset = skill.offset;
    });
});