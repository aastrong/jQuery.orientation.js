(function($) {
	$.fn.orientation = function() {
	    $(this).each(function() {
		    var $item = $(this);
		    if ($item.height() > $item.width()) {
		        $item.addClass('portrait');
		    }
		    else if ($item.height() < $item.width()){
		        $item.addClass('landscape');
		    }
		    else if ($item.height() == $item.width()){
		        $item.addClass('square');
		    }
		    else{}
		});
	};
}(jQuery));
 
