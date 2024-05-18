// Fire dataLayer events for nav link clicks
const navLinks = document.querySelectorAll("a.nav-link"); // Getting the list of nav links
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
    // Appending #how-it-works to the URL if a user clicks on the how it works nav link
    if (navLink.textContent.trim().toLowerCase() === "how it works") {
      if (!location.href.includes("how-it-works")) {
        window.history.replaceState(null, null, `${location.href}/#how-it-works`);
      }
    }
  });
});

//Fire dataLayer events for accordion button clicks
const accordionButtons = document.querySelectorAll("h2.accordion-header"); // Getting the list of accordion buttons
accordionButtons.forEach((accordionButton) => {
  accordionButton.addEventListener("click", () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "clicked_accordion_button",
      accordion_title: accordionButton.textContent.trim(),
    });
    swetrix.track({
      ev: "clicked_accordion_button",
      unique: false,
      meta: {
        accordion_title: accordionButton.textContent.trim(),
      },
    });
  });
});

