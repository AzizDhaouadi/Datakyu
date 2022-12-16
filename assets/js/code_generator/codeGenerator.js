import * as loginEvents from '../tracking_templates/general_events_modules/login_module/loginEvent.js'

import * as purchaseEvents from '../tracking_templates/general_events_modules/purchase_module/purchaseEvent.js'

import * as SeachEvents from '../tracking_templates/general_events_modules/search_module/searchEvent.js'

import * as SelectContentEvents from '../tracking_templates/general_events_modules/select_content_module/selectContentEvent.js'

import * as ShareEvents from '../tracking_templates/general_events_modules/share_module/shareEvent.js'

import * as SignUpEvents from '../tracking_templates/general_events_modules/sign_up_module/signUpEvent.js'


const radioButtonsList = document.querySelectorAll('input[type="radio"]');
let codeConatainer = document.getElementById('codeSection');
let eventNameDropDownContainer = document.getElementById("event_name_selector_div");
let eventNameDropDown = document.getElementById("event_name");
let customEventNameInputField = document.getElementById("custom_event_name_div");

const placeholderSampleCode = `
window.dataLayer = window.dataLayer || [];
<br>
window.dataLayer.push({
    <br>
    <span class="indent">'event': 'generate_sample_code',
    <br>
    <span class="indent">'how': 'use the form on the left to choose the configuration you want to use'</span>,
    <br>
    <span class="indent">'note': 'don't forget to wrap it all up inside a script tag'</span>
    <br>
 });
 </div>`


window.onload = () => {
    codeConatainer.innerHTML = placeholderSampleCode;
}

let dropDownElement = document.getElementById('event_name');

let selectedEventType = "all_properties";

radioButtonsList.forEach((radioButton) => {
    radioButton.addEventListener('change', (e) => {
        
        selectedEventType = e.target.value;

        switch(selectedEventType) {
            
            case "SaaS":
                eventNameDropDown.innerHTML = `<option value="tutorial_begin">tutorial_begin</option>
                 <option value="tutorial_complete">tutorial_complete</option>
                 <option value="add_payment_info">add_payment_info</option>
                 <option value="begin_checkout">begin_checkout</option>
                 <option value="generate_lead">generate_lead</option>
                 <option value="trial_start">trial_start</option>
                 <option value="trial_end">trial_end</option>
                 <option value="add_user">add_user</option>
                 <option value="remove_user">remove_user</option>
                 <option value="create_account">create_account</option>
                 <option value="delete_account">delete_account</option>
                 <option value="subscribe">subscribe</option>
                 <option value="update_subscription">update_subscription</option>
                 <option value="cancel_subscription">cancel_subscription</option>
                 <option value="renew_subscription">renew_subscription</option>`

                 if(customEventNameInputField.classList.contains("visually-hidden")) {
                    break;
                 } else {
                    eventNameDropDownContainer.classList.toggle("visually-hidden");
                    customEventNameInputField.classList.toggle("visually-hidden");
                 }
                 break;
            
            case "ecommerce":
                eventNameDropDown.innerHTML = `<option value="add_payment_info">add_payment_info</option>
                 <option value="begin_checkout">begin_checkout</option>
                 <option value="purchase">purchase</option>
                 <option value="add_to_cart">add_to_cart</option>
                 <option value="view_list_item">view_list_item</option>
                 <option value="select_item">select_item</option>
                 <option value="view_cart">view_cart</option>
                 <option value="remove_from_cart">remove_from_cart</option>
                 <option value="view_item">view_item</option>
                 <option value="add_shipping_info">add_shipping_info</option>
                 <option value="refund">refund</option>`
                 if(customEventNameInputField.classList.contains("visually-hidden")) {
                    break;
                 } else {
                    eventNameDropDownContainer.classList.toggle("visually-hidden");
                    customEventNameInputField.classList.toggle("visually-hidden");
                 }
                 break;

            case "all_properties":
                    eventNameDropDown.innerHTML = `
                    <option selected="">event_name</option>
                    <option value="login">login</option>
                    <option value="purchase">purchase</option>
                    <option value="search">search</option>
                    <option value="select_content">select_content</option>
                    <option value="share">share</option>
                    <option value="sign_up">sign_up</option>`
                    if(customEventNameInputField.classList.contains("visually-hidden")) {
                        break;
                     } else {
                        eventNameDropDownContainer.classList.toggle("visually-hidden");
                        customEventNameInputField.classList.toggle("visually-hidden");
                     }
                     break;
            
            case "custom_event":
                eventNameDropDownContainer.classList.toggle("visually-hidden");
                customEventNameInputField.classList.toggle("visually-hidden");
        }        

    })
});

