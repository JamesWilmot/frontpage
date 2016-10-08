import Ember from 'ember';

export function safeHtml(string) {
  return new Ember.Handlebars.SafeString(string);
}

export default Ember.Helper.helper(safeHtml);
