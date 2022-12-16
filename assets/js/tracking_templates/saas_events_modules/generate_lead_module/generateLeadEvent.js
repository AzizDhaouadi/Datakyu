let dataLayerGenerateLeadEvent = `
    window.dataLayer = window.dataLayer || [];
    <br>
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'generate_lead'</span>,
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22</span>,
        <br>
        <span class="indent">'campaign': 'Paid Search Lead Gen'</span>
        <br>
    });`;

let gtagGenerateLeadEvent = `
    gtag('event', 'generate_lead', {
        <br>
        <span class="indent">'event': 'generate_lead'</span>,
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22</span>,
        <br>
        <span class="indent">'campaign': 'Paid Search Lead Gen'</span>
        <br>
    });`;

let apiGenerateLeadEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';
<br>
'const api_secret' = 'secret_value';
<br>
fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {<br>
  method: "POST", <br>
  body: JSON.stringify({ <br>
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', <br>
    events: [{ <br>
      name: 'generate_lead', <br>
      params: { <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22</span>,
        <br>
        <span class="indent">'campaign': 'Paid Search Lead Gen'</span>
        <br>
      } <br>
    }] <br>
  }) <br>
});`;

export {dataLayerGenerateLeadEvent, gtagGenerateLeadEvent, apiGenerateLeadEvent};