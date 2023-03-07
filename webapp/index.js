sap.ui.define([
    "sap/m/Button", "sap/ui/core/mvc/XMLView"
], function(Button, XMLView) {
    'use strict';

    XMLView.create({
        viewName: "de.jlabs.demo.view.App"
    }).then((oView) => {
        oView.placeAt("content");
    })
    
/*     new Button({
        text: "iButton"
    }).placeAt("content"); */

});