let dataLayerSignUpEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'sign_up'</span>,
        <br>
        <span class="indent">'method': 'Apple'</span>
        
      });`

let gtagSignUpEvent = `
    gtag('event', 'sign_up', {
        <br>
        'method': 'Apple'
    });`

let apiSignUpEvent = `
'const measurement_id' = 'G-XXXXXXXXXX';
<br>
'const api_secret' = 'XXXXXXXXXXXXXXX';
<br>
fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {
  <br>
  method: "POST",
  <br>
  body: JSON.stringify({
    <br>
    client_id: 'XXXXXXXXXX.YYYYYYYYYY',
    <br>
    events: [{
      <br>
      <span class="indent">name: 'sign_up'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'method': 'Apple'</span>,
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerSignUpEvent, gtagSignUpEvent, apiSignUpEvent};