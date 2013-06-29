jQuery('document').ready(function($) {
    var transition = function($newEl, callback) {
		var $oldEl = this;      // reference to the DOM element that is about to be replaced

		$oldEl.fadeOut('fast', function () {
			$oldEl.after($newEl);
            callback();

			$newEl.hide();
			$newEl.fadeIn('slow');
			$oldEl.remove();	// removes 'oldEl'
		});
    }

    function initMap() {
        if($('#map_canvas').length) {
            var map_canvas = document.getElementById('map_canvas');
            var map_options = {
              center: new google.maps.LatLng(44.5403, -78.5463),
              zoom: 8,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }
            var map = new google.maps.Map(map_canvas, map_options);
        }
    }
    initMap();

   $('body').djax('.one-third', [], transition);

   $(window).bind('djaxLoad', function(e, params) {
        if(params.url === '3.html') {
            initMap();
        }
   });
});