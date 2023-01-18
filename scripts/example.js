// Example script to show off the API


const name = "twitterblueButton"; // Name of variable in storage
const prettyName = "Disable Twitter Blue" // Name of script
var enabled = false;

console.log(prettyName + " is running...");
window.onload = function() {

    function get(_callback) {
        chrome.storage.sync.get([name], function(result) {
            enabled = result[name];
            _callback();
        });
    }

    function set(){
        if(enabled == true) {
            const timer = setInterval(() => {
                // code down here
                
                // Find the element
                clearTimeout(timer);
                // Work with the element
            }, 150);
        }
    }
}
