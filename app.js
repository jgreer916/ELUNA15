/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'ELUNA2015',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Navigation', 'Main', 'WelcomeView', 'SessionsView', 'SessionDetails', 'SessionFilters', 'MySessionDetails', 'MySessionsView', 'TwitterView',
         'WeatherView', 'DataViewLite', 'FeedbackView', 'SettingsView','ParticipantsView', 'SponsorsView', 'MultiSelect', 'SliderExtended', 'RestaurantsView'
    ],

    stores: [
        'Participants', 'Sessions', 'MySessions', 'Tweets', 'Settings', 'Restaurants'
    ],

    models: [
        'Participant', 'Session', 'MySession', 'Tweet', 'Setting', 'Restaurant'
    ],

    controllers: [
        'Navigation', 'Sessions', 'Settings', 'Feedback'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '640x1136': 'resources/startup/640x1136.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },


    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Function.createDelayed(function(){
            //Remove the splash screen
            navigator.splashscreen.hide();
        },1000,this)();

//        document.addEventListener("deviceready", onDeviceReady, false);
//
//        function onDeviceReady() {
//            document.addEventListener("backbutton", onBackKeyDown, false);
//
//            function onBackKeyDown() {
//                if(this.pressed) {
//                    return false;
//                }
//                else {
//                    history.back();
//                    this.pressed=true;
//                    Ext.defer(function() {
//                        this.pressed=false;
//                    }, 2000, this);
//                    return true;
//                }
//            }
//        }

        // Initialize the main view
        Ext.Viewport.add(Ext.create('ELUNA2015.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }

});

