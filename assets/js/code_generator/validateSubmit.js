
import * as loginEvents from '../tracking_templates/general_events_modules/login_module/loginEvent.js'

import * as purchaseEvents from '../tracking_templates/general_events_modules/purchase_module/purchaseEvent.js'

import * as SeachEvents from '../tracking_templates/general_events_modules/search_module/searchEvent.js'

import * as SelectContentEvents from '../tracking_templates/general_events_modules/select_content_module/selectContentEvent.js'

import * as ShareEvents from '../tracking_templates/general_events_modules/share_module/shareEvent.js'

import * as SignUpEvents from '../tracking_templates/general_events_modules/sign_up_module/signUpEvent.js'



const codeGeneratorForm = document.getElementById('codeGeneratorForm');
console.log("found the form");

let codeConatainerSection = document.getElementById('codeSection');


let chosentEventType;
let chosenEventName;
let chosenTrackingMedium;

codeGeneratorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    chosentEventType = codeGeneratorForm.elements["event_type"].value;
    chosenEventName = codeGeneratorForm.elements["event_name"].value;
    chosenTrackingMedium = codeGeneratorForm.elements["tracking_medium"].value;
    switch(chosentEventType) {
        case "all_properties":
            switch(chosenEventName) {
                case "login":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = loginEvents.dataLayerLoginEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = loginEvents.gtagLoginEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = loginEvents.apiLoginEvent;
                            break;
                        }
                        
                    break;
                
                case "purchase":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = purchaseEvents.dataLayerPurchaseEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = purchaseEvents.gtagPurchaseEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = purchaseEvents.apiPurchaseEvent;
                            break;
                    }
                break;
                
                case "search":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = SeachEvents.dataLayerSearchEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = SeachEvents.gtagSearchEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = SeachEvents.apiSearchEvent;
                            break;
                    }
                break;
                
                case "select_content":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = SelectContentEvents.dataLayerSelectContentEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = SelectContentEvents.gtagSelectContentEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = SelectContentEvents.apiSelectContentEvent;
                            break;
                    }
                        break;
                    
                case "share":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ShareEvents.dataLayerShareEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ShareEvents.gtagShareEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ShareEvents.apiShareEvent;
                            break;
                    }
                    break;

                case "sign_up":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = SignUpEvents.dataLayerSignUpEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = SignUpEvents.gtagSignUpEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = SignUpEvents.apiSignUpEvent;
                            break;
                    }
                break;

            }
        break;
    }
});
