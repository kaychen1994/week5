"use strict";

// reply
$('.reply').click(function (e) {
  e.preventDefault();
  $('.replyArea').addClass('active');
}); // cancel

$('.cancel').click(function (e) {
  e.preventDefault();
  $('.replyArea').removeClass('active');
});
//# sourceMappingURL=all.js.map
