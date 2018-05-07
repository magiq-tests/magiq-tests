(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.magiq = global.magiq || {}, global.magiq.bar = {})));
}(this, (function (exports) { 'use strict';

function barAxisLabelCheck(selector) {
// check axis ticks and output text

  selector = selector || "svg > g > g.axis-x g.tick";
  test("check labels for "+selector, function (t) {
    $(selector).each(function () {
      var tick = $(this).text();
      t.ok(tick, selector+" tick = " + tick);
    });
    t.end();
  });
}

function barCountCheck(selector) {
// check count for selector
  selector = selector || "svg > g rect";
  test("check number of bars created", function (t) {
    var numOfBars = $(selector).length;
    t.ok(numOfBars, "Number of Bars =" + numOfBars);
    t.end();
  });
}

function barHeightCheck(selector) {
// check individual bar height
  selector = selector || "svg > g > rect";
  test('check individual plot height', function (t) {
    $(selector).each(function () {
      var cy = $(this).attr("cy");
      t.ok(cy >= 0, "Plot height");
    });
    t.end();
  });

}

//BAR-Chart

exports.barAxisLabelCheck = barAxisLabelCheck;
exports.barCountCheck = barCountCheck;
exports.barHeightCheck = barHeightCheck;

Object.defineProperty(exports, '__esModule', { value: true });

})));
