require('plugins/kibana-plugin-example/tagcloudController')

function TagcloudProvider(Private) {
  var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

  var Schemas = Private(require('ui/Vis/Schemas'));
 
  return new TemplateVisType({
    name: 'trTagcloud', // The internal id of the visualization (must be unique)
    title: 'Tagcloud', // The title of the visualization, shown to the user
    description: 'Tagcloud visualization', // The description of this vis
    icon: 'fa-cloud', // The font awesome icon of this visualization
    template: require('plugins/kibana-plugin-example/tagcloud.html'),
    schemas: new Schemas([
      {
	group: 'metrics',
        name: 'tagsize',
        title: 'Tagsize',
        min: 1,
        max: 1,
        aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']	
      },
      {
	group: 'buckets',
        name: 'tags',
        title: 'Tags', 
        min: 1, 
        max: 1, 
        aggFilter: '!geohash_grid'
      }

    ])
  });
}
 
require('ui/registry/vis_types').register(TagcloudProvider);
