var $grid = $('.grid');

$grid.imagesLoaded( function() {
  // init Isotope
  $grid.isotope({
    // options...
    itemSelector: '.post',
    layoutMode: 'masonry'
  });

});