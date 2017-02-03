function ThemesForLinnworksModule($scope, $element, $q) {

    var self = this;
	
	$scope.styles = [{Name: "Test Theme", Description: "This is a test theme", File: "00001.css"}];

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
				
				console.log("completes");
		});
	}
	
	$scope.GetUsername = function()
	{
		return Core.SessionManager.getSession().company;
	}

}