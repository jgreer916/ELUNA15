Ext.define('ELUNA2015.view.SessionsByTrackListing', {
    extend: 'Ext.NavigationView',
    xtype: 'sessionsbytracklistingview',

    requires: ['Ext.dataview.List'],

    config: {
        navigationBar: {
            hidden: true
        },
        height: '100%',
        styleHtmlContent: true,
        items: [
            {
                xtype: 'list',
                text: 'Alma',
                store: 'Sessions'
            }
        ]
    }
});
