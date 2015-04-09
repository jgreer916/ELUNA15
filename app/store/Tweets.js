Ext.define('ELUNA2015.store.Tweets', {
    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    config: {
        autoLoad: true,
        model: "ELUNA2015.model.Tweet",

        proxy: {
            type: 'ajax',
            url: 'http://igelu2014be.masudk.com/tweets/',
            reader: {
                type: 'json'
            }
        }
    }
});
