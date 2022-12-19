
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

let codeContainerSection = document.getElementById('codeSection');


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
                            codeContainerSection.innerHTML = loginEvents.dataLayerLoginEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = loginEvents.gtagLoginEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = loginEvents.apiLoginEvent;
                            break;
                        }
                        
                    break;
                
                case "purchase":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = purchaseEvents.dataLayerPurchaseEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = purchaseEvents.gtagPurchaseEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = purchaseEvents.apiPurchaseEvent;
                            break;
                    }
                break;
                
                case "search":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = SeachEvents.dataLayerSearchEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = SeachEvents.gtagSearchEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = SeachEvents.apiSearchEvent;
                            break;
                    }
                break;
                
                case "select_content":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = SelectContentEvents.dataLayerSelectContentEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = SelectContentEvents.gtagSelectContentEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = SelectContentEvents.apiSelectContentEvent;
                            break;
                    }
                        break;
                    
                case "share":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ShareEvents.dataLayerShareEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ShareEvents.gtagShareEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ShareEvents.apiShareEvent;
                            break;
                    }
                    break;

                case "sign_up":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = SignUpEvents.dataLayerSignUpEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = SignUpEvents.gtagSignUpEvent;
                            break
                        case "API":
                            codeContainerSection.innerHTML = SignUpEvents.apiSignUpEvent;
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
                            codeContainerSection.innerHTML = saasTutorialBeginEvents.dataLayerTutorialBeginEvent;
                            break;
                        case "gtag": 
                            codeContainerSection.innerHTML = saasTutorialBeginEvents.gtagTutorialBeginEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasTutorialBeginEvents.apiTutorialBeginEvent;
                    }
                break;

                case "tutorial_complete":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasTutorialCompleteEvents.gtagTutorialCompleteEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasTutorialCompleteEvents.apiTutorialCompleteEvent;
                    }
                break;

                case "add_payment_info":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasAddPaymentInfoEvents.gtagAddPaymentInfoEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasAddPaymentInfoEvents.apiAddPaymentInfoEvent;
                            break;
                        
                    }
                break;

                case "begin_checkout":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasBeginCheckoutEvents.dataLayerBeginCheckoutEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasBeginCheckoutEvents.gtagBeginCheckoutEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasBeginCheckoutEvents.apiBeginCheckoutEvent;
                            break;
                    }
                break;

                case "generate_lead":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasGenerateLeadEvents.dataLayerGenerateLeadEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasGenerateLeadEvents.gtagGenerateLeadEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasGenerateLeadEvents.apiGenerateLeadEvent;
                            break;
                    }
                break;

                case "trial_start":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasTrialStartEvents.dataLayerTrialStartEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasTrialStartEvents.gtagTrialStartEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasTrialStartEvents.apiTrialStartEvent;
                            break;
                    }
                break;

                case "trial_end":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasTrialEndEvents.dataLayerTrialEndEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasTrialEndEvents.gtagTrialEndEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasTrialEndEvents.apiTrialEndEvent;
                            break;
                    }
                break;

                case "add_user":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasAddUserEvents.dataLayerAddUserEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasAddUserEvents.gtagAddUserEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasAddUserEvents.apiAddUserEvent;
                            break;
                    }
                break;

                case "remove_user":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasRemoveUserEvents.dataLayerRemoveUserEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasRemoveUserEvents.gtagRemoveUserEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasRemoveUserEvents.apiRemoveUserEvent;
                            break;
                    }
                break;

                case "create_account":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasCreateAccountEvents.dataLayerCreateAccountEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasCreateAccountEvents.gtagCreateAccountEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasCreateAccountEvents.apiCreateAccountEvent;
                            break;
                    }
                break;

                case "delete_account":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasDeleteAccountEvents.dataLayerDeleteAccountEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasDeleteAccountEvents.gtagDeleteAccountEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasDeleteAccountEvents.apiDeleteAccountEvent;
                            break;
                    }
                break;

                case "subscribe":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasSubscribeEvents.dataLayerSubscribeEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasSubscribeEvents.gtagSubscribeEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasSubscribeEvents.apiSubscribeEvent;
                            break;
                    }
                break;

                case "update_subscription":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasUpdateSubscriptionEvents.dataLayerUpdateSubscriptionEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasUpdateSubscriptionEvents.gtagUpdateSubscriptionEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasUpdateSubscriptionEvents.apiUpdateSubscriptionEvent;
                            break;
                    }
                break;

                case "cancel_subscription":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasCancelSubscriptionEvents.dataLayerCancelSubscriptionEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasCancelSubscriptionEvents.gtagCancelSubscriptionEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasCancelSubscriptionEvents.apiCancelSubscriptionEvent;
                            break;
                    }
                break;

                case "renew_subscription":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = saasRenewSubscriptionEvents.dataLayerRenewSubscriptionEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = saasRenewSubscriptionEvents.gtagRenewSubscriptionEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = saasRenewSubscriptionEvents.apiRenewSubscriptionEvent;
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
                            codeContainerSection.innerHTML = ecommerceAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceAddPaymentInfoEvents.gtagAddPaymentInfoEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceAddPaymentInfoEvents.apiAddPaymentInfoEvent;
                            break;
                        }
                break;
                
                case "begin_checkout":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceBeginCheckoutEvents.dataLayerBeginCheckoutEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceBeginCheckoutEvents.gtagBeginCheckoutEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceBeginCheckoutEvents.apiBeginCheckoutEvent;
                            break;
                    }
                break;

                case "view_list_item":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceViewItemListEvents.dataLayerViewItemListEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceViewItemListEvents.gtagViewItemListEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceViewItemListEvents.apiViewItemListEvent;
                            break;
                        }
                break;

                case "add_to_cart":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceAddToCartEvents.dataLayerAddToCartEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceAddToCartEvents.gtagAddToCartEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceAddToCartEvents.apiAddToCartEvent;
                            break;
                    }
                break;
                
                case "purchase":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommercePurhcaseEvents.dataLayerPurchaseEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommercePurhcaseEvents.gtagPurchaseEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommercePurhcaseEvents.apiPurchaseEvent;
                            break;
                    }
                break;

                case "select_item":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceSelectItemEvents.dataLayerSelectItemEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceSelectItemEvents.gtagSelectItemEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceSelectItemEvents.apiSelectItemEvent;
                            break;
                    }
                break;

                case "view_cart":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceViewCartEvents.dataLayerViewCartEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceViewCartEvents.gtagViewCartEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceViewCartEvents.apiViewCartEvent;
                            break;
                    }
                break;

                case "remove_from_cart":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceRemoveFromCartEvents.dataLayerRemoveFromCartEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceRemoveFromCartEvents.gtagRemoveFromCartEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceRemoveFromCartEvents.apiRemoveFromCartEvent;
                            break;
                    }
                break;

                case "add_shipping_info":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceAddShippingInfoEvents.dataLayerAddShippingInfoEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceAddShippingInfoEvents.gtagAddShippingInfoEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceAddShippingInfoEvents.apiAddShippingInfoEvent;
                            break;
                    }
                break;

                case "refund":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceRefundEvents.dataLayerRefundEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceRefundEvents.gtagRefundEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceRefundEvents.apiRefundEvent;
                            break;
                    }
                break;

                case "view_item":
                    switch(chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = ecommerceViewItemEvents.dataLayerViewItemEvent;
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = ecommerceViewItemEvents.gtagViewItemEvent;
                            break;
                        case "API":
                            codeContainerSection.innerHTML = ecommerceViewItemEvents.apiViewItemEvent;
                            break;
                    }
                break;

            }
        break;
    }
});
