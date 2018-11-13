/* eslint-disable */

{
  // ES3,ES5
  var evens = [1, 2, 3, 4, 5];
  var odds = evens.map(function(v) {
    return v + 1
  });
  console.log(evens, odds);
};
{
  // ES6
  /**
   * 当只有一个参数时，()可省略
   * 当{}中的表达式当做返回值时，{}可省略
   * @type {[*]}
   */
  let evens = [1, 2, 3, 4, 5];
  let odds = evens.map(v => v + 1);
  console.log(evens, odds);
}

{
  // ES3,ES5
  /**
   * this指向是调用时this的指向
   */
  var factory = function() {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: function() {
        return this.a
      }
    }
  }

  console.log(new factory().c.b());
};

{
  /**
   * this指向是定义时this的指向
   */
  var factory = function() {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: () => {
        return this.a
      }
    }
  }
  console.log(new factory().c.b());
}
