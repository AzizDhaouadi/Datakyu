// Fire dataLayer events for nav link clicks
const navLinks = document.querySelectorAll("a.nav-link"); // Getting the list of nav links
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_nav_link",
      nav_item: navLink.textContent.trim(),
    });
  });
});

//Fire an event when a user clicks a nav item dropdown link
const navDropdownLinks = document.querySelectorAll("ul.dropdown-menu a.dropdown-item");
navDropdownLinks.forEach((navDropdownLink) => {
  navDropdownLink.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_nav_dropdown_link",
      nav_item: e.target.textContent,
    });
  });
});

//Fire event when user clicks on the drop a message button
const dropMessageButton = document.querySelector("a.btn-primary[data-lead-capture-modal-button]");
dropMessageButton.addEventListener("click", (e) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "initiated_contact_form",
  });
  analytics.track("Initiated Contact Form", {
    cta_text: e.target.textContent,
  });
});

//Fire event when user click on the different process steps
const processSteps = document.querySelectorAll("a.step-content-wrapper");
processSteps.forEach((processStep) => {
  processStep.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_process_step",
      step_title: processStep.querySelector(".step-title").innerText,
    });
  });
});

window.addEventListener("message", function (event) {
  if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
    window.dataLayer.push({
      event: "captured_lead",
      form_id: event.data.id,
    });

    const ue = event?.data?.data?.submissionValues?.email;

    analytics.identify(ue, {
      email: ue
    });

    analytics.track("Captured Lead", {
      form_id: event.data.id,
    });
  }
});
