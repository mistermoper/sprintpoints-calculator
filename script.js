var personsModel = {
  name: "Name",
	days: 5,
	sprint: 2,
	training: 3,
	unexpected: 0.5
}
console.log(personsList);

if (typeof(personsList) == "undefined") {
  var personsList = [
    $.extend({}, personsModel),
    $.extend({}, personsModel),
    $.extend({}, personsModel),
    $.extend({}, personsModel)
  ];
}

new Vue({
  el: '#app',
  data: {
    total: 0,
    persons: personsList,
  },
   methods: {
    getPersonTotal: function(person) {
      return (8 - 1) * person.days - person.sprint - person.training - person.days * person.unexpected;
    },
    getDays: function() {
      var days = 0;
      for (var i = 0; i < this.persons.length; i++) {
        if (this.persons[i].days > days) {
          days = this.persons[i].days;
        }
      }
      return days;
    },
    getTotal: function() {
      var total = 0;
      for (var i = 0; i < this.persons.length; i++) {
        var person = this.persons[i];
        if (person.days > 0) {
          total+= this.getPersonTotal(person);
        }
      }
      return total;
    }
  }
})
