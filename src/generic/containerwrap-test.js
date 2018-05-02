export function containerTextWrapCheck(selector,textSelector) {
// check if text is contaied in the parent element or overflowing
  selector = selector || 'g  rect'
  textSelector = textSelector || "g text" 
  test("check text-wrap", function (t) {
    var textArr = [], rectArr = [];
    $(textSelector).each(function () {
      var text = ((this).getBoundingClientRect())
      textArr.push(text)
    })
    $(selector).each(function () {
      var rect = ((this).getBoundingClientRect())
      rectArr.push(rect)
    })

    _.each(textArr, function (d, i) {
      // var txtWidth = textArr[i].width;
      // var rctWidth = rectArr[i].width;
      // t.ok((txtWidth <= rctWidth), "txt" + txtWidth + "rect" + rctWidth);
      var width = textArr[i].width <= rectArr[i].width
      var height = textArr[i].height <= rectArr[i].height
      t.ok((width && height), "Text-Wrap/Text-overflow " + "Vertical-" + height + " Horizontal-" + width)
    })

    t.end()
  })

}