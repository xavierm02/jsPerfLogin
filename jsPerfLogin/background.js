var storage = chrome.storage.sync;
var ids = [ 'author', 'author-email', 'author-url' ];
var object = ids.reduce( function ( object, string ) {
    object[ string ] = '';
    return object;
}, { } );
chrome.extension.onRequest.addListener( function ( request, sender, sendResponse ) {console.log(object)
    storage.get( object, sendResponse );
} );