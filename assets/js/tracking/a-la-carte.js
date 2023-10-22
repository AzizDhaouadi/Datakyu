import { controlContactModule } from '../modules/contact.module.js';

// Measurement ID
const measurementID = 'G-00VKM23QFH';
let current_session_number;

// Getting the session_number parameter from gtag
let sessionNumberPromise = new Promise(resolve => {
    gtag('get', measurementID, 'session_number', resolve)
});

sessionNumberPromise.then((session_number) => {
    current_session_number = session_number;
});

// Fire dataLayer events for the clicks on the Typeform button and link
const typeformElements = document.querySelectorAll('#marketing_websites');
typeformElements.forEach((typeformElement) => {
    typeformElement.addEventListener('click', (e) => {
        console.log('element clicked');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'initiated_contact_form',
            'event_session_number': current_session_number,
            'cta_text': e.target.textContent
        });
        controlContactModule();
    });
});

//Fire dataLayer events for the learn more buttons
const learnMoreButtons = document.querySelectorAll('button[data-bs-toggle="modal"]');
learnMoreButtons.forEach((learnMoreButton) => {
    learnMoreButton.addEventListener('click', () => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'clicked_learn_more',
            'offered_service': learnMoreButton.parentElement.querySelector('.card-title').textContent
        });
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