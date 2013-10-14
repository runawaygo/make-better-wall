// Generated by CoffeeScript 1.6.3
var refreshData;

refreshData = function() {
  var url;
  url = (function() {
    switch (window.location.hash) {
      case '#java':
        return 'java/results';
      case '#coffee':
        return 'coffee/results';
      default:
        return 'coffee/results';
    }
  })();
  return $.getJSON(url, function(data) {
    var groupItem, html, item, key, template, testcase, _i, _j, _len, _len1, _ref;
    $('.card-list-container').html('');
    template = Handlebars.compile($("#card-template").html());
    for (_i = 0, _len = data.length; _i < _len; _i++) {
      item = data[_i];
      item.testsuite.$.pass = item.testsuite.$.tests - item.testsuite.$.failures;
      _ref = item.testsuite.testcase;
      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
        testcase = _ref[_j];
        testcase.status = testcase.failure ? 'failed' : 'pass';
      }
      item.group = (function() {
        var _ref1, _results;
        _ref1 = _.groupBy(item.testsuite.testcase, function(testcase) {
          return testcase.$.classname;
        });
        _results = [];
        for (key in _ref1) {
          groupItem = _ref1[key];
          _results.push({
            name: key,
            testcase: groupItem
          });
        }
        return _results;
      })();
      html = template(item);
      $('.card-list-container').append(html);
    }
    $('#last-update').html('last update:' + (new Date()).toString().split(' ')[4]);
    $('.card').addClass('flash');
    return setTimeout(function() {
      return $('.card').removeClass('flash');
    }, 1000);
  });
};

$(function() {
  $('.card-list-container').delegate('.card', 'click', function(event) {
    return $(this).toggleClass('detail');
  });
  $('#last-update').click(refreshData);
  refreshData();
  return setInterval(refreshData, 30000);
});
