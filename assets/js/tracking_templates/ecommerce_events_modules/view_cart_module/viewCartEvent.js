let dataLayerViewCartEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'view_cart'</span>,
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 9.99</span>,
        <br>
        <span class="indent">items: [</span>
        <br>
        <span class="indent">{</span>
            <br>
            <span class="indent-nested">item_id: "SKU_12345"</span>,
            <br>
            <span class="indent-nested">item_name: "Stan and Friends Tee"</span>,
            <br>
            <span class="indent-nested">affiliation: "Google Merchandise Store"</span>,
            <br>
            <span class="indent-nested">coupon: "SUMMER_FUN"</span>,
            <br>
            <span class="indent-nested">currency: "USD"</span>,
            <br>
            <span class="indent-nested">discount: 2.22</span>,
            <br>
            <span class="indent-nested">index: 0</span>,
            <br>
            <span class="indent-nested">item_brand: "Google"</span>,
            <br>
            <span class="indent-nested">item_category: "Apparel"</span>,
            <br>
            <span class="indent-nested">item_category2: "Adult"</span>,
            <br>
            <span class="indent-nested">item_category3: "Shirts"</span>,
            <br>
            <span class="indent-nested">item_category4: "Crew"</span>,
            <br>
            <span class="indent-nested">item_category5: "Short sleeve"</span>,
            <br>
            <span class="indent-nested">item_list_id: "related_products"</span>,
            <br>
            <span class="indent-nested">item_list_name: "Related Products"</span>,
            <br>
            <span class="indent-nested">item_variant: "green"</span>,
            <br>
            <span class="indent-nested">price: 9.99</span>,
            <br>
            <span class="indent-nested">quantity: 1</span>
            <br>
        <span class="indent">}]</span>
        
      });`

let gtagViewCartEvent = `
    gtag('event', 'view_cart', {
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22.3</span>,
        <br>
        <span class="indent">items: [</span>
        <br>
        <span class="indent">{</span>
            <br>
            <span class="indent-nested">item_id: "SKU_12345"</span>,
            <br>
            <span class="indent-nested">item_name: "Stan and Friends Tee"</span>,
            <br>
            <span class="indent-nested">affiliation: "Google Merchandise Store"</span>,
            <br>
            <span class="indent-nested">coupon: "SUMMER_FUN"</span>,
            <br>
            <span class="indent-nested">currency: "USD"</span>,
            <br>
            <span class="indent-nested">discount: 2.22</span>,
            <br>
            <span class="indent-nested">index: 0</span>,
            <br>
            <span class="indent-nested">item_brand: "Google"</span>,
            <br>
            <span class="indent-nested">item_category: "Apparel"</span>,
            <br>
            <span class="indent-nested">item_category2: "Adult"</span>,
            <br>
            <span class="indent-nested">item_category3: "Shirts"</span>,
            <br>
            <span class="indent-nested">item_category4: "Crew"</span>,
            <br>
            <span class="indent-nested">item_category5: "Short sleeve"</span>,
            <br>
            <span class="indent-nested">item_list_id: "related_products"</span>,
            <br>
            <span class="indent-nested">item_list_name: "Related Products"</span>,
            <br>
            <span class="indent-nested">item_variant: "green"</span>,
            <br>
            <span class="indent-nested">price: 9.99</span>,
            <br>
            <span class="indent-nested">quantity: 1</span>
            <br>
        <span class="indent">}]</span>
    });`

let apiViewCartEvent = `
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
      <span class="indent">name: 'view_cart'</span>,
      <br>
      <span class="indent">params: {
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="indent">'value': 22.3</span>,
        <br>
        <span class="indent">items: [</span>
        <br>
        <span class="indent">{</span>
            <br>
            <span class="indent-nested">item_id: "SKU_12345"</span>,
            <br>
            <span class="indent-nested">item_name: "Stan and Friends Tee"</span>,
            <br>
            <span class="indent-nested">affiliation: "Google Merchandise Store"</span>,
            <br>
            <span class="indent-nested">coupon: "SUMMER_FUN"</span>,
            <br>
            <span class="indent-nested">currency: "USD"</span>,
            <br>
            <span class="indent-nested">discount: 2.22</span>,
            <br>
            <span class="indent-nested">index: 0</span>,
            <br>
            <span class="indent-nested">item_brand: "Google"</span>,
            <br>
            <span class="indent-nested">item_category: "Apparel"</span>,
            <br>
            <span class="indent-nested">item_category2: "Adult"</span>,
            <br>
            <span class="indent-nested">item_category3: "Shirts"</span>,
            <br>
            <span class="indent-nested">item_category4: "Crew"</span>,
            <br>
            <span class="indent-nested">item_category5: "Short sleeve"</span>,
            <br>
            <span class="indent-nested">item_list_id: "related_products"</span>,
            <br>
            <span class="indent-nested">item_list_name: "Related Products"</span>,
            <br>
            <span class="indent-nested">item_variant: "green"</span>,
            <br>
            <span class="indent-nested">price: 9.99</span>,
            <br>
            <span class="indent-nested">quantity: 1</span>
            <br>
        <span class="indent">}]</span>
        <br>
      }
      <br>
    }]
    <br>  
});`

export {dataLayerViewCartEvent, gtagViewCartEvent, apiViewCartEvent};