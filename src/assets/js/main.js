$(".tablas").DataTable({

	"language": {

		"sProcessing": "Procesando...",
		"sLengthMenu": "Mostrar _MENU_ registros",
		"sZeroRecords": "No se encontraron resultados",
		"sEmptyTable": "Ningún dato disponible en esta tabla",
		"sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
		"sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
		"sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
		"sInfoPostFix": "",
		"sSearch": "Buscar:",
		"sUrl": "",
		"sInfoThousands": ",",
		"sLoadingRecords": "Cargando...",
		"oPaginate": {
			"sFirst": "Primero",
			"sLast": "Último",
			"sNext": "Siguiente",
			"sPrevious": "Anterior"
		},
		"oAria": {
			"sSortAscending": ": Activar para ordenar la columna de manera ascendente",
			"sSortDescending": ": Activar para ordenar la columna de manera descendente"
		}

	}

});
$(document).ready( function () {
    $('.tablas').DataTable();
} );

//LIMITA LA ESCRITURA, ME SIRVE PARA NOTICIAS U OTROS ELEMENTOS LOS CUALES NECESITE LIMITAR LA
function limitarEscritura(elemento, max_chars){
	limite_text = $(elemento).text();
	console.log("Me estoy ejecutando");
	if (limite_text.length > max_chars)
	{
	limite = limite_text.substr(0, max_chars)+" ...";
	$(elemento).text(limite);
	}
}

$(function(){
	limitarEscritura(".limitado", 10);
});
