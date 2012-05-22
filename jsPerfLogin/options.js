( function ( ) {
    var storage = chrome.storage.sync;
    var ids = [ 'author', 'author-email', 'author-url' ];
    storage.get( ids.reduce( function ( object, string ) {
        object[ string ] = '';
        return object;
    }, { } ), function ( data ) {
        ids.map( document.getElementById.bind( document ) ).forEach( function ( input ) {
            var id = input.id;
            input.value = data[ id ];
            input.onchange = input.onkeyup = function ( ) {
                var data = { };
                data[ id ] = input.value;
                storage.set( data );
            };
        } );
    } );
}( ) );