import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "",

  day: Ember.computed("date", function() {
    var _date = new Date(this.get("date"));
    this.debug(_date);
    return parseInt(_date.toString("dd"));
  }),

  ordinal: Ember.computed("day", function() {
    var _day = this.get("day");
    return (_day>10 && _day<20 ? 'th' : {1:'st', 2:'nd', 3:'rd'}[_day % 10] || 'th')
  }),

  month: Ember.computed("date", function() {
    var _date = new Date(this.get("date"));
    return _date.toString('MMMM');
  }),

  year: Ember.computed("date", function() {
    var _date = new Date(this.get("date"));
    return _date.toString('yyyy');
  }),
});
