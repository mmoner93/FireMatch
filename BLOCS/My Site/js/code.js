
/***********Declaraciones de estructuras**************/

function jugador() {
  this.list_rondas = [];
  this.ronda_actual = 0;
  this.isLookingDisonace = false;
  this.contadorClickDisonance = 0;
  this.disonanceTemp = null;
  this.maxImagenDesbloqueada = 1;
  this.maxAtributoDesbloqueado = 1;
  this.alma=false;
  this.coins=0;
  this.FaseJugador="introduccion";
}

function ronda() {
  this.main_caracter = "";
  this.list_caracters = [];
  this.fichaUsing = 0;
  this.chatUsing = 0;
  this.personajeAsignado = "";
  this.nota_pareja_Asignado = -1;
  this.list_Disonances = [];
  this.faseActual = 0;
  this.Apuesta = -1;//0 bien , 1 neutro , 2 mal
  this.pistaTrue = "";
  this.pistaFalse = "";
  this.countImagenDesbloqueada = 0;
  this.countAtributoDesbloqueado = 0;
  this.preguntaDiablo="";
  this.textoResultadoBueno="Pareja buena";
  this.textoResultadoMalo="Pareja mala";
  this.textoResultadoNeutro="Pareja neutra";
  this.imgBueno="https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";
  this.imgMalo="https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";
  this.imgNeutro="https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";
}


function caracter(isMain, name) {
  this.isMain = isMain;
  this.name = name;
  this.list_atributes = [];
  this.list_photos = [];
  this.foto_showing = 0;
  this.list_chat = [];
  this.nota_pareja = 0;//0bien , 1 neutro , 2 mal
}

function atribute(description, isDisonance, isBlock) {
  this.description = description;
  this.isDisonance = isDisonance;
  this.isBlock = isBlock;
}

function photo_caracter(src, isDisonance, isBlock) {
  this.src = src;
  this.isDisonance = isDisonance;
  this.isBlock = isBlock;
  this.srcBlocked = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";

}

function disonance(que1, quien1, isMain1, que2, quien2, isMain2, typeDisonance) {
  this.que1 = que1;
  this.quien1 = quien1;
  this.isMain1 = isMain1;
  this.que2 = que2;
  this.quien2 = quien2;
  this.isMain2 = isMain2;
  this.typeDisonance = typeDisonance; //1 es bueno , 2 malo
  this.reached = false;
}

function main_escritorio() {
  this.usingPantalla1 = false;
  this.cualPantalla1 = "";
  this.usingPantalla2 = false;
  this.cualPantalla2 = "";
}

function chat(question, answer) {
  this.question = question;
  this.answer = answer;
  this.answerDisonance = false;
  this.used = false;
}

function pantalla() {

}

/***********Declaraciones de estructuras  END**************/


/***********INICIALIZAR**************/

var escritorio = new main_escritorio();
var jugador = new jugador();



/*RONDA 1-----*/
var ronda_prueba = new ronda();
var personaje_prueba = new caracter(true, "Kevin");

