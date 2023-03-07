sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
    "use strice"

    return Controller.extend("de.jlabs.demo.controller.App", {
        
        incrementBy1: function() {
            let myTextElem = this.getView().byId("counter");
            let myNum = parseInt(myTextElem.getText());
            let myNewNum = myNum + 1;
            myTextElem.setText(myNewNum);
        }
    })
})