Ext.define('ELUNA2015.view.WelcomeView', {
    extend: 'Ext.Container',
    xtype: 'welcomeview',

    config: {
//        listeners: {
//            painted: function() {
//                var stateObj = { title: "Sessions" };
//                history.pushState(stateObj, null, null);
//            }
//        },
        layout: {
            type: 'card'
        },

        items: [
            // Item number 1
            {
                xtype: 'sessionsview'
            }
        ]
    }
});
