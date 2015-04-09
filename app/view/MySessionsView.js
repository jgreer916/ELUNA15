Ext.define('ELUNA2015.view.MySessionsView', {
    extend: 'Ext.NavigationView',
    xtype: 'mysessionsview',

    requires: ['Ext.dataview.List'],

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
        items: [
            {
                name: 'mysessionstb',
                title: 'My Plan',
                xtype: 'titlebar',
                docked: 'top',
                items: [
                    {
                        align: 'left',
                        name: 'nav_btn',
                        iconCls: 'list',
                        ui: 'plain'
                    },
                    {
                        name: 'mysessionsbackbutton',
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        align: 'left',
                        margin: 4,
                        hidden: true
                    },
                    {
                        name: 'mysessionsfeedbackbackbutton',
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        align: 'left',
                        margin: 4,
                        hidden: true
                    }

                ]
            },
            {
                xtype: 'list',
                title: 'My Sessions',
                grouped: true,
                itemTpl:
                    '<div class="row">' +
                        '<div class="left">' +
                            '<img src="resources/images/{track}.png" class="thumbnail"/>' +
                        '</div>' +
                        '<div class="right">' +
                            '<p class="session_title"><tpl if="number">{number} - </tpl>{title}</p><p>{date}, {time}</p>' +
                            '<p><tpl if="room">{room}</tpl><tpl if="building">, {building}</tpl></p>' +
                        '</div>' +
                    '</div>',
                store: 'MySessions',
                emptyText: 'Your sessions plan is currently empty!'
            }
        ]
    }
});
