Zotero.ItemSelector = {

    mainWindow : window.QueryInterface(Components.interfaces.nsIInterfaceRequestor)  
        .getInterface(Components.interfaces.nsIWebNavigation)  
        .QueryInterface(Components.interfaces.nsIDocShellTreeItem)  
        .rootTreeItem  
        .QueryInterface(Components.interfaces.nsIInterfaceRequestor)  
        .getInterface(Components.interfaces.nsIDOMWindow),
    
    getSelectedItems: function() {
	this.alertItems(Zotero.getActiveZoteroPane().getSelectedItems());
	},

    alertItems: function(items) {
	var results =  items.length + " items Selected\n"
	    for (i in items) {
		var item = items[i]
		results = results +  "* " + item.getField('title') + "\n";
	    }
        var gBrowser = this.mainWindow.gBrowser;
        var newTab = gBrowser.addTab("about:blank");
        gBrowser.selectedTab = newTab;
        newTab = gBrowser.getBrowserForTab(newTab);
        newTab.addEventListener("load", function () {  
            newTab.contentDocument.body.innerHTML = "<pre>" + results + "</pre>";  
        }, true);  
	// alert(results);
    },
	

	getCollectionItems: function() {
	var collection= Zotero.getActiveZoteroPane().getSelectedCollection();
	var items = collection.getChildItems();
	this.alertItems(items);
	},

	helloWorld: function() {
	alert ("Hello World");
	},

};





