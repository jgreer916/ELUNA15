Ext.define('ELUNA2015.view.SponsorsView', {
    extend: 'Ext.NavigationView',
    xtype: 'sponsorsview',

    config: {
        navigationBar: {
            hidden: true
        },
        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                console.log('Sponsors activated');
                oldItem.destroy();
            }
        },


        height: '100%',
        styleHtmlContent: true,
        scrollable: true,

        items: [
            {
                title: 'Sponsors',
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
            }
        ],

        html:   '<h2>Flagship sponsor</h2><hr>' +
                '<div class="sponsorrow">' +
                    '<img src="http://igelu2014.masudk.com/resources/images/sponsors/exlibris.jpg" /><hr>' +
                '</div>' +
                '<h2>Gold sponsors</h2><hr>' +
                '<div class="sponsorrow">' +
                    '<img src="http://igelu2014.masudk.com/resources/images/sponsors/ybp.png" /><hr>' +
                '</div>' +
                '<div class="sponsorrow">' +
                    '<img src="http://igelu2014.masudk.com/resources/images/sponsors/proquest.png" /><hr>' +
                '</div>' +
                '<h2>Silver sponsors</h2><hr>' +
                '<div class="sponsorrow">' +
                    '<img src="http://igelu2014.masudk.com/resources/images/sponsors/relais.jpg" /><hr>' +
                '</div>' +
                '<div class="sponsorrow">' +
                        '<img src="http://igelu2014.masudk.com/resources/images/sponsors/ingram.jpg" /><hr>' +
                '</div>' +
                '<div class="sponsorrow">' +
                    '<img src="http://igelu2014.masudk.com/resources/images/sponsors/harrassowitz.jpg" /><hr>' +
                '</div>' +
                '<div class="sponsorrow">' +
                    '<img src="http://igelu2014.masudk.com/resources/images/sponsors/backstage.jpg" /><hr>' +
                '</div>' +
                '<div class="sponsorrow">' +
                '<img src="http://igelu2014.masudk.com/resources/images/sponsors/browzine.png" /><hr>' +
                '</div>' +
                '<div class="sponsorrow">' +
                '<img src="http://igelu2014.masudk.com/resources/images/sponsors/marcive.jpg" /><hr>' +
                '</div>' +
                '<h2>Local hosts</h2><hr>' +
                '<div class="sponsorrow">' +
                '<img src="http://igelu2014.masudk.com/resources/images/sponsors/localhosts.png" /><hr>' +
                '</div>' +
                '<div style="clear:both;"></div>'
    }
});
