Ext.define('ELUNA2015.utils.Functions', {
    singleton: true,

    requires: [
        'Ext.data.JsonP',
        'Ext.MessageBox'
    ],

    API_KEY: 'ahda57e4e34pe35ar5pjekbh',

    loadData: function() {
        var me = this;
        ELUNA2015.utils.Functions.getWeather();
    },


    getWeather: function() {
        Ext.data.JsonP.request({
            url: 'http://igelu2014be.masudk.com/weather',
            success: function(result, request) {
                Ext.Viewport.setMasked(false);
                try {
                    ELUNA2015.utils.Functions.createTemplate(result);

                }
                catch (e) {
                    Ext.Msg.alert("Oops", e);
                }
            },
            failure: function(e) {
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert("Sorry", "Unable to request weather data at this time");
            }
        });
    },

    createTemplate: function(obj) {

        var settingsStore = Ext.getStore('Settings');
        var unitsValue = null;

        if (settingsStore.getCount() > 0) {
            unitsValue = settingsStore.getAt(0).get('units');
        }
        else {
            unitsValue = 'c';
        }

        var tpl = null;

        if (unitsValue == 'c') {
            tpl = new Ext.XTemplate(
                '<div class="weather"><img src="{icon_url}"/>',
//                '<div class="weather"><img src="http://igelu2014.masudk.com/resources/images/{icon}.png"/>',
                '<div class="forecast">{weather} in Minneapolis</div>',
                '<div class="todaysweather">Current temperature is <span class="temp">{temp_f} &deg;F</span>',
                '</div>',
                '<div class="humidity">Humidity at the moment is: {humidity}</div>',
                '<div class="observation_time">{observation_time}</div>',
                '<div class="weather_string">Weather forecast brought to you by:</div>',
                '<div class="weather_logo"><img src="{logo_url}" width="100" height="62"/></div>',
                '</div>'
            );
        }
        else {
            tpl = new Ext.XTemplate(
                '<div class="weather"><img src="{icon_url}"/>',
//                '<div class="weather"><img src="http://igelu2014.masudk.com/resources/images/{icon}.png"/>',
                '<div class="forecast">{weather} in Oxford</div>',
                '<div class="todaysweather">Current temperature is <span class="temp">{temp_f} &deg;F</span><br/>The temperature feels like ',
                '<span class="feelslike">{feelslike_f} &deg;F.</span></div>',
                '<div class="humidity">Humidity at the moment is: {humidity}</div>',
                '<div class="observation_time">{observation_time}</div>',
                '<div class="weather_string">Weather forecast brought to you by:</div>',
                '<div class="weather_logo"><img src="{logo_url}" width="100" height="62"/></div>',
                '</div>'
            );
        }
        var html = tpl.apply(obj);
        Ext.ComponentQuery.query('weatherview')[0].setHtml(html);
        Ext.Viewport.setMasked(false);
    }
})