var atributo_1 = new atribute("Me gusta el deporte", false, false);
var atributo_2 = new atribute("Salir de fiesta es mi pasión", false, false);
var atributo_3 = new atribute("Las chicas operadas son más bonitas", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://image.shutterstock.com/z/stock-vector-vector-pixel-art-suspicious-man-isolated-cartoon-1591895995.jpg", false, false);
var foto2 = new photo_caracter("https://image.shutterstock.com/image-vector/vector-pixel-art-girl-anime-600w-1102810826.jpg", false, false);
var foto3 = new photo_caracter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2BGxHSQK46Kgw49miYuO3142BjlvC9j_lA&usqp=CAU", false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Karen");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Me gusta el jazz", false, false);
var atributo_2 = new atribute("Soy psicóloga", false, false);
var atributo_3 = new atribute("Creo que todo el mundo puede cambia", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://www.lorealprofessionnel.es/-/media/master/es/webedia-hair-trend-news-2/es_es/3144/7192-peinados-para-cara-redonda-orig-2.ashx", false, false);
var foto2 = new photo_caracter("https://i.pinimg.com/originals/db/50/89/db508974ed8fbd967c62df21ce5a1eb3.jpg", false, false);
var foto3 = new photo_caracter("https://img4.codigonuevo.com/ef/de/06/caras-futuro-mileniales-codigo-nuevo-930x600.jpg", false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Pues ser nini");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Yénifer");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("El gimnasio es un plus de puntos", false, false);
var atributo_2 = new atribute("Me gustan los chicos divertidos", false, true);
var atributo_3 = new atribute("Si tienes abdominales te doy mi teléfono.", false, false);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg", false, true);
var foto2 = new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg", false, false);
var foto3 = new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg", false, false);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

//personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);


var disonance1 = new disonance("atributo_1", "Karen", false, "atributo_1", "Kevin", true, 2);
//var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
var disonance3 = new disonance("img_caracter_0", "Karen", false, "atributo_2", "Karen", false, 1);


ronda_prueba.main_caracter = personaje_prueba;
ronda_prueba.list_caracters.push(personaje_prueba1);
ronda_prueba.list_caracters.push(personaje_prueba2);

ronda_prueba.list_Disonances.push(disonance1);
//ronda_prueba.list_Disonances.push(disonance2);
ronda_prueba.list_Disonances.push(disonance3);
ronda_prueba.pistaTrue = "Los rubios se atraen";
ronda_prueba.pistaFalse = "Los rubios se atraen";
ronda_prueba.preguntaDiablo="Para dar más emoción a tu trabajo… Vamos a hacer unas apuestas. ¿Qué resultado crees que tendrá tu siguiente pareja ? Si ganas.. te daré unas monedas extras. Si pierdes tranquilo, es solo para divertirme!";
/*RONDA 2----*/


var ronda_prueba2 = new ronda();
var personaje_prueba = new caracter(true, "Leo Nahuel");


var atributo_1 = new atribute("Me encantan los animales", false, false);
var atributo_2 = new atribute("Mis días no cuentan si no he comido hummus.", false, false);
var atributo_3 = new atribute("realfooding 4 life", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://image.shutterstock.com/z/stock-vector-vector-pixel-art-suspicious-man-isolated-cartoon-1591895995.jpg", false, false);
var foto2 = new photo_caracter("https://image.shutterstock.com/image-vector/vector-pixel-art-girl-anime-600w-1102810826.jpg", false, false);
var foto3 = new photo_caracter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2BGxHSQK46Kgw49miYuO3142BjlvC9j_lA&usqp=CAU", false, false);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Anabel");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Me encantan las hamburguesas", false, false);
var atributo_2 = new atribute("Soy más de perros", false, false);
var atributo_3 = new atribute("El mejor relax es un paseo por la montaña", false, false);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://www.lorealprofessionnel.es/-/media/master/es/webedia-hair-trend-news-2/es_es/3144/7192-peinados-para-cara-redonda-orig-2.ashx", false, false);
var foto2 = new photo_caracter("https://i.pinimg.com/originals/db/50/89/db508974ed8fbd967c62df21ce5a1eb3.jpg", false, false);
var foto3 = new photo_caracter("https://img4.codigonuevo.com/ef/de/06/caras-futuro-mileniales-codigo-nuevo-930x600.jpg", false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Pues ser nini");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Erica");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("Piensa en verde, tanto comida como lo otro… jiji", false, false);
var atributo_2 = new atribute("Mi sueño es tener una protectora de animales", false, false);
var atributo_3 = new atribute("Te vienes a vivir conmigo a un pueblo?", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg", false, false);
var foto2 = new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg", false, false);
var foto3 = new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg", false, true);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

//personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);


//var disonance1 = new disonance("atributo_1", "Pepe pruebas", true, "atributo_1", "Juan pruebas", false, 2);
//var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
//var disonance3 = new disonance("img_caracter_0", "Juan pruebas", false, "atributo_2", "Juan pruebas", false, 1);


ronda_prueba2.main_caracter = personaje_prueba;
ronda_prueba2.list_caracters.push(personaje_prueba1);
ronda_prueba2.list_caracters.push(personaje_prueba2);

//ronda_prueba2.list_Disonances.push(disonance1);
//ronda_prueba2.list_Disonances.push(disonance2);
//ronda_prueba2.list_Disonances.push(disonance3);


/*RONDA 3---*/


var ronda_prueba3 = new ronda();
var personaje_prueba = new caracter(true, "Amelia");


var atributo_1 = new atribute("Tengo tanto sentido de la justicia que me he sacado las oposiciones.", false, false);
var atributo_2 = new atribute("Mis amigas dicen que a veces se me va la olla.", false, false);
var atributo_3 = new atribute("Solo quiero que me quieran.", false, false);
personaje_prueba.list_atributes.push(atributo_1);
personaje_prueba.list_atributes.push(atributo_2);
personaje_prueba.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://image.shutterstock.com/z/stock-vector-vector-pixel-art-suspicious-man-isolated-cartoon-1591895995.jpg", false, false);
var foto2 = new photo_caracter("https://image.shutterstock.com/image-vector/vector-pixel-art-girl-anime-600w-1102810826.jpg", false, false);
var foto3 = new photo_caracter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2BGxHSQK46Kgw49miYuO3142BjlvC9j_lA&usqp=CAU", false, true);
personaje_prueba.list_photos.push(foto1);
personaje_prueba.list_photos.push(foto2);
personaje_prueba.list_photos.push(foto3);



var personaje_prueba1 = new caracter(false, "Iker");
personaje_prueba1.nota_pareja = 0;
var atributo_1 = new atribute("Soy médico", false, false);
var atributo_2 = new atribute("Me encanta ayudar a la gente", false, false);
var atributo_3 = new atribute("Los uniformes son sexys", false, true);
personaje_prueba1.list_atributes.push(atributo_1);
personaje_prueba1.list_atributes.push(atributo_2);
personaje_prueba1.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://www.lorealprofessionnel.es/-/media/master/es/webedia-hair-trend-news-2/es_es/3144/7192-peinados-para-cara-redonda-orig-2.ashx", false, false);
var foto2 = new photo_caracter("https://i.pinimg.com/originals/db/50/89/db508974ed8fbd967c62df21ce5a1eb3.jpg", false, false);
var foto3 = new photo_caracter("https://img4.codigonuevo.com/ef/de/06/caras-futuro-mileniales-codigo-nuevo-930x600.jpg", false, true);
personaje_prueba1.list_photos.push(foto1);
personaje_prueba1.list_photos.push(foto2);
personaje_prueba1.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Pues ser nini");
//var chat2 = new chat("Vives solo ?", "Si las pelusas de mi ombligo no cuentan...");


//personaje_prueba1.list_chat.push(chat1);
//personaje_prueba1.list_chat.push(chat2);


var personaje_prueba2 = new caracter(false, "Rafael");
personaje_prueba2.nota_pareja = 2;

var atributo_1 = new atribute("Abogado es mi profesion", false, false);
var atributo_2 = new atribute("La justicia es relativa", false, false);
var atributo_3 = new atribute("Todo el mundo tiene un precio", false, true);
personaje_prueba2.list_atributes.push(atributo_1);
personaje_prueba2.list_atributes.push(atributo_2);
personaje_prueba2.list_atributes.push(atributo_3);

var foto1 = new photo_caracter("https://static2.abc.es/media/ciencia/2017/02/28/cara-k1WG--620x349@abc.jpg", false, false);
var foto2 = new photo_caracter("https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365cde3787b2187a1f0fbc/impresion-cara.jpg", false, false);
var foto3 = new photo_caracter("https://pavlov.psyciencia.com/2016/12/caras-de-la-ira-e1480938528244.jpg", false, true);

personaje_prueba2.list_photos.push(foto1);
personaje_prueba2.list_photos.push(foto2);
personaje_prueba2.list_photos.push(foto3);


//var chat1 = new chat("Hobbie ?", "Soy un elfo nivel 100");
//var chat2 = new chat("Vives solo ?", "Mis waifus dicen que no");

//personaje_prueba2.list_chat.push(chat1);
//personaje_prueba2.list_chat.push(chat2);


//var disonance1 = new disonance("atributo_1", "Pepe pruebas", true, "atributo_1", "Juan pruebas", false, 2);
//var disonance2 = new disonance("atributo_2", "Pepe pruebas", true, "atributo_2", "Juan pruebas", false, 1);
//var disonance3 = new disonance("img_caracter_0", "Juan pruebas", false, "atributo_2", "Juan pruebas", false, 1);


ronda_prueba3.main_caracter = personaje_prueba;
ronda_prueba3.list_caracters.push(personaje_prueba1);
ronda_prueba3.list_caracters.push(personaje_prueba2);

//ronda_prueba2.list_Disonances.push(disonance1);
//ronda_prueba2.list_Disonances.push(disonance2);
//ronda_prueba2.list_Disonances.push(disonance3);




ronda_prueba3.pistaTrue = "El mejor ataque es una buena defensa.";
ronda_prueba3.pistaFalse = "Todos necesitamos que nos defiendan alguna vez.";









//uno todas las rondas

jugador.list_rondas.push(ronda_prueba);
jugador.list_rondas.push(ronda_prueba2);
jugador.list_rondas.push(ronda_prueba3);

/***********INICIALIZAR END**************/


/***********PARA control de Rondas**************/

function calcularFinal(){

var contadorBueno=0;
var contadorMalo=0;
var contadorNeutral=0;
var contadorRondas=0;

for(var i=0;jugador.list_rondas.length;i++){
var resultRonda=jugador.list_rondas[i].nota_pareja_Asignado;
if(resultRonda!=-1){

switch(resultRonda){

  case 0:
  contadorBueno=contadorBueno+1;
  break;
  case 1:
  contadorNeutral=contadorNeutral+1;
  break;
  case 2:
  contadorMalo=contadorMalo+1;
  break;
}
contadorRondas=contadorRondas+1;
}

}

var ponderadoBien=contadorBueno/contadorRondas;
var ponderadoNeutro=contadorNeutral/contadorRondas;
var ponderadoMalo=contadorMalo/contadorRondas;

if(ponderadoMalo>0.7){
  return "muyMalo";
}else if(ponderadoMalo>0.3){
  return "malo";
}else {
  return "bueno";
}


}


function queFaseEstoy() {
  console.log("QUE FASE ESTOY " + jugador.list_rondas[jugador.ronda_actual].faseActual);

if(jugador.alma){

  jugador.FaseJugador="Final";
  var resultFinal=calcularFinal();
  //aqui enseño final segun resultado

}

if(jugador.FaseJugador=="introduccion"){

}


 if(jugador.FaseJugador="rondas"){
   switch (jugador.list_rondas[jugador.ronda_actual].faseActual) {
     case "apuesta":
       deactivateall();
       //var capaIconos = document.querySelector(".iconos");
       //capaIconos.style.visibility = "hidden";
       var pantall=document.querySelector("#escritorio");
       pantall.style.visibility="hidden";
       formarApuestasDiablo();
       break;
     case "parejas":
      var pantall=document.querySelector("#escritorio");
      pantall.style.visibility="visible";
     //  var capaIconos = document.querySelector(".iconos");

     //  capaIconos.style.visibility = "visible";
       break;
     case "finalParejas":
       deactivateall();
       var pantall=document.querySelector("#escritorio");
       pantall.style.visibility="hidden";
       formarResultadoRonda();

       break;

     case "finalApuesta":
       deactivateall();
       var pantall=document.querySelector("#escritorio");
       pantall.style.visibility="hidden";
       formarApuestaDiabloResult();
       break;
   }

 }

}

function deactivateall() {
  desactivatePantallaEscritorio("Pantalla_1");
  desactivatePantallaEscritorio("Pantalla_2");
  cleanPantalla("Pantalla_1");
  cleanPantalla("Pantalla_2");
  var capaIconos = document.querySelector(".iconos");

  //capaIconos.style.visibility = "hidden";

}

function formarResultadoRonda() {

  var template=document.querySelector("final_pareja_template");
  template.classList.remove("hiden");
  template.style.visibility = "visible";
  var result = template.querySelector("result");
  result.id = "result";

  var imagenResult = template.querySelector("#imgResult");
  imagenResult.id = "imgResult";
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual]




  if (ronda_prueba.nota_pareja_Asignado == 0) {
    result.innerText = ronda_prueba.textoResultadoBueno;
    imagenResult.src = ronda_prueba.imgBueno;
  }
  if (ronda_prueba.nota_pareja_Asignado == 1) {
    imagenResult.src = ronda_prueba.imgNeutro;
    result.innerText = ronda_prueba.textoResultadoNeutro;
  }
  if (ronda_prueba.nota_pareja_Asignado == 2) {
    imagenResult.src = ronda_prueba.imgMalo;
    result.innerText = ronda_prueba.textoResultadoMalo;
  }

  var next =  template.querySelector("#imgNext");

  next.addEventListener("click", nextFase);
  //pantalla1.appendChild(imagenResult);
  //pantalla1.appendChild(result);
  //pantalla1.appendChild(next);



}

function nextFase(e) {
  switch (e.srcElement.id) {
    case "imgNext":
      var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
      jugador.list_rondas[jugador.ronda_actual].faseActual = "finalApuesta";
      queFaseEstoy();
      break;

    case "imgNext2":
      var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
      jugador.ronda_actual = jugador.ronda_actual + 1;
      jugador.list_rondas[jugador.ronda_actual].faseActual = "apuesta";

      queFaseEstoy();
      break;
  }


}


/***********PARA control de rondas END**************/


/***********PARA apuestas diablo**************/

function formarApuestaDiabloResult() {
  var pantalla1 = document.querySelector(".Pantalla_1");
  pantalla1.style.visibility = "visible";


  var result = document.createElement("p");
  result.id = "result";

  var imagenResult = document.createElement("img");
  imagenResult.id = "imgResult";
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (ronda_prueba.nota_pareja_Asignado == ronda_prueba.Apuesta) {
    result.innerText = "Has acertado";
    imagenResult.src = "https://pontesano.com/wp-content/uploads/2018/06/Acierto..jpg";
  } else {
    result.innerText = "No has acertado";
    imagenResult.src = "https://pontesano.com/wp-content/uploads/2018/06/ERROR.jpg";

  }

  var next = document.createElement("img");
  next.id = "imgNext2";
  next.src = "https://image.flaticon.com/icons/png/512/28/28275.png";
  next.addEventListener("click", nextFase);
  pantalla1.appendChild(imagenResult);
  pantalla1.appendChild(result);
  pantalla1.appendChild(next);
}


function formarApuestasDiablo() {
  var pantallaEntera=document.querySelector("#escritorio");
  pantallaEntera.style.visibility="hidden";
  var template = document.querySelector("#apuesta_template");
  template.style.display="flex";
  //template.style.visibility = "visible";
  template.classList.remove("hiden");
  var imagenDiablo = template.querySelector("#imgDiablo");
  //imagenDiablo.id = "imgDiablo";
  imagenDiablo.src = "https://image.freepik.com/vector-gratis/mascara-demonio-halloween-diseno-plano_23-2147909150.jpg";

  var pregunta =  template.querySelector("#preguntaDiablo");

  var textoDiablo="";

  textoDiablo= jugador.list_rondas[jugador.ronda_actual].preguntaDiablo;

  var pista =  template.querySelector("#preguntaDiablo");
  var random = Math.random();
  if (random < 0.5) {
    textoDiablo =textoDiablo+" Pista:"+ jugador.list_rondas[jugador.ronda_actual].pistaTrue;
  } else {
  textoDiablo =textoDiablo+" Pista:"+ jugador.list_rondas[jugador.ronda_actual].pistaFalse;
  }
  pregunta.innerText =  textoDiablo;

  var bienIcono = template.querySelector("#bienIcono");
  //bienIcono.id = "bienIcono";
  //bienIcono.src = "https://image.freepik.com/iconos-gratis/pulgares-arriba-bien_318-10538.jpg";
  bienIcono.addEventListener("click", elegirApuesta);

  var neutroIcono =template.querySelector("#neutroIcono");
  //neutroIcono.id = "neutroIcono";
  //neutroIcono.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvSegDeIJ83CBtCG-nmaQofRnYp5gmoiSCA&usqp=CAU";
  neutroIcono.addEventListener("click", elegirApuesta);

  var malIcono = template.querySelector("#malIcono");
  //malIcono.id = "malIcono";
  //malIcono.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKAMSVxz6-YikIDAFJSIIFYYruUhkd1vWCmg&usqp=CAU";
  malIcono.addEventListener("click", elegirApuesta);

  //pantalla1.appendChild(imagenDiablo);
  //pantalla1.appendChild(pregunta);
  //pantalla1.appendChild(bienIcono);
  //pantalla1.appendChild(neutroIcono);
  //pantalla1.appendChild(malIcono);
  //pantalla1.appendChild(pista);







}




function elegirApuesta(e) {
  console.log("ESTA EN " + e.srcElement.id);
  switch (e.srcElement.id) {
    case "bienIcono":
      if (confirm("Quieres elegir apuesta bien ?")) {
        jugador.list_rondas[jugador.ronda_actual].Apuesta = 0;
        jugador.list_rondas[jugador.ronda_actual].faseActual = "parejas";
        deactivateall();
        queFaseEstoy();
      }

      break;
    case "neutroIcono":
      if (confirm("Quieres elegir apuesta neutro ?")) {
        jugador.list_rondas[jugador.ronda_actual].Apuesta = 1;
        jugador.list_rondas[jugador.ronda_actual].faseActual = "parejas";
        deactivateall();
        queFaseEstoy();
      }

      break;
    case "malIcono":
      if (confirm("Quieres elegir mal ?")) {
        jugador.list_rondas[jugador.ronda_actual].Apuesta = 2;
        jugador.list_rondas[jugador.ronda_actual].faseActual = "parejas";
        deactivateall();
        queFaseEstoy();

      }

      break;
  }

  var pantalla=document.querySelector("#escritorio");
  pantalla.style.visibility="visible";

  var template=document.querySelector("#apuesta_template");
  //template.style.visibility="hidden";
  template.style.display="none";

}

/***********PARA apuestas diablo END**************/

/***********PARA DISONANCIAS**************/

function recogerClick(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

  if (jugador.isLookingDisonace && e.srcElement.src != "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg") {
    if (jugador.contadorClickDisonance == 0) {
      console.log("Miro disonanica 1");
      console.log( );

      var id_parent;

      if(e.srcElement.nodeName.toLowerCase()=="p"){

        id_parent = e.srcElement.parentNode.parentNode.parentNode.parentNode.classList[0];
      }else if(e.srcElement.nodeName.toLowerCase()=="img"){

        id_parent = e.srcElement.parentNode.parentNode.classList[0];
      }


      var quien = "";
      var main = "";
      var id = e.srcElement.id;
      console.log(id_parent);
      if (id_parent == "Pantalla_1") {

        if (escritorio.cualPantalla1 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }


      } else if (id_parent == "Pantalla_2") {

        if (escritorio.cualPantalla2 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }

      }

      jugador.disonanceTemp = new disonance(id, quien, main, "", "", false, 0);
      jugador.contadorClickDisonance = jugador.contadorClickDisonance + 1;

    } else if (jugador.contadorClickDisonance == 1) {
      console.log("Miro disonanica 2");
      var id_parent;

      if(e.srcElement.nodeName.toLowerCase()=="p"){

        id_parent = e.srcElement.parentNode.parentNode.parentNode.parentNode.classList[0];
      }else if(e.srcElement.nodeName.toLowerCase()=="img"){

        id_parent = e.srcElement.parentNode.parentNode.classList[0];
      }
      var main = "";
      var quien = "";
      var id = e.srcElement.id;
      if (id_parent == "Pantalla_1") {

        if (escritorio.cualPantalla1 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }


      } else if (id_parent == "Pantalla_2") {
        if (escritorio.cualPantalla2 == "tarjetas_icono") {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing;
          }
          quien = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
          main = false;
        } else {
          if (id == "img_caracter") {
            id = id + "_" + ronda_prueba.main_caracter.foto_showing;
          }
          quien = ronda_prueba.main_caracter.name;
          main = true;
        }

      }

      jugador.disonanceTemp.que2 = id;
      jugador.disonanceTemp.quien2 = quien;
      jugador.disonanceTemp.isMain2 = main;
      jugador.contadorClickDisonance = jugador.contadorClickDisonance + 1;
    }

    if (jugador.contadorClickDisonance == 2) {
      console.log("Miro disonanica 3");
      mirarDisonancia();
      jugador.contadorClickDisonance = 0;
    }

  }



}


