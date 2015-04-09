Ext.define('ELUNA2015.model.Restaurant', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: "text",
        fields: [
            {name: "id", type: "int"},
            {name: "restaurant_name" },
            {name: "restaurant_address_fline" },
            {name: "restaurant_address_sline" },
            {name: "restaurant_postcode" },
            {name: "restaurant_phone" },
            {name: "restaurant_cuisine" },
            {name: "restaurant_tripadvisor_rating" },
            {name: "restaurant_url" },
            {name: "restaurant_image" }
        ]
    }
});