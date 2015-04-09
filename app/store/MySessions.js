Ext.define('ELUNA2015.store.MySessions', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],

    config: {

        autoLoad: true,
        model: 'ELUNA2015.model.MySession',
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
            type: 'localstorage',
            id: 'eluna2015'
        }
    }
});