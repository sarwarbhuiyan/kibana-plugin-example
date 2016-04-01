module.exports = function(kibana) {
  return new kibana.Plugin({
     uiExports: {
      visTypes: [ 'plugins/kibana-plugin-example/clock',
                  'plugins/kibana-plugin-example/tagcloud' ]
    }

  });
};
