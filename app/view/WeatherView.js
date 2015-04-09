Ext.define('ELUNA2015.view.WeatherView', {
    extend: 'Ext.Panel',

    requires: ['ELUNA2015.utils.Functions'],
    xtype: 'weatherview',

    config: {
        height: '100%',
        styleHtmlContent: true,
        scrollable: true,

        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                oldItem.destroy();
                ELUNA2015.utils.Functions.loadData();
            }
        },

        items: [
            {
                title: 'Weather',
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
        ]

    }
});
