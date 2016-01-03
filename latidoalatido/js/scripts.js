// Variables generales
var anchoVentana = $(window).width();
var altoVentana = $(window).height();
var altoContenidoOficial = $(".bloque-ppal").height();

function resizeGeneral(){
  anchoVentana = $(window).width();
  altoVentana = $(window).height();
  // Alto de la navegacion
  if (anchoVentana <= 640) {
    $(".mas-sitios").height(altoVentana);
  };
  // Alto de la navegacion
  if (anchoVentana <= 960) {
    $("nav.navegacion").height(altoVentana);
  };
  // Cabecera sticky
  $("header.cabecera").stick_in_parent();
  // Robapáginas sticky
  if (anchoVentana >= 961) {
    var altoRobapaginas = $("#primer_roba_lateral").height();
    $("#primer_roba_lateral").css('height', altoRobapaginas);
    $("#primer_roba_lateral").stick_in_parent({
      offset_top: 80,
    });
  };
  // Cálculo del ancho de las orejas
  var anchoCuerpo = $('header.cabecera').width();
  var anchoOreja = anchoVentana - anchoCuerpo;
  $('.oreja').width(anchoOreja / 2);
};

function resizeColumna(){
  // Alto de la columna oficial
  altoContenidoOficial = $(".bloque-ppal").height();
  if (anchoVentana >= 961) {
    $(".bloque-oficial, .bloque-en-portada").css("min-height", altoContenidoOficial);
  };
};

function createPopup(url, width, height) {
    newwindow=window.open(url,'name','height='+height+',width='+width);
    if (window.focus) {newwindow.focus()}
    return false;
}

$(document).ready(function() {
  // Activa los botones de la navegación
  var bodyID = $("body").attr("id");
  $("nav a").removeClass('activo');
  $("nav a."+bodyID).addClass('activo');
  if (anchoVentana <= 960) {
    // Muestra y oculta la navegación
    $(".boton-navegacion").click(function(e) {
      e.stopPropagation();
      $("nav.navegacion").stop().animate({right:"0"}, 500, "linear");
      $(".mas-sitios").stop().animate({left:"-240px"}, 500, "linear");
    });
    $(".boton-navegacion").click(function(e){
      e.stopPropagation();
    });
    // Muestra y oculta la pestaña de "más sitios"
    $("#mas-sitios").click(function(e) {
      e.stopPropagation();
      $(".mas-sitios").stop().animate({left:"0"}, 500, "linear");
      $("nav.navegacion").stop().animate({right:"-240px"}, 500, "linear");
    });
    $("#mas-sitios").click(function(e){
      e.stopPropagation();
    });
    $(document).click(function(){
      $(".mas-sitios").stop().animate({left:"-240px"}, 500, "linear");
      $("nav.navegacion").stop().animate({right:"-240px"}, 500, "linear");
    });
  };
  // Carrusel
  $(".carrusel").each(function() {
    var numeroElementos = $(this).children().length;
    $(this).owlCarousel({
      items:1,
      nav:true,
      navRewind:false,
      navText:["<span class='icon icon-flecha-izq'></span>","<span class='icon icon-flecha-der'></span>"],
      dots:false,
      info:true
    });
    $(this).find('.owl-controls').append('<span class="actual"></span>');
    $(this).find('.owl-controls').append('<span class="total"></span>');
    var elementoActual = 0;
    $(this).find('.total').text(numeroElementos);
    $(this).find('.actual').text(elementoActual + 1 + " /");
    $(this).on('changed.owl.carousel', function(event) {
      var elementoActual = event.item.index;
      $(this).find('.actual').text(elementoActual + 1 + " /");
    });
  });
  resizeGeneral();
});

$(window).resize(function(){
  resizeGeneral();
  resizeColumna();
});

$(window).load(function(){
  resizeColumna();
});
