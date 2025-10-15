import { time, date, weather } from "./utils.js";
import { libre, submitSearch } from "./miniEngine/opener.js";

$(document).ready(function() {
  time();
  date();
  weather("Sao Paulo");
  libre();
	autocomplete('')

  $('form').submit(function(e) {
    e.preventDefault()
    submitSearch();
  })

});

$('#q').on('input', function() {
	autocomplete($("#q").val())
});

function autocomplete(){

	fetch(`http://localhost/complete`,{
		method: 'POST',
		headers: {
			'Content-Type' : 'application/json'
		},
		body: JSON.stringify({
			query : $("#q").val(),
			engine : 'duck'
		})
	})
	.then(response => response.json())
	.then(data => {
		$("#q").autocomplete({
			source : data		
		});
	}, 100)
}
