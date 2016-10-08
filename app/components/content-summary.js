import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    var _element = this.get("element");
    $clamp(_element);
  },

  summary: Ember.computed("content", function() {
    var html = this.get("content");
    var tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

    var tagOrComment = new RegExp(
        '<(?:'
        // Comment body.
        + '!--(?:(?:-*[^->])*--+|-?)'
        // Special "raw text" elements whose content should be elided.
        + '|script\\b' + tagBody + '>[\\s\\S]*?</script\\s*'
        + '|style\\b' + tagBody + '>[\\s\\S]*?</style\\s*'
        // Regular name
        + '|/?[a-z]'
        + tagBody
        + ')>',
        'gi');
    
    html = html.replace(tagOrComment, ''); 
    var short_description = html.substring(0,200);
    return short_description;
  })
});
