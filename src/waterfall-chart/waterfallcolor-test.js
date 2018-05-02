export function waterfallColorCodeCheck(selector) {
// get number of unique colors and check if rect contain those s=color
  selector = selector || "svg > g rect"
  // get rect classes and then check color for each classes, True if all rect.class are equal  
  test('check waterfall bar color-code', function (t) {

    var barClassArr = [];
    var barFillArr = []
    $(selector).each(function () {
      barClassArr.push($(this).attr("class"))
    })
    barClassArr = _.uniq(barClassArr);

    _.each(barClassArr, function (clas) {

      var classFillArr = []

      $(selector+" ." + clas).each(function () {
        var fill = ($(this).attr("fill"));
        classFillArr.push(fill)

        // var stroke = ($(this).attr("stroke"));
        // t.ok(stroke, "Stroke:"+stroke)
      })
      classFillArr = _.uniq(classFillArr)
      t.ok((classFillArr.length == 1), "All rect." + clas + " filled with same color");

      barFillArr = classFillArr;
    })

    barFillArr = _.uniq(barFillArr)
    t.ok((barFillArr.length == barClassArr.length), "Unique Color for each bar class")

    t.end();
  });

}