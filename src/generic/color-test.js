export function colorFillCheck(selector,myColor) {
// check fill color aqgainst color
  selector = selector || "svg"
  // myColor = myColor || "#000"

  test('check color-fill for ' + selector, function (t) {

    $(selector).each(function () {
      var fill = ($(this).attr("fill")) || ($(this).css("fill"))
      if(myColor){
        t.equal(fill, myColor, "Color-Fill = " + fill);
      }else{
        t.ok(fill, "Color-Fill = " + fill);
      }
    })

    t.end();
  });

}

export function colorStrokeCheck(selector,myColor) {

  selector = selector || "svg"
  // myColor = myColor || "Black"

  test('check color-stroke for ' + selector, function (t) {

    $(selector).each(function () {
      var stroke = ($(this).attr("stroke")) || ($(this).attr("stroke"))
      if(myColor){
        t.equal(stroke, myColor, "Color-Stroke = " + stroke);
      }else{
        t.ok(stroke, "Color-Stroke = " + stroke)
      }
    })

    t.end();
  });

}