(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.magiq = global.magiq || {}, global.magiq.interact = {})));
}(this, (function (exports) { 'use strict';

function appendDataCheck(selector) {
// Append data to text field generating random string
  selector = selector || "textarea";

  test("check if data is appended at " + selector, function (t) {
    $(selector).each(function () {
      var res = $(this);
      var text = makeid();
      res.append();
      t.ok(res, "Text "+text);
    });
    t.end();
  });
}

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < Math.random(); i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function mouseOverCheck(selector) {
// mouse hover for the selector
  selector = selector || "svg g";

  test("check mouse-over", function (t) {
    $(selector).each(function () {
      var res = $(this).trigger("mouseover") || $(this).trigger("mouseenter");
      t.ok(res, "mouseover");
    });
    t.end();
  });
}

function drillCheck(selector, clickBack, myInterval) {
// click transition forward and back with an interval
  selector = selector || "svg g.children";
  clickBack = clickBack || "g.grandparent";
  myInterval = myInterval || 500;

  test("Interactive test", function (t) {
    var child_arr = $(selector);

    function clickElement(d) {

      setTimeout(function () {
        // var clicked = $(d).dispatch('click');
        t.ok($(d).dispatch('click'), "Clicked");
      }, myInterval);

      setTimeout(function () {
        // var backed = $(clickBack).dispatch("click")
        t.ok($(clickBack).dispatch("click"), "Back");
      }, myInterval * 2);

    }

    t.ok(child_arr, "Count :" + child_arr.length);

    var counter = 0;
    var timer = setInterval(function () {
      clickElement(child_arr[counter]);
      if (counter >= child_arr.length) {
        clearInterval(timer);
        t.end();
      }
      counter++;
    }, myInterval * 2.5);


  });
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

exports.appendDataCheck = appendDataCheck;
exports.mouseOverCheck = mouseOverCheck;
exports.drillCheck = drillCheck;

Object.defineProperty(exports, '__esModule', { value: true });

})));
