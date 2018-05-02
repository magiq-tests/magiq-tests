export function textWrapCheck(selector, length) {
// text should not exceed the given length
  selector = selector || "text"
  length = length || 5

  test("text-wrap check for " + selector, function (t) {
    try {
      $(selector).each(function () {
        var text = ($(this).text());
        t.ok(text.length<=length, "Text:" + text)
      })
    } catch (err) {
      t.fail("No Text:" + err)
    }
    t.end();
  })
}