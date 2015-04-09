Ext.define('ELUNA2015.view.TwitterView', {
    extend: 'Ext.NavigationView',
    xtype: 'twitterview',

    requires: ['Ext.dataview.List', 'Ext.plugin.PullRefresh'],

    config: {
        navigationBar: {
            hidden: true
        },
        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                oldItem.destroy();
            }
        },


        height: '100%',
        styleHtmlContent: true,
        deferredRender: true,

        items: [
            {
                title: '#eluna2015',
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

                plugins: [
                    {
                        xclass: 'Ext.plugin.PullRefresh',
                        pullText: 'Pull to refresh...'
                    }
                ],

                itemTpl:
                    '<div class="row">' +
                        '<div class="left">' +
                            '<div>' +
                            '<img src="{profile_image_url_https}" class="thumbnail"/>' +
                            '</div>' +
                        '</div>' +
                        '<div class="right">' +
                            '<div>' +
                            'Tweeted by: {screen_name}<br>' +
                            '<tpl if="url">' +
                                '<a href="#" onclick="window.open(\'{url}\', \'_blank\', \'location=yes\');">' +
                            '</tpl>' +
                            '{text}' +
                            '<tpl if="url">' +
                                '</a>' +
                            '</tpl>' +
                        '</div>' +
                        '<p class="timestamp">{created_at}</p>' +
                    '</div>' +
                    '</div><div style="clear:both;"></div>',
                store: 'Tweets',
                emptyText: 'No tweets found :('
            }
        ]
    }
});
