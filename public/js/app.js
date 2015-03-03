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
            require(['components/filterable-listview-component'], function (FilterableListViewComponent) {
                var mountNode = document.getElementById('wrapper');
                var ENTRIES = [
                    {
                        title: 'VOD1'
                    },
                    {
                        title: 'VOD2'
                    }
                ];
                React.render(React.createElement(FilterableListViewComponent, {entries: ENTRIES}), mountNode);
            });
        }
    };

    app.initialize();

});
