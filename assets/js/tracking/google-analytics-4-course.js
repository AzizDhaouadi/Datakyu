window.addEventListener("message", function (event) {
  if (event.data.type === "hsFormCallback" && event.data.eventName === "onFormSubmitted") {
    window.dataLayer.push({
      event: "course_registration",
      form_id: event.data.id,
    });
    swetrix.track({
      ev: "course_registration",
      unique: false,
      meta: {
        form_id: event.data.id,
      },
    });
  }
});
