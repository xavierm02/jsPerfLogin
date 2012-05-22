( function ( ) {
	chrome.extension.sendRequest( { }, function( response ) {
        var inputs = [ 'author', 'author-email', 'author-url' ].map( document.getElementById.bind( document ) );
        inputs.forEach( function ( input ) {
            input.placeholder = response[ input.id ];
        } );
        var form = inputs[ 0 ].form;
        function prepareForSubmission( ) {
            inputs.forEach( function ( input ) {
                if ( input.value === '' ) {
                    input.value = input.placeholder;
                }
            } );
        }
        form.addEventListener( 'submit', prepareForSubmission, false );
        var slice = [ ].slice;
        slice.call( form.getElementsByTagName( 'input' ) ).concat( slice.call( form.getElementsByTagName( 'button' ) ) ).forEach( function ( button ) {
            button.addEventListener( 'click', prepareForSubmission, false );
        } );
    } );
}( ) );