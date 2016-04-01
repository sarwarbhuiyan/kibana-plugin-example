require('plugins/kibana-plugin-example/clock.css');

define(function(require) {
  function ClockProvider(Private) {
    var TemplateVisType = Private(require("ui/template_vis_type/TemplateVisType"));
    return new TemplateVisType({
	name: 'trClock',
        title: 'Clock',
        icon: 'fa-clock-o',
        description: 'Add a digital clock to your dashboards',
        requiresSearch: false,
        template: require('plugins/kibana-plugin-example/clock.html'),
        params: {
   	    editor: require('plugins/kibana-plugin-example/clock-editor.html'),
    	    defaults: {
                 format: 'HH:mm:ss'
            }
        }
    });

  }

  require('ui/registry/vis_types').register(ClockProvider);
  return ClockProvider;
});

var module = require('ui/modules').get('kibana-plugin-example');
module.controller('ClockController', function($scope, $timeout) {
  
  var setTime = function() {
    $scope.time = Date.now();
    $timeout(setTime, 1000);
  };
  setTime();
});
