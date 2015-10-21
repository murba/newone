


<script type="text/javascript">
	$(document).ready(function() {
		$.ajax({
			type: 'GET' ,
			url: 'chunk1.json' ,
			dataType: 'json' ,
			success: jsonParser
		});
	});
	
	function jsonParser(json) {
		$('#load').fadeOut();
		$.getJSON('chunk1.json' , function(data){
			$.each(data.speakers, function(k,v) {
				var title = v.title;
				var img = v.artwork;
				var url = v.url;
				var bywho = v.bywho;
				var when = v.when;
				$('#erp').append('<div class="flex-container col-xs-12 col-sm-12 col-md-6 col-lg-6"><div id="main" class="blend nobord newsholder lefty bothpad thumbnail col-xs-12 col-sm-12 col-md-12 col-lg-12"><a class="wordcolor" href="' + url + '"><img style="max-height:150px" class="round" src="' + img + '" alt="' + title + '"><p>' + title + '<br><span class="mediumwords wordcolor nopad">' + bywho + '<br>' + when + '</span></p></a></div></div>')
			});
		});
	}
</script>