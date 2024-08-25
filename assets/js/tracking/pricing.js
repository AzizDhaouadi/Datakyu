import { controlContactModule } from "../modules/contact.module.js";

//Fire event when the user clicks on the package buttons
const packageButtons = document.querySelectorAll('[data-gtm-att]:not([data-gtm-att="contact"])');

if (packageButtons == "undefined") {
  throw new Error("Package buttons not found");
}

const logPackageButtonClick = (button) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "clicked_package_button",
    package_type: button?.id,
  });
};

packageButtons.forEach((packageButton) => {
  packageButton.addEventListener("click", (e) => {
    logPackageButtonClick(e);
    controlContactModule();
  });
});

const contactButtons = document.querySelectorAll('[data-gtm-att="contact"]');
if (contactButtons == "undefined") {
  throw new Error("Contact buttons not found");
}

contactButtons.forEach((contactButton) => {
  contactButton.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "initiated_contact_form",
    });
    analytics.track("Initiated Contact Form", {
      cta_text: e.target.textContent,
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

window.addEventListener("load", () => {
  controlContactModule();
});