function mirarDisonancia() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  console.log(jugador.disonanceTemp);
  if ((jugador.disonanceTemp.que1 != jugador.disonanceTemp.que2) || (jugador.disonanceTemp.quien1 != jugador.disonanceTemp.quien2)) {

    var que1 = jugador.disonanceTemp.que1;
    var quien1 = jugador.disonanceTemp.quien1;
    var main1 = jugador.disonanceTemp.isMain1;
    var que2 = jugador.disonanceTemp.que2;
    var quien2 = jugador.disonanceTemp.quien2;
    var main2 = jugador.disonanceTemp.isMain2;



    for (var i = 0; i < ronda_prueba.list_Disonances.length; i++) {

      var contador = 0;
      if ((ronda_prueba.list_Disonances[i].isMain1 == main1 &&
        ronda_prueba.list_Disonances[i].que1 == que1 &&
        ronda_prueba.list_Disonances[i].quien1 == quien1) ||
        (ronda_prueba.list_Disonances[i].isMain1 == main2 &&
          ronda_prueba.list_Disonances[i].que1 == que2 &&
          ronda_prueba.list_Disonances[i].quien1 == quien2)
      ) {
        contador = contador + 1;

      }
      if ((ronda_prueba.list_Disonances[i].isMain2 == main1 &&
        ronda_prueba.list_Disonances[i].que2 == que1 &&
        ronda_prueba.list_Disonances[i].quien2 == quien1) ||
        (ronda_prueba.list_Disonances[i].isMain2 == main2 &&
          ronda_prueba.list_Disonances[i].que2 == que2 &&
          ronda_prueba.list_Disonances[i].quien2 == quien2)
      ) {
        contador = contador + 1;

      }
      console.log("Contador es " + contador);
      if (contador == 2) {
        ronda_prueba.list_Disonances[i].reached = true;
        console.log("has detectado disonancia tipo :" + ronda_prueba.list_Disonances[i].typeDisonance);
        return true;
      }
    }

    console.log("No es disonante");
    return false;
  } else {
    console.log("No es disonante");
    return false;
  }






}


