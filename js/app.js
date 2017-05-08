$(document).ready(function(){
	var title;

	$("#submit").click(function(){
		// $.getJSON(wikiData, function(data) {
			title = $(mySearch).val();
			var wikiData = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + "&limit=1"

			var url = $(this).attr('href');
			window.open(wikiData);
		// })
	})
});