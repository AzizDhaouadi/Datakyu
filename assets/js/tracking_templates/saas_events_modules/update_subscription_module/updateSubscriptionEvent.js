let dataLayerUpdateSubscriptionEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'update_subscription'</span>,
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'next_bill_date': '1971-01-01'</span>,
        <br>
        <span class="indent">'payment_type': 'Credit Card'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
        <span class="indent">'coupon': 'renew_25_off'</span>
        <br>
      });`

let gtagUpdateSubscriptionEvent = `
    gtag('event', 'update_subscription', {
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'next_bill_date': '1971-01-01'</span>,
        <br>
        <span class="indent">'payment_type': 'Credit Card'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
        <span class="indent">'coupon': 'renew_25_off'</span>
        <br>
    });`

let apiUpdateSubscriptionEvent = `
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
      <span class="indent">name: 'update_subscription'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22</span>,
        <br>
        <span class="indent">'date': '1970-01-01'</span>,
        <br>
        <span class="indent">'next_bill_date': '1971-01-01'</span>,
        <br>
        <span class="indent">'payment_type': 'Credit Card'</span>,
        <br>
        <span class="indent">'organization_id': 'orgNum1'</span>
        <br>
        <span class="indent">'coupon': 'renew_25_off'</span>
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerUpdateSubscriptionEvent, gtagUpdateSubscriptionEvent, apiUpdateSubscriptionEvent};