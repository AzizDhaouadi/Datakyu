let dataLayerCreateAccountEvent = `
    window.dataLayer = window.dataLayer || [];
    <br>
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'add_user'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
    });`;

let gtagCreateAccountEvent = `
    gtag('event', 'add_user', {
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
    });`;

let apiCrateAccountEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';
<br>
'const api_secret' = 'secret_value';
<br>

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {<br>
  method: "POST", <br>
  body: JSON.stringify({ <br>
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', <br>
    events: [{ <br>
      name: 'add_user', <br>
      params: { <br>
        'organization_id': 'orgNum1' <br>
      } <br>
    }] <br>
  }) <br>
});`;

export {dataLayerCreateAccountEvent, gtagCreateAccountEvent, apiCrateAccountEvent};