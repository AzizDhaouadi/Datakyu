function enhanceUserProfile(identification) {
    if (identification && identification.type !== "isp") {
        var reveal = identification.company;

        window.dataLayer = window.dataLayer || [];

        dataLayer.push({
            event: 'snitcher_data_ready',
            snitcher: {
                source: "snitcher",
                website: identification.domain || undefined,
                type: identification.type || undefined,
                location: reveal.location || undefined,
                founded_year: reveal.founded_year || undefined,
                company_name: reveal.name || undefined,
                company_type: identification.type || undefined,
                country: identification.geoIP.country || undefined,
                country_code: identification.geoIP.country_code || undefined,
                state: identification.geoIP.state || undefined,
                city: identification.geoIP.city || undefined,
                industry: reveal.industry || undefined,
                number_of_employees: reveal.employee_range || undefined,
            }
        });
    }


}

window.SpotterSettings = {
    token: "1447|QbGVdI2HTR0eo2XXXQuHeUYqfvxS5ORuAjn98u3zcf0bb21a",
    callback: enhanceUserProfile,
};