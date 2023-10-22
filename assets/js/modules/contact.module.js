'use strict';

const controlContactModule = () => {
    const contactModule = document.querySelector('[data-lead-capture-modal]');
    const openContactModuleButtons = document.querySelectorAll('[data-lead-capture-modal-button]');
    const closeContactModuleButton = document.querySelector('[data-close-lead-capture-modal]');

    if (contactModule === "undefined" || contactModule === null) {
        throw new Error('Contact module not found');
    }

    closeContactModuleButton.addEventListener('click', () => contactModule.close());

    for (let openContactModuleButton of openContactModuleButtons) {
        openContactModuleButton.addEventListener('click', () => contactModule.showModal());
    }

}

export { controlContactModule };