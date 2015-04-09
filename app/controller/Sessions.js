Ext.define('ELUNA2015.controller.Sessions', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            // For the primary sessions view and sessions list
            welcomeView: 'welcomeview',
            sessionsView: 'sessionsview',
            sessionsList: 'sessionsview list',
            sessionsBackButton: 'button[name="sessionsbackbutton"]',
            sessionsAddButton: 'button[name="addtomysessionsbutton"]',
            sessionsAlreadyButton: 'button[name="alreadyinmysessionsbutton"]',
            sessionsFeedbackButton: 'button[name="sessionsfeedbackbutton"]',
            sessionsFeedbackBackButton: 'button[name="sessionsfeedbackbackbutton"]',
            sessionsTitleBar: 'titlebar[name="sessionstb"]',
            sessionsSearchBox: 'searchfield[name="listsearch"]',
            sessionsSearchButton: 'button[name="sessionssearchbutton"]',


            sessionsFilter: 'multiselectfield[name="sessionsfilter"]',
            sessionsFilterButton: 'button[name="sessionsfilterbutton"]',


            feedbackView: 'feedbackview',

            // For the my sessions view and my sessions list
            mySessionsView: 'mysessionsview',
            mySessionsList: 'mysessionsview list',
            mySessionsBackButton: 'button[name="mysessionsbackbutton"]',
            mySessionsDeleteButton: 'button[name="deletefrommysessionsbutton"]',
            mySessionsRemovedButton: 'button[name="removedfrommysessionsbutton"]',
            mySessionsFeedbackButton: 'button[name="mysessionsfeedbackbutton"]',
            mySessionsFeedbackBackButton: 'button[name="mysessionsfeedbackbackbutton"]',
            mySessionsTitleBar: 'titlebar[name="mysessionstb"]',


            // For the session detail screen
            sessionDetails: 'sessiondetails',
            mySessionDetails: 'mysessiondetails'

        },
        control: {

            // For the primary sessions view and sessions list
            'sessionsList': {
                itemtap: 'showSessionDetails',
                select: 'clearListSelection'
            },
            'sessionsBackButton': {
                tap: 'popToSessionsView'
            },
            'sessionsSearchButton': {
                tap: 'toggleSearchBar'
            },
            'sessionsFilterButton': {
                tap: 'expandFilterOptions'
            },
            'sessionsFilter': {
                change: 'applySearchFilter'
                // Change event is the issue here, as first thing selected never changes.
            },

            'sessionsAddButton': {
                tap: 'addSession'
            },
            'sessionsFeedbackButton': {
                tap: 'showSessionsFeedbackForm'
            },
            'sessionsFeedbackBackButton': {
                tap: 'popToSessionDetailsView'
            },
            'sessionsSearchBox': {
                keyup: 'doSessionSearch',
                clearicontap:'onClearSearch'
            },

            // For the my sessions view and my sessions list
            'mySessionsList': {
                itemtap: 'showMySessionDetails',
                select: 'clearListSelection'
            },
            'mySessionsDeleteButton': {
                tap: 'deleteSession'
            },
            'mySessionsBackButton': {
                tap: 'popToMySessionsView'
            },
            'mySessionsFeedbackButton': {
                tap: 'showMySessionsFeedbackForm'
            },
            'mySessionsFeedbackBackButton': {
                tap: 'popToMySessionDetailsView'
            }

        }
    },


    // For the sessions actions
    showSessionDetails: function (list, index, target, record) {
        if (this.getSessionsView().getActiveItem().xtype != "sessiondetails") {
            this.getSessionsView().push({
                xtype: "sessiondetails",
                data: record.data
            });
        }

        this.getSessionsSearchButton().hide();
        this.getSessionsTitleBar().setTitle('Details');
        this.getSessionsBackButton().show();
        this.getSessionsFeedbackButton().show();
        this.getSessionsFilterButton().hide();

        var mySessionsStore = Ext.getStore('MySessions');
        var storeRecords = null;
        storeRecords = mySessionsStore.findRecord('id', record.data.id);
        if (!storeRecords) {
            this.getSessionsAddButton().show();
        }
        else {
            this.getSessionsAlreadyButton().show();
        }

        var stateObj = { title: "Session Details" };
        history.pushState(stateObj, null, null);

    },

    showMySessionDetails: function (list, index, target, record) {

        if (this.getMySessionsView().getActiveItem().xtype != "mysessiondetails") {
            this.getMySessionsView().push({
                xtype: "mysessiondetails",
                data: record.data
            });
        }

        this.getMySessionsTitleBar().setTitle('Details');
        this.getMySessionsBackButton().show();
        this.getMySessionsDeleteButton().show();
        this.getMySessionsFeedbackButton().show();

        var stateObj = { title: "My Session Details" };
        history.pushState(stateObj, null, null);
    },


    popToSessionsView: function() {
        if(Ext.os.is('Android')) {
            history.back();
            return false;
        }
        else {
            this.getSessionsTitleBar().setTitle('Sessions');
            this.getSessionsView().pop();
            this.getSessionsBackButton().hide();
            if (this.getSessionsAddButton()) {
                this.getSessionsAddButton().hide();
            }
            if (this.getSessionsAlreadyButton()) {
                this.getSessionsAlreadyButton().hide();
            }
            this.getSessionsFeedbackButton().hide();
            this.getSessionsSearchButton().show();
            this.getSessionsFilterButton().show();
        }
    },

    popToMySessionsView: function() {
        if(Ext.os.is('Android')) {
            history.back();
            return false;
        }
        else {
            this.getMySessionsTitleBar().setTitle('My Plan');
            this.getMySessionsView().pop();
            this.getMySessionsBackButton().hide();
            this.getMySessionsDeleteButton().hide();
            this.getMySessionsFeedbackButton().hide();
        }

    },


    popToSessionDetailsView: function() {
        if(Ext.os.is('Android')) {
            history.back();
            return false;
        }
        else {
            this.getSessionsTitleBar().setTitle('Details');
            this.getSessionsView().pop();
            this.getSessionsBackButton().show();
            this.getSessionsFeedbackBackButton().hide();
            this.getSessionsFeedbackButton().show();

            sessionData = this.getSessionDetails().getData();

            var mySessionsStore = Ext.getStore('MySessions');
            var storeRecords = null;
            storeRecords = mySessionsStore.findRecord('id', sessionData.id);
            if (!storeRecords) {
                this.getSessionsAddButton().show();
            }
            else {
                this.getSessionsAddButton().hide();
            }
        }
    },

    popToMySessionDetailsView: function() {
        if(Ext.os.is('Android')) {
            history.back();
            return false;
        }
        else {
            this.getMySessionsTitleBar().setTitle('Details');
            this.getMySessionsView().pop();
            this.getMySessionsBackButton().show();
            this.getMySessionsDeleteButton().show();
            this.getMySessionsFeedbackButton().show();
            this.getMySessionsFeedbackBackButton().hide();
        }
    },

    // For the my sessions actions



    clearListSelection: function(list) {
            setTimeout(function() {list.deselectAll();},1);
            return false;
    },

    addSession: function() {
        sessionData = this.getSessionDetails().getData();
        var mySessionsStore = Ext.getStore('MySessions');

        var storeRecords = null;
        storeRecords = mySessionsStore.findRecord('id', sessionData.id);


        if (storeRecords) {
            Ext.Msg.alert("This record is already in your plan");
        }
        else {
            mySessionsStore.add(sessionData);

            var me = this;
            Ext.Msg.alert("Added", "Session added successfully", function() {
                me.getSessionsAddButton().hide();
                me.getSessionsAlreadyButton().show();
            });
        }

        mySessionsStore.sync();
    },

    deleteSession: function() {
        mySessionData = this.getMySessionDetails().getData();
        var mySessionsStore = Ext.getStore('MySessions');

        var storeRecords = null;
        storeRecords = mySessionsStore.findRecord('id', mySessionData.id);


        if (storeRecords) {
            mySessionsStore.remove(storeRecords);
            var me = this;
            Ext.Msg.alert("Removed", "Session removed successfully", function() {
                me.getMySessionsDeleteButton().hide();
                me.getMySessionsRemovedButton().show();
            });
        }
        else {
            Ext.Msg.alert("This record does not exist in your plan");
        }

        mySessionsStore.sync();

    },

    doSessionSearch: function(searchBox) {
        var sessionsStore = Ext.getStore('Sessions');
        var q = searchBox.getValue();
        if (q) {
            searchURL = 'http://igelu2014be.masudk.com/sessions/search/?q=' + q
        }
        sessionsStore.getProxy().setUrl(searchURL);
        sessionsStore.load();
    },


    showSessionsFeedbackForm: function() {
        this.getSessionsTitleBar().setTitle('Feedback');
        sessionData = this.getSessionDetails().getData();
        this.getSessionsView().push({
            xtype: 'feedbackview',
            data: sessionData
        });
        this.getSessionsBackButton().hide();
        this.getSessionsFeedbackButton().hide();
        this.getSessionsAddButton().hide();
        this.getSessionsFeedbackBackButton().show();
        Ext.getCmp('title').setValue(sessionData.title);
        Ext.getCmp('sessionid').setValue(sessionData.id);

        var stateObj = { title: "Session Details" };
        history.pushState(stateObj, null, null);
    },

    showMySessionsFeedbackForm: function() {
        this.getMySessionsTitleBar().setTitle('Feedback');
        sessionData = this.getMySessionDetails().getData();
        this.getMySessionsView().push({
            xtype: 'feedbackview',
            data: sessionData
        });
        this.getMySessionsBackButton().hide();
        this.getMySessionsFeedbackBackButton().show();
        this.getMySessionsFeedbackButton().hide();
        this.getMySessionsDeleteButton().hide();
        Ext.getCmp('title').setValue(sessionData.title);
        Ext.getCmp('sessionid').setValue(sessionData.id);

        var stateObj = { title: "My Session Details" };
        history.pushState(stateObj, null, null);
    },

    onClearSearch: function() {
        var sessionsStore = Ext.getStore('Sessions');
        var searchURL = 'http://igelu2014be.masudk.com/sessions/';
        sessionsStore.getProxy().setUrl(searchURL);
        sessionsStore.loadPage(1);
    },


    toggleSearchBar: function() {
        if(this.getSessionsSearchBox().isHidden()) {
            this.getSessionsList().getScrollable()._scroller.scrollTo(0,0);
            this.getSessionsSearchBox().show();
        }
        else {
            this.getSessionsSearchBox().setValue('');
            var sessionsStore = Ext.getStore('Sessions');
            var searchURL = 'http://igelu2014be.masudk.com/sessions/';
            sessionsStore.getProxy().setUrl(searchURL);
            sessionsStore.loadPage(1);
            this.getSessionsSearchBox().hide();
        }
    },

    expandFilterOptions: function() {

        this.getSessionsFilter().showPicker();

    },

    applySearchFilter: function() {
        var mySessionsStore = Ext.getStore('Sessions');
        mySessionsStore.clearFilter();
        var filters = this.getSessionsFilter().getValue();
        if (filters) {
            mySessionsStore.filterBy(function(record) {
                var result = false;
                if (filters.length === 0) {
                    return true;
                }
                if (filters.length === 1 && filters[0] === '') {
                    return true;
                }

                if (Ext.Array.contains(filters, 'show_plenary')) {
                    if (record.get('track') == 'Plenary') {
                        result = true;
                    }
                }
                if (Ext.Array.contains(filters, 'show_alma')) {
                    if (record.get('track') == 'Alma') {
                        result = true;
                    }
                }
                if (Ext.Array.contains(filters, 'show_aleph')) {
                    if (record.get('track') == 'Aleph') {
                        result = true;
                    }
                }
                if (Ext.Array.contains(filters, 'show_primo')) {
                    if (record.get('track') == 'Primo') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_metalib')) {
                    if (record.get('track') == 'MetaLib') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_voyager')) {
                    if (record.get('track') == 'Voyager') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_other')) {
                    if (record.get('track') == 'Other') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_sfx')) {
                    if (record.get('track') == 'SFX') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_15_september')) {
                    if (record.get('date') == '15 September') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_16_september')) {
                    if (record.get('date') == '16 September') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_17_september')) {
                    if (record.get('date') == '17 September') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_conference')) {
                    if (record.get('theme') == 'Conference') {
                        result = true;
                    }
                }

                if (Ext.Array.contains(filters, 'show_systems_seminar')) {
                    if (record.get('theme') == 'Systems Seminar') {
                        result = true;
                    }
                }

                return result;
            });
        }
    },

    launch: function () {
        var that = this;
        window.addEventListener('popstate', function (event) {
            var welcomeView = that.getWelcomeView();  // won't have portal until app is initialized
            if (welcomeView) {
                var container = welcomeView.getActiveItem();
                container.pop();

                if (event.state.title == 'Sessions') {
                    if(that.getSessionsTitleBar()) {
                        that.getSessionsTitleBar().setTitle('Sessions');
                    }
                    if (that.getSessionsBackButton()) {
                        that.getSessionsBackButton().hide();
                    }

                    if (that.getSessionsAddButton()) {
                        that.getSessionsAddButton().hide();
                    }
                    if (that.getSessionsAlreadyButton()) {
                        that.getSessionsAlreadyButton().hide();
                    }
                    if (that.getSessionsFeedbackButton()) {
                        that.getSessionsFeedbackButton().hide();
                    }
                    if (that.getSessionsSearchButton()) {
                        that.getSessionsSearchButton().show();
                    }
                    if (that.getSessionsFilterButton()) {
                        that.getSessionsFilterButton().show();
                    }
                }

                if (event.state.title == 'My Plan') {
                    if(that.getMySessionsTitleBar()) {
                        that.getMySessionsTitleBar().setTitle('My Plan');
                    }
                    if (that.getMySessionsBackButton()) {
                        that.getMySessionsBackButton().hide();
                    }

                    if (that.getMySessionsDeleteButton()) {
                        that.getMySessionsDeleteButton().hide();
                    }
                    if (that.getMySessionsFeedbackButton()) {
                        that.getMySessionsFeedbackButton().hide();
                    }
                }

                if (event.state.title == 'Session Details') {
                    if (that.getSessionsTitleBar()) {
                        that.getSessionsTitleBar().setTitle('Details');
                    }
                    if (that.getSessionsBackButton()) {
                        that.getSessionsBackButton().show();
                    }
                    if (that.getSessionsFeedbackBackButton()) {
                        that.getSessionsFeedbackBackButton().hide();
                    }
                    if (that.getSessionsFeedbackButton()) {
                        that.getSessionsFeedbackButton().show();
                    }

                    sessionData = that.getSessionDetails().getData();

                    var mySessionsStore = Ext.getStore('MySessions');
                    var storeRecords = null;
                    storeRecords = mySessionsStore.findRecord('id', sessionData.id);
                    if (!storeRecords && that.getSessionsAddButton()) {
                        that.getSessionsAddButton().show();
                    }
                    else {
                        that.getSessionsAddButton().hide();
                    }
                }

                if (event.state.title == 'My Session Details') {
                    if (that.getMySessionsTitleBar()) {
                        that.getMySessionsTitleBar().setTitle('Details');
                    }
                    if (that.getMySessionsBackButton()) {
                        that.getMySessionsBackButton().show();
                    }
                    if (that.getMySessionsDeleteButton()) {
                        that.getMySessionsDeleteButton().show();
                    }
                    if (that.getMySessionsFeedbackButton()) {
                        that.getMySessionsFeedbackButton().show();
                    }
                    if (that.getMySessionsFeedbackBackButton()) {
                        that.getMySessionsFeedbackBackButton().hide();
                    }
                }

            }
        }, false);
    },


    checkForListEnd: function(store, records, isSuccessful) {
        var pageSize = store.getPageSize();
        var pageIndex = store.currentPage - 1;    // Page numbers start at 1
        if(isSuccessful && records.length <= pageSize)
        {
            //Set count to disable 'loading' message
            var totalRecords = pageIndex * pageSize + records.length;
            store.setTotalCount(180);
        }
        else
            store.setTotalCount(null);
    },

    init: function() {
        var sessionsStore = Ext.getStore('Sessions');
        var participantsStore = Ext.getStore('Participants');
        sessionsStore.addBeforeListener('load', this.checkForListEnd, this);
        participantsStore.addBeforeListener('load', this.checkForListEnd, this);
    }


});
