//Al cargar la página//
$(document).ready(function(){
    //Botones//
    $("#boton1").click(function(){goToInicio();});

    $("#news1").click(function(){goToNews1();});

    $("#news2").click(function(){goToNews2();});

    $("#btncargar").click(function(){cargar();});

    //Escondemos el div con el loading button//
    $('#loading').hide();

    //botón activar - desactivar scroll//
    $('#autoscroll').click(function(){activateScroll();});

});

//botones con funcion de enlace//
function goToInicio(){
	window.location.href = 'index.html';
}

function goToNews1(){
	window.location.href = 'news1.html';
}

function goToNews2(){
    window.location.href = 'news2.html';
}

//Activar - Desactivar scroll//
var scrolling = true;

function activateScroll(){
    if (scrolling){
        scrolling = false;
        $('#autoscroll').text('Scroll: OFF');
    }else {
        scrolling = true;
        $('#autoscroll').text('Scroll: ON ');  
    }
}

//Carga de archivos JSON//
var numjson = 1;

//Cargar al hacer scroll//
$(window).scroll(function () {
    if (scrolling) {
        if($(window).scrollTop() + $(window).height() + 5 >= $(document).height()) {
            if (numjson < 4) {
                //loading div show
                $("#loading").fadeIn();
                //carga json
                $.getJSON("https://rawgit.com/IsmaFuentes/P-gina-web/v.final/json/" + numjson + ".json", function (jsonObject) {
                    buildrow(jsonObject);
                    //loading div hide
                    $("#loading").fadeOut();
                }); numjson++;
            }
        }
    }
});

//Cargar al usar el boton "More"//
function cargar() {
    if (numjson < 4) {
        //loading div show
        $("#loading").fadeIn();
        //carga json
        $.getJSON("https://rawgit.com/IsmaFuentes/P-gina-web/v.final/json/" + numjson + ".json", function (jsonObject) {
            buildrow(jsonObject);
            //loading div hide
            $("#loading").fadeOut();
        }); numjson++;
    }
};


//Presentación//
function buildrow(json) {
    $.each(json, function (i, item) {
        $("#noticias").append('<div class="col-sm-6 col-md-6">' +
            '<div class="thumbnail">' +
            '<div class="caption">' + '<h3 class="text-center">' + item.titulo + "</h3>" + 
            '<p class="text-center">Under construction</p>' +
            "</div>" +
            '<img src="' + item.img + '" alt="..." />' +
            '<div class="caption">' + 
            '<p class="date">' + item.date + "</p>" +
            '<p class="text-justify">' + item.descripcion + "</p>" +
            '<button type="button" class="btn center-block">Price</button>' + 
            "</div>" + "</div>" + "</div>");
    })
};



