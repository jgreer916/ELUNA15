Ext.define('ELUNA2015.view.SessionsView', {
    extend: 'Ext.NavigationView',
    xtype: 'sessionsview',

    requires: ['Ext.dataview.List', 'Ext.field.Search', 'Ext.plugin.ListPaging'],

    config: {
        navigationBar: {
            hidden: true
        },
        listeners: {
            activate: function(newItem, container, oldItem, opts) {
                if(oldItem) {
                    oldItem.destroy();
                }
                var sessionsStore = Ext.getStore('Sessions');
                var searchURL = 'http://igelu2014be.masudk.com/sessions/';
                sessionsStore.getProxy().setUrl(searchURL);
                sessionsStore.loadPage(1);
            }
        },

        height: '100%',
        styleHtmlContent: true,

        items: [
            {
                name: 'sessionstb',
                title: 'Sessions',
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
                        name: 'sessionssearchbutton',
                        xtype: 'button',
                        ui: 'search',
                        iconCls: 'search',
                        align: 'right'
                    },
                    {
                        name: 'sessionsfilterbutton',
                        xtype: 'button',
                        iconCls: 'more',
                        iconMask: true,
                        align: 'right'
                    },

                    {
                        name: 'sessionsbackbutton',
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        align: 'left',
                        margin: 4,
                        hidden: true
                    },
                    {
                        name: 'sessionsfeedbackbackbutton',
                        xtype: 'button',
                        text: 'Back',
                        ui: 'back',
                        align: 'left',
                        margin: 4,
                        hidden: true
                    },
                    {
                        xtype: 'multiselectfield',
                        name: 'sessionsfilter',
                        hidden: true,
                        options: [
                            {
                                text: 'Show Plenary Sessions',
                                value: 'show_plenary'
                            },
                            {
                                text: 'Show Alma Sessions',
                                value: 'show_alma'
                            },
                            {
                                text: 'Show Primo Sessions',
                                value: 'show_primo'
                            },
                            {
                                text: 'Show Aleph Sessions',
                                value: 'show_aleph'
                            },
                            {
                                text: 'Show Voyager Sessions',
                                value: 'show_voyager'
                            },
                            {
                                text: 'Show SFX Sessions',
                                value: 'show_sfx'
                            },
                            {
                                text: 'Show MetaLib Sessions',
                                value: 'show_metalib'
                            },
                            {
                                text: 'Show Other Sessions',
                                value: 'show_other'
                            },
                            {
                                text: 'Show 15th September Sessions',
                                value: 'show_15_september'
                            },
                            {
                                text: 'Show 16th September Sessions',
                                value: 'show_16_september'
                            },
                            {
                                text: 'Show 17th September Sessions',
                                value: 'show_17_september'
                            },
                            {
                                text: 'Show Conference Sessions',
                                value: 'show_conference'
                            },
                            {
                                text: 'Show Systems Seminar Sessions',
                                value: 'show_systems_seminar'
                            }
                        ]
                    }

                ]
            },
            {
                xtype: 'list',

                plugins:[
                    {
                        xclass:'Ext.plugin.ListPaging',
                        autoPaging:true,
                        loadMoreText: '<div style="margin-top:10px">Load more sessions...</div>',
                        noMoreRecordsText: '<div style="margin-top:10px">All sessions loaded</div>'
                    }
                ],

                grouped: true,
                items: [
                    {
                        scrollDock: 'top',
                        padding: '5px',
                        xtype: 'searchfield',
                        name: 'listsearch',
                        placeHolder: 'Search on title or speaker name..',
                        hidden: true
                    }
                ],
                itemTpl:
                    '<div class="row">' +
                        '<div class="left">' +
                            '<img src="resources/images/{track}.png" class="thumbnail"/>' +
                        '</div>' +
                        '<div class="right">' +
                            '<p class="session_title"><tpl if="number">{number} - </tpl>{title}</p><p>{date}, {time}</p>' +
                            '<p>{room}, {building}</p>' +
                        '</div>' +
                    '</div>',
                store: 'Sessions',
                emptyText: 'No results found!'
            }
        ]
    }

});
