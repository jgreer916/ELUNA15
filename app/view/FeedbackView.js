Ext.define('ELUNA2015.view.FeedbackView', {
    extend: 'Ext.form.Panel',
    xtype: 'feedbackview',

    requires: [
        'Ext.form.FieldSet', 'Ext.field.Toggle', 'Ext.field.Select'
    ],

    config: {
        fullscreen: true,
        height: '100%',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        id: 'sessionid',
                        xtype: 'textfield',
                        name: 'sessionid',
                        readOnly: true,
                        label: 'Session id',
                        labelWidth: 150
                    },
                    {
                        id: 'title',
                        xtype: 'textareafield',
                        name: 'title',
                        readOnly: true,
                        label: 'Session title',
                        maxRows: 2,
                        labelWidth: 150
                    },
                    {
                        xtype: 'sliderfieldextended',
                        name: 'sessionrating',
                        label: 'Session Rating',
                        labelText: 'Session Rating'
                    },
                    {
                        xtype: 'sliderfieldextended',
                        name: 'speakerrating',
                        label: 'Speaker Rating',
                        labelText: 'Speaker Rating'
                    },
                    {
                        xtype: 'sliderfieldextended',
                        name: 'venuerating',
                        label: 'Venue Rating',
                        labelText: 'Venue Rating'
                    },
                    {
                        xtype: 'button',
                        name: 'feedbacksavebutton',
                        text: 'Save',
                        ui: 'confirm'
                    }
                ]
            }
        ]
    }
});