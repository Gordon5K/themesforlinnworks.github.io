function ThemesForLinnworksModule($scope, $element, $q) {

    var self = this;

    self.onMessage = function(msg) {
        switch (msg.key) {
            case Core.Messenger.MESSAGE_TYPES.INITIALIZE:
                var promises = [];
                promises.push($scope.GetLocations());
                $scope.ReloadData(promises);
        }
    };

}