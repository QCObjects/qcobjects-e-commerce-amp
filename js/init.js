'use strict';
CONFIG.set('relativeImportPath', 'js/packages/');
CONFIG.set('componentsBasePath', 'templates/components/');
CONFIG.set('delayForReady', 1); // delay to wait before executing the first ready event, it includes imports
CONFIG.set('preserveComponentBodyTag', false); // don't use <componentBody></componentBody> tag
CONFIG.set('useConfigService', false); // Load settings from config.json
CONFIG.set('routingWay','pathname');
CONFIG.set('useSDK',true);
CONFIG.set('useLocalSDK',false);
CONFIG.set('tplextension','tpl.html');
CONFIG.set('serviceWorkerURI','/sw.js');
Component.cached=false;

/**
 * Main import sentence.
 */
Import('org.quickcorp.amp', function() {
  //TODO: Implement your code here

});

Ready(function() {
//TODO: Implement your code here
});
