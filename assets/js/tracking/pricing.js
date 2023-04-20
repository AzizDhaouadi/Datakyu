//Measurement ID
const measurementID = 'G-00VKM23QFH';
let current_session_number;

//Getting the session_number parameter from the gtag library
let sessionNumberPromise = new Promise(resolve => {
    gtag('get', measurementID, 'session_number', resolve)
  });
  
  sessionNumberPromise.then((session_number) => {
    current_session_number = session_number;
  });

//Fire event when the user clicks on the package buttons
const packageButtons = document.querySelectorAll('button[id]');
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

//Fire event when the user clicks on the package buttons
const salesButtons = document.querySelectorAll('a[data-gtm-att]');
salesButtons.forEach((salesButton) => {
    salesButton.addEventListener('click', (e) => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_package_button',
            'package_type': e.target.getAttribute('data-gtm-att'),
            'event_session_number': current_session_number
        });
    });
});
