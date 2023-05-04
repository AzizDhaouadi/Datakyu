var gtagOptions = {
  strings: [
    "<span>gtag(</span>" +
      '<div class="ps-3"><span>"event",</span></div>' +
      '<div class="ps-3"><span>"user_login",{</span></div>' +
      '<div class="ps-3"><span>"method":</span> <span>"google"</span></div>' +
      '<div class="ps-3"><span>}</span></div>' +
      "<div><span>);</span></div>",
  ],
  typeSpeed: 10,
  showCursor: false,
};

var typed = new Typed(".gtagtyped", gtagOptions);

var gtag2Options = {
  strings: [
    "<span>gtag(</span>" +
      '<div class="ps-3"><span>"event",</span></div>' +
      '<div class="ps-3"><span>"user_signup",{</span></div>' +
      '<div class="ps-3"><span>"signup_method":</span> <span>"email"</span></div>' +
      '<div class="ps-3"><span>}</span></div>' +
      "<div><span>);</span></div>",
  ],
  typeSpeed: 10,
  startDelay: 1800,
  onComplete: () => {
    twoTyped.cursor.style.visibility = "hidden";
  },
};

var twoTyped = new Typed(".gtag2typed", gtag2Options);

var segmentOptions = {
  strings: [
    '<div><span>analytics.track("User Login", {</span></div>' +
      '<div class="ps-3"><span>"method": "google",</span></div>' +
      '<div class="ps-3"><span>email: "datakyu@help.tracking"</span></div>' +
      "<div><span>});</span></div>",
  ],
  typeSpeed: 10,
  showCursor: false,
};

var threeTyped = new Typed(".segmenttyped", segmentOptions);

var segment2Options = {
  strings: [
    '<div><span>analytics.track("User Signup", {</span></div>' +
      '<div class="ps-3"><span>"method": "email",</span></div>' +
      '<div class="ps-3"><span>email: "datakyu@help.tracking"</span></div>' +
      "<div><span>});</span></div>",
  ],
  typeSpeed: 10,
  startDelay: 1800,
  onComplete: () => {
    fourTyped.cursor.style.visibility = "hidden";
  },
};

var fourTyped = new Typed(".segment2typed", segment2Options);
