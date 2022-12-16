let dataLayerTutorialBeginEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'tutorial_begin'</span>,
        <br>
        <span class="indent">'tutorial_id': 'tut_001'</span>,
        <br>
        <span class="indent">'tutorial_name': 'how_to_use_our_tool'</span>
        <br>
      });`

let gtagTutorialBeginEvent = `
    gtag('event', 'tutorial_begin', {
        <br>
        <span class="indent">'tutorial_id': 'tut_001'</span>,
        <br>
        <span class="indent">'tutorial_name': 'how_to_use_our_tool'</span>
        <br>
    });`

let apiTutorialBeginEvent = `
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
      <span class="indent">name: 'tutorial_begin'</span>,
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

export {dataLayerTutorialBeginEvent, gtagTutorialBeginEvent, apiTutorialBeginEvent};