/***********PARA DISONANCIAS END**************/


/***********PARA TARJETAS**************/



function nextImage(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (this.id === "flecha") {
    var pantalla = document.querySelector("." + whereIsPantalla("tarjetas_icono"));
    var imagen_usuario = pantalla.querySelector("img#img_caracter");
    ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing + 1;
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing > 2) {
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing = 0;

    }
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
      imagen_usuario.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked;
    } else {
      imagen_usuario.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
    }


  } else if (this.id === "flecha_2") {
    var pantalla = document.querySelector("." + whereIsPantalla("tarjeta_principal_icono"));
    var imagen_usuario = pantalla.querySelector("img#img_caracter");
    ronda_prueba.main_caracter.foto_showing = ronda_prueba.main_caracter.foto_showing + 1;
    if (ronda_prueba.main_caracter.foto_showing > 2) {
      ronda_prueba.main_caracter.foto_showing = 0;

    }
    imagen_usuario.src = ronda_prueba.main_caracter.list_photos[ronda_prueba.main_caracter.foto_showing].src;

  }


}



function nextFicha(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  ronda_prueba.fichaUsing = ronda_prueba.fichaUsing + 1;
  if (ronda_prueba.fichaUsing > 1) {
    ronda_prueba.fichaUsing = 0;
  }
  var result = whereIsPantalla("tarjetas_icono");

  pantalla_volcar = document.querySelector("." + result);

  cleanPantalla(result)
  formarPantallaTarjetas("tarjetas_icono", true);
  llenarInfoTarjetaIcono(pantalla_volcar);
  if (momentoAsignacion()) {

    activarAsignar();
  }else{

    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
  }
}


