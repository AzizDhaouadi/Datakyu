
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

import * as saasUpdateSubscriptionEvents from '../tracking_templates/saas_events_modules/update_subscription_module/updateSubscriptionEvent.js'

import * as saasCancelSubscriptionEvents from '../tracking_templates/saas_events_modules/cancel_subscription_module/cancelSubscriptionEvent.js'

import * as saasRenewSubscriptionEvents from '../tracking_templates/saas_events_modules/renew_subscription_module/renewSubscriptionEvent.js'

import * as ecommerceAddPaymentInfoEvents from '../tracking_templates/ecommerce_events_modules/add_payment_info_module/addPaymentInfoEvent.js'

import * as ecommerceAddShippingInfoEvents from '../tracking_templates/ecommerce_events_modules/add_shipping_info_module/addShippingInfoEvent.js'

import * as ecommerceAddToCartEvents from '../tracking_templates/ecommerce_events_modules/add_to_cart_module/addToCartEvent.js'

import * as ecommerceBeginCheckoutEvents from '../tracking_templates/ecommerce_events_modules/begin_checkout_module/beginCheckoutEvent.js'

import * as ecommercePurhcaseEvents from '../tracking_templates/ecommerce_events_modules/begin_checkout_module/beginCheckoutEvent.js'

import * as ecommerceRefundEvents from '../tracking_templates/ecommerce_events_modules/refund_module/refundEvent.js'

import * as ecommerceRemoveFromCartEvents from '../tracking_templates/ecommerce_events_modules/remove_from_cart_module/removeFromCart.js'

import * as ecommerceSelectItemEvents from '../tracking_templates/ecommerce_events_modules/select_item_module/selectItemEvent.js'

import * as ecommerceViewCartEvents from '../tracking_templates/ecommerce_events_modules/view_cart_module/viewCartEvent.js'

import * as ecommerceViewItemEvents from '../tracking_templates/ecommerce_events_modules/view_item_module/viewItemEvent.js'

import * as ecommerceViewItemListEvents from '../tracking_templates/ecommerce_events_modules/view_list_item_module/viewItemListEvent.js'

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

                case "update_subscription":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasUpdateSubscriptionEvents.dataLayerUpdateSubscriptionEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasUpdateSubscriptionEvents.gtagUpdateSubscriptionEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasUpdateSubscriptionEvents.apiUpdateSubscriptionEvent;
                            break;
                    }
                break;

                case "cancel_subscription":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasCancelSubscriptionEvents.dataLayerCancelSubscriptionEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasCancelSubscriptionEvents.gtagCancelSubscriptionEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasCancelSubscriptionEvents.apiCancelSubscriptionEvent;
                            break;
                    }
                break;

                case "renew_subscription":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = saasRenewSubscriptionEvents.dataLayerRenewSubscriptionEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = saasRenewSubscriptionEvents.gtagRenewSubscriptionEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = saasRenewSubscriptionEvents.apiRenewSubscriptionEvent;
                            break;
                    }
                break;


            }
        break;
        
        case "ecommerce":
            switch(chosenEventName) {
                case "add_payment_info":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceAddPaymentInfoEvents.gtagAddPaymentInfoEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceAddPaymentInfoEvents.apiAddPaymentInfoEvent;
                            break;
                        }
                break;
                
                case "begin_checkout":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceBeginCheckoutEvents.dataLayerBeginCheckoutEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceBeginCheckoutEvents.gtagBeginCheckoutEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceBeginCheckoutEvents.apiBeginCheckoutEvent;
                            break;
                    }
                break;

                case "view_list_item":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceViewItemListEvents.dataLayerViewItemListEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceViewItemListEvents.gtagViewItemListEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceViewItemListEvents.apiViewItemListEvent;
                            break;
                        }
                break;

                case "add_to_cart":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceAddToCartEvents.dataLayerAddToCartEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceAddToCartEvents.gtagAddToCartEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceAddToCartEvents.apiAddToCartEvent;
                            break;
                    }
                break;
                
                case "purchase":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommercePurhcaseEvents.dataLayerPurchaseEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommercePurhcaseEvents.gtagPurchaseEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommercePurhcaseEvents.apiPurchaseEvent;
                            break;
                    }
                break;

                case "select_item":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceSelectItemEvents.dataLayerSelectItemEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceSelectItemEvents.gtagSelectItemEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceSelectItemEvents.apiSelectItemEvent;
                            break;
                    }
                break;

                case "view_cart":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceViewCartEvents.dataLayerViewCartEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceViewCartEvents.gtagViewCartEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceViewCartEvents.apiViewCartEvent;
                            break;
                    }
                break;

                case "remove_from_cart":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceRemoveFromCartEvents.dataLayerRemoveFromCartEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceRemoveFromCartEvents.gtagRemoveFromCartEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceRemoveFromCartEvents.apiRemoveFromCartEvent;
                            break;
                    }
                break;

                case "add_shipping_info":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceAddShippingInfoEvents.dataLayerAddShippingInfoEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceAddShippingInfoEvents.gtagAddShippingInfoEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceAddShippingInfoEvents.apiAddShippingInfoEvent;
                            break;
                    }
                break;

                case "refund":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeConatainerSection.innerHTML = ecommerceRefundEvents.dataLayerRefundEvent;
                            break;
                        case "gtag":
                            codeConatainerSection.innerHTML = ecommerceRefundEvents.gtagRefundEvent;
                            break;
                        case "API":
                            codeConatainerSection.innerHTML = ecommerceRefundEvents.apiRefundEvent;
                            break;
                    }
                break;

            }
        break;
    }
});
