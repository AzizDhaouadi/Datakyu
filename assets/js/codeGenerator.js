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

let codeConatainer = document.getElementById('codeSection');

window.onload = () => {
    codeConatainer.innerHTML = placeholderSampleCode;
}