function ThemesForLinnworksModule($scope, $element, $q) {

    var self = this;
	
	$scope.styles = [{Name: "Dark Blue", Description: "Sample Theme", File: "linn-dark-blue.css"}];

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
				return;
			}
				
			Push.create("Themes For Linnworks", {
			    body: "Theme installed! Reset Linnworks to apply changes.",
			    icon: 'https://cdn.rawgit.com/AlexConnolly/themesforlinnworks.github.io/f07413df/Data/logo-140x140.png',
			    timeout: 4000,
			    onClick: function () {
				    
			    }
			});
		});
	}
	
	$scope.GetUsername = function()
	{
		return Core.SessionManager.getSession().company;
	}

}
