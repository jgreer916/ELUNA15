Ext.define('ELUNA2015.controller.Feedback', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            feedbackSubmitButton: 'feedbackview button[name="feedbacksavebutton"]',
            feedbackView: 'feedbackview'
        },
        control: {
            'feedbackSubmitButton': {
                tap: 'submitFeedback'
            }
        }
    },



    submitFeedback: function (btn, e, opts) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true
        });

        var formValues = this.getFeedbackView().getValues();
        Ext.Ajax.request({
            url: 'http://igelu2014be.masudk.com/feedback/submit/',
            method: 'POST',
            success: function(form, result) {
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert('Thank you', 'Successfully submitted your feedback');
            },
            failure: function(form, result) {
                Ext.Viewport.setMasked(false);
                Ext.Msg.alert('Apologies', 'Failure submitting your feedback. Please try again later');
            },
            params: formValues
        });
    }
});
