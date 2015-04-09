Ext.define('ELUNA2015.store.Participants', {
    extend: 'Ext.data.Store',

    config: {

        autoLoad: true,

        model: 'ELUNA2015.model.Participant',
        clearOnPageLoad: false,
        pageSize: 15,

        grouper: {
            groupFn: function (record) {
                return record.get('firstname')[0];
            },
            sortProperty: 'firstname'
        },
        sorters: [{
            property: 'firstname',
            direction: 'ASC'
        }],



        proxy: {
            type: 'ajax',
            url: 'http://igelu2014be.masudk.com/participants/',
            reader: {
                type: 'json'
            }
        }
    }
});