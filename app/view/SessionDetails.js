Ext.define('ELUNA2015.view.SessionDetails', {
    extend: 'Ext.Container',
    xtype: 'sessiondetails',

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
                        ui: 'plain',
                        html: 'In My Plan',
                        name: 'alreadyinmysessionsbutton',
                        hidden: true
                    },
                    {
                        xtype: 'button',
                        iconCls: 'add',
                        text: 'Add to Plan',
                        name: 'addtomysessionsbutton',
                        hidden: true
                    },
                    {
                        xtype: 'button',
                        iconCls: 'settings',
                        text: 'Provide feedback',
                        name: 'sessionsfeedbackbutton',
                        hidden: true
                    }
                ]
            }
        ],

        tpl: Ext.XTemplate(
                '<h3 class="{track}_label sess_title"><strong><tpl if="number">{number} - </tpl>{title}</strong></h3>' +
                '<div style="clear:both;"></div>' +
                '<hr><h3><strong>{day}, {date} - {time}</strong></h3>' +
                '<h3><tpl if="room">{room}</tpl><tpl if="building">, {building}</tpl></h3>' +
                '<br><h4>{abstract}</h4>' +
                '<tpl if="participants.length">' +
                '<br/><h3><strong>Presenter(s)</strong></h3>' +
                '<div id="speakerslist">' +
                '<ul>' +
                '<tpl for="participants">' +
                '<li><p>{firstname} {lastname}</p></li>' +
                '</tpl>' +
                '</ul>' +
                '</div>' +
                '</tpl>'
        )
    }
});
