// Variables generales
var anchoVentana = $(window).width();
var altoVentana = $(window).height();

function resizeGeneral(){
  // Imágenes
  $(".resize-img").each(function() {
    var anchopadre = $(this).parent().width();
    $(this).aeImageResize({width:anchopadre});
  });
  // Vídeos
  $(".resize-video").each(function() {
    var anchopadrevideo = $(this).parent().width();
    $(this).width(anchopadrevideo);
    $(this).height((anchopadrevideo * 9) / 16);
  });
  // Elementos cuadrados adaptables
  $(".cuadrar").each(function() {
    var anchoMismo = $(this).width();
    $(this).height(anchoMismo);
  });
  // Centrado vertical
  $(".centrado-vertical").each(function() {
    var altoPropio = $(this).height();
    $(this).css("margin-top", (altoVentana - altoPropio) / 2);
  });
  // Alto de la navegacion
  $("nav").height(altoVentana);
};

$(document).ready(function() {
  // Activa los botones de la navegación
  var bodyID = $("body").attr("id");
  $("nav a").removeClass('activo');
  $("nav a."+bodyID).addClass('activo');
  // Muestra y oculta la navegación
  $("#boton_menu").click(function(e) {
    e.stopPropagation();
    $("nav.navegacion").stop().animate({width:"240px"}, 500, "linear");
    $(this).css("display","none");
    $("#boton_cerrar_menu").css("display","block");
  });
  $("#boton_cerrar_menu").click(function(e) {
    e.stopPropagation();
    $("nav.navegacion").stop().animate({width:"40px"}, 500, "linear");
    $(this).css("display","none");
    $("#boton_menu").css("display","block");
  });
  $(document).click(function(){
    $("nav.navegacion").stop().animate({width:"40px"}, 500, "linear");
    $("#boton_cerrar_menu").css("display","none");
    $("#boton_menu").css("display","block");
  });
  // Cierra tarjetas
/*  $(".descartar").each(function() {
    $(this).click(function(){
      $(this).parents(".tarjeta").parent().slideToggle();
    });
  });*/
  // Desplegables
  $(".desplegador").each(function() {
    $(this).click(function(e){
      e.stopPropagation();
      $(this).next().slideToggle();
    });
    $(document).click(function(){
      $(".desplegable .persiana").slideUp();
    });
  });
  // Descartar alertas
  $(".borrar-alerta").each(function() {
    $(this).click(function(e){
      e.stopPropagation();
      $(this).parents("li").slideToggle();
    });
  });
  // Controla los radios y los checkbox
  $("input:checkbox, input:radio").each(function() {
    if($(this).is(":checked")) {
      $(this).addClass("pulsado");
    }
  });
  $("input:checkbox, input:radio").change(function(){
    if($(this).is(":checked")) {
      $(this).addClass("pulsado");
    } else {
      $(this).removeClass("pulsado");
    }
  });
  // Input file
  $(":file").jfilestyle({
    buttonText: "<span class='icon icon-subir'></span>"
  });
});

$(document).ready(resizeGeneral);
$(window).resize(resizeGeneral);

$(window).load(function(){
  
});
