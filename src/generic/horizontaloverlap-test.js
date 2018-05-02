export function horizontalOverlapCheck(selector) {
// check if any list of horizontal elemnts overlap eachother
  selector = selector || "svg > g"
  test("check overlap", function (t) {
    var leftArr = []
    var rightArr = []
    var textArr = []
    $(selector).each(function () {
      var left = ((this).getBoundingClientRect().left)
      var right = ((this).getBoundingClientRect().right)
      var text = $(this).text()
      leftArr.push(left);
      rightArr.push(right);
      textArr.push(text)

    })

    for (var i = 1; i < leftArr.length; i++) {
      t.ok((rightArr[i - 1] < leftArr[i]), "Overlap Check =" + textArr[i])

    }
    t.end()
  })
}