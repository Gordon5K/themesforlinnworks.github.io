var settingsService = new Services.SettingsService(self.options, null);

settingsService.getSettings(["ThemesForLinnworks"], function(event)
{
	var result = event.result["ThemesForLinnworks"];
	
	if(result == null)
		return;
	
	var setting = result.firstOrDefault("Setting", "ThemeUrl");
	
	if(setting == null)
		return;
	
	var url = "https://alexconnolly.github.io/themesforlinnworks.github.io/Styles/" + setting.Value;
	
	var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = url;
    link.media = 'all';
	
    head.appendChild(link);
});