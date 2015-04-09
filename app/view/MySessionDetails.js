Ext.define('ELUNA2015.view.MySessionDetails', {
    extend: 'Ext.Container',
    xtype: 'mysessiondetails',

    config: {
        styleHtmlContent: true,
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'bottom',
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'delete',
                        text: 'Remove from Plan',
                        name: 'deletefrommysessionsbutton',
                        hidden: true
                    },
                    {
                        xtype: 'button',
                        ui: 'plain',
                        html: 'Removed from Plan',
                        name: 'removedfrommysessionsbutton',
                        hidden: true
                    },
                    {
                        xtype: 'button',
                        iconCls: 'settings',
                        text: 'Provide feedback',
                        name: 'mysessionsfeedbackbutton',
                        hidden: true
                    }
                ]
            }
        ],

        tpl: Ext.XTemplate(
                '<h3 class="{track}_label sess_title"><strong><tpl if="number">{number} - </tpl>{title}</strong></h3>' +
                '<div style="clear:both;"></div>' +
                '<hr><h3><strong>{day}, {date} - {time}</strong></h3>' +
                '<h3>{abstract}</h3>' +
                '<h4><tpl if="room">{room}</tpl><tpl if="building">, {building}</tpl></h4>' +
                '<tpl if="participants.length">' +
                    '<br/><h3><strong>Speaker(s)</strong></h3>' +
                    '<div id="speakerslist">' +
                        '<ul>' +
                            '<tpl for="participants">' +
                                '<tpl if="participant_role == \'Presenter\'">' +
                                    '<li><p>{firstname} {lastname}</p></li>' +
                                '</tpl>' +
                                '<tpl if="participant_role == \'Moderator\'">' +
                                    '<br/><h5>Moderator</h5>' +
                                    '<li><p>{firstname} {lastname}</p></li>' +
                                '</tpl>' +
                            '</tpl>' +
                        '</ul>' +
                    '</div>' +
                '</tpl>'
        )
    }
});
