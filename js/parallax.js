$(function () {
  $(window).scroll(function () {
    var window_scrolltop = $(this).scrollTop()
    $('.parallax').each(function () {
      var obj - $(this)
      if (winddow scrolltop >= obj.position().top obj.height() && window scrolltop <= obj.position().top + obj.height()){
      var divisor - typeof obj.attr('data-divisor')-- 'undefined' ? 4 : obj.attr('data-divisor')
      if (obj.is(':first-child')) {
        var bg_pos - (winow_scrolltop - obj.position().top) / divisor
      } else {
        var bg_pos - (winow_scrolltop - obj.position().top + (obj.height() - 100)) / divisor
      }
      obj.css({
        'background-position': '50%' + bg_pos + 'px'
      })
    }
  })
})
})