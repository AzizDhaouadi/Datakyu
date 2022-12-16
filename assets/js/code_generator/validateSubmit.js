
import * as loginEvents from '../tracking_templates/general_events_modules/login_module/loginEvent.js'

import * as purchaseEvents from '../tracking_templates/general_events_modules/purchase_module/purchaseEvent.js'

import * as SeachEvents from '../tracking_templates/general_events_modules/search_module/searchEvent.js'

import * as SelectContentEvents from '../tracking_templates/general_events_modules/select_content_module/selectContentEvent.js'

import * as ShareEvents from '../tracking_templates/general_events_modules/share_module/shareEvent.js'

import * as SignUpEvents from '../tracking_templates/general_events_modules/sign_up_module/signUpEvent.js'

import * as saasAddPaymentInfoEvents from '../tracking_templates/saas_events_modules/add_payment_info_module/addPaymentInfoEvent.js'

import * as saasAddUserEvents from '../tracking_templates/saas_events_modules/add_user_module/addUserEvent.js'

import * as saasBeginCheckoutEvents from '../tracking_templates/saas_events_modules/begin_checkout_module/beginCheckoutEvent.js'

import * as saasCreateAccountEvents from '../tracking_templates/saas_events_modules/create_account_module/createAccountEvent.js'

import * as saasDeleteAccountEvents from '../tracking_templates/saas_events_modules/delete_account_module/deleteAccountEvent.js'

import * as saasGenerateLeadEvents from '../tracking_templates/saas_events_modules/generate_lead_module/generateLeadEvent.js'

import * as saasRemoveUserEvents from '../tracking_templates/saas_events_modules/remove_user_module/removeUserEvent.js'

import * as saasSubscribeEvents from '../tracking_templates/saas_events_modules/subscribe_module/subscribeEvent.js'

import * as saasTrialStartEvents from '../tracking_templates/saas_events_modules/trial_start_module/trialStartEvent.js'

import * as saasTrialEndEvents from '../tracking_templates/saas_events_modules/trial_end_module/trialEndEvent.js'

import * as saasTutorialBeginEvents from '../tracking_templates/saas_events_modules/tutorial_begin_module/tutorialBeginEvent.js'

import * as saasTutorialCompleteEvents from '../tracking_templates/saas_events_modules/tutorial_complete_module/tutorialCompleteEvent.js'

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

        case "SaaS":
            switch(chosenEventName) {
                case "tutorial_begin":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasTutorialBeginEvents.dataLayerTutorialBeginEvent;
                            break;
                        case "gtag": 
                            codeConatainerSection.innerHTML = saasTutorialBeginEvents.gtagTutorialBeginEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasTutorialBeginEvents.apiTutorialBeginEvent;
                    }
                break;

                case "tutorial_complete":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasTutorialCompleteEvents.gtagTutorialCompleteEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasTutorialCompleteEvents.apiTutorialCompleteEvent;
                    }
                break;

                case "add_payment_info":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasAddPaymentInfoEvents.gtagAddPaymentInfoEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasAddPaymentInfoEvents.apiAddPaymentInfoEvent;
                            break;
                        
                    }
                break;

                case "begin_checkout":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasBeginCheckoutEvents.dataLayerBeginCheckoutEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasBeginCheckoutEvents.gtagBeginCheckoutEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasBeginCheckoutEvents.apiBeginCheckoutEvent;
                            break;
                    }
                break;

                case "generate_lead":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasGenerateLeadEvents.dataLayerGenerateLeadEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasGenerateLeadEvents.gtagGenerateLeadEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasGenerateLeadEvents.apiGenerateLeadEvent;
                            break;
                    }
                break;

                case "trial_start":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasTrialStartEvents.dataLayerTrialStartEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasTrialStartEvents.gtagTrialStartEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasTrialStartEvents.apiTrialStartEvent;
                            break;
                    }
                break;

                case "trial_end":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasTrialEndEvents.dataLayerTrialEndEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasTrialEndEvents.gtagTrialEndEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasTrialEndEvents.apiTrialEndEvent;
                            break;
                    }
                break;

                case "add_user":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasAddUserEvents.dataLayerAddUserEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasAddUserEvents.gtagAddUserEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasAddUserEvents.apiAddUserEvent;
                            break;
                    }
                break;

                case "remove_user":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasRemoveUserEvents.dataLayerRemoveUserEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasRemoveUserEvents.gtagRemoveUserEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasRemoveUserEvents.apiRemoveUserEvent;
                            break;
                    }
                break;

                case "create_account":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasCreateAccountEvents.dataLayerCreateAccountEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasCreateAccountEvents.gtagCreateAccountEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasCreateAccountEvents.apiCreateAccountEvent;
                            break;
                    }
                break;

                case "delete_account":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasDeleteAccountEvents.dataLayerDeleteAccountEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasDeleteAccountEvents.gtagDeleteAccountEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasDeleteAccountEvents.apiDeleteAccountEvent;
                            break;
                    }
                break;

                case "subscribe":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasSubscribeEvents.dataLayerSubscribeEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasSubscribeEvents.gtagSubscribeEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasSubscribeEvents.apiSubscribeEvent;
                            break;
                    }
                break;


            }
        break;     
    }
});
