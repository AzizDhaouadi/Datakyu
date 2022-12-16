let dataLayerSearchEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'search'</span>,
        <br>
        <span class="indent">'search_term': 'Datakyu'</span>
        
      });`

let gtagSearchEvent = `
    gtag('event', 'search', {
        <br>
        'search_term': 'Datakyu'
    });`

let apiSearchEvent = `
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
      <span class="indent">name: 'search'</span>,
      <span class="indent">params: {
        <span class="indent">'search_term': 'Datakyu'</span>,
      }
    }]  
});`

export {dataLayerSearchEvent, gtagSearchEvent, apiSearchEvent};