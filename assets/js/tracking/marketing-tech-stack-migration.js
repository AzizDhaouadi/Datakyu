import { controlContactModule } from "../modules/contact.module.js";

// Fire dataLayer events for nav link clicks
const navLinks = document.querySelectorAll("nav li a"); // Getting the list of nav links
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_nav_link",
      nav_item: navLink.textContent.trim(),
    });
  });
});

// Fire dataLayer events for the clicks on the Typeform button and link
const typeformElements = document.querySelectorAll("#marketing_websites");
typeformElements.forEach((typeformElement) => {
  typeformElement.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "initiated_contact_form",
      cta_text: e.target.textContent,
    });
    analytics.track("Initiated Contact Form", {
      cta_text: e.target.textContent,
    });
  });
});

// Fire dataLayer event for the clicks on accordion elements
const accordionElements = document.querySelectorAll("a.accordion-button");
accordionElements.forEach((accordionElement) => {
  accordionElement.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_accordion_button",
      accordion_title: accordionElement.textContent.trim(),
    });
  });
});

// Fire dataLayer event for the cheking the price of the service and packages
const pricingPackages = document.querySelectorAll("input");
pricingPackages.forEach((pricingPackage) => {
  pricingPackage.addEventListener("change", (event) => {
    if (event.target.closest(".form-check-row-select").querySelector("td.table-text-center").classList.contains("blur-price")) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "revealed_price",
        service_package: event.target.closest(".form-check-row-select").querySelector("label").textContent.trim(),
      });
    }
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