function imageBlocked(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var name = whereIsPantalla("tarjetas_icono");
  var pantalla_volcar = document.querySelector("." + name);
  var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
  if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
    if (ronda_prueba.countImagenDesbloqueada < jugador.maxImagenDesbloqueada) {
      if (confirm("Quieres desbloquear imagen?")) {
        ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock = false;
        imagen_caracter.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
        ronda_prueba.countImagenDesbloqueada = ronda_prueba.countImagenDesbloqueada + 1;
      }
    } else {
      confirm("No puedes desbloquear más por ronda");
    }


  }

}


function formarPantallaTarjetas(type, nuevo) {
var template="";
    if (type == "tarjetas_icono") {
      template=document.querySelector("#aspirante_template");
    }else{
      template=document.querySelector("#principal_template");
    }
  //var template = document.querySelector("#principal_template");
  var newTemplate=template.cloneNode(true);
  newTemplate.classList.remove("hiden");
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (nuevo) {
    var pantalla_volcar = document.querySelector("." + whereIsPantalla(type));
    pantalla_volcar.style.visibility = "visible";
  } else {
    var res = pantalla_libre(type);
    if (res == "NO") {
      return false;
    }
    var pantalla_volcar = document.querySelector("." + res);

  }


  //var ima_carac = document.createElement("img");

  //ima_carac.id = "img_caracter";

  var ima_carac=newTemplate.querySelector("#img_caracter");
  ima_carac.addEventListener("click", recogerClick);


  if (type == "tarjetas_icono") {
    var ima_flecha = newTemplate.querySelector("#flecha");
    ima_carac.addEventListener("click", imageBlocked);
    ima_flecha.addEventListener("click", nextImage);
  } else if (type == "tarjeta_principal_icono") {
    var ima_flecha = newTemplate.querySelector("#flecha_2");
    ima_flecha.id = "flecha_2";
    ima_flecha.addEventListener("click", nextImage);
  }



  //var name_cara = newTemplate.querySelector("#name_caracter");
  var capa_list_atributos = newTemplate.querySelector("#atributos_list_principal");

  if (type == "tarjetas_icono") {
    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock) {
      var atributo_1 = document.createElement("img");
      atributo_1.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_1.id = "atributo_1_i";
      atributo_1.cual = 0;
      atributo_1.addEventListener("click", unlockAtribute);
    } else {
      var atributo_1 = document.createElement("p");
      atributo_1.id = "atributo_1";
      atributo_1.addEventListener("click", recogerClick);
    }

    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].isBlock) {
      var atributo_2 = document.createElement("img");
      atributo_2.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_2.id = "atributo_2_i";
      atributo_2.cual = 1;
      atributo_2.addEventListener("click", unlockAtribute);
    } else {
      var atributo_2 = document.createElement("p");
      atributo_2.id = "atributo_2";
      atributo_2.addEventListener("click", recogerClick);
    }

    if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].isBlock) {
      var atributo_3 = document.createElement("img");
      atributo_3.src = "https://st2.depositphotos.com/3921439/7464/v/600/depositphotos_74644007-stock-illustration-the-lock-icon-lock-symbol.jpg";
      atributo_3.id = "atributo_3_i";
      atributo_3.cual = 2;
      atributo_3.addEventListener("click", unlockAtribute);
    } else {
      var atributo_3 = document.createElement("p");
      atributo_3.id = "atributo_3";
      atributo_3.addEventListener("click", recogerClick);
    }

  } else {
    var atributo_1 = document.createElement("p");
    atributo_1.id = "atributo_1";
    atributo_1.addEventListener("click", recogerClick);
    var atributo_2 = document.createElement("p");
    atributo_2.id = "atributo_2";
    atributo_2.addEventListener("click", recogerClick);
    var atributo_3 = document.createElement("p");
    atributo_3.id = "atributo_3";
    atributo_3.addEventListener("click", recogerClick);
  }






  if (type == "tarjetas_icono") {

    var ima_flecha_ficha = newTemplate.querySelector("#flecha_ficha");
    ima_flecha_ficha.src = "https://e7.pngegg.com/pngimages/593/775/png-clipart-arrow-computer-icons-encapsulated-postscript-right-arrow-angle-text.png";
    //ima_flecha_ficha.id = "flecha_ficha";
    ima_flecha_ficha.addEventListener("click", nextFicha);


    //falta controlar que aparezca la barra de arriba .

    /*var verificarPareja = document.createElement("img");
    verificarPareja.src = "https://cdn1.iconfinder.com/data/icons/basic-ui-icon-rounded-colored/512/icon-41-512.png";
    verificarPareja.id = "verfiy_asig";
    verificarPareja.addEventListener("click", asignarPareja);
    verificarPareja.style.visibility = "hidden";*/
var verificarPareja = document.querySelector("#verfiy_asig");
verificarPareja.addEventListener("click", asignarPareja);
  }


  var exit_icon = newTemplate.querySelector("#exitIcon");
  //exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
