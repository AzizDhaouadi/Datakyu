let dataLayerSelectContentEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'select_content'</span>,
        <br>
        <span class="indent">'content_type': 'article'</span>,
        <span class="indent">'item_id': 'CT_001'</span>
        
      });`

let gtagSelectContentEvent = `
    gtag('event', 'select_item', {
        <br>
        <span class="indent">'content_type': 'article'</span>,
        <span class="indent">'item_id': 'CT_001'<span>
        <br>
    });`

let apiSelectContentEvent = `
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
      <span class="indent">name: 'select_item'</span>,
      <span class="indent">params: {
        <span class="indent">'content_type': 'article'</span>,
        <span class="indent">'item_id': 'CT_001'</span>
      }
    }]  
});`

export {dataLayerSelectContentEvent, gtagSelectContentEvent, apiSelectContentEvent};