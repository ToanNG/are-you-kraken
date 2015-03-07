'use strict';


requirejs.config({
    paths: {
        'jquery': '../components/jquery/dist/jquery',
        'react': '../components/react/react',
        'JSXTransformer': '../components/react/JSXTransformer'
    }
});


require(['react'], function (React) {

    var app = {
        initialize: function () {
            require([
                    'components/filterable-listview-component',
                    'adapters/mpx-adapter'
                ], function (FilterableListViewComponent, MPXAdapter) {
                    var store = new MPXAdapter();
                    var mountNode = document.getElementById('wrapper');

                    store.findAll({
                        fields: [
                            'guid',
                            'title',
                            'description'
                        ],
                        range: [1, 10],
                        categories: [],
                        availableDate: [],
                        sort: [
                            'expirationDate|ASC',
                            'availableDate|ASC'
                        ]
                    }).done(function(entries) {

                        React.render(React.createElement(FilterableListViewComponent, {entries: entries}), mountNode);

                    });
                });
        }
    };

    app.initialize();

});
