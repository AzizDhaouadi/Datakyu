let dataLayerSubscribeEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'subscribe'</span>,
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
      });`

let gtagSubscribeEvent = `
    gtag('event', 'subscribe', {
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
    });`

let apiSubscribeEvent = `
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
      <span class="indent">name: 'subscribe'</span>,
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
      }
      <br>
    }]
    <br>  
});`

export {dataLayerSubscribeEvent, gtagSubscribeEvent, apiSubscribeEvent};