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

fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {<br>
  method: "POST", <br>
  body: JSON.stringify({ <br>
    client_id: 'XXXXXXXXXX.YYYYYYYYYY', <br>
    events: [{ <br>
      name: 'login', <br>
      params: { <br>
        'method': 'google' <br>
      } <br>
    }] <br>
  }) <br>
});`;

export {dataLayerLoginEvent, gtagLoginEvent, apiLoginEvent};