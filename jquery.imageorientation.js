(function($) {
	$.fn.orientation = function() {
	    $(this).each(function() {
		    var $image = $(this);
		    if ($image.height() > $image.width()) {
		        $image.addClass('portrait');
		    }
		    else if ($image.height() < $image.width()){
		        $image.addClass('landscape');
		    }
		    else if ($image.height() == $image.width()){
		        $image.addClass('square');
		    }
		    else{}
		});
	};
}(jQuery));
 
