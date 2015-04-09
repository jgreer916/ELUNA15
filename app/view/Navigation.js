Ext.define('ELUNA2015.view.Navigation', {
    extend: 'Ext.List',
    xtype: 'navigation',
    requires: [ 'Ext.data.Store' ],

    config: {
        cls: 'nav-list',
        itemTpl:
//                '<tpl if="title == \'Home\'">' +
//                    '<span class="homeCls"></span> {title}' +
//                 '</tpl>' +
                '<tpl if="title == \'Sessions\'">' +
                    '<span class="sessionsCls"></span> {title}' +
                '</tpl>' +
                '<tpl if="title == \'My Plan\'">' +
                    '<span class="mySessionsCls"></span> {title}' +
                '</tpl>' +
                '<tpl if="title == \'Speakers\'">' +
                    '<span class="speakersCls"></span> {title}' +
                '</tpl>' +
                '<tpl if="title == \'Sponsors\'">' +
                    '<span class="sponsorsCls"></span> {title}' +
                '</tpl>' +
                '<tpl if="title == \'Weather\'">' +
                    '<span class="weatherCls"></span> {title}' +
                '</tpl>' +
                '<tpl if="title == \'Restaurants\'">' +
                    '<span class="restaurantsCls"></span> {title}' +
                '</tpl>' +
                '<tpl if="title == \'#eluna2015\'">' +
                    '<span class="twitterCls"></span> {title}' +
                '</tpl>',
        data: [
//            { title: 'Home' },
            { title: 'Sessions' },
            { title: 'My Plan' },
            { title: 'Speakers' },
            { title: 'Sponsors' },
            { title: 'Weather' },
            { title: 'Restaurants' },
            { title: '#eluna2015' }
        ]
    }
});