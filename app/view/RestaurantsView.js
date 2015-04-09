Ext.define('ELUNA2015.view.RestaurantsView', {
    extend: 'Ext.NavigationView',
    xtype: 'restaurantsview',

    requires: ['Ext.dataview.List'],

    config: {
        navigationBar: {
            hidden: true
        },
        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                console.log('restaurants view activated');
                oldItem.destroy();
            }
        },


        height: '100%',
        styleHtmlContent: true,

        items: [
            {
                title: 'Restaurants',
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        align: 'left',
                        name: 'nav_btn',
                        iconCls: 'list',
                        ui: 'plain'
                    }
                ]
            },
            {
                xtype: 'list',

                itemTpl:
                    '<div class="row">' +
                      '<div class="rest_left">' +
                        '<img src="resources/images/{restaurant_image}" class="restaurant_thumbnail"/>' +
                        '</div>' +
                      '<div class="rest_right">' +
                        '<tpl if="restaurant_url">' +
                          '<a href="#" onclick="window.open(\'{restaurant_url}\', \'_blank\', \'location=yes\');">' +
                        '</tpl>' +
                        '<strong>{restaurant_name}</strong>' +
                        '<tpl if="restaurant_url">' +
                          '</a>' +
                        '</tpl>' +
                        '<p>{restaurant_address_fline}, {restaurant_address_sline}, {restaurant_postcode}</p>' +
                        '<p><strong>Cuisine:</strong> {restaurant_cuisine}, <strong>Tel: </strong> {restaurant_phone}</p>' +
                        '<p><strong>TripAdvisor rating:</strong> {restaurant_tripadvisor_rating}</p>' +
                      '</div>' +
                    '</div><div style="clear:both;"></div>',
                store: 'Restaurants',
                emptyText: 'No restaurants found :('
            }
        ]
    }
});
