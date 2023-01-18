//log current directory

navigator.serviceWorker.register('./scripts/background.js').then(function(registration) {
    console.log('ServiceWorker registration successful with scope: ', registration.scope);
         }, function(err) {
    console.log('ServiceWorker registration failed: ', err);

});
