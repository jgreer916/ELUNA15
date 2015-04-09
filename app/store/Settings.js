Ext.define('ELUNA2015.store.Settings', {
    extend: 'Ext.data.Store',
    requires: ['ELUNA2015.model.Setting'],

    config: {
        model: 'ELUNA2015.model.Setting',

        autoLoad: true,

        proxy: {
            type: 'localstorage',
            id: 'settings'
        }
    }
});
