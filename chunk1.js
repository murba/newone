


<script>
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
			.each(data.paintings.painting, function(k,v) {
				var title = v.title;
				var img = v.artwork;
				var url = v.url;
				$('#erp').append('<div class="painting"><a href="' + url + '"><img src="' + img + '"><p>' + title + '</p></a></div>')
			});
		});
	}
</script>



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
				$('#erp').append('<div class="painting"><a href="' + url + '"><img src="' + img + '"><p>' + title + '</p></a></div>')
			});
		});
	}
</script>





