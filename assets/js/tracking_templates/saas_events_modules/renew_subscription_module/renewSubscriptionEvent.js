let dataLayerRenewSubscriptionEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'renew_subscription'</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
      });`

let gtagRenewSubscriptionEvent = `
    gtag('event', 'renew_subscription', {
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
    });`

let apiRenewSubscriptionEvent = `
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
      <span class="indent">name: 'renew_subscription'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerRenewSubscriptionEvent, gtagRenewSubscriptionEvent, apiRenewSubscriptionEvent};