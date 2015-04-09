Ext.define('ELUNA2015.controller.Navigation', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            welcomeView: 'welcomeview',
            navigation: 'navigation',
            weatherView: 'weatherview',
            sessionsView: 'sessionsview',
            mySessionsView: 'mysessionsview',
            sessionDetails: 'sessiondetails',


            navBtn: 'button[name="nav_btn"]'
        },

        control: {
            navBtn: {
                tap: 'toggleNav'
            },

            navigation: {
                itemtap: function (list, index, target, record) {
                    if (record.data.title === "Sessions") {
                        var stateObj = { title: "Sessions" };
                        history.pushState(stateObj, null, null);
                        this.getWelcomeView().setActiveItem({xtype: 'sessionsview'});
                    }
                    else if (record.data.title === "Speakers") {
                        this.getWelcomeView().setActiveItem({xtype: 'participantsview'});
                    }
                    else if (record.data.title === "My Plan") {
                        var stateObj = { title: "My Plan" };
                        history.pushState(stateObj, null, null);
                        this.getWelcomeView().setActiveItem({xtype: 'mysessionsview'});
                    }
                    else if (record.data.title === "Sponsors") {
                        this.getWelcomeView().setActiveItem({xtype: 'sponsorsview'});
                    }
                    else if (record.data.title === "Weather") {
                        Ext.Viewport.setMasked({
                            xtype: 'loadmask',
                            indicator: true
                        });

                        this.getWelcomeView().setActiveItem({xtype: 'weatherview'});
                    }
                    else if (record.data.title === "Restaurants") {
                        this.getWelcomeView().setActiveItem({xtype: 'restaurantsview'});
                    }
                    else if (record.data.title === "#eluna2015") {
                        this.getWelcomeView().setActiveItem({xtype: 'twitterview'});
                    }
                    else if (record.data.title === "Settings") {
                        this.getWelcomeView().setActiveItem({xtype: 'settingsview'});
                    }
                    else {
                        this.getWelcomeView().setActiveItem({xtype: 'welcomeview'});
                    }
                    this.toggleNav();
                }

            }
        }
    },

    toggleNav: function () {

        mainEl = this.getWelcomeView().element;
        console.log(mainEl);

        if (mainEl.hasCls('out')) {
            mainEl.removeCls('out').addCls('in');
        } else {
            mainEl.removeCls('in').addCls('out');
        }
    }

});
