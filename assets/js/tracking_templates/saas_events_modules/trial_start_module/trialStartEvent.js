let dataLayerTrialStartEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'trial_start'</span>,
        <br>
        <span class="indent">'start_date': '1970-01-01'</span>,
        <br>
        <span class="indent">'end_date': '1970-01-02'</span>,
        <br>
        <span class="indent">'plan_name': 'Premium'</span>
        <br>
      });`

let gtagTrialStartEvent = `
    gtag('event', 'trial_start', {
        <br>
        <span class="indent">'start_date': '1970-01-01'</span>,
        <br>
        <span class="indent">'end_date': '1970-01-02'</span>,
        <br>
        <span class="indent">'plan_name': 'Premium'</span>
        <br>
    });`

let apiTrialStartEvent = `
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
      <span class="indent">name: 'trial_start'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'start_date': '1970-01-01'</span>,
        <br>
        <span class="indent">'end_date': '1970-01-02'</span>,
        <br>
        <span class="indent">'plan_name': 'Premium'</span>
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerTrialStartEvent, gtagTrialStartEvent, apiTrialStartEvent};