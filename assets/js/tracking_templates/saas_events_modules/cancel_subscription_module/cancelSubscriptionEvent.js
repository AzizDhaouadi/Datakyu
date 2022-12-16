let dataLayerCancelSubscriptionEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'cancel_susbcription'</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
      });`

let gtagCancelSubscriptionEvent = `
    gtag('event', 'cancel_subscription', {
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
    });`

let apiCancelSubscriptionEvent = `
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
      <span class="indent">name: 'cancel_subscription'</span>,
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

export {dataLayerCancelSubscriptionEvent, gtagCancelSubscriptionEvent, apiCancelSubscriptionEvent};