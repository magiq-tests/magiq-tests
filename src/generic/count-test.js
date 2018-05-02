export function countCheck(selector, count) {
// check count of elements == count
  selector = selector || "g"
  var numOfBars = count || 0
  test("check number "+selector, function (t) {
    var count =$(selector).size()
    t.ok(count, count+"<- count vs data.len() ->"+numOfBars);
    t.end();
  });

}