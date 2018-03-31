
javascriptdefine( [
    'jquery'
],
function ( $ ) {
    'use strict';

    return {

        //Paint resp.Rendering logic
        paint: function ( $element, layout ) {

            var $helloWorld = $( document.createElement( 'div' ) );
            $helloWorld.html( 'Hello World from the start of your first extension<br/>' );
            $element.append( $helloWorld );

        }
    };
} );

