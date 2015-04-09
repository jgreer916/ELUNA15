Ext.define('ELUNA2015.controller.Settings', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            settingsView: 'settingsview',
            settingsSaveButton: '#settingssavebutton',
            unitsField: 'settingsview selectfield[name="units"]'
        },

        control: {
            settingsSaveButton: {
                tap: 'saveSettings'
            }
        }
    },


    saveSettings: function () {
        var settingsStore = Ext.getStore('Settings');
        settingsStore.removeAll();

        var unitsValue = this.getUnitsField().getValue();
        settingsStore.add({units: unitsValue});
        settingsStore.sync();
        Ext.Msg.alert('Saved', 'Settings saved successfully');

    }

});
