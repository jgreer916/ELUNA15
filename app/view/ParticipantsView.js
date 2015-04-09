Ext.define('ELUNA2015.view.ParticipantsView', {
    extend: 'Ext.NavigationView',
    xtype: 'participantsview',

    requires: ['Ext.dataview.List', 'Ext.plugin.ListPaging'],

    config: {
        navigationBar: {
            hidden: true
        },

        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                oldItem.destroy();
                var participantsStore = Ext.getStore('Participants');
                var participantsURL = 'http://igelu2014be.masudk.com/participants/';
                participantsStore.getProxy().setUrl(participantsURL);
                participantsStore.loadPage(1);
            }
},

        height: '100%',
        styleHtmlContent: true,
//        deferredRender: true,

        items: [
            {
                title: 'Speakers',
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

                plugins:[
                    {
                        xclass:'Ext.plugin.ListPaging',
                        autoPaging:true,
                        loadMoreText: '<div style="margin-top:10px">Load more speakers...</div>',
                        noMoreRecordsText: '<div style="margin-top:10px">All speakers loaded</div>'
                    }
                ],

                disableSelection: true,
                grouped: true,
                itemTpl:'<div class="row">' +
                            '<div class="left">' +
                                '<img src="http://igelu2014.masudk.com/resources/images/participants/{profile_image}" class="thumbnail"/>' +
                            '</div>' +
                            '<div class="right">' +
                                '<p><strong>{firstname} {lastname}</strong></p>' +
                                '<p>{job_title}</p>' +
                                '<p>{company}</p>' +
                            '</div>' +
                        '</div>' +
                        '<div style="clear:both;"></div>',
                store: 'Participants',
                emptyText: 'No Speakers found'
            }
        ]
    }
});
