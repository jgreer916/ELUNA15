Ext.define('ELUNA2015.store.Restaurants', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    config: {
        autoLoad: true,
        model: "ELUNA2015.model.Restaurant",

        proxy: {
            type: 'ajax',
            url: 'http://igelu2014be.masudk.com/restaurants/',
            reader: {
                type: 'json'
            }
        }
    }
});
