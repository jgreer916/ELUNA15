Ext.define('ELUNA2015.model.Session', {
    extend: 'Ext.data.Model',

    requires: ['ELUNA2015.model.Participant'],

    config: {

        idProperty: 'id',
        fields: [
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
            foreignKey: 'session_id',
            associationKey: 'participants'
        }
    }
});
