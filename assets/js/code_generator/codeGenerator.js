const radioButtonsList = document.querySelectorAll('input[type="radio"]')
let eventNameDropDownContainer = document.getElementById("event_name_selector_div")
let eventNameDropDown = document.getElementById("event_name")
let customEventNameInputField = document.getElementById("custom_event_name_div")
let customEventParametersDiv = document.getElementById("custom_event_name_parameters_div")
let codeContainer = document.getElementById("codeSection")
let addCustomEventParameterButton = document.getElementById("add_custom_event_parameter")
let button_row = document.getElementById("button_row")

let placeholderSampleCode = `
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

let customEventParameterRow = `
 <div class="col-sm-4">
 <div class="mb-4">
   <label class="form-label added_label_name">Event paramater</label>
   <input type="text" autocomplete="off" class="form-control added name" placeholder="name">
   </div>
</div>
 
<div class="col-sm-4">
 <div class="mb-4">
   <label class="form-label added_label_value">Value</label>
   <input type="text" autocomplete="off" class="form-control added value" placeholder="value">
   </div>
</div>

<div class="col-sm-4">
 <div class="mb-4">
   <p class="form-label">Remove paramater</p>
   <button class="btn btn-sm btn-secondary remove" type="button"> - </button>
 </div>
</div>
`

window.onload = () => {
  codeContainer.innerHTML = placeholderSampleCode
}

let dropDownElement = document.getElementById("event_name")

let selectedEventType = "all_properties"

document.addEventListener("click", (event) => {
  const clickTarget = event.target.closest(".remove")
  if (clickTarget) {
    clickTarget.closest(".row").remove()
  }
})

radioButtonsList.forEach((radioButton) => {
  radioButton.addEventListener("change", (e) => {
    selectedEventType = e.target.value

    switch (selectedEventType) {
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

        if (customEventNameInputField.classList.contains("visually-hidden")) {
          break
        } else {
          eventNameDropDownContainer.classList.toggle("visually-hidden")
          customEventNameInputField.classList.toggle("visually-hidden")
          customEventParametersDiv.classList.toggle("visually-hidden")
        }
        break

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
        if (customEventNameInputField.classList.contains("visually-hidden")) {
          break
        } else {
          eventNameDropDownContainer.classList.toggle("visually-hidden")
          customEventNameInputField.classList.toggle("visually-hidden")
          customEventParametersDiv.classList.toggle("visually-hidden")
        }
        break

      case "all_properties":
        eventNameDropDown.innerHTML = `
                    <option value="login">login</option>
                    <option value="purchase">purchase</option>
                    <option value="search">search</option>
                    <option value="select_content">select_content</option>
                    <option value="share">share</option>
                    <option value="sign_up">sign_up</option>`
        if (customEventNameInputField.classList.contains("visually-hidden")) {
          break
        } else {
          eventNameDropDownContainer.classList.toggle("visually-hidden")
          customEventNameInputField.classList.toggle("visually-hidden")
          customEventParametersDiv.classList.toggle("visually-hidden")
        }
        break

      case "custom_event":
        eventNameDropDownContainer.classList.toggle("visually-hidden")
        customEventNameInputField.classList.toggle("visually-hidden")
        customEventParametersDiv.classList.toggle("visually-hidden")
    }
  })
})

addCustomEventParameterButton.addEventListener("click", (e) => {
  let rowToAppend = document.createElement("div")
  rowToAppend.setAttribute("class", "row")
  rowToAppend.innerHTML = customEventParameterRow
  customEventParametersDiv.insertBefore(rowToAppend, button_row)
})

// Select the node that will be observed for mutations
const targetNode = document.getElementById("custom_event_name_parameters_div")
// Options for the observer (which mutations to observe)
const config = { childList: true }
// Callback function to execute when mutations are observed
const callback = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      const addedNode = mutation.addedNodes[0]
      if (addedNode) {
        const addedNodeEventParameterNameField = addedNode?.querySelector(".added.name")
        const addedNodeEventParameterValueField = addedNode?.querySelector(".added.value")

        addedNodeEventParameterNameField.setAttribute("id", `event_parameter_name_${document.querySelectorAll("input.added.name").length}`)
        addedNodeEventParameterNameField.setAttribute("name", `event_parameter_name_${document.querySelectorAll("input.added.name").length}`)

        addedNodeEventParameterValueField.setAttribute("id", `event_parameter_name_${document.querySelectorAll("input.added.value").length}`)
        addedNodeEventParameterValueField.setAttribute("name", `event_parameter_name_${document.querySelectorAll("input.added.value").length}`)
      }
    }
  }
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback)

// Start observing the target node for configured mutations
observer.observe(targetNode, config)
