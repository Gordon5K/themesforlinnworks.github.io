function ThemesForLinnworksModule($scope, $element, $q) {

    var self = this;

    self.onMessage = function(msg) {
        switch (msg.key) {
            case Core.Messenger.MESSAGE_TYPES.INITIALIZE:
			
        }
    };
	
	$scope.GetUsername = function()
	{
		return Core.SessionManager.getSession().company;
	}

}