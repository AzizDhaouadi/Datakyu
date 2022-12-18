let dataLayerCreateAccountEvent = `
    window.dataLayer = window.dataLayer || [];
    <br>
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'create_account'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
    });`;

let gtagCreateAccountEvent = `
    gtag('event', 'create_account', {
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
    });`;

let apiCreateAccountEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';
<br>
'const api_secret' = 'secret_value';
<br>

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {<br>
  method: "POST", <br>
  body: JSON.stringify({ <br>
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', <br>
    events: [{ <br>
      name: 'create_account', <br>
      params: { <br>
        'organization_id': 'orgNum1' <br>
      } <br>
    }] <br>
  }) <br>
});`;

export {dataLayerCreateAccountEvent, gtagCreateAccountEvent, apiCreateAccountEvent};