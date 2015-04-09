Ext.define('ELUNA2015.model.Participant', {
    extend: 'Ext.data.Model',

    config: {

        idProperty: 'id',

        fields: [
            { name: 'id', type: 'int' },
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'job_title' },
            { name: 'company' },
            { name: 'country' },
            { name: 'email' },
            { name: 'participant_role' },
            {name: "profile_image"}
        ]
    }
});
