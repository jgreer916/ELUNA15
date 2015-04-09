Ext.define('ELUNA2015.view.SettingsView', {
    extend: 'Ext.form.Panel',
    xtype: 'settingsview',

    config: {
        height: '100%',
        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                console.log('Settings activated');
                oldItem.destroy();
            }
        },

        items:[{
            xtype: 'fieldset',
            title: 'IGeLU 2014 App Settings',
            items: [
                {
                    title: 'Settings',
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
                    name: 'units',
                    xtype: 'selectfield',
                    options: [
                        {
                            text: 'Celsius',
                            value: 'c'
                        },
                        {
                            text: 'Fahrenheit',
                            value: 'f'
                        }
                    ],
                    label: 'Units'
                },
                {
                    xtype: 'button',
                    id: 'settingssavebutton',
                    text: 'Save',
                    ui: 'confirm'
                }
            ]
        }]
    }
});