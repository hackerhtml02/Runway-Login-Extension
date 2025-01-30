var button = document.evaluate("//*[@id='root']/div/div[4]/div[1]/div/div[2]/div/div[2]/div/div[2]/button[1]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (button) {
    button.click();
} else {
    console.error("Button not found!");
}
setTimeout(function() {
    var button = document.evaluate("/html/body/div[5]/div/section/div[2]/div[3]/button", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (button) {
        button.click();
        console.log("Button clicked successfully!");
    } else {
        console.error("Button not found!");
    }
}, 2000); // 2000 milliseconds = 2 seconds
