var storageNames = [];

var info = {
    "data":[
        {
            "title": "Rounded Brands",
            "cat": "Display",
            "description": "Removes the fact that businesses on twitter now have square icons, gross.",
            "storage-name":"roundedBrands",
            "imagetitle": "roundedbrands",
            "image2": "img/roundedbrandsA.png",
            "image": "img/roundedbrandsB.png"
        }, 
        {
            "title": "Twitter Blue Sidebar",
            "cat": "Display",
            "description": "Remove the button on the sidebar reminding you to spend money.",
            "storage-name":"twitterblueButton",
            "imagetitle": "twitterblue",
            "image2": "img/twitterblueA.png",
            "image": "img/twitterblueB.png"    
        },
        {
            "title": "Disable Twitter Views",
            "cat": "Display",
            "description": "Remove the views button under tweets to help with muscle memory.",
            "storage-name":"disableviews",
            "imagetitle": "disableviews",
            "image2": "img/disableviewsA.png",
            "image": "img/disableviewsB.png"
        }
    ]
};


// copy and paste class row
var classRow = document.getElementsByClassName("class-row")[0];

var numplugins = info.data.length;

for (var i = 0; i < numplugins; i++) {
    if(i != 0){
        var newRow = classRow.cloneNode(true);
        document.getElementsByClassName("content-container")[0].appendChild(newRow);
    }else{
        // first row
        var newRow = classRow;
    }

    get(i, newRow);

    function get(point,row){
        const img = new Image();
        img.onload = function() {

            var stack = true;

            var width = this.width;
            var height = this.height;

            var ratio = height/width;

            if(ratio>=0.7){
                stack = false;
            }

            console.log(this.height/this.width);
            update(stack,point,row);
        }
        img.src = info.data[point].image;
    }

    function update(stacke,pointe,currentRow){

        console.log(pointe);

        var buttonContainer = currentRow.children[0];
        var rowContainer = currentRow.children[1];
        var imageContainer = currentRow.children[2];

        var title = rowContainer.children[0];
        var cat = rowContainer.children[1];
        var description = rowContainer.children[2];

        var image = imageContainer.children[0].children[0];
        var image2 = imageContainer.children[1].children[0];

        var switchButton = buttonContainer.children[0];
        var switchLabel = buttonContainer.children[1];
        

        // // populate data
        title.innerHTML = info.data[pointe].title;
        cat.innerHTML = info.data[pointe].cat;
        description.innerHTML = info.data[pointe].description;
        image.src = info.data[pointe].image;
        image2.src = info.data[pointe].image2;

        // add storage name to array
        storageNames.push(info.data[pointe]["storage-name"]);

        // info.data[pointe].imagettitle;
        generateLightbox(info.data[pointe].imagetitle + "B");
        generateLightbox(info.data[pointe].imagetitle + "A");

        imageContainer.children[1].href = "#" + info.data[pointe].imagetitle + "A";
        imageContainer.children[0].href = "#" + info.data[pointe].imagetitle + "B";
        // image2.href = "#" + info.data[pointe].imagetitle + "B";

        switchButton.id = info.data[pointe]["storage-name"];
        switchLabel.htmlFor = info.data[pointe]["storage-name"];

        if(!stacke){
            imageContainer.style.flexDirection = "row";
            image.style.paddingBottom = "0px";
            image.style.paddingRight = "10px";
            // change size
            var size = "80%";
            image.style.height = size;
            image2.style.height = size;

        }
        if(stacke){
            // image container flex-direction: column;
            imageContainer.style.flexDirection = "column";
            // image 1 remove padding bottom
            imageContainer.children[0].style.paddingBottom = "10px";
            imageContainer.children[1].style.height = "30%";

            imageContainer.children[0].style.height = "30%";
        }
    }

}

completed();

// generateLightbox("disableviewsA");
function generateLightbox(str){
    //     <div class="lightbox-target" id="disableviews">
    //          <a class="lightbox-back" href="#"></a>
    //          <img src="img/disableviewsA.png" />
    //          <a class="lightbox-close" href="#"></a>
    //     </div>  

    var lightbox = document.createElement("div");
    lightbox.className = "lightbox-target";
    lightbox.id = str;

    var lightboxBack = document.createElement("a");
    lightboxBack.className = "lightbox-back";
    lightboxBack.href = "#";

    var lightboxImage = document.createElement("img");
    lightboxImage.src = "img/"+str+".png";

    var lightboxClose = document.createElement("a");
    lightboxClose.className = "lightbox-close";
    lightboxClose.href = "#";

    lightbox.appendChild(lightboxBack);
    lightbox.appendChild(lightboxImage);
    lightbox.appendChild(lightboxClose);

    document.body.appendChild(lightbox);
    
}


function completed(){
    window.onload = function() {

        function setAll() {
            storageNames.forEach(currentName => {
                get(currentName, function(result) {
                    console.log("Start Setting "+currentName+" to "+result);
                    var element = document.getElementById(currentName);
                    element.checked = result;
                });
            });
        }
        
        setAll();
        
        
        storageNames.forEach(currentName => {
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
        
        }
        
}