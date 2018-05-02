export function textAlignCheck(selector,align) {
// check if text has the given alignment
  selector = selector || "text"
  align = align || "center"
  test("check text-"+align, function (t) {
    var anchor;
    $(selector).each(function () {
      anchor = ($(this).attr("text-anchor")) || ($(this).css("text-anchor"));
      t.ok((anchor == align), "Text Anchor:" + anchor)
      // t.ok((anchor == "middle"), "Text Anchor:" + anchor)
    })
    t.end()
  })


}