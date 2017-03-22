function ThemesForLinnworksModule($scope, $element, $q) {

    var self = this;
	
	$scope.styles = [{Name: "Test Theme", Description: "This is a test theme", File: "linn-dark-blue.css"}];

    self.onMessage = function(msg) {
        switch (msg.key) {
            case Core.Messenger.MESSAGE_TYPES.INITIALIZE:
			
        }
    };
	
	$scope.Install = function(style)
	{
		var settingsService = new Services.SettingsService(self.options, null);
		
		settingsService.addSetting("ThemesForLinnworks", "ThemeUrl", style.File, false, function(event)
		{
				if(event.hasErrors() == true)
				{
					console.log("error saving theme url");
				}
				
				Core.Dialogs.addNotify("Installed! Please refresh Linnworks now.", "SUCCESS");
		});
	}
	
	$scope.GetUsername = function()
	{
		return Core.SessionManager.getSession().company;
	}

}
