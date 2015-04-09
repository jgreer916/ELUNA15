Ext.define('ELUNA2015.store.Sessions', {
    extend: 'Ext.data.Store',

    config: {

        autoLoad: false,

        model: 'ELUNA2015.model.Session',
        clearOnPageLoad: false,
        pageSize: 15,

        grouper: {
            groupFn: function (record) {
                return record.get('day') + " " + record.get('date');
            },
            sortProperty: 'id'
        },
        sorters: [{
            property: 'id',
            direction: 'ASC'
        }],


        proxy: {
            type: 'ajax',
            url: 'http://igelu2014be.masudk.com/sessions/',
            pageParam: 'page',
            limitParam: 'limit',
            reader: {
                type: 'json'
            }
        }
    }
});