//  exit_icon.id = "exitIcon";
  exit_icon.cualPantalla = type;
  exit_icon.addEventListener("click", exitPantalla);

  //pantalla_volcar.appendChild(ima_carac);
  //pantalla_volcar.appendChild(ima_flecha);
  //pantalla_volcar.appendChild(name_cara);

  capa_list_atributos.appendChild(atributo_1);
  capa_list_atributos.appendChild(atributo_2);
  capa_list_atributos.appendChild(atributo_3);

  if (type == "tarjetas_icono") {
    //pantalla_volcar.appendChild(ima_flecha_ficha);
    //pantalla_volcar.appendChild(verificarPareja);
  }

  //pantalla_volcar.appendChild(exit_icon);

  pantalla_volcar.appendChild(newTemplate);

  return pantalla_volcar;

}

function unlockAtribute(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var pantalla = document.querySelector("." + whereIsPantalla("tarjetas_icono"));
  var atributoBlock = e.srcElement.cual;

  if (ronda_prueba.countAtributoDesbloqueado < jugador.maxAtributoDesbloqueado) {
    if (confirm("Quieres desbloquear atributo ?")) {
      ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[atributoBlock].isBlock = false;
      cleanPantalla(whereIsPantalla("tarjetas_icono"));
      var pantalla_volcar = formarPantallaTarjetas("tarjetas_icono", true);
      llenarInfoTarjetaIcono(pantalla_volcar);
      ronda_prueba.countAtributoDesbloqueado = ronda_prueba.countAtributoDesbloqueado + 1;
    }
  } else {
    confirm("No puedes desbloquear más atributos por ronda");
  }



  if (momentoAsignacion()) {

    activarAsignar();
  }else{

    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
  }
}







/***********PARA TARJETAS END**************/


/***********PARA CHAT **************/

function formarChat(which) {
  var template=document.querySelector("#chat_template").cloneNode(true);
  template.classList.remove("hiden");

  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var res = pantalla_libre(which.id);
  if (res == "NO") {
    return false;
  }

  var pantalla_volcar = document.querySelector("." + res);

  //var divMessages = document.createElement("div");
  //divMessages.id = "ChatMessages";

  //var divQuestions = document.createElement("div");
  //divQuestions.id = "ChatQuestions";

  var exit_icon = template.querySelector("#exitIcon");
  //exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
  //exit_icon.id = "exitIcon";
  exit_icon.cualPantalla = which.id;
  exit_icon.addEventListener("click", exitPantalla);

  //pantalla_volcar.appendChild(divMessages);
  //pantalla_volcar.appendChild(divQuestions);
  //pantalla_volcar.appendChild(exit_icon);
  //var list_chat = template.querySelector("#chat-list-aspirantes");

  for (var i = 0; i < ronda_prueba.list_caracters.length; i++) {
    //console.log("#button"+i+1);
    var numeroTemp=i+1;
    var p =  template.querySelector("#button"+numeroTemp);
    p.style.visibility="visible";
    p.caracterChat = i;
    p.text = ronda_prueba.list_caracters[i].name;
    p.addEventListener("click", changeChat);

  }


  pantalla_volcar.appendChild(template);

  return pantalla_volcar;
}


function changeChat(e) {
  var queCaracter = e.srcElement.caracterChat;
  ronda_prueba.chatUsing = queCaracter;
  clearMessages();
  cleanQuestion();
  llenarChatEscrito();
  ponerPreguntasNohechas();



}


function llenarChatEscrito() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divMessages = document.querySelector("#ChatMessages");
  for (var i = 0; i < ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat.length; i++) {
    if (ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].used) {
      var question = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].question;
      var p_q = document.createElement("p");
      p_q.innerText = question;

      var answer = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].answer;
      var p_a = document.createElement("p");
      p_a.innerText = answer;
      p_a.classList.add("text-right");
      divMessages.appendChild(p_q);
      divMessages.appendChild(p_a);
    }

  }


}

function ponerPreguntasNohechas() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divQuestions = document.querySelector("#ChatQuestions");
  for (var i = 0; i < ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat.length; i++) {
    if (!ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].used) {
      var question = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[i].question;
      var p_q = document.createElement("p");
      p_q.id = "";
      p_q.questionId = i;
      p_q.innerText = question;
      p_q.addEventListener("click", askQuestion);
      divQuestions.appendChild(p_q);
    }

  }

}


