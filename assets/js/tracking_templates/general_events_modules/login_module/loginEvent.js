let dataLayerLoginEvent = `
    window.dataLayer = window.dataLayer || [];
    <br>
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'login'</span>,
        <br>
        <span class="indent">'method': 'google'</span>
        <br>
    });`;

let gtagLoginEvent = `
    gtag('event', 'login', {
        <br>
        <span class="indent">'method': 'google'</span>
        <br>
    });`;

let apiLoginEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';
<br>
'const api_secret' = 'secret_value';
<br>

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  method: "POST",
  body: JSON.stringify({
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    events: [{
      name: 'login',
      params: {
        'method': 'google'
      },
    }]
  })
});`;

export {dataLayerLoginEvent, gtagLoginEvent, apiLoginEvent};