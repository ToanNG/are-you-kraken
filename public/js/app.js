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
            require(['components/listview-component'], function (ListViewComponent) {
                var mountNode = document.getElementById('wrapper');
                React.render(React.createElement(ListViewComponent, {entries: []}), mountNode);
            });
        }
    };

    app.initialize();

});
