// function enhanceUserProfile(identification) {

//     if (identification && identification.type !== "isp") {
//         const reveal = identification.company;

//         window.dataLayer = window.dataLayer || [];

//         console.log("Entered the enhanceUserProfile function");

//         dataLayer.push({
//             event: 'snitcher_data_ready',
//             snitcher: {
//                 source: "snitcher",
//                 website: identification.domain || undefined,
//                 type: identification.type || undefined,
//                 location: reveal.location || undefined,
//                 founded_year: reveal.founded_year || undefined,
//                 company_name: reveal.name || undefined,
//                 company_type: identification.type || undefined,
//                 country: identification.geoIP.country || undefined,
//                 country_code: identification.geoIP.country_code || undefined,
//                 state: identification.geoIP.state || undefined,
//                 city: identification.geoIP.city || undefined,
//                 industry: reveal.industry || undefined,
//                 number_of_employees: reveal.employee_range || undefined,
//             }
//         });

//     }


// }

// window.SpotterSettings = {
//     token: "1447|QbGVdI2HTR0eo2XXXQuHeUYqfvxS5ORuAjn98u3zcf0bb21a",
//     callback: enhanceUserProfile,
// };

// !function (s, n, i, t, c, h) {
//     s.SnitchObject = i; s[i] || (s[i] = function () {
//         (s[i].q = s[i].q || []).push(arguments)
//     }); s[i].l = +new Date; c = n.createElement(t);
//     h = n.getElementsByTagName(t)[0]; c.src = '//snid.snitcher.com/8426066.js';
//     h.parentNode.insertBefore(c, h)
// }(window, document, 'snid', 'script');

// snid('verify', '8426066');