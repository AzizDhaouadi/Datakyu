window.addEventListener("message", function (event) {
  if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
    window.dataLayer.push({
      event: "course_registration",
      form_id: event.data.id,
    });
  }
});
