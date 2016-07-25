(function($, win) {
	$(document).ready(function() {
		//Model and service filter to make request based on the selected value
		$('.valueSelectors').on('change', function() {
			win.location = win.location.pathname+'?'+ $(this).data('handler')+'='+this.value;
		});
	});
})(jQuery, window);