let dataLayerShareEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'select_content'</span>,
        <br>
        <span class="indent">'content_type': 'article'</span>,
        <span class="indent">'item_id': 'CT_001'</span>,
        <span class="indent">'method':'facebook_link'</span>
        
      });`

let gtagShareEvent = `
    gtag('event', 'select_item', {
        <br>
        <span class="indent">'content_type': 'article'</span>,
        <span class="indent">'item_id': 'CT_001'<span>,
        <span class="indent">'method':'facebook_link'</span>
        <br>
    });`

let apiShareEvent = `
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
    events: [{ <br>
      <span class="indent">name: 'select_item'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'content_type': 'article'</span>,
        <br>
        <span class="indent">'item_id': 'CT_001'</span>,
        <br>
        <span class="indent">'method':'facebook_link'</span>
        <br>
      } <br>
    }] <br>
});`

export {dataLayerShareEvent, gtagShareEvent, apiShareEvent};