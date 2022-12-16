let dataLayerAddUserEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'add_user'</span>,
        <br>
        <span class="indent">'users_per_account': 3</span>,
        <br>
        <span class="indent">'plan_name': 'Premium'</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>
        <br>
      });`

let gtagAddUserEvent = `
    gtag('event', 'add_user', {
        <br>
        <span class="indent">'users_per_account': 3</span>,
        <br>
        <span class="indent">'plan_name': 'Premium'</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>
        <br>
    });`

let apiAddUserEvent = `
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
      <span class="indent">name: 'add_user'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'users_per_account': 3</span>,
        <br>
        <span class="indent">'plan_name': 'Premium'</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerAddUserEvent, gtagAddUserEvent, apiAddUserEvent};