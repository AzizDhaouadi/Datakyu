// Getting the header CTA buttons & Sending a dataLayer event
const headerCTAButtons = document.querySelectorAll("a.my-2");
headerCTAButtons.forEach((headerCTAButton) => {
  headerCTAButton.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_header_cta",
      cta_text: `${e.target.textContent}`,
    });
  });
});

// Getting the view configuration buttons and sending a dataLayer event
const viewConfigurationButtons = document.querySelectorAll("div.btn-group button");
viewConfigurationButtons.forEach((viewConfigurationButton) => {
  viewConfigurationButton.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_view_configuration_button",
      container_type: `${e.target.getAttribute("data-bs-target")}`,
    });
  });
});

// Getting the replicate buttons and sending a dataLayer event
const replicateButtons = document.querySelectorAll("div.btn-group a");
replicateButtons.forEach((viewReplicatedButton) => {
  viewReplicatedButton.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_replicate_button",
      template_name: `${e.target.getAttribute("href")}`,
    });
  });
});

// Getting the accordion items and sending a dataLayer event
const accordionItems = document.querySelectorAll("div.accordion-item");
accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_accordion_item",
      accordion_title: `${accordionItem.querySelector("h2").textContent.trim()}`,
      accordion_content: `${accordionItem.querySelector("div.accordion-body").textContent.trim()}`,
    });
  });
});

// Getting the nav links and sending a dataLayer event
const navLinks = document.querySelectorAll("a.nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_nav_link",
      nav_item: `${e.target.textContent}`,
    });
  });
});
