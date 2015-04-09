Ext.define('ELUNA2015.model.Setting', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],

    config: {

        idProperty: 'id',
        identifier: 'uuid',

        fields: [
            { name: 'id', type: 'int' },
            { name: 'units' }

        ]
    }
});
