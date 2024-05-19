import * as loginEvents from "../tracking_templates/general_events_modules/login_module/loginEvent.js"

import * as purchaseEvents from "../tracking_templates/general_events_modules/purchase_module/purchaseEvent.js"

import * as SeachEvents from "../tracking_templates/general_events_modules/search_module/searchEvent.js"

import * as SelectContentEvents from "../tracking_templates/general_events_modules/select_content_module/selectContentEvent.js"

import * as ShareEvents from "../tracking_templates/general_events_modules/share_module/shareEvent.js"

import * as SignUpEvents from "../tracking_templates/general_events_modules/sign_up_module/signUpEvent.js"

import * as saasAddPaymentInfoEvents from "../tracking_templates/saas_events_modules/add_payment_info_module/addPaymentInfoEvent.js"

import * as saasAddUserEvents from "../tracking_templates/saas_events_modules/add_user_module/addUserEvent.js"

import * as saasBeginCheckoutEvents from "../tracking_templates/saas_events_modules/begin_checkout_module/beginCheckoutEvent.js"

import * as saasCreateAccountEvents from "../tracking_templates/saas_events_modules/create_account_module/createAccountEvent.js"

import * as saasDeleteAccountEvents from "../tracking_templates/saas_events_modules/delete_account_module/deleteAccountEvent.js"

import * as saasGenerateLeadEvents from "../tracking_templates/saas_events_modules/generate_lead_module/generateLeadEvent.js"

import * as saasRemoveUserEvents from "../tracking_templates/saas_events_modules/remove_user_module/removeUserEvent.js"

import * as saasSubscribeEvents from "../tracking_templates/saas_events_modules/subscribe_module/subscribeEvent.js"

import * as saasTrialStartEvents from "../tracking_templates/saas_events_modules/trial_start_module/trialStartEvent.js"

import * as saasTrialEndEvents from "../tracking_templates/saas_events_modules/trial_end_module/trialEndEvent.js"

import * as saasTutorialBeginEvents from "../tracking_templates/saas_events_modules/tutorial_begin_module/tutorialBeginEvent.js"

import * as saasTutorialCompleteEvents from "../tracking_templates/saas_events_modules/tutorial_complete_module/tutorialCompleteEvent.js"

import * as saasUpdateSubscriptionEvents from "../tracking_templates/saas_events_modules/update_subscription_module/updateSubscriptionEvent.js"

import * as saasCancelSubscriptionEvents from "../tracking_templates/saas_events_modules/cancel_subscription_module/cancelSubscriptionEvent.js"

import * as saasRenewSubscriptionEvents from "../tracking_templates/saas_events_modules/renew_subscription_module/renewSubscriptionEvent.js"

import * as ecommerceAddPaymentInfoEvents from "../tracking_templates/ecommerce_events_modules/add_payment_info_module/addPaymentInfoEvent.js"

import * as ecommerceAddShippingInfoEvents from "../tracking_templates/ecommerce_events_modules/add_shipping_info_module/addShippingInfoEvent.js"

import * as ecommerceAddToCartEvents from "../tracking_templates/ecommerce_events_modules/add_to_cart_module/addToCartEvent.js"

import * as ecommerceBeginCheckoutEvents from "../tracking_templates/ecommerce_events_modules/begin_checkout_module/beginCheckoutEvent.js"

import * as ecommercePurhcaseEvents from "../tracking_templates/ecommerce_events_modules/purchase_module/purchaseEvent.js"

import * as ecommerceRefundEvents from "../tracking_templates/ecommerce_events_modules/refund_module/refundEvent.js"

import * as ecommerceRemoveFromCartEvents from "../tracking_templates/ecommerce_events_modules/remove_from_cart_module/removeFromCart.js"

import * as ecommerceSelectItemEvents from "../tracking_templates/ecommerce_events_modules/select_item_module/selectItemEvent.js"

import * as ecommerceViewCartEvents from "../tracking_templates/ecommerce_events_modules/view_cart_module/viewCartEvent.js"

import * as ecommerceViewItemEvents from "../tracking_templates/ecommerce_events_modules/view_item_module/viewItemEvent.js"

import * as ecommerceViewItemListEvents from "../tracking_templates/ecommerce_events_modules/view_list_item_module/viewItemListEvent.js"

const codeGeneratorForm = document.getElementById("codeGeneratorForm");

let codeContainerSection = document.getElementById("codeSection");

