let dataLayerTutorialCompleteEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'tutorial_complete'</span>,
        <br>
        <span class="indent">'tutorial_id': 'tut_001'</span>,
        <br>
        <span class="indent">'tutorial_name': 'how_to_use_our_tool'</span>
        <br>
      });`

let gtagTutorialCompleteEvent = `
    gtag('event', 'tutorial_complete', {
        <br>
        <span class="indent">'tutorial_id': 'tut_001'</span>,
        <br>
        <span class="indent">'tutorial_name': 'how_to_use_our_tool'</span>
        <br>
    });`

let apiTutorialCompleteEvent = `
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
      <span class="indent">name: 'tutorial_complete'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'tutorial_id': 'tut_001'</span>,
        <br>
        <span class="indent">'tutorial_name': 'how_to_use_our_tool'</span>
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerTutorialCompleteEvent, gtagTutorialCompleteEvent, apiTutorialCompleteEvent};