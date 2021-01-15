$(document).ready(function(){

	$.getJSON('https://cdn.rawgit.com/IsmaFuentes/pruebas/7b206502/b.json', function(data) {

		$.each(data, function(id, value){
			$("#propietarios").append('<option name="'+ id +'">'+value.nombre+'</option');

		});

		$("select").change(function(){
			$.each(data, function(id, value){
				if($("select :selected").text() == value.nombre){
					$("#nombre").val(value.nombre);
					$("#codigo").val(value.codigo);
			}

			});


		});


	});


});


