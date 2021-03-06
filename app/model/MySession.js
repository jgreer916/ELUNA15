Ext.define('ELUNA2015.model.MySession', {
    extend: 'Ext.data.Model',

    config: {
        identifier: 'uuid',
        idProperty: 'localId',

        fields: [
            { name: 'localId', type: 'auto' },
            { name: 'id', type: 'int' },
            { name: 'number' },
            { name: 'time' },
            { name: 'date' },
            { name: 'day' },
            { name: 'title' },
            { name: 'abstract' },
            { name: 'track' },
            { name: 'theme' },
            { name: 'room' },
            { name: 'building' }
        ],
        hasMany:
        {
            model: 'ELUNA2015.model.Participant',
            name: 'participants',
            primaryKey: 'id',
            foreignKey: 'session_id'
        }

    }
});
