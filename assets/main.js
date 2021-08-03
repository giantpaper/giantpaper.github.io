import './displayCode';
import './animations';
import jQuery from 'jquery';

(function($){
	$(document).ready(function(){
		
		$('#content a')
			.hover(function(){
				$(this).toggleClass('animate__jello');
			});
	});
})(jQuery);