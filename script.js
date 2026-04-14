function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if (!element) {
        return;
    }

    window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
    });
}

window.addEventListener('DOMContentLoaded', function() {
    var footerYear = document.getElementById('footer-year');
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear().toString();
    }
});