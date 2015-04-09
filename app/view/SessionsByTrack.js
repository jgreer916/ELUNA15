Ext.define('ELUNA2015.view.SessionsByTrack', {
    extend: 'Ext.NavigationView',
    xtype: 'sessionsbytrackview',

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
                title: 'Sessions by track',
                grouped: true,
                itemTpl: '<tpl if="track">' +
                    '<h4 class="{track}_label"><strong>{track}</strong></h4>' +
                    '</tpl>' +
                    '<p><strong>{title}</strong></p><p>{date}, {time}</p>' +
                    '<p><tpl if="room">{room}</tpl><tpl if="building">, {building}</tpl></p>',
                store: 'Sessions',
                emptyText: 'Your sessions plan is currently empty!'
            }
        ]
    }
});