function askQuestion(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var idquestion = e.srcElement.questionId;

  var question = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].question;

  var answer = ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].answer;

  var divMessages = document.querySelector("#ChatMessages");
  var p_q = document.createElement("p");
  p_q.innerText = question;
  var p_a = document.createElement("p");
  p_a.innerText = answer;
  p_a.classList.add("text-right");
  divMessages.appendChild(p_q);
  divMessages.appendChild(p_a);
  ronda_prueba.list_caracters[ronda_prueba.chatUsing].list_chat[idquestion].used = true;
  cleanQuestion();
  ponerPreguntasNohechas();

}

function cleanQuestion() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divQuestions = document.querySelector("#ChatQuestions");
  while (divQuestions.firstChild) {
    divQuestions.removeChild(divQuestions.firstChild);
  }
}

function clearMessages() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var divQuestions = document.querySelector("#ChatMessages");
  while (divQuestions.firstChild) {
    divQuestions.removeChild(divQuestions.firstChild);
  }
}



/***********PARA CHAT END**************/


/*********Para la tienda**************/


function formarTienda(which,nuevo){

  var template = document.querySelector("#tienda_template").cloneNode(true);
  template.classList.remove("hiden");

  if (!nuevo) {
    var pantalla_volcar = document.querySelector("." + whereIsPantalla(which));
    pantalla_volcar.style.visibility = "visible";
  } else {
    var res = pantalla_libre(which);
    if (res == "NO") {
      return false;
    }
    var pantalla_volcar = document.querySelector("." + res);
}


var masImagen=template.querySelector("#texto_imagen");
masImagen.innerText="Tienes "+ jugador.maxImagenDesbloqueada + " desbloqueo imagenes por ronda";

var imgMasImg=template.querySelector("#masImagen");
//imgMasImg.id="masImagen";
//imgMasImg.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasImg.addEventListener("click",comprarAlgo);

var masAtributo=template.querySelector("#texto_atributo");
masAtributo.innerText="Tienes "+ jugador.maxAtributoDesbloqueado + "desbloqueo atributos por ronda";

var imgMasAtr=template.querySelector("#masAtributo");;
//imgMasAtr.id="masAtributo";
//imgMasAtr.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasAtr.addEventListener("click",comprarAlgo);

var masAlma=template.querySelector("#texto_alma");
masAlma.innerText="Tu alma";

var imgMasAlma=template.querySelector("#masAlma");
//imgMasAlma.id="masAlma";
//imgMasAlma.src="https://image.flaticon.com/icons/png/512/37/37770.png";
imgMasAlma.addEventListener("click",comprarAlgo);

var exit_icon = template.querySelector("#exitIcon");
//exit_icon.src = "https://dbdzm869oupei.cloudfront.net/img/sticker/preview/7950.png";
//exit_icon.id = "exitIcon";
exit_icon.cualPantalla =which;
exit_icon.addEventListener("click", exitPantalla);

/*pantalla_volcar.appendChild(masImagen);
pantalla_volcar.appendChild(imgMasImg);
pantalla_volcar.appendChild(masAtributo);
pantalla_volcar.appendChild(imgMasAtr);
pantalla_volcar.appendChild(masAlma);
pantalla_volcar.appendChild(imgMasAlma);
pantalla_volcar.appendChild(exit_icon);*/
var textCoins=template.querySelector("#textCoins");
textCoins.innerText="Monedas "+jugador.coins;


pantalla_volcar.appendChild(template);

return pantalla_volcar;

}


function comprarAlgo(e){

  var id = e.srcElement.id;

  switch(id){
  case "masImagen":
  if(confirm("Quieres comprar una imagen extra por ronda?")){
    if(jugador.maxImagenDesbloqueada < 2 && jugador.coins>5){
      if( jugador.coins>5){
        jugador.maxImagenDesbloqueada=2;
        jugador.coins=jugador.coins-5;
        var pantalla=whereIsPantalla("tienda_icono");
        cleanPantalla(pantalla);
        var cual=formarTienda("tienda_icono",false);
        cual.style.visibility="visible";
      }else{
        confirm("No tienes suficientes monedas");
      }

    }else{
      confirm("No puedes comprar más mejora imagen");
    }
  }

  break;
  case "masAtributo":
  if(confirm("Quieres comprar un atributo extra por ronda?")){
    if(jugador.maxAtributoDesbloqueado < 2 && jugador.coins>5){
      if( jugador.coins>5){
        jugador.maxAtributoDesbloqueado=2;
        jugador.coins=jugador.coins-5;
        var pantalla=whereIsPantalla("tienda_icono");
        cleanPantalla(pantalla);
        var cual=formarTienda("tienda_icono",false);
        cual.style.visibility="visible";
      }else{
        confirm("No tienes suficientes monedas");
      }

    }else{
      confirm("No puedes comprar más mejora atributo");
    }
  }

  break;
  case "masAlma":
  if(confirm("Quieres tu alma?")){
    if(!jugador.alma ){
      if( jugador.coins>50){
        jugador.alma=true;
        jugador.coins=jugador.coins-50;
        //deberia enviar al final segun tus acciones.
      }else{
        confirm("No tienes suficientes monedas");
      }

    }else{
      confirm("Ya has comprado alma");
    }
  }

  break;
  }

}


/*********Para la tienda END**************/





/*********Para el escritorio**************/


function exitPantalla(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var namePantalla = e.srcElement.cualPantalla;

  var cual = whereIsPantalla(namePantalla);

  cleanPantalla(cual);
  desactivatePantallaEscritorio(namePantalla);
  var result = whereIsPantalla("tarjetas_icono");
  if (result != "NO_EXIST" && namePantalla == "tarjeta_principal_icono") {
    var barra=document.querySelector("#barra_superior");
    barra.style.visibility="hidden";
  }




}


function cleanPantalla(namePantalla) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var pantalla = document.querySelector("." + namePantalla);

  while (pantalla.firstChild) {
    pantalla.removeChild(pantalla.firstChild);
  }
  pantalla.style.visibility = "hidden";

}


function whereIsPantalla(namePantalla) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (escritorio.cualPantalla1 == namePantalla) {
    return "Pantalla_1";

  } else if (escritorio.cualPantalla2 == namePantalla) {
    return "Pantalla_2";

  } else {

    return "NO_EXIST";
  }



}

