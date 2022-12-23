//Measurement ID
const measurementID = 'G-00VKM23QFH';
let current_session_number;

//Getting the session_number parameter from the gtag library
let sessionNumberPromise = new Promise(resolve => {
    gtag('get', measurementID, 'session_number', resolve)
  });
  
  sessionNumberPromise.then((session_number) => {
    current_session_number = session_number;
  })
  
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

//Fire event when user clicks on the drop a message button
const dropMessageButton = document.querySelector('a.btn-primary[href="#contactSection"]');
dropMessageButton.addEventListener('click', () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'clicked_drop_message_button',
        'event_session_number': current_session_number
    });
});

//Fire event when user clicks on the different process steps
const processSteps = document.querySelectorAll('a.step-content-wrapper');
processSteps.forEach((processStep) => {
    processStep.addEventListener('click', (e) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_process_step',
            'step_title': processStep.querySelector('.step-title').innerText
        });
    });
});

//Fire event when the user clicks on the package buttons
const packageButtons = document.querySelectorAll('button[onclick]');
packageButtons.forEach((packageButton) => {
    packageButton.addEventListener('click', (e) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_package_button',
            'package_type': e.target.getAttribute('id'),
            'event_session_number': current_session_number
        });
    });
});