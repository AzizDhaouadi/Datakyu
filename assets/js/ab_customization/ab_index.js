const homePageCustomization = () => {
    if (!identification || identification.type !== 'business') {
        return;
    }

    const companyDetails = identification?.company;

    // Start customization
    const headerOne = document.querySelector('h1');
    headerOne.innerText = `Make ${companyDetails?.name}'s data work harder with Datakyu.`

    $('h1').fadeIn("slow");
}

window.SpotterSettings = {
    token: "1447|QbGVdI2HTR0eo2XXXQuHeUYqfvxS5ORuAjn98u3zcf0bb21a",
    callback: homePageCustomization,
};