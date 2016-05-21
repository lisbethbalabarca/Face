//SE DECLARAN LAS Variables! :D
var pais1=peru;
var pais2=mexico;
var arreglo= [];
var num1=aleatorio(pais1);
var num2=aleatorio(pais2);

/* ESTE EVENTO EN JQUERY, PERMITE QUE SE PUEDA 
SELECCIONAR EL DOCUMENTO CON LOS ARRAYS DE LOS PAISES*/
$("#seleccion").on("change", function() {
  var b = $("#seleccion").val();
  2 == b ? fotos(peru, "peru", num1) : 3 == b && fotos(mexico, "mexico", num2);
});

/*ALEATORIO POR IVAN... :) */
function aleatorio(b) {
  b = b.length;
  var c, d = !0;
  do {
    c = Math.round(Math.random() * (b - 1)) + 1, arreglo.length == b ? (c = -1, d = !1) : 0 == arreglo.length ? (arreglo.push(c), d = !1) : 0 > arreglo.indexOf(c) ? (arreglo.push(c), d = !1) : console.log("Repite->" + c);
  } while (d);
  return c;
}

/*nos da la ruta de las fotos*/
function fotos(b, c, d) {
  b = "fotos/" + c + "/" + b[d].image;
  $("#image").html("<img class='photo' src='" + b + "'/>");
}
/*Con esta función se declara el imput del nombre, 
se uso tolowercase para no diferencias mayusculas de minusculas*/
var a = 0, i = 0;
function random() {
  $("#coder_name").val().toLowerCase() == pais1[num1].name.toLowerCase() ? ($("#message").text("Buenazoooo!! "), a += 5, $("#text").html(a + " puntos"), num1 = aleatorio(pais1), fotos(peru, "peru", num1)) : $("#coder_name").val().toLowerCase() == pais2[num2].name.toLowerCase() ? ($("#message").text("Buenazoooo"), a += 5, $("#text").html(a + " puntos"), num2 = aleatorio(pais2), fotos(mexico, "mexico", num2)) : ($("#message").text("Cuec Cuec Cuec :v"), --a, $("#text").html(a + " puntos"), i++, 5 == 
  i && (num1 = aleatorio(pais1), fotos(peru, "peru", num1)));
  clean();
}

$("#comprobar").click(random);

function clean() {
  $("#coder_name").val("");
}
;