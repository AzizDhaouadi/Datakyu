let dataLayerPurchaseEvent = `
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        <br>
        <span class="indent">'event': 'purchase'</span>,
        <br>
        <span class="indent">'transaction_id': 'L_12345'</span>,
        <br>
        <span class="indent">'affiliation': 'Datakyu'</span>,
        <br>
        <span class="indent">'value': 25.42</span>,
        <br>
        <span class="indent">'tax': 4.90</span>,
        <br>
        <span class="indent">'shipping': 5.99</span>,
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="index">'items': [
            <br>
            {
                <br>
                <span class="indent">item_id: "SKU_12345"</span>,
                <br>
                <span class="indent">item_name: "Stan and Friends Tee"</span>,
                <br>
                <span class="indent">affiliation: "Google Merchandise Store"</span>,
                <br>
                <span class="indent">coupon: "SUMMER_FUN"</span>,
                <br>
                <span class="indent">currency: "USD"</span>,
                <br>
                <span class="indent">discount: 2.22</span>,
                <br>
                <span class="indent">index: 0</span>,
                <br>
                <span class="indent">item_brand: "Google"</span>,
                <br>
                <span class="indent">item_category: "Apparel"</span>,
                <br>
                <span class="indent">item_category2: "Adult"</span>,
                <br>
                <span class="indent">item_category3: "Shirts"</span>,
                <br>
                <span class="indent">item_category4: "Crew"</span>,
                <br>
                <span class="indent">item_category5: "Short sleeve"</span>,
                <br>
                <span class="indent">item_list_id: "related_products"</span>,
                <br>
                <span class="indent">item_list_name: "Related Products"</span>,
                <br>
                <span class="indent">item_variant: "green"</span>,
                <br>
                <span class="indent">price: 9.99</span>,
                <br>
                <span class="indent">quantity: 1</span>
              }
        ]</span>

    });`

let gtagPurchaseEvent = `
  
gtag("event", "purchase", {
  <br>
  <span class="indent">transaction_id: "T_12345"</span>,
  <br>
  <span class="indent">affiliation: "Google Merchandise Store"</span>,
  <br>
  <span class="indent">value: 25.42</span>,
  <br>
  <span class="indent">tax: 4.90</span>,
  <br>
  <span class="indent">shipping: 5.99</span>,
  <br>
  <span class="indent">currency: "USD"</span>,
  <br>
  <span class="indent">coupon: "SUMMER_SALE"</span>,
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
});
`;

let apiPurchaseEvent = `
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
      <span class="indent">name: 'purchase'</span>,
      <span class="indent">params: {
        <span class="indent">'transaction_id': 'L_12345'</span>,
        <br>
        <span class="indent">'affiliation': 'Datakyu'</span>,
        <br>
        <span class="indent">'value': 25.42</span>,
        <br>
        <span class="indent">'tax': 4.90</span>,
        <br>
        <span class="indent">'shipping': 5.99</span>,
        <br>
        <span class="indent">'currency': 'USD'</span>,
        <br>
        <span class="index">'items': [
            <br>
            {
                <br>
                item_id: "SKU_12345",
                <br>
                item_name: "Stan and Friends Tee",
                <br>
                affiliation: "Google Merchandise Store",
                <br>
                coupon: "SUMMER_FUN",
                <br>
                currency: "USD",
                <br>
                discount: 2.22,
                <br>
                index: 0,
                <br>
                item_brand: "Google",
                <br>
                item_category: "Apparel",
                <br>
                item_category2: "Adult",
                <br>
                item_category3: "Shirts",
                <br>
                item_category4: "Crew",
                <br>
                item_category5: "Short sleeve",
                <br>
                item_list_id: "related_products",
                <br>
                item_list_name: "Related Products",
                <br>
                item_variant: "green",
                <br>
                price: 9.99,
                <br>
                quantity: 1
                <br>
              }
        ]</span>
      }
    }]
  })
});`

export {dataLayerPurchaseEvent, gtagPurchaseEvent, apiPurchaseEvent};