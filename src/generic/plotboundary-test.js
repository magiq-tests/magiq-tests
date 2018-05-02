export function plotBoundaryCheck(selector, height, width, attrX, attrY) {
// check if selector is contained in args
  selector = selector || "g"
  height = height || 500
  width = width || 500
  attrX = attrX || "x"
  attrY = attrY || "y"

  test("Individual plot check", function (t) {
    $(selector).each(function () {
      var cy = ($(this).attr(attrX));
      var cx = ($(this).attr(attrY));
      t.ok(cy >= 0 && cy < height, "plot(y) =" + cy);
      // t.ok(cy >= 0, "Height boundary check");
      t.ok(cx >= 0 && cx < width, "plot(x) =" + cx);
    })
    t.end();
  });

}