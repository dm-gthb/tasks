function countTime (dateString) {
  var objectWithTime = {
    init: function(dateString) {
      this.date = new Date(dateString);
      return this;
    },

    method: {
      years: 'FullYear', 
      months: 'Month',
      days: 'Date',
      hours: 'Hours',
      minutes: 'Minutes'
    },

    // add: function(num, unit) {
    //   if (unit == 'years') {
    //       date.setFullYear(date.getFullYear() + num);
    //       console.log(date);
    //       return this; 
    //   }
    // },
    // subtract: function(num, unit) {
    //   if (unit == 'years') {
    //       date.setFullYear(date.getFullYear() - num);
    //       console.log(date);
    //       return this; 
    //   }
    // }

    add: function(num, unit, subtract) {
      if (num < 0) {
        throw new TypeError;
      } else if (unit in this.method) {
        return this.makeСalculation(num, this.method[unit], subtract);
        console.log('ok');
      } else {
        throw new TypeError;
      }
    },

    makeСalculation: function(num, method, subtract) {
      if (subtract) {
        this.date['set'+ method](this.date['get'+ method]() - num);
        return this;
      }
      this.date['set'+ method](this.date['get'+ method]() + num);
      return this;
    },

    subtract: function(num, unit) {
      return this.add(num, unit, 'subtract');
    },

    value: function() {
      var year = this.date.getFullYear();
      var month = this.date.toLocaleString("ru",{month: '2-digit'});
      var day = this.date.toLocaleString("ru",{day: '2-digit'});
      var time = this.date.toLocaleString("ru",{ hour: '2-digit', minute: '2-digit' });
      var result = year + "-" + month + "-" + day + " "+time;
      console.log(result);
      return result;
    }
  }

  return objectWithTime.init(dateString);
};

var string = '2017-05-16 13:45';

var time = countTime(string);

time.add(24, 'hours');
time.subtract(1, 'months');
time.add(3, 'days');
time.add(15, 'minutes');
time.value();
