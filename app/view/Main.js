Ext.define('ELUNA2015.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        fullscreen: true,
        layout: 'hbox',
        items: [
            {
                xtype: 'welcomeview',
                cls: 'slide',
                width: '100%'
            },
            {
                xtype: 'navigation',
                width: 250
            }
        ]
    }
});