function desactivatePantallaEscritorio(namePantalla) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (escritorio.cualPantalla1 == namePantalla) {
    escritorio.cualPantalla1 = "";
    escritorio.usingPantalla1 = false;

  } else if (escritorio.cualPantalla2 == namePantalla) {
    escritorio.cualPantalla2 = "";
    escritorio.usingPantalla2 = false;

  } else {


  }
}


function pantalla_libre(pantallaNueva) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (escritorio.usingPantalla1 == false) {

    escritorio.usingPantalla1 = true;
    escritorio.cualPantalla1 = pantallaNueva;
    return "Pantalla_1";

  } else if (escritorio.usingPantalla2 == false) {

    escritorio.usingPantalla2 = true;
    escritorio.cualPantalla2 = pantallaNueva;
    return "Pantalla_2";
  } else {
    return "NO";
  }

}


var icono_tarjetas = document.querySelector("a#tarjetas_icono");
var icono_chat = document.querySelector("a#chat_icono");
var icono_main = document.querySelector("a#tarjeta_principal_icono");
var icono_lupa = document.querySelector("a#lupa_icono");
var icono_tienda = document.querySelector("a#tienda_icono");

icono_tarjetas.addEventListener("click", onClickIcon);
icono_chat.addEventListener("click", onClickIcon);
icono_main.addEventListener("click", onClickIcon);
icono_lupa.addEventListener("click", onClickIcon);
icono_tienda.addEventListener("click", onClickIcon);

function llenarInfoTarjetaIcono(pantalla_volcar) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
  var name = pantalla_volcar.querySelector("#name_caracter");
  var atr1 = pantalla_volcar.querySelector("#atributo_1");
  var atr2 = pantalla_volcar.querySelector("#atributo_2");
  var atr3 = pantalla_volcar.querySelector("#atributo_3");
  if (ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].isBlock) {
    imagen_caracter.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].srcBlocked;
  } else {
    imagen_caracter.src = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_photos[ronda_prueba.list_caracters[ronda_prueba.fichaUsing].foto_showing].src;
  }

  name.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].name;
  if (!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].isBlock) {
    atr1.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[0].description;
  }
  if (!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].isBlock) {
    atr2.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[1].description;
  }
  if (!ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].isBlock) {
    atr3.innerText = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].list_atributes[2].description;
  }











}


function onClickIcon(e) {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  jugador.isLookingDisonace = false;

  result = whereIsPantalla(this.id);

  if (result == "NO_EXIST") {

    switch (this.id) {
      case "tarjetas_icono":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
        //pantalla_volcar.style.backgroundColor = "black";
        var pantalla_volcar = formarPantallaTarjetas(this.id);
        if (!pantalla_volcar == false) {
          pantalla_volcar.style.visibility = "visible";
          llenarInfoTarjetaIcono(pantalla_volcar);
        }


        break;
      case "chat_icono":
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        var pantalla_volcar = formarChat(this);
        if (!pantalla_volcar == false) {
          pantalla_volcar.style.visibility = "visible";
          llenarChatEscrito();
          ponerPreguntasNohechas();

        }


        break;
      case "tarjeta_principal_icono":
      console.log("Entro click en " + this.id);
        var pantalla_volcar = formarPantallaTarjetas(this.id);
        console.log(pantalla_volcar);
        pantalla_volcar.style.visibility = "visible";
        var imagen_caracter = pantalla_volcar.querySelector("#img_caracter");
        var name = pantalla_volcar.querySelector("#name_caracter");
        var atr1 = pantalla_volcar.querySelector("#atributo_1");
        var atr2 = pantalla_volcar.querySelector("#atributo_2");
        var atr3 = pantalla_volcar.querySelector("#atributo_3");

        imagen_caracter.src = ronda_prueba.main_caracter.list_photos[0].src;
        name.innerText = ronda_prueba.main_caracter.name;
        atr1.innerText = ronda_prueba.main_caracter.list_atributes[0].description;
        atr2.innerText = ronda_prueba.main_caracter.list_atributes[1].description;
        atr3.innerText = ronda_prueba.main_caracter.list_atributes[2].description;
        break;

      case "lupa_icono":

        jugador.isLookingDisonace = true;

        break;
      case "tienda_icono":
      var pantalla_volcar = formarTienda(this.id,true);
      if (!pantalla_volcar == false) {
        pantalla_volcar.style.visibility = "visible";

      }


          break;

      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }

    if (momentoAsignacion()) {

      activarAsignar();
    }else{

      var barra=document.querySelector("#barra_superior");
      barra.style.visibility="hidden";
    }


  }


}

function activarAsignar() {
  /*var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];

  var resp1 = whereIsPantalla("tarjetas_icono");
  var pantalla = document.querySelector("." + resp1);
  var iconoVerificar = document.querySelector("#verfiy_asig");
  iconoVerificar.style.visibility = "visible";*/


var barra=document.querySelector("#barra_superior");
barra.style.visibility="visible";

}


function momentoAsignacion() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  var control = 0;

  var resp1 = whereIsPantalla("tarjetas_icono");
  var resp2 = whereIsPantalla("tarjeta_principal_icono");

  if (resp1 == "Pantalla_1" || resp1 == "Pantalla_2") {
    control = control + 1;
  }

  if (resp2 == "Pantalla_1" || resp2 == "Pantalla_2") {
    control = control + 1;
  }

  if (control >= 2) {
    return true;
  } else {
    return false;
  }


}

function asignarPareja() {
  var ronda_prueba = jugador.list_rondas[jugador.ronda_actual];
  if (confirm("Quieres asignar estas dos personas?")) {
    ronda_prueba.personajeAsignado = ronda_prueba.list_caracters[ronda_prueba.fichaUsing];
    ronda_prueba.nota_pareja_Asignado = ronda_prueba.list_caracters[ronda_prueba.fichaUsing].nota_pareja;
    console.log("Se ha asignado :");
    console.log(ronda_prueba.personajeAsignado.name);

    cleanPantalla("Pantalla_1");
    cleanPantalla("Pantalla_2");
    desactivatePantallaEscritorio("tarjetas_icono");
    desactivatePantallaEscritorio("tarjeta_principal_icono");
    deactivateall();
    jugador.list_rondas[jugador.ronda_actual].faseActual = "finalParejas";
    queFaseEstoy();

  }


}


/*********Para el escritorio END**************/

/*EJECUTAR*/
jugador.FaseJugador="rondas";
jugador.list_rondas[jugador.ronda_actual].faseActual = "apuesta";
queFaseEstoy();