let chosentEventType;
let chosenEventName;
let chosenTrackingMedium;

let addedCustomEventName;
let addedEventParameterNames = [];
let addedEventParameterValues = [];

const typeSampleCode = (sampleCodeContainer, sampleCode) => {
    const generateButton = document.querySelector('[type="submit"]');

    const eventSampleCode = {
        strings: [sampleCode],
        typeSpeed: 5,
        loop: false,
        showCursor: false,
        onBegin: () => {
            generateButton.setAttribute('disabled', '');
        },
        onComplete: () => {
            generateButton.removeAttribute('disabled');
        }
    }
    const eventSampleCodeTyped = new Typed(sampleCodeContainer, eventSampleCode);
}

codeGeneratorForm.addEventListener("submit", (event) => {
    event.preventDefault();

    chosentEventType = codeGeneratorForm.elements["event_type"].value;
    chosenEventName = codeGeneratorForm.elements["event_name"].value;
    chosenTrackingMedium = codeGeneratorForm.elements["tracking_medium"].value;
    addedCustomEventName = codeGeneratorForm.elements["custom_event_name"].value;

    switch (chosentEventType) {
        case "all_properties":
            switch (chosenEventName) {
                case "login":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, loginEvents.dataLayerLoginEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, loginEvents.gtagLoginEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, loginEvents.apiLoginEvent);
                            break
                    }

                    break

                case "purchase":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, purchaseEvents.dataLayerPurchaseEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, purchaseEvents.gtagPurchaseEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, purchaseEvents.apiPurchaseEvent);
                            break
                    }
                    break

                case "search":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SeachEvents.dataLayerSearchEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SeachEvents.gtagSearchEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SeachEvents.apiSearchEvent);
                            break
                    }
                    break

                case "select_content":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SelectContentEvents.dataLayerSelectContentEvent);
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SelectContentEvents.gtagSelectContentEvent);
                            break;
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SelectContentEvents.apiSelectContentEvent);
                            break;
                    }
                    break;

                case "share":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ShareEvents.dataLayerShareEvent);
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ShareEvents.gtagShareEvent);
                            break;
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ShareEvents.apiShareEvent);
                            break;
                    }
                    break

                case "sign_up":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SignUpEvents.dataLayerSignUpEvent);
                            break;
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SignUpEvents.gtagSignUpEvent);
                            break;
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, SignUpEvents.apiSignUpEvent);
                            break;
                    }
                    break;
            }
            break;

        case "SaaS":
            switch (chosenEventName) {
                case "tutorial_begin":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTutorialBeginEvents.dataLayerTutorialBeginEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTutorialBeginEvents.gtagTutorialBeginEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTutorialBeginEvents.apiTutorialBeginEvent);
                    }
                    break

                case "tutorial_complete":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent);
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTutorialCompleteEvents.dataLayerTutorialCompleteEvent);
                    }
                    break

                case "add_payment_info":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasAddPaymentInfoEvents.gtagAddPaymentInfoEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasAddPaymentInfoEvents.apiAddPaymentInfoEvent);
                            break
                    }
                    break

                case "begin_checkout":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasBeginCheckoutEvents.dataLayerBeginCheckoutEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasBeginCheckoutEvents.gtagBeginCheckoutEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasBeginCheckoutEvents.apiBeginCheckoutEvent);
                            break
                    }
                    break

                case "generate_lead":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasGenerateLeadEvents.dataLayerGenerateLeadEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasGenerateLeadEvents.gtagGenerateLeadEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasGenerateLeadEvents.apiGenerateLeadEvent);
                            break
                    }
                    break

                case "trial_start":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTrialStartEvents.dataLayerTrialStartEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTrialStartEvents.gtagTrialStartEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTrialStartEvents.apiTrialStartEvent);
                            break
                    }
                    break

                case "trial_end":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTrialEndEvents.dataLayerTrialEndEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTrialEndEvents.gtagTrialEndEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasTrialEndEvents.apiTrialEndEvent);
                            break
                    }
                    break

                case "add_user":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasAddUserEvents.dataLayerAddUserEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasAddUserEvents.gtagAddUserEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasAddUserEvents.apiAddUserEvent);
                            break
                    }
                    break

                case "remove_user":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasRemoveUserEvents.dataLayerRemoveUserEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasRemoveUserEvents.gtagRemoveUserEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasRemoveUserEvents.apiRemoveUserEvent);
                            break
                    }
                    break

                case "create_account":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasCreateAccountEvents.dataLayerCreateAccountEvent);
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasCreateAccountEvents.gtagCreateAccountEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasCreateAccountEvents.apiCreateAccountEvent);
                            break
                    }
                    break

                case "delete_account":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasDeleteAccountEvents.dataLayerDeleteAccountEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasDeleteAccountEvents.gtagDeleteAccountEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasDeleteAccountEvents.apiDeleteAccountEvent);
                            break
                    }
                    break

                case "subscribe":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasSubscribeEvents.dataLayerSubscribeEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasSubscribeEvents.gtagSubscribeEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasSubscribeEvents.apiSubscribeEvent);
                            break
                    }
                    break

                case "update_subscription":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasUpdateSubscriptionEvents.dataLayerUpdateSubscriptionEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasUpdateSubscriptionEvents.gtagUpdateSubscriptionEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasUpdateSubscriptionEvents.apiUpdateSubscriptionEvent);
                            break
                    }
                    break

                case "cancel_subscription":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasCancelSubscriptionEvents.dataLayerCancelSubscriptionEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasCancelSubscriptionEvents.gtagCancelSubscriptionEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasCancelSubscriptionEvents.apiCancelSubscriptionEvent);
                            break
                    }
                    break

                case "renew_subscription":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasRenewSubscriptionEvents.dataLayerRenewSubscriptionEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasRenewSubscriptionEvents.gtagRenewSubscriptionEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, saasRenewSubscriptionEvents.apiRenewSubscriptionEvent);
                            break
                    }
                    break
            }
            break

        case "ecommerce":
            switch (chosenEventName) {
                case "add_payment_info":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddPaymentInfoEvents.dataLayerAddPaymentInfoEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddPaymentInfoEvents.gtagAddPaymentInfoEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddPaymentInfoEvents.apiAddPaymentInfoEvent);
                            break
                    }
                    break

                case "begin_checkout":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddPaymentInfoEvents.apiAddPaymentInfoEvent);
                            codeContainerSection.innerHTML = ecommerceBeginCheckoutEvents.dataLayerBeginCheckoutEvent
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceBeginCheckoutEvents.gtagBeginCheckoutEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceBeginCheckoutEvents.apiBeginCheckoutEvent);
                            break
                    }
                    break

                case "view_list_item":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewItemListEvents.dataLayerViewItemListEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewItemListEvents.gtagViewItemListEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewItemListEvents.apiViewItemListEvent);
                            break
                    }
                    break

                case "add_to_cart":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddToCartEvents.dataLayerAddToCartEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddToCartEvents.gtagAddToCartEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddToCartEvents.apiAddToCartEvent);
                            break
                    }
                    break

                case "purchase":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommercePurhcaseEvents.dataLayerPurchaseEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommercePurhcaseEvents.gtagPurchaseEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommercePurhcaseEvents.apiPurchaseEvent);
                            break
                    }
                    break

                case "select_item":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceSelectItemEvents.dataLayerSelectItemEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceSelectItemEvents.gtagSelectItemEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceSelectItemEvents.apiSelectItemEvent);
                            break
                    }
                    break

                case "view_cart":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewCartEvents.dataLayerViewCartEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewCartEvents.gtagViewCartEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewCartEvents.apiViewCartEvent);
                            break
                    }
                    break

                case "remove_from_cart":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceRemoveFromCartEvents.dataLayerRemoveFromCartEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceRemoveFromCartEvents.gtagRemoveFromCartEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceRemoveFromCartEvents.apiRemoveFromCartEvent);
                            break
                    }
                    break

                case "add_shipping_info":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddShippingInfoEvents.dataLayerAddShippingInfoEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddShippingInfoEvents.gtagAddShippingInfoEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceAddShippingInfoEvents.apiAddShippingInfoEvent);
                            break
                    }
                    break

                case "refund":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceRefundEvents.dataLayerRefundEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceRefundEvents.gtagRefundEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceRefundEvents.apiRefundEvent);
                            break
                    }
                    break

                case "view_item":
                    switch (chosenTrackingMedium) {
                        case "dataLayer":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewItemEvents.dataLayerViewItemEvent);
                            break
                        case "gtag":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewItemEvents.gtagViewItemEvent);
                            break
                        case "API":
                            codeContainerSection.innerHTML = '';
                            typeSampleCode(codeContainerSection, ecommerceViewItemEvents.apiViewItemEvent);
                            break
                    }
                    break
            }
            break

        case "custom_event":
            switch (chosenTrackingMedium) {
                case "dataLayer":
                    for (let eventParameterName = 0; eventParameterName < codeGeneratorForm.querySelectorAll(".added.name").length; eventParameterName++) {
                        addedEventParameterNames.push(codeGeneratorForm.querySelectorAll(".added.name")[eventParameterName].value)
                    }
                    for (let eventParameterValue = 0; eventParameterValue < codeGeneratorForm.querySelectorAll(".added.value").length; eventParameterValue++) {
                        addedEventParameterValues.push(codeGeneratorForm.querySelectorAll(".added.value")[eventParameterValue].value)
                    }

                    let addSectionArray = []
                    let addSection = ""

                    if (addedEventParameterNames.length == 1) {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            for (let addedEventParameterValue = 0; addedEventParameterValue < addedEventParameterValues.length; addedEventParameterValue++) {
                                addSectionArray.push(`<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterValue]}'</span>
                                <br>
                                `)
                            }
                        }
                        addSection = addSectionArray.join("")
                    } else {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            addSectionArray.push(`<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}',</span>
                            <br>
                            `)

                            if (addedEventParameterName == addedEventParameterNames.length - 1) {
                                addSectionArray[
                                    addSectionArray.length - 1
                                ] = `<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}'</span>
                                <br>
                                `
                            }
                        }
                        addSection = addSectionArray.join("")
                    }

                    let generatedCodeZeroParameter = `
                    window.dataLayer = window.dataLayer || [];
                    <br>
                    window.dataLayer.push({
                        <br>
                        <span class="indent">'event': '${addedCustomEventName}'</span>
                    });
                    `

                    let generatedCodeOnePlusParameter = `
                    window.dataLayer = window.dataLayer || [];
                    <br>
                    window.dataLayer.push({
                        <br>
                        <span class="indent">'event': '${addedCustomEventName}'</span>,
                        <br>
                        ${addSection}
                    });
                    `

                    if (codeGeneratorForm.querySelectorAll(".added.name").length == 0) {
                        codeContainerSection.innerHTML = '';
                        typeSampleCode(codeContainerSection, generatedCodeZeroParameter);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    } else {
                        codeContainerSection.innerHTML = '';
                        typeSampleCode(codeContainerSection, generatedCodeOnePlusParameter);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    }

                    break

                case "gtag":
                    for (let eventParameterName = 0; eventParameterName < codeGeneratorForm.querySelectorAll(".added.name").length; eventParameterName++) {
                        addedEventParameterNames.push(codeGeneratorForm.querySelectorAll(".added.name")[eventParameterName].value)
                    }
                    for (let eventParameterValue = 0; eventParameterValue < codeGeneratorForm.querySelectorAll(".added.value").length; eventParameterValue++) {
                        addedEventParameterValues.push(codeGeneratorForm.querySelectorAll(".added.value")[eventParameterValue].value)
                    }

                    let addSectionArrayGtag = []
                    let addSectionGtag = ""

                    if (addedEventParameterNames.length == 1) {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            for (let addedEventParameterValue = 0; addedEventParameterValue < addedEventParameterValues.length; addedEventParameterValue++) {
                                addSectionArrayGtag.push(`<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterValue]}'</span>
                                <br>
                                `)
                            }
                        }
                        addSectionGtag = addSectionArrayGtag.join("")
                    } else {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            addSectionArrayGtag.push(`<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}',</span>
                            <br>
                            `)

                            if (addedEventParameterName == addedEventParameterNames.length - 1) {
                                addSectionArrayGtag[
                                    addSectionArrayGtag.length - 1
                                ] = `<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}'</span>
                                <br>
                                `
                            }
                        }
                        addSectionGtag = addSectionArrayGtag.join("")
                    }

                    let generatedCodeZeroParameterGtag = `
                    gtag('event', '${addedCustomEventName}'
                    );
                    `

                    let generatedCodeOnePlusParameterGtag = `
                    gtag('event', '${addedCustomEventName}', {
                        <br>
                        ${addSectionGtag}
                      }
                      <br>
                    );
                    `

                    if (codeGeneratorForm.querySelectorAll(".added.name").length == 0) {
                        codeContainerSection.innerHTML = '';
                        typeSampleCode(codeContainerSection, generatedCodeZeroParameterGtag);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    } else {
                        codeContainerSection.innerHTML = '';
                        typeSampleCode(codeContainerSection, generatedCodeOnePlusParameterGtag);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    }

                    break

                case "API":
                    for (let eventParameterName = 0; eventParameterName < codeGeneratorForm.querySelectorAll(".added.name").length; eventParameterName++) {
                        addedEventParameterNames.push(codeGeneratorForm.querySelectorAll(".added.name")[eventParameterName].value)
                    }
                    for (let eventParameterValue = 0; eventParameterValue < codeGeneratorForm.querySelectorAll(".added.value").length; eventParameterValue++) {
                        addedEventParameterValues.push(codeGeneratorForm.querySelectorAll(".added.value")[eventParameterValue].value)
                    }

                    let addSectionArrayApi = []
                    let addSectionApi = ""

                    if (addedEventParameterNames.length == 1) {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            for (let addedEventParameterValue = 0; addedEventParameterValue < addedEventParameterValues.length; addedEventParameterValue++) {
                                addSectionArrayApi.push(`<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterValue]}'</span>
                                <br>
                                `)
                            }
                        }
                        addSectionApi = addSectionArrayApi.join("")
                    } else {
                        for (let addedEventParameterName = 0; addedEventParameterName < addedEventParameterNames.length; addedEventParameterName++) {
                            addSectionArrayApi.push(`<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}',</span>
                            <br>
                            `)

                            if (addedEventParameterName == addedEventParameterNames.length - 1) {
                                addSectionArrayApi[
                                    addSectionArrayApi.length - 1
                                ] = `<span class="indent">'${addedEventParameterNames[addedEventParameterName]}': '${addedEventParameterValues[addedEventParameterName]}'</span>
                                <br>
                                `
                            }
                        }
                        addSectionApi = addSectionArrayApi.join("")
                    }

                    let generatedCodeZeroParameterApi = `
                    'const measurement_id' = 'G-XXXXXXXXXX';
                    <br>
                    'const api_secret' = 'secret_value';
                    <br>

                    fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {<br>
                    method: "POST", <br>
                    body: JSON.stringify({ <br>
                        client_id: 'XXXXXXXXXX.YYYYYYYYYY', <br>
                        events: [{ <br>
                        name: '${addedCustomEventName}'
                        <br>
                        }] <br>
                    }) <br>
                    });
                    `

                    let generatedCodeOnePlusParameterApi = `
                    'const measurement_id' = 'G-XXXXXXXXXX';
                    <br>
                    'const api_secret' = 'secret_value';
                    <br>

                    fetch(\`https://www.google-analytics.com/mp/collect?measurement_id=\${measurement_id}&api_secret=\${api_secret}\`, {<br>
                    method: "POST", <br>
                    body: JSON.stringify({ <br>
                        client_id: 'XXXXXXXXXX.YYYYYYYYYY', <br>
                        events: [{ <br>
                        name: '${addedCustomEventName}', <br>
                        params: { <br>
                            ${addSectionApi}
                        } <br>
                        }] <br>
                    }) <br>
                    });
                    `

                    if (codeGeneratorForm.querySelectorAll(".added.name").length == 0) {
                        codeContainerSection.innerHTML = '';
                        typeSampleCode(codeContainerSection, generatedCodeZeroParameterApi);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    } else {
                        codeContainerSection.innerHTML = '';
                        typeSampleCode(codeContainerSection, generatedCodeOnePlusParameterApi);
                        addedCustomEventName = ""
                        addedEventParameterNames = []
                        addedEventParameterValues = []
                    }

                    break
            }
            break
    }

    if (chosentEventType == "all_properties" || chosentEventType == "SaaS" || chosentEventType == "ecommerce") {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: "generate_code_sample",
            custom_code_type: chosentEventType,
            custom_code_name: chosenEventName,
            tracking_medium: chosenTrackingMedium,
        })
    } else {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            event: "generate_code_sample",
            custom_code_type: chosentEventType,
            custom_code_name: codeGeneratorForm.elements["custom_event_name"].value,
            tracking_medium: chosenTrackingMedium,
            custom_event_parameters: document.querySelectorAll("input.added.name").length,
        })
    }

    //Change the upper window text to match the name of the requested event
    const upperWindowText = document.querySelector('.upper_window > p');
    upperWindowText.innerText = `${chosenEventName} Event Tracking Code`.toUpperCase();
})
