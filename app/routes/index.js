import Ember from 'ember';
import { v1, v4 } from "ember-uuid";

export default Ember.Route.extend({
  model: function() {
    var url = 'http://thearchdruidreport.blogspot.com/feeds/posts/default';
    return new Ember.RSVP.Promise(function (resolve, reject) {
      feednami.load(url,function(payload) {
        if (payload.error) {
          reject(payload.error);
        } else {
          var result = [];
          var entries = payload.feed.entries;
          entries.forEach(function(el, index) {
            el['id'] = v1();
            result.push(el);
          });

          resolve(result);
        }
      });
    });
  }
});
