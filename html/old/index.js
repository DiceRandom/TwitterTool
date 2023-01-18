const savedNames = ["roundedBrands","twitterblueButton","disableviews"];

window.onload = function() {

function setAll() {
    savedNames.forEach(currentName => {
        get(currentName, function(result) {
            console.log("Start Setting "+currentName+" to "+result);
            var element = document.getElementById(currentName);
            element.checked = result;
        });
    });
}

setAll();


savedNames.forEach(currentName => {
    var element = document.getElementById(currentName);
    element.addEventListener('change', function() {
        set(currentName, element.checked);
    });
});


function set(name, value) {
    chrome.storage.sync.set({[name]: value}, function() {
        console.log('Value of '+name+' is set to ' + value);
        return;
    });
}

function get(name,_callback) {
    console.log("Getting "+name+"...")
    chrome.storage.sync.get([name], function(result) {
        console.log(name+' currently is ' + result[name]);
        _callback(result[name]);
    });
}



// Populate Question List


var list = ["brandReveal","twitterBlue","disableViews"];

init();

function init(){
    for (var i = 0; i < list.length; i++){
        element = document.getElementById(list[i] + "Image");
        element.style.display = "none";
    }
}


// go through list
for (var i = 0; i < list.length; i++){
    // add onclick listener
    document.getElementById(list[i]).addEventListener("click", function(){
        // get id of element
        var id = this.id;
        // get element
        var element = document.getElementById(id + "Image");
        // check if element is visible
        if (element.style.display === "none"){
            // if not, make it visible
            element.style.display = "flex";
        } else {
            // if it is, make it invisible
            element.style.display = "none";
        }
    });
}

}