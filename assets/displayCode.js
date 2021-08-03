import jQuery from 'jquery';
import Prism from 'prismjs';


(function($){
	$(document).ready(function(){
		
		$('code').each(function(){
			let $code = $(this);
			let filename = $code.attr('data-filename');
			let lang = $code.attr('data-lang');
			
			console.log('code/' + filename + '.txt');
			
			$.get('code/' + filename + '.txt', function(contents){
				contents = Prism.highlight(contents, Prism.languages[lang], lang);
				
				$code.html(contents);
			});
		});
		
	});
})(jQuery);