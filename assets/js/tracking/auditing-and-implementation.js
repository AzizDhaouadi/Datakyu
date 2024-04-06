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
    swetrix.track({
      ev: "clicked_nav_link",
      unique: false,
      meta: {
        nav_item: navLink.textContent.trim(),
      },
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
    swetrix.track({
      ev: "initiated_contact_form",
      unique: false,
      meta: {
        cta_text: e.target.textContent,
      },
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
    swetrix.track({
      ev: "clicked_accordion_button",
      unique: false,
      meta: {
        accordion_title: accordionElement.textContent.trim(),
      },
    });
  });
});

window.addEventListener("message", function (event) {
  if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
    window.dataLayer.push({
      event: "captured_lead",
      form_id: event.data.id,
    });
    swetrix.track({
      ev: "captured_lead",
      unique: false,
      meta: {
        form_id: event.data.id,
      },
    });
  }
});

window.addEventListener("load", () => {
  controlContactModule();
  const techStackLinks = document.querySelectorAll('a[id*="Editor"]');
  if (techStackLinks == "undefined") {
    throw new Error("Tech stack links were not found");
  }
  let currentTechStackLinkIndex = 1;
  setInterval(() => {
    techStackLinks[currentTechStackLinkIndex].click();
    currentTechStackLinkIndex++;
    if (currentTechStackLinkIndex > 4) {
      currentTechStackLinkIndex = 0;
    }
  }, 5000);
});
