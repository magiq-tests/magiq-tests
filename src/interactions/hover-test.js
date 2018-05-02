export function mouseOverCheck(selector) {
// mouse hover for the selector
  selector = selector || "svg g"

  test("check mouse-over", function (t) {
    $(selector).each(function () {
      var res = $(this).trigger("mouseover") || $(this).trigger("mouseenter")
      t.ok(res, "mouseover")
    })
    t.end();
  })
}