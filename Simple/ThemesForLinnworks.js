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
		console.log("You tried to install style: " + style.Name);
	}
	
	$scope.GetUsername = function()
	{
		return Core.SessionManager.getSession().company;
	}

}