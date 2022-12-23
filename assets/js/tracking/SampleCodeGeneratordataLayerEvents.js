// Fire dataLayer events for nav link clicks
const navLinks = document.querySelectorAll('a.nav-link'); // Getting the list of nav links
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_nav_link',
            'nav_item': navLink.textContent.trim()
        }); 
    })
});

//Fire dataLayer events for accordion button clicks
const accordionButtons = document.querySelectorAll("h2.accordion-header"); // Getting the list of accordion buttons
accordionButtons.forEach((accordionButton) => {
    accordionButton.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_accordion_button',
            'accordion_title': accordionButton.textContent.trim()
        }); 
    })
});