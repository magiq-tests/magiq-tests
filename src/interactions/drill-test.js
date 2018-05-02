export function drillCheck(selector, clickBack, myInterval) {
// click transition forward and back with an interval
  selector = selector || "svg g.children"
  clickBack = clickBack || "g.grandparent"
  myInterval = myInterval || 500

  test("Interactive test", function (t) {
    var child_arr = $(selector)

    function clickElement(d) {

      setTimeout(function () {
        // var clicked = $(d).dispatch('click');
        t.ok($(d).dispatch('click'), "Clicked");
      }, myInterval);

      setTimeout(function () {
        // var backed = $(clickBack).dispatch("click")
        t.ok($(clickBack).dispatch("click"), "Back")
      }, myInterval * 2)

    }

    t.ok(child_arr, "Count :" + child_arr.length)

    var counter = 0
    var timer = setInterval(function () {
      clickElement(child_arr[counter])
      if (counter >= child_arr.length) {
        clearInterval(timer)
        t.end()
      }
      counter++
    }, myInterval * 2.5);


  })
}
/**
 * 
 * checks = {'stringCheck': true,
          'colorCheck': true,
        }

drillCheck("$('svg')", xyz, 2000, checks)
if (checks.stringCheck == true)
{
  textCheck();
}
 */