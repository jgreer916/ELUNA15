Ext.define('ELUNA2015.model.Tweet', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: "text",
        fields: [
            {name: "id", type: "int"},
            {name: "text" },
            {name: "screen_name" },
            {name: "profile_image_url_https" },
            {name: "created_at" },
            {name: "url" }
        ]
    }
});