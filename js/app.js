$(document).ready(function(){
	var titles;
	var wikiData = "https://en.wikipedia.org/w/api.php?action=query&titles=" + titles + "&prop=revisions&rvprop=content&format=json"
	

	$("#submit").click(function(){
		alert("Woooooo!!!");
		$.getJSON(wikiData, function(data) {
			titles = ;
		})
	})
			$("p").html(titles);

});