'use strict';


requirejs.config({
    paths: {
      'react': '../components/react/react',
      'JSXTransformer': '../components/react/JSXTransformer'
    }
});


require(['react', 'JSXTransformer'], function (React) {

    var app = {
        initialize: function () {
            // Your code here
        }
    };

    app.initialize();

});
