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
  if (anchoVentana <= 640) {
    $(".mas-sitios").height(altoVentana);
    $("nav.navegacion").height(altoVentana);
  };
};

$(document).ready(function() {
  // Activa los botones de la navegación
  var bodyID = $("body").attr("id");
  $("nav a").removeClass('activo');
  $("nav a."+bodyID).addClass('activo');
  // Muestra y oculta la navegación
  if (anchoVentana <= 640) {
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
  };
  // Muestra y oculta la pestaña de "más sitios"
  if (anchoVentana <= 640) {
    $("#mas-sitios").click(function(e) {
      e.stopPropagation();
      $(".mas-sitios").stop().animate({left:"0"}, 500, "linear");
    });
    $("#boton_cerrar_menu").click(function(e) {
      e.stopPropagation();
      $(".mas-sitios").stop().animate({left:"-240px"}, 500, "linear");
    });
    $(document).click(function(){
      $(".mas-sitios").stop().animate({left:"-240px"}, 500, "linear");
    });
  };
  // Carrusel de noticias destacadas en portada
  $(".carrusel-destacados").each(function() {
    $(this).owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayHoverPause:true
    });
    var numeroElementos = $(".owl-dots .owl-dot").length;
    $(this).find(".owl-dot").width(100/numeroElementos+"%");
    var altoCarrusel = $(this).find("article").height();
    if (anchoVentana >= 641) {
      $(this).find(".textos").height(altoCarrusel-30);
    };
  });
});

$(document).ready(resizeGeneral);
$(window).resize(resizeGeneral);

$(window).load(function(){